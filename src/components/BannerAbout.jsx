import React from "react";
import Imagen2 from "../assets/imagen2.png";
function BannerAbout() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">CodeBeam</h1>
        <p className="banner-description">
          Ofrecemos soluciones tecnológicas avanzadas, optimización de páginas
          web, desarrollo de aplicaciones y mucho más. ¡Impulsa tu negocio con
          las mejores herramientas digitales y no te quedes atrás en la
          transformación digital!
        </p>
      </div>
      <div className="banner_image">
        <img src={Imagen2} alt="Banner" />
      </div>
    </div>
  );
}

export default BannerAbout;
