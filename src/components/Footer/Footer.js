import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function App() {
  const { t } = useTranslation();
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section> */}

      <section
        className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom"
        style={{ backgroundColor: "#2A3034", color: "white" }}
      >
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Globagene
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to={"/"} className="text-reset">
                  {t("Home")}
                </Link>
              </p>
              <p>
                <Link to={"about"} className="text-reset">
                  {t("About Us")}
                </Link>
              </p>
              <p>
                <Link to={"research"} className="text-reset">
                  {t("Research")}
                </Link>
              </p>
              <p>
                <Link to={"product"} className="text-reset">
                  {t("Products")}
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                {t(
                  "114 Sakr Qurish Budling Behind Al Tabari School, Third Floor, No. 15. Sheraton, Cairo, Egypt."
                )}
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@globagene.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +20 1033569793
              </p>
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> +20 1033569793
              </p> */}
              <Link
                to={`https://www.facebook.com/profile.php?id=100078919334060`}
                className="me-4 text-reset"
              >
                <MDBIcon fab icon="facebook-f" />
              </Link>
              <Link
                to={`https://wa.me/+${"01033569793"}`}
                className="me-4 text-reset"
              >
                <MDBIcon fab icon="whatsapp" />
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}
