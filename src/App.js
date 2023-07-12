import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

import ContextTheme from "./Context/Context";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          component: <Home />,
          exact: true,
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
