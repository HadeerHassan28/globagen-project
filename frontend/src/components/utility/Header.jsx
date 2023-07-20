import React from "react";
import { Button, Card } from "react-bootstrap";
import test from "../../assets/home/test.png";
import "./Header.module.css";

const Header = () => {
  return (
    <Card className=" bg-dark text-white mb-5">
      <img
        src={test}
        alt="Card"
        className="image"
        style={{ maxHeight: "80vh" }}
      />
      <Card.ImgOverlay style={{ padding: "100px" }}>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer. This is a
          wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer. This is a
          wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Button className="btn btn-outline-primary px-4 ">
          <a href="#about">{"More"}</a>
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Header;

//********  this is ur old code take function and but it in new code

// <div className="col-sm-12">
// <div className={styles.homeContainer}>
//   <img
//     src={test}
//     alt="landing Img"
//     className={`img-fluid ${styles.imgLanding}`}
//   />
//   <div className={styles.textContainer}>
//     <h1 className="h1">Descripe company</h1>
//     <p className="h4 mb-4">Lorem</p>
//
//   </div>
// </div>
// </div>
