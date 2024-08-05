import React from 'react'
import "./header.css"

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
      <button className="header__resume-btn">my resume</button>
    </nav>
  </header>
  )
}

export default Header