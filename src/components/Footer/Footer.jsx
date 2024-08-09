import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt=""/>
            <img src={assets.linkedin_icon} alt=""/>
          </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>

        </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
           <li>+92 3085059840</li>
           <li>freelancerasif83@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">Copyright { new Date().getFullYear()} © tomato.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
