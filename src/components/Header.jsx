import { useState, useEffect } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    navOpen
      ? (body.style.cssText = "overflow: hidden;")
      : (body.style.cssText = "overflow: visible");
  }, [navOpen]);

  return (
    <header className="header">
      <img className="logo" src="/images/logo.svg" alt="logo icon" />

      <nav aria-roledescription="navigation" className={navOpen ? "open-nav navbar" : "navbar"}>
        <ul className="navlist">
          <li onClick={() => setNavOpen(!navOpen)} className="navitem">
            <a href="#">Pricing</a>
          </li>
          <li onClick={() => setNavOpen(!navOpen)} className="navitem">
            <a href="#">Product</a>
          </li>
          <li onClick={() => setNavOpen(!navOpen)} className="navitem">
            <a href="#">About Us</a>
          </li>
          <li onClick={() => setNavOpen(!navOpen)} className="navitem">
            <a href="#">Careers</a>
          </li>
          <li onClick={() => setNavOpen(!navOpen)} className="navitem">
            <a href="#">Community</a>
          </li>
        </ul>
      </nav>

      <button className="cta-btn">Get Started</button>

      <span className="hamburger-menu">
        {navOpen ? (
          <img
            className="close-icon"
            src="/images/icon-close.svg"
            alt="Close icon"
            onClick={() => setNavOpen(!navOpen)}
          />
        ) : (
          <img
            className="menu-icon"
            src="/images/icon-hamburger.svg"
            alt="Menu icon"
            onClick={() => setNavOpen(!navOpen)}
          />
        )}
      </span>
    </header>
  );
}
