import { useContext } from "react";
import * as React from "react";
import styles from "../Home/Home.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";

import HomeContact from "../HomeContact/HomeContact";
// import HomeGoogleMap from "../HomeGoogleMap/HomeGoogleMap";
import HomeProduct from "../HomeProduct/HomeProduct";
import Header from "../utility/Header";
const Home = () => {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);

  return (
    <div>
      <Header />
      <HomeProduct />

      <HomeContact />

      {/* <HomeGoogleMap /> */}
    </div>
  );
};

export default Home;
