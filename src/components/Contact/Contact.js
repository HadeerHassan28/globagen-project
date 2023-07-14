import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
const Contact = () => {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);
  const contactInfo = [
    {
      id: 1,
      title: "Shipping & Customs Clearance Department",
      name: "Mr. Mohamed Fathy",
      number: "01001539990",
      email: "m.fathy@globagene.com",
    },
    {
      id: 2,
      title: "Scientific Research Department",
      name: "Eng. Nora Ragheb",
      number: "01067652075",
      email: "nora.ragheb@globagene.com",
    },
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
        <NearMeOutlinedIcon
          className="me-2 nearMeOutlinedIcon"
          target="_blank"
        />
        {t("Contact us")}
      </h1>
      {contactInfo.map((ele, index) => (
        <div
          key={ele.id}
          className={`container d-flex justify-content-sm-center align-items-sm-center `}
        >
          <p style={{ color: isTheme === true ? "white" : "#071848" }}>
            {ele.title}
          </p>
          <p style={{ color: isTheme === true ? "white" : "#071848" }}>
            {ele.name}
          </p>
          <Link to={`tel:+${ele.number}`}>
            <BsTelephoneOutbound
              className="me-2"
              target="_blank"
              style={{ color: isTheme === true ? "white" : "#071848" }}
            >
              {ele.number}
            </BsTelephoneOutbound>
          </Link>
          <Link to={`https://wa.me/+${ele.number}`}>
            <AiOutlineWhatsApp
              className="me-2"
              target="_blank"
              style={{ color: isTheme === true ? "white" : "#071848" }}
            >
              {ele.number}
            </AiOutlineWhatsApp>
          </Link>
          {index !== contactInfo.length - 1 && (
            <hr
              key={`hr-${ele.id}`}
              style={{
                backgroundColor: isTheme === true ? "#0FEF96" : "#071848",
                height: 10,
                width: "100%",
                margin: "1rem 0",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Contact;
