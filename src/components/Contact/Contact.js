import React, { useContext, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { BsTelephoneOutbound, BsEnvelope } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
//import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Contact = () => {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  //   // googleMapsApiKey: "AIzaSyD0ObDD1_qe4RuAlhc-sX_NoDK77x2OQnE",
  // });
  // const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  const contactInfo = [
    {
      id: 1,
      title: t("Shipping & Customs Clearance Department"),
      name: t("Mr. Mohamed Fathy"),
      number: "01001539990",
      email: "m.fathy@globagene.com",
    },
    {
      id: 2,
      title: t("Scientific Research Department"),
      name: t("Eng. Nora Ragheb"),
      number: "01067652075",
      email: "nora.ragheb@globagene.com",
    },
    {
      id: 3,
      title: t("General Requirement"),
      number: "01033569793",
      email: "info@globagene.com",
    },
  ];
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  // if (!isLoaded)
  //   return (
  //     <div
  //       className="container d-flex justify-content-center align-items-center"
  //       style={{ color: isTheme === true ? "white" : "#071848" }}
  //     >
  //       Loading...
  //     </div>
  //   );

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
      <div
        className="container d-flex justify-content-center align-items-center mb-5"
        id="map"
      >
        {/* <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="mapContanier"
        >
          <Marker position={center} />
        </GoogleMap> */}
        <Link target="_blank" to={`https://goo.gl/maps/CxngUs87MbuRaWFn8`}>
          <CiLocationOn
            size={25}
            className="me-2"
            style={{ color: isTheme === true ? "white" : "#071848" }}
          />

          <span
            className="h5 mb-5"
            style={{ color: isTheme === true ? "white" : "#071848" }}
          >
            {t(
              "114 Sakr Qurish Budling Behind Al Tabari School, Third Floor, No. 15. Sheraton, Cairo, Egypt."
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
