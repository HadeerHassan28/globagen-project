import * as React from "react";
import { useContext } from "react";
import styles from "../NavBar/NavBar.module.css";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Brightness4, Brightness7, Translate } from "@mui/icons-material";
import { conTheme } from "../../Context/Context";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  let { toggleTheme, themeConfig } = useContext(conTheme);
  const theme = themeConfig.palette.mode;
  //   const location = useLocation();
  // const isActiveLink = (path) => {
  //   return location.pathname === path;
  // };
  //   const activeLinkStyle = {
  //     color: " #09bed0",
  //   };
  const handleTranslate = () => {
    const currentLanguage = i18n.language; // Get the current language code
    const newLanguage = currentLanguage === "en" ? "ar" : "en"; // Switch language

    i18n.changeLanguage(newLanguage); // Update the language
  };
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
            <span className="navbar-toggler-icon "></span>
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
                  to="product"
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
          </div>
          <button
            className={`btn btn-link  ${styles.themeToggle}`}
            onClick={handleTranslate}
          >
            <Translate />
          </button>
          <button
            className={`btn btn-link   ${styles.themeToggle}`}
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <Brightness4 fontSize="small" />
            ) : (
              <Brightness7 fontSize="small" />
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
