import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      component: <Home />,
      exact: true,
    },
    // {
    //   path: "about"
    //   compon
    // }
  ]);
  return (
    // <RouterProvider router={routes}>
    <NavBar />
    // </RouterProvider>
  );
}

export default App;
