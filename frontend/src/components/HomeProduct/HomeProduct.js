import React, { useContext, useEffect, useState } from "react";
import styles from "../HomeProduct/HomeProduct.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import MultiActionAreaCard from "../CardProduct/CardProduct";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeProduct = () => {
  const { t } = useTranslation();
  let { isTheme, data, loading } = useContext(conTheme);
  const productNo = 2;
  const [slicedData, setSlicedData] = useState([]);
  //console.log(data);
  useEffect(() => {
    if (!loading && data) {
      setSlicedData(data.slice(0, productNo));

      // Initialize AOS
      AOS.init({
        offset: 100,
        delay: 200,
        duration: 600,
        easing: "ease",
        //   once: true,
        mirror: true,
        anchorPlacement: "center-center",
      });
    }
  }, [data, loading, productNo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mb-5" data-aos="fade-up">
      <div className="row">
        <div className="col-sm-12 ">
          <h1 className={`h1 mb-5 ${styles.h1}`}>{t("Products")}</h1>

          <div className="row">
            {slicedData.map((ele) => {
              // console.log("Home", ele);
              return (
                <div
                  key={ele.id}
                  className="col-sm-12 col-md-4 mb-5 d-flex justify-content-sm-around"
                >
                  <MultiActionAreaCard
                    name={ele.attributes.name}
                    description={ele.attributes.description}
                    image={ele.attributes.image.data.attributes.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
