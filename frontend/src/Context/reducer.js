import React from "react";
import { GET_PRO, FETCH_ERROR } from "./reducersTypes";
export const initState = {
  data: [],
  loading: true,
  error: null,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRO:
      return {
        ...state,
        data: action.payload,
      };
    // case FETCH_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
};
export default Reducer;
