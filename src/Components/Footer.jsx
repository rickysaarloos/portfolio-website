import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-title">Neem contact op</p>
        <p>
          <a href="mailto:rickyvaarloos@gmail.com" className="footer-link">
            rickyvaarloos@gmail.com
          </a>
        </p>
        <p>+31 612101710</p>
        <p className="footer-credit">
          © 2025 Ricky Saarloos <span className="italic">lets create</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
