import React from "react";

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} My React Website</p>
  </footer>
);

export default Footer;
// This is a simple footer component for a React website.
// It includes a copyright notice with the current year, dynamically generated using JavaScript's Date object