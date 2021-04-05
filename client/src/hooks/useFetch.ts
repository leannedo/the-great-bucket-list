// Libraries
import { useReducer, useEffect } from 'react';
import axios from 'axios';

interface UseFetchState {
  status: string;
  error: string | null;
  data: Record<string, unknown>[];
}
const initialState: UseFetchState = {
  status: '',
  error: null,
  data: [],
};

type ActionType =
  | { type: 'FETCHING'; payload?: unknown }
  | {
      type: 'FETCHED';
      payload: Record<string, unknown>[];
    }
  | {
      type: 'FETCH_ERROR';
      payload: string;
    };

const fetchReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'FETCHING':
      return { ...initialState, status: 'fetching' };
    case 'FETCHED':
      return { ...initialState, status: 'success', data: action.payload };
    case 'FETCH_ERROR':
      return { ...initialState, status: 'error', error: action.payload };
    default:
      return state;
  }
};

/**
 * fetch utility
 * @param {Object} config - { url, params, callback }
 * @param {string} config.url - url endpoint
 * @param {Object} config.params - query parameters
 * @param {Object} config.callback - callback function when fetch success
 */

export const useFetch = ({
  url,
  params,
  callback,
}: {
  url: string;
  params?: Record<string, string | string[]>;
  callback?: (data) => void;
}): { status: string; data: Record<string, unknown>[] } => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCHING' });

        const response = await axios({
          url,
          method: 'get',
          params,
        });

        if (response.data) {
          dispatch({ type: 'FETCHED', payload: response.data });
        }

        if (callback) {
          callback(response.data);
        }
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchData().then();
  }, [url]);

  const { status, data } = state;

  return { status, data };
};
