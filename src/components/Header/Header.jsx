import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-logo">{`{webster}`}</h1>
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header-nav__link active" : "header-nav__link"
          }
        >
          explore
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "header-nav__link active" : "header-nav__link"
          }
        >
          contact
        </NavLink>
        <a
          href="/resume.pdf"
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
