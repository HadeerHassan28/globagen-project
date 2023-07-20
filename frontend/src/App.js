<<<<<<< HEAD
import { useEffect } from "react";
=======
>>>>>>> 1f04d51 (fix header responseve issue & cardProduct)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import i18n from "i18next";
import cookie from "js-cookie";
function App() {
  // const currentLang = Language.find((l) => l.code === currentLangCurrenCode);

  // useEffect(() => {
  //   document.body.dir = currentLang.dir || "ltr";
  // }, [currentLang.dir]);
  const currentLangCurrenCode = cookie.get("i18next") || "en";
  useEffect(() => {
    document.documentElement.dir = i18n.languages === "ar" ? "rtl" : "ltr";
  }, [currentLangCurrenCode]);
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
