import React from "react";
import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif3 from "../assets/gif3.gif";

function proyectoSection() {
  return (
    <>
      <div className="segundocajon">
        <p className="parrafocajondos">
          En CodeBeam, fundada en 2024, nos dedicamos a ofrecer soluciones
          personalizadas que se ajustan a tus necesidades específicas. Nuestro
          lema, "tus sueños son nuestros sueños", refleja nuestro compromiso
          inquebrantable con cada uno de nuestros clientes. Trabajamos con
          pasión y dedicación para transformar tus ideas en realidades
          tangibles. Entendemos que cada proyecto es único y aplicamos un
          enfoque innovador y flexible. Desde la concepción hasta la ejecución,
          nuestro equipo de expertos se involucra en cada etapa del proceso,
          asegurando calidad y eficiencia. Utilizamos tecnología de vanguardia y
          metodologías ágiles para superar tus expectativas.
        </p>
        <img src={gif3} alt="imagen" className="imagencajondos" />
      </div>
      <div className="primercajon">
        <img src={gif1} alt="imagen" className="imagencajon" />
        <p className="parrafocajon">
          En nuestra startup, entendemos que cada sueño es único y representa
          una visión especial para el futuro. Nos dedicamos a convertir esas
          ideas en realidades tangibles, poniendo nuestro equipo de
          desarrolladores altamente calificados a tu disposición. No solo
          trabajamos en tus proyectos, sino que los hacemos nuestros,
          compartiendo tu pasión y compromiso. Creemos que el éxito se logra en
          equipo, y por eso tus sueños son también nuestros sueños. Juntos,
          transformamos tus aspiraciones en soluciones innovadoras que marcan la
          diferencia.
        </p>
      </div>
      <div className="segundocajon">
        <p className="parrafocajondos">
          Somos una startup conformada por desarrolladores altamente
          calificados, comprometidos en ofrecer soluciones tecnológicas
          innovadoras que se adaptan a las necesidades de nuestros clientes.
          Trabajamos con pasión y excelencia para transformar ideas en productos
          digitales de alta calidad, asegurándonos de cumplir con los más altos
          estándares y superar las expectativas en cada proyecto.
        </p>
        <img src={gif2} alt="imagen" className="imagencajondos" />
      </div>
    </>
  );
}

export default proyectoSection;
