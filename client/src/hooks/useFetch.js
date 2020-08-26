import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  status: "",
  error: null,
  data: [],
};

const fetchReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCHING":
      return { ...initialState, status: "fetching" };
    case "FETCHED":
      return { ...initialState, status: "success", data: payload.data };
    case "FETCH_ERROR":
      return { ...initialState, status: "error", error: payload.error };
    default:
      return state;
  }
};

export const useFetch = ({ url, params, callback }) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCHING" });

        const response = await axios({
          url: url,
          params: params,
        });

        if (response.data) {
          dispatch({ type: "FETCHED", payload: { data: response.data } });
        }

        if (callback) {
          callback(response.data);
        }
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: { error: error.message } });
      }
    };

    fetchData();
  }, [url]);

  const { status, data } = state;

  return { status, data };
};
