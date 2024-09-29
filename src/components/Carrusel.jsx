import React, { useState, useEffect, useRef } from "react";
import JavaScript from "../assets/javascript.png";
import Python from "../assets/python.png";
import Reactt from "../assets/react.png";
import MongoDb from "../assets/mongodb.png";
import Mysql from "../assets/mysql.png";
import Node from "../assets/node.png";
import Kali from "../assets/kali.png";
import Oracle from "../assets/oracle.png";

import "../style/carrusel.css";

const Carrusel = () => {
  const [indiceActual, setIndiceActual] = useState(0);
  const premios = [
    { imagen: JavaScript },
    { imagen: Python },
    { imagen: Kali },
    { imagen: Reactt },
    { imagen: Node },
    { imagen: Mysql },
    { imagen: MongoDb },
    { imagen: Oracle },
  ];

  const carruselRef = useRef(null);
  const intervaloRef = useRef(null);

  useEffect(() => {
    const avanzarCarrusel = () => {
      setIndiceActual((prevIndex) => (prevIndex + 1) % premios.length);
    };

    intervaloRef.current = setInterval(avanzarCarrusel, 3000);
    return () => clearInterval(intervaloRef.current);
  }, [premios.length]);

  useEffect(() => {
    if (carruselRef.current) {
      const anchoItem = 120; // Ajusta el ancho de cada elemento, incluyendo márgenes
      const desplazamiento = -indiceActual * anchoItem;
      carruselRef.current.style.transform = `translateX(${desplazamiento}px)`;
    }
  }, [indiceActual]);

  return (
    <div className="contenedor-carrusel">
      <h2 className="titulo-carrusel">Software Que Utilizamos</h2>
      <div className="carrusel-wrapper">
        <div className="grid-premios" ref={carruselRef}>
          {premios.concat(premios).map((premio, index) => (
            <div
              key={index}
              className={`premio ${index === indiceActual ? "activo" : ""}`}
            >
              <img src={premio.imagen} alt={`Premio ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="navegacion">
        {premios.map((_, index) => (
          <span
            key={index}
            className={`punto ${index === indiceActual ? "activo" : ""}`}
            onClick={() => setIndiceActual(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
