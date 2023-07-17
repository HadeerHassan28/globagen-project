import React, { useState, useEffect, useReducer } from "react";
import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useAxios from "axios-hooks";
import Reducer from "./reducer";
import { GET_PRO } from "./reducersTypes";

export const conTheme = createContext();
const ContextTheme = (props) => {
  const [isTheme, setIsTheme] = useState(false);
  const initState = {
    data: [],
    loading: true,
    error: null,
  };
  const [state, dispatch] = useReducer(Reducer, initState);

  const [{ data, loading, error }] = useAxios(
    "https://globagen.onrender.com/api/products?populate=*"
  );
  //console.log(data);

  useEffect(() => {
    dispatch({ type: GET_PRO, payload: data });
  }, []);

  const toggleTheme = () => {
    setIsTheme((prevTheme) => !prevTheme);
    document.body.setAttribute("data-theme", isTheme ? "light" : "dark");
  };
  const themeConfig = createTheme({
    palette: {
      mode: isTheme ? "dark" : "light",
    },
  });
  const themes = {
    isTheme: isTheme,
    toggleTheme: toggleTheme,
    themeConfig: themeConfig,
    data: data,
    error: error,
    loading: loading,
    state: state,
  };

  return (
    <conTheme.Provider value={themes}>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </conTheme.Provider>
  );
};
export default ContextTheme;
