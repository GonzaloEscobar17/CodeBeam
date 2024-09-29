import React from "react";
import Logo from "../assets/logo.png";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footerpartone">
          <img
            className="logoPrincipalfooter"
            src={Logo}
            alt="Logo Principal"
          />
          <h1 className="titulefooterpart">CodeBeam</h1>
          <p>
            ¡Digitalizamos tu negocio!
            <br />
            Páginas web, posicionamiento SEO, Marketing digital, análisis de
            datos y machine learning para pequeñas y medianas empresas
          </p>
        </div>
        <div className="footerparttwo">
          <h1 className="titulefooterpart">Contacto</h1>
          <div className="footer-link">
            <a
              href="mailto:codebeam2024@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              codebeam2024@outlook.com
            </a>
            <a href="tel:+57 3214570264">+57 3214570264</a>
          </div>
          <p>© 2024 Sitio Web. Todos los derechos reservados.</p>
        </div>
        <div className="footer-social-links">
          <ul>
            <li>
              <a href="#about" rel="noopener noreferrer">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#service" rel="noopener noreferrer">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" rel="noopener noreferrer">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
