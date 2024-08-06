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
              <img src={img} alt="my avatar" className="hero-avatar-img" />
              Hello, I am
            </p>
            <h3 className="hero__name">{`webster ifedha`}</h3>
            <p className="hero-textbox__p">I am a full-stack web developer</p>
          </div>
        </div>

        <div className="cta__container">
          <a href="#about" class="home-cta">
            about
          </a>
          <a href="#skills" class="home-cta">
            skills
          </a>
          <a href="#my__projects" class="home-cta">
            my projects
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
