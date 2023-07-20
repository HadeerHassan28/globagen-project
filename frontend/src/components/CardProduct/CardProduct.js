import * as React from "react";
import { useContext } from "react";
import styles from "../CardProduct/CardProduct.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({ name, description, image, id }) {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);
  const maxDescriptionLength = 50; //per character

  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..." // Add ellipsis if the description is longer
      : description;

  //console.log(name);
  return (
    <div
      class="card"
      style={{
        width: "25rem",
        backgroundColor: isTheme === true ? "black" : "white",
        border: isTheme === true ? "1px solid #0FEF96" : "",
      }}
    >
      <img
        src={`https://globagen.onrender.com${image}`}
        class="card-img-top"
        alt={name}
      />
      <div class="card-body">
        <h5
          class="card-title"
          style={{ color: isTheme === true ? "white" : "#071848" }}
        >
          {name}
        </h5>
        <p
          class="card-text"
          style={{ color: isTheme === true ? "white" : "#071848" }}
        >
          {truncatedDescription}
        </p>
        <Link
          to={`https://wa.me/+${"01067652075"}`}
          className={`btn ${styles.btnColor} my-2`}
          style={{ border: isTheme === true ? "1px solid #0FEF96" : "" }}
        >
          {t("Inquiry Request")}
        </Link>
        <Link
          to={`/product/${id}`}
          className={`btn ${styles.btnColor} `}
          style={{ border: isTheme === true ? "1px solid #0FEF96" : "" }}
        >
          {t("More Info")}
        </Link>
      </div>
    </div>
  );
}
