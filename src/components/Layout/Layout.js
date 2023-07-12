import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import ContextTheme from "../../Context/Context";

const Layout = () => {
  return (
    <ContextTheme>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </ContextTheme>
  );
};

export default Layout;
