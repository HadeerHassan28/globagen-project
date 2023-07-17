import React, { useContext } from "react";
import styles from "../Product/Product.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import MultiActionAreaCard from "../CardProduct/CardProduct";

const Product = () => {
  const { t } = useTranslation();
  let { isTheme, data, error, loading } = useContext(conTheme);
  console.log("product name", data.attributes);
  if (loading)
    return (
      <p
        className={`ms-3 d-flex justify-content-center my-4`}
        style={{ color: isTheme === true ? "white" : "#071848" }}
      >
        Loading...
      </p>
    );
  if (error)
    return (
      <p
        className={`ms-3 d-flex justify-content-center my-4`}
        style={{ color: isTheme === true ? "white" : "#071848" }}
      >
        Error!
      </p>
    );

  return (
    <div
      className={`container `}
      style={{
        backgroundColor: isTheme === true ? "black" : "white",
      }}
    >
      <h1
        className={`ms-3 d-flex justify-content-center my-4`}
        style={{ color: isTheme === true ? "white" : "#071848" }}
      >
        {t("Radiation Protection Product")}
      </h1>
      {data.data.map((ele) => (
        <div
          key={ele.id}
          className={`container mb-5 d-flex justify-content-sm-around`}
        >
          <MultiActionAreaCard
            name={ele.name}
            description={ele.description}
            img={ele.img}
          />
        </div>
      ))}
    </div>
  );
};

export default Product;
