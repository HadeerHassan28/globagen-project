import * as React from "react";
import { useContext } from "react";
import styles from "../CardProduct/CardProduct.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import { Link } from "react-router-dom";
export default function MultiActionAreaCard({ name, description, img }) {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);
  //console.log(name);
  return (
    <div className={`col-md-6 mb-4`}>
      <div className={`card ${styles.cardWidth}`}>
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body d-flex">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link to="/" className="btn btn-primary">
            Go somewhere
          </Link>
          <Link
            to={`https://wa.me/+${"01067652075"}`}
            className="btn btn-primary"
          >
            {t("Inquiry Request")}
          </Link>
        </div>
      </div>
    </div>
  );
}
