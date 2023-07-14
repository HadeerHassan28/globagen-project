import React, { useContext } from "react";
import styles from "../Research/Research.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
const Research = () => {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);
  const parag = [
    {
      id: 1,
      p: t(
        "Globagen Research and Development Contracting Services! We are a leading provider of specialized services in the field of molecular biology in Egypt. With our expertise and advanced technology, we offer a wide range of solutions in various areas such as pathogen detection, crop variety identification, antibody development, and nanobody research to worldwide customers."
      ),
    },
    {
      id: 2,
      p: t(
        "At Globagen, we understand the importance of accurate and timely results in molecular biology research and development. That's why we have assembled a team of highly skilled scientists and technicians who are dedicated to delivering exceptional services tailored to your specific needs. Our state-of-the-art facilities and cutting-edge equipment ensure that we stay at the forefront of molecular biology advancements."
      ),
    },
    {
      id: 3,
      p: t(
        "One of our key focus areas is pathogen detection. We employ advanced molecular techniques to identify and analyze pathogens, helping you to effectively monitor and manage disease outbreaks. Whether it's viral, bacterial, or fungal pathogens, our expertise allows us to provide accurate and reliable results."
      ),
    },
    {
      id: 4,
      p: t(
        "In addition, we specialize in crop variety identification. Through DNA-based techniques, we can accurately determine the genetic makeup of crops, enabling you to identify and select the most suitable varieties for your specific agricultural needs."
      ),
    },
    {
      id: 5,
      p: t(
        "Furthermore, our services extend to the development of antibodies and nanobodies. With our expertise in molecular biology and protein engineering, we can assist you in generating high-quality antibodies and nanobodies for various applications, including diagnostics, therapeutics, and research."
      ),
    },
    {
      id: 6,
      p: t(
        "We take pride in our commitment to quality, precision, and customer satisfaction. Our team works closely with you to understand your project goals and deliver results that meet your expectations. Whether you are an academic institution, a biotechnology company, or a research organization, we are here to support your molecular biology endeavors."
      ),
    },
    {
      id: 7,
      p: t(
        "Explore the possibilities with Globagen Research and Development Contracting Services and let us help you advance your molecular biology projects. Contact us today to discuss your specific requirements and learn more about our comprehensive range of services."
      ),
    },
    {
      id: 8,
      p: t(
        "Together, we can unlock the potential of molecular biology and drive innovation in various fields."
      ),
    },
    //  {
    //    id: 9,
    //    p: t("Welcome to the world of Globagen!"),
    //  },
  ];

  return (
    <div
      className={`container`}
      style={{
        backgroundColor: isTheme === true ? "black" : "white",
      }}
    >
      <h1
        className={`ms-3 d-flex justify-content-center my-4`}
        style={{ color: isTheme === true ? "white" : "#071848" }}
      >
        {t("Research and development")}
      </h1>
      {parag.map((ele) => (
        <div
          className={`ms-3 d-flex align-items-sm-start justify-content-sm-start blockquote flex-column`}
          style={{ color: isTheme === true ? "white" : "#071848" }}
          key={ele.id}
        >
          <p
            className={`paragraph`}
            style={{ color: isTheme === true ? "white" : "#071848" }}
          >
            {ele.p}
          </p>
        </div>
      ))}
      <div
        className="d-flex justify-content-center mt-3 display-4 my-4"
        style={{ color: isTheme === true ? "white" : "#071848" }}
      >
        <p>{t("Welcome to the world of Globagen!")}</p>
      </div>
    </div>
  );
};

export default Research;
