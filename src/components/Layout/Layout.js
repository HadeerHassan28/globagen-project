import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import ContextTheme from "../../Context/Context";

const Layout = () => {
  return (
    <ContextTheme>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </ContextTheme>
  );
};

export default Layout;
