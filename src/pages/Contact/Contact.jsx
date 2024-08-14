import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Title from "../../components/Title/Title";
import "./contact.css";

const Socials = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="socials"
    >
      <div className="socials-icon-wrapper">{icon}</div>
    </a>
  );
};

function Contact() {
  return (
    <section className="contact-section">
      <Title text="get in touch" />
      <div className="contact-info">
        <h2>How to reach me</h2>
        <div className="contact-container">
          <h3>email</h3>
          <p>
            <a href="mailto:ifedhawebster@gmail.com">ifedhawebster@gmail.com</a>
          </p>
          <h3>whatsapp</h3>
          <p>
            <a
              href="https://wa.me/254715652746"
              target="_blank"
              rel="noopener noreferrer"
            >
              +254715652746
            </a>
          </p>
          <h3>time</h3>
          <p>24/7</p>
        </div>
        <div className="contact-socials">
          <Socials
            icon={<FaLinkedin />}
            link="https://www.linkedin.com/in/webster-safala-9147a2245/"
          />
          <Socials icon={<FaXTwitter />} link="https://x.com/WIfedha" />
          <Socials
            icon={<AiFillInstagram />}
            link="https://www.instagram.com/webster_ifedha/"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
