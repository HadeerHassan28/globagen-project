import * as React from "react";
import { useContext } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { conTheme } from "../../Context/Context";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const { t } = useTranslation();
  let { toggleTheme, themeConfig } = useContext(conTheme);
  const theme = themeConfig.palette.mode;
  //   const location = useLocation();
  // const isActiveLink = (path) => {
  //   return location.pathname === path;
  // };
  //   const activeLinkStyle = {
  //     color: " #09bed0",
  //   };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg `}
        style={{ backgroundColor: "#071848" }}
      >
        <div className="container">
          <Link className="navbar-brand " href="/">
            <img src={logo} alt="Logo" width="140" height="50" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "white" }}
                >
                  {t("Home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="about"
                  style={{ color: "white" }}
                >
                  {t("About Us")}
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link `}
                  to="research"
                  style={{ color: "white" }}
                >
                  {t("Research")}
                </NavLink>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="products"
                  style={{ color: "white" }}
                >
                  {t("Products")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  style={{ color: "white" }}
                >
                  {t("Contact us")}
                </Link>
              </li>
            </ul>
            <button
              className={`btn btn-link d-flex ${styles.themeToggle}`}
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Brightness4 fontSize="small" />
              ) : (
                <Brightness7 fontSize="small" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
