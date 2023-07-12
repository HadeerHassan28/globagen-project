import * as React from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" href="Nav">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          Bootstrap
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="nav">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="nav">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="nav">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" href="nav">
                Disabled
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
