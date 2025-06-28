import React from "react";
import './Header.css'; // Importing the CSS file for styling

const Header = () => (
  <header className="header">
    {/* <div className="logo">
        <Link to="/">
          <img src="/Logo.png" alt="JSO Logo" />
        </Link>
      </div> */}
    <h1>JSO Church</h1>
    <nav>
      <a href="#hero">Home</a>
      <a href="#about">About Us</a>
      <a href="#history">History</a>
      <a href="#contact">Contact</a>
      <a href="#download-app">Download App</a>
    </nav>
  </header>
);

export default Header;