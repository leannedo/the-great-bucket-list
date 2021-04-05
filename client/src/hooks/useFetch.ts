// Libraries
import { useReducer, useEffect } from 'react';
import { ApolloClient, DocumentNode } from '@apollo/client';

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
  client,
  query,
  variables,
  callback,
}: {
  client: ApolloClient<unknown>;
  query: DocumentNode;
  variables?: Record<string, unknown>;
  callback: (data) => void;
}): { status: string; data: Record<string, unknown>[] } => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCHING' });

        const { data } = await client.query({ query, variables });

        if (data) {
          dispatch({ type: 'FETCHED', payload: data });
        }

        if (callback) {
          callback(data);
        }
      } catch (error) {
        const graphQLError = error?.networkError?.result?.errors[0].message;
        console.error(error);
        dispatch({ type: 'FETCH_ERROR', payload: graphQLError });
      }
    };

    fetchData().then();
  }, [query, variables]);

  const { status, data } = state;

  return { status, data };
};
