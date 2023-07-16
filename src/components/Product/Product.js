import React, { useContext } from "react";
import styles from "../Product/Product.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import MultiActionAreaCard from "../CardProduct/CardProduct";

const Product = () => {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);
  const product = [
    {
      id: 1,
      title: t("Isolation X-ray room & CT room"),
      describe: t(
        "Supply & Installation Lead thickness 1mm, 1.5mm & 2mmPb, •	Supply & Installation Cladding walls by MDF & PVC, Supply & Installation Doors & Windows with Lead Glass. (All Sizes Available), Supply & Installation Mobile Lead Barrier with Lead Glass. (All Sizes Available)"
      ),
      img: "src/assets/product/pro1.jpg",
    },
    {
      id: 2,
      title: t("Isolation X-ray room & CT room"),
      describe: t(
        "Supply & Installation Lead thickness 1mm, 1.5mm & 2mmPb, •	Supply & Installation Cladding walls by MDF & PVC, Supply & Installation Doors & Windows with Lead Glass. (All Sizes Available), Supply & Installation Mobile Lead Barrier with Lead Glass. (All Sizes Available)"
      ),
      img: "src/assets/product/pro2.jpg",
    },
  ];

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
      {product.map((ele) => (
        <div
          key={ele.id}
          className={`container mb-5 d-flex justify-content-sm-around`}
        >
          <MultiActionAreaCard
            title={ele.title}
            describe={ele.describe}
            img={ele.img}
          />
        </div>
      ))}
    </div>
  );
};

export default Product;
