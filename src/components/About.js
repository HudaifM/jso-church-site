import React from "react";
import "./About.css"; // Assuming you have a CSS file for styling

const About = () => (
  <section className="about-section">
      <div className="about-left">
        <h4>ABOUT US</h4>
        <h2>St. Mary’s Jacobite Syrian Chapel, Ayyanthole</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button className="about-btn">MORE</button>
      </div>
      <div className="about-right">
        <img src="/jesus.png" alt="Jesus" />
      </div>
    </section>
);

export default About;
// This is a simple about section component for a React website.
// It includes a title and a brief description about the website or organization.