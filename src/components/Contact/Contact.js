import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { BsTelephoneOutbound, BsEnvelope } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);
  // const address =
  //   "64-62 Mecca, Sheraton Al Matar, El Nozha, Cairo Governorate 4471206";

  const contactInfo = [
    {
      id: 1,
      title: "Shipping & Customs Clearance Department",
      name: t("Mr. Mohamed Fathy"),
      number: "01001539990",
      email: "m.fathy@globagene.com",
    },
    {
      id: 2,
      title: "Scientific Research Department",
      name: t("Eng. Nora Ragheb"),
      number: "01067652075",
      email: "nora.ragheb@globagene.com",
    },
    {
      id: 3,
      title: "General Requirement",
      number: "01033569793",
      email: "info@globagene.com",
    },
  ];
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };
  // const getMapImageSrc = (address) => {
  //   const apiKey = "AIzaSyA67i2eU-V4PS5QdKS-wOaLB7WyMmAR7ZQ";
  //   const encodedAddress = encodeURIComponent(address);
  //   const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=14&size=600x300&key=${apiKey}`;
  //   return imageUrl;
  // };
  // const mapImageSrc = getMapImageSrc(address);
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
        <div key={ele.id} className={`container `}>
          <p
            className={`d-flex justify-content-sm-center align-items-sm-center flex-column h5`}
            style={{ color: isTheme === true ? "white" : "#071848" }}
          >
            {ele.title}
          </p>
          <p
            className={`d-flex justify-content-sm-center align-items-sm-center flex-column h6`}
            style={{ color: isTheme === true ? "white" : "#071848" }}
          >
            {ele.name}
          </p>
          <div className=" d-flex justify-content-sm-center align-items-sm-center flex-column ">
            <Link to={`tel:+${ele.number}`}>
              <BsTelephoneOutbound
                target="_blank"
                style={{ color: isTheme === true ? "white" : "#071848" }}
              />
              <span
                style={{
                  marginLeft: "0.5rem",
                  color: isTheme ? "black" : "#071848",
                }}
              >
                {ele.number}
              </span>
            </Link>
          </div>
          <div className=" d-flex justify-content-sm-center align-items-sm-center flex-column mt-2">
            <Link to={`https://wa.me/+${ele.number}`}>
              <AiOutlineWhatsApp
                target="_blank"
                style={{ color: isTheme === true ? "white" : "#071848" }}
              />
              <span
                style={{
                  marginLeft: "0.5rem",
                  color: isTheme ? "black" : "#071848",
                }}
              >
                {ele.number}
              </span>
            </Link>
            <div
              className=" d-flex align-items-center   mt-2 mb-3"
              onClick={() => handleEmailClick(ele.email)}
              style={{ cursor: "pointer" }}
            >
              <BsEnvelope
                target="_blank"
                style={{ color: isTheme === true ? "white" : "#071848" }}
              />
              <span
                style={{
                  marginLeft: "0.5rem",
                  color: isTheme ? "black" : "#071848",
                }}
              >
                {ele.email}
              </span>
            </div>
          </div>
          {index !== contactInfo.length - 1 && (
            <hr
              key={`hr-${ele.id}`}
              style={{
                backgroundColor: isTheme === true ? "#0FEF96" : "#071848",
                height: 3,
                width: "100%",
                margin: "1rem 0",
              }}
            />
          )}
        </div>
      ))}
      <div className="container d-flex justify-content-center align-items-center">
        {/* <img src={} alt="Google Map" /> */}
      </div>
    </div>
  );
};

export default Contact;
