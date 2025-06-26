import React from "react";
import './Footer.css'; // Importing the CSS file for styling

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} JSO Church. All rights reserved.</p>
  </footer>
);

export default Footer;