import React, { useContext } from "react";
import styles from "../oneProduct/oneProduct.module.css";
import { conTheme } from "../../Context/Context";
import { useParams } from "react-router-dom";

const OneProduct = () => {
  const { id } = useParams;
  let { isTheme, subset } = useContext(conTheme);
  console.log(id);
  const selectedProduct = subset.find((product) => product.id === Number(id));
  console.log(selectedProduct);
  if (!selectedProduct) {
    return (
      <div className={`container ${styles.oneProductContainer}`}>
        <h1 style={{ color: isTheme ? "white" : "#071848" }}>
          Product Not Found
        </h1>
      </div>
    );
  }
  const { name, description, image } = selectedProduct.attributes;
  return (
    <div className={`container ${styles.oneProductContainer}`}>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src={`https://globagen.onrender.com${image.data.attributes.url}`}
            alt={name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 style={{ color: isTheme ? "white" : "#071848" }}>{name}</h1>
          <p style={{ color: isTheme ? "white" : "#071848" }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
