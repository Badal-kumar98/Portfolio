import React from "react";
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="ft-footer">
        <div class="ft-footer-line"></div>
        <div class="ft-footer-icons">
          <a href="#" class="ft-footer-icon">
            <FaFacebookSquare />
          </a>
          <a href="#" class="ft-footer-icon">
            <FaLinkedin />
          </a>
          <a href="#" class="ft-footer-icon">
            <FaInstagramSquare />
          </a>
        </div>
        <p class="ft-footer-text">© 2024 Your Name. All Rights Reserved.</p>
      </footer>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default Footer;
