import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import Logo from "../assets/logo.png";

function Navbar({ onShowCards, activeLink, setActiveLink }) {
  const [showText, setShowText] = useState("");
  const [index, setIndex] = useState(0);
  const text = "CodeBeam";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= text.length) {
        setShowText(text.substring(0, index));
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIndex(0);
        setShowText("");
      }
    }, 310);

    return () => clearInterval(interval);
  }, [index]);

  const handleLinkClick = (link) => {
    if (link === "service") {
      onShowCards(true);
    } else {
      onShowCards(false);
    }
    setActiveLink(link);
  };

  return (
    <header className="header">
      <a href="#home" onClick={() => handleLinkClick("main")}>
        <img className="logoPrincipal" src={Logo} alt="Logo Principal" />
      </a>
      <div className="titleContainer">
        <h1 className="codeBeamTitle">{showText}</h1>
      </div>
      <nav className="navbar">
        <a
          href="#home"
          className={activeLink === "main" ? "active" : ""}
          onClick={() => handleLinkClick("main")}
        >
          Inicio
        </a>
        <a
          href="#about"
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleLinkClick("about")}
        >
          Sobre Nosotros
        </a>
        <a
          href="#service"
          className={activeLink === "service" ? "active" : ""}
          onClick={() => handleLinkClick("service")}
        >
          Servicios
        </a>
        <a
          href="#contact"
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => handleLinkClick("contact")}
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
