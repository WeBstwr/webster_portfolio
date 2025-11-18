import React from "react";
import img from "../../../assets/profile-img.JPG";
import "./hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero-textbox">
            <p className="hero-textbox__p hero-textbox-p-left">
              <img src={img} alt="Webster Ifedha avatar" decoding="async" className="hero-avatar-img" />
              Hello, I’m
            </p>
            <h3 className="hero__name">{`webster ifedha`}</h3>
            <p className="hero-textbox__p">I’m a full‑stack developer</p>
          </div>
        </div>

        <div className="cta__container">
          <a href="#about" className="home-cta">
            about
          </a>
          <a href="#skills" className="home-cta">
            skills
          </a>
          <a href="#my__projects" className="home-cta">
            my projects
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
