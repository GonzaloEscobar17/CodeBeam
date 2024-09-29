// ServiceCard.js
import React from "react";
import "../style/servicecard.css";

const ServiceCard = ({ image, serviceName, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={serviceName} className="service-card-image" />
      <h2 className="service-card-title">{serviceName}</h2>
      <div className="service-card-content">
        <p className="service-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
