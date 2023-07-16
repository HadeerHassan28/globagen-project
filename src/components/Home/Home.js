import { useContext, useState } from "react";
import * as React from "react";
import styles from "../Home/Home.module.css";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
import test from "../../assets/home/test.png";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
const Home = () => {
  const { t } = useTranslation();
  let { themeConfig, isTheme } = useContext(conTheme);
  const theme = themeConfig.palette.mode;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const serviceId = "";
  const templateId = "";

  emailjs.init("fVLokjsl-V-BCyU5i");
  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMsg(value);
    }
  }
  function sendEmail(event) {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: msg,
    };

    emailjs.send(serviceId, templateId, templateParams).then(
      (result) => {
        console.log(result.text);
        toast.success("thank u for contact us", { duration: 2000 });
        setName("");
        setEmail("");
        setMsg("");
      },
      (error) => {
        toast.error("error, please try again later", { duration: 2000 });
      }
    );
  }
  return (
    <div className="">
      <div className="row">
        <div className="col-sm-12 ">
          <div className={styles.homeContainer}>
            <img
              src={test}
              alt="landing Img"
              className={`img-fluid ${styles.imgLanding}`}
            />
            <div className={styles.textContainer}>
              <h1 className="h1">Descripe company</h1>
              <p className="h4 mb-4">Lorem</p>
              <a
                href="#about"
                className={`btn btn-outline-primary px-4 ${styles.more}`}
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <h1 className={`h1 ${styles.h1}`}>{t("Products")}</h1>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div className="container ">
        <div className="row">
          <form className="col-sm-12 " onSubmit={sendEmail}>
            <h1 className={`h1 ${styles.h1} d-flex justify-content-sm-center`}>
              {t("Contact us")}
            </h1>
            <input
              type="text"
              placeholder={t("Full Name")}
              name="name"
              className={`form-control mb-2 `}
              style={{
                borderColor: isTheme ? "#0FEF96" : "",
                backgroundColor: isTheme ? "black" : "white",
              }}
              value={name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder={t("Email")}
              name="email"
              className={`form-control mb-2 `}
              style={{
                borderColor: isTheme ? "#0FEF96" : "",
                backgroundColor: isTheme ? "black" : "white",
              }}
              value={email}
              onChange={handleChange}
            />

            <textarea
              className={`form-control mb-3 `}
              style={{
                borderColor: isTheme ? "#0FEF96" : "",
                backgroundColor: isTheme ? "black" : "white",
              }}
              name="message"
              cols="30"
              rows="10"
              placeholder={t("Your Message")}
              value={msg}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className={`btn d-flex ms-auto ${styles.bttn} d-flex justify-content-sm-center mb-4 px-5`}
              style={{
                borderColor: isTheme ? "#0FEF96" : "",
                borderWidth: isTheme ? "1rem" : "",
              }}
            >
              {t("Send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
