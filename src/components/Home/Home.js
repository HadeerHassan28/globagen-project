import React, { useContext } from "react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
const Home = () => {
  const { t } = useTranslation();
  let { themeConfig, isTheme } = useContext(conTheme);
  const theme = themeConfig.palette.mode;
  return <div className={styles.Home}>{t("Home")}</div>;
};

export default Home;
