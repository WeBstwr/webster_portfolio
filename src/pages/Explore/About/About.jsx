import React from "react";
import "./about.css";
import Title from "../../../components/Title/Title";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-textbox">
        <div className="about-textbox-title">
          <Title text="about me" />
        </div>
        <div className="about-textbox__text">
          <p>
            Hi, I’m Webster — a full‑stack developer skilled in React, Node.js,
            Express, and PostgreSQL, building scalable and user‑friendly apps.
            I also specialize in cloud security, ensuring secure and reliable
            solutions, and have a growing focus on machine learning to create
            intelligent systems. I deliver end‑to‑end development, secure
            deployments, and responsive designs with a commitment to quality and
            clear communication. Let’s bring your ideas to life — securely and
            intelligently.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
