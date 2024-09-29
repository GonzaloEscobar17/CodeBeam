import React from "react";
import Imagen from "../assets/imagen1.png";

function BannerService() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Tus Sueños Son Nuestros Sueños</h1>
        <p className="banner-description">
          En CodeBeam, ofrecemos soluciones integrales para fortalecer tu
          presencia digital. Nuestro servicio de Desarrollo Web crea sitios web
          y aplicaciones móviles personalizadas para una experiencia de usuario
          óptima. Con Data & Analytics, convertimos tus datos en información
          valiosa, facilitando decisiones basadas en análisis avanzados. Además,
          nuestro equipo de Ciberseguridad protege tus sistemas contra amenazas
          digitales con auditorías, análisis de vulnerabilidades y estrategias
          de defensa adaptadas a tus necesidades..
        </p>
      </div>
      <div className="banner_image">
        <img src={Imagen} alt="Banner" />
      </div>
    </div>
  );
}

export default BannerService;
