import React from "react";
import './Footer.css'; // Importing the CSS file for styling

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} JSO Church. All rights reserved.</p>
  </footer>
);

export default Footer;
// This is a simple footer component for a React website.
// It includes a copyright notice with the current year, dynamically generated using JavaScript's Date object