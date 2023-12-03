import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="public/logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our Vision is to make everyone <br /> live is the best places ever
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Contact Information</span>
          <span className="seconddaryText">
            145 Garden Avenue, Enugu-Abakiliki Road, Enugu
          </span>

          <div className="flexCenter f-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
