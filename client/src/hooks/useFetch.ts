// Libraries
import { useReducer, useEffect } from 'react';
import { ApolloClient, DocumentNode } from '@apollo/client';

interface UseFetchState {
  status: string;
  error: string | null;
  data: Record<string, any>;
}

type FetchActions =
  | { type: FetchActionTypes.FETCHING; payload?: unknown }
  | {
      type: FetchActionTypes.FETCHED;
      payload: Record<string, unknown>[];
    }
  | {
      type: FetchActionTypes.FETCH_ERROR;
      payload: string;
    };

enum FetchActionTypes {
  FETCHING = 'FETCHING',
  FETCHED = 'FETCHED',
  FETCH_ERROR = 'FETCH_ERROR',
}

export enum FetchStatus {
  SUCCESS = 'success',
  FETCHING = 'fetching',
  ERROR = 'error',
}

const initialState: UseFetchState = {
  status: '',
  error: null,
  data: {},
};

const fetchReducer = (state: typeof initialState, action: FetchActions) => {
  switch (action.type) {
    case FetchActionTypes.FETCHING:
      return { ...initialState, status: FetchStatus.FETCHING };
    case FetchActionTypes.FETCHED:
      return {
        ...initialState,
        status: FetchStatus.SUCCESS,
        data: action.payload,
      };
    case FetchActionTypes.FETCH_ERROR:
      return {
        ...initialState,
        status: FetchStatus.ERROR,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFetch = ({
  client,
  query,
  variables,
  callback,
}: {
  client: ApolloClient<unknown>;
  query: DocumentNode;
  variables?: Record<string, unknown>;
  callback?: (data) => void;
}) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: FetchActionTypes.FETCHING });

      const { data } = await client.query({
        query,
        variables,
      });

      if (data) {
        dispatch({ type: FetchActionTypes.FETCHED, payload: data });
      }

      if (callback) {
        callback(data);
      }
    } catch (error) {
      const graphQLError = error?.networkError?.result?.errors[0].message;
      console.error(error);
      dispatch({ type: FetchActionTypes.FETCH_ERROR, payload: graphQLError });
    }
  };

  useEffect(() => {
    fetchData().then();
  }, [query, variables]);

  return state;
};
