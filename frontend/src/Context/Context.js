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
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // const [{ data, loading, error }] = useAxios(
  //   "https://globagen.onrender.com/api/products?populate=*"
  // );
  const [{ data, loading, error }] = useAxios("http://localhost:3001/data");
  console.log(data);

  useEffect(() => {
    if (data) {
      dispatch({ type: GET_PRO, payload: data });
      setTotalPages(Math.ceil(data.length / itemsPerPage));
    }
  }, []);
  if (loading) {
    return (
      <p
        className={`ms-3 d-flex justify-content-center my-4`}
        style={{ color: isTheme === true ? "white" : "#071848" }}
      >
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p
        className={`ms-3 d-flex justify-content-center my-4`}
        style={{ color: isTheme === true ? "white" : "#071848" }}
      >
        Error!
      </p>
    );
  }
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = data.slice(startIndex, endIndex);
  console.log(subset);
  subset.map((ele) => console.log(ele.id));
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

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
    state: state,
    subset: subset,

    handlePageChange: handlePageChange,
    totalPages: totalPages,
    currentPage: currentPage,
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
