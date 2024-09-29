import React from "react";
import {
  presentationWeb,
  presentationCiber,
  presentationData,
} from "../data/presentation";

function PresentationCard() {
  const renderPresentation = (presentationArray) => {
    return presentationArray.map((item, index) => (
      <div key={index} className="presentation-card">
        <img
          src={item.image}
          alt={item.presentationName}
          className="presentation-image"
        />
        <h2 className="presentation-title">{item.presentationName}</h2>
        <p className="presentation-description">{item.description}</p>
      </div>
    ));
  };

  return (
    <div className="presentation-container">
      {renderPresentation(presentationWeb)}
      {renderPresentation(presentationCiber)}
      {renderPresentation(presentationData)}
    </div>
  );
}

export default PresentationCard;
