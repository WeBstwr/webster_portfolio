import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">{`{webster}`}</h1>
      <nav className="header-nav">
        <a href="/" className="header-nav__link">
          explore
        </a>
        <a href="/contact" className="header-nav__link">
          contact
        </a>
        <a
          href="../../../public/resume.pdf"
          download="Webster_Resume.pdf"
          className="header__resume-btn"
        >
          my resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
