import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
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
