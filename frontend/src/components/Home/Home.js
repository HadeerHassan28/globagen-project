import { useContext } from "react";
import * as React from "react";
import styles from "../Home/Home.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import test from "../../assets/home/test.png";

import HomeContact from "../HomeContact/HomeContact";
import HomeGoogleMap from "../HomeGoogleMap/HomeGoogleMap";
import HomeProduct from "../HomeProduct/HomeProduct";
const Home = () => {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);

  return (
    <div className="">
      <div className="row">
        <div className="col-sm-12 ">
          <div className={styles.homeContainer}>
            <img
              src={test}
              alt="landing Img"
              className={`img-fluid ${styles.imgLanding}`}
            />
            <div className={styles.textContainer}>
              <h1 className="h1">Descripe company</h1>
              <p className="h4 mb-4">Lorem</p>
              <a
                href="#about"
                className={`btn btn-outline-primary px-4 ${styles.more}`}
              >
                {t("More")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <HomeProduct />

      <HomeContact />

      {/* <HomeGoogleMap /> */}
    </div>
  );
};

export default Home;
