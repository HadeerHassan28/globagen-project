import * as React from "react";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {t("Home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  {t("About Us")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="research">
                  {t("Research")}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="products">
                  {t("Products")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">
                  {t("Contact us")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
