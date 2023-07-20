import { useEffect } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import OneProduct from "./components/oneProduct/oneProduct";
import Product from "./components/Product/Product";
import Research from "./components/Research/Research";
import ContextTheme from "./Context/Context";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "research",
          element: <Research />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "product/:id",
          element: <OneProduct />,
        },
      ],
    },
  ]);

  return (
    <>
      <ContextTheme>
        <RouterProvider router={routes}>
          <Layout />
        </RouterProvider>
      </ContextTheme>
    </>
  );
}

export default App;
