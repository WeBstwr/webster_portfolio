import React from "react";
import "./about.css";
import Title from "../../../components/Title/Title";
import johnDoeImg from "../../../assets/about-dummy-img.jpg";

function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-textbox">
        <div className="about-textbox-title">
          <Title text="about me" />
        </div>
        <div className="about-textbox__text">
          <ul>
            <li>
              <b>Passionate Fullstack Developer:</b> Enthusiastic about building
              scalable web applications using modern technologies and best
              practices.
            </li>{" "}
            <br />
            <li>
              <b>Fullstack Expertise:</b> Skilled in both front-end and back-end
              development, utilizing tools such as React, Express, PostgreSQL,
              and Zustand for state management.
            </li>{" "}
            <br />
            <li>
              <b>Practical Experience:</b> Gained hands-on experience in
              building real-world applications, focusing on creating efficient,
              scalable, and secure web solutions.
            </li>{" "}
            <br />
            <li>
              <b>Design Skills:</b> Proficient in designing user-friendly
              interfaces with a focus on usability and aesthetics, using tools
              like Inter, sans-serif for clean typography.
            </li>{" "}
            <br />
            <li>
              <b>Cybersecurity Enthusiast:</b> Dedicated to ensuring secure
              coding practices and staying updated with the latest trends in
              cybersecurity.
            </li>{" "}
            <br />
            <li>
              <b>Collaboration and Communication:</b> Strong teamwork and
              communication skills, essential for successful project management
              and collaboration.
            </li>{" "}
            <br />
            <li>
              <b>Open Source Contributor:</b> Actively contributing to
              open-source projects on GitHub, continually seeking opportunities
              to learn and share knowledge with the developer community.
            </li>
          </ul>
        </div>
      </div>
      <div className="about-image-wrapper">
        <img src={johnDoeImg} alt="john doe" className="about__image" />
      </div>
    </div>
  );
}

export default About;
