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
        <p className="about-textbox__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem asperiores nihil eveniet pariatur aliquam? Id dolor reiciendis
          ipsam magnam omnis soluta quisquam sint error quod nisi, totam, eum
          labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore autem asperiores nihil eveniet pariatur aliquam? Id dolor
          reiciendis ipsam magnam omnis soluta quisquam sint error quod nisi,
          totam, eum labore. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Inventore autem asperiores nihil eveniet pariatur aliquam? Id
          dolor reiciendis ipsam magnam omnis soluta quisquam sint error quod
          nisi, totam, eum labore. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Inventore autem asperiores nihil eveniet pariatur
          aliquam? Id dolor reiciendis ipsam magnam omnis soluta quisquam sint
          error quod nisi, totam, eum labore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Inventore autem asperiores nihil eveniet
          pariatur aliquam? Id dolor reiciendis ipsam magnam omnis soluta
          quisquam sint error quod nisi, totam, eum labore. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Inventore autem asperiores
          nihil eveniet pariatur aliquam? Id dolor reiciendis ipsam magnam omnis
          soluta quisquam sint error quod nisi, totam, eum labore.
        </p>
      </div>
      <div className="about-image-wrapper">
        <img src={johnDoeImg} alt="john doe" className="about__image" />
      </div>
    </div>
  );
}

export default About;
