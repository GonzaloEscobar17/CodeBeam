import React from "react";
import Bannergif from "../assets/banner.gif";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">
          Página web y servicios
          <br />
          digitales
        </h1>
        <p className="banner-description">
          Ofrecemos soluciones tecnológicas avanzadas, optimización de páginas
          web, desarrollo de aplicaciones y mucho más. ¡Impulsa tu negocio con
          las mejores herramientas digitales y no te quedes atrás en la
          transformación digital!
        </p>
      </div>
      <div className="banner-image">
        <img src={Bannergif} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
