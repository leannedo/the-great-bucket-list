// Libraries
import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  status: '',
  error: null,
  data: [],
};

const fetchReducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case 'FETCHING':
      return { ...initialState, status: 'fetching' };
    case 'FETCHED':
      return { ...initialState, status: 'success', data: payload.data };
    case 'FETCH_ERROR':
      return { ...initialState, status: 'error', error: payload.error };
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
export const useFetch = ({ url, params, callback }: any) => {
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
          dispatch({ type: 'FETCHED', payload: { data: response.data } });
        }

        if (callback) {
          callback(response.data);
        }
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: { error: error.message } });
      }
    };

    fetchData().then();
  }, [url]);

  const { status, data } = state;

  return { status, data };
};
