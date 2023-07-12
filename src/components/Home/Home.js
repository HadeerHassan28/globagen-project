import React from "react";
import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return <div className={styles.Home}>{t("Home")}</div>;
};

export default Home;
