import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Title from "../../components/Title/Title";
import "./contact.css";

const Socials = ({ icon }) => {
  return (
    <div className="socials">
      <div className="socials-icon-wrapper">{icon}</div>
    </div>
  );
};

function Contact() {
  return (
    <section className="contact-section">
      <Title text="get in touch" />
      <div className="contact-info">
        <h2>I am here to answer all your questions</h2>
        <div className="contact-container">
          <h3>email</h3>
          <p>ifedhawebster@gmail.com</p>
          <h3>whatsapp</h3>
          <p>+254715652746</p>
          <h3>time</h3>
          <p>24/7</p>
        </div>
        <div className="contact-socials">
          <Socials icon={<FaLinkedin />} />
          <Socials icon={<FaXTwitter />} />
          <Socials icon={<AiFillInstagram />} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
