import React from "react";
import serviceData from "../data/serviceData.js";
import ServiceCard from "./ServiceCard";
import BannerService from "./BannerService.jsx";
import Carrusel from "./Carrusel.jsx";

function servicioPrincipal() {
  return (
    <>
      <BannerService />
      <div className="service-card-container">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            serviceName={service.serviceName}
            description={service.description}
          />
        ))}
      </div>
      <Carrusel />
    </>
  );
}

export default servicioPrincipal;
