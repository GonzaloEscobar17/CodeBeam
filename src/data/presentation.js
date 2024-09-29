import webStaticImage from "../assets/webestatica.jpeg";
import webDynamicImage from "../assets/webdinamica.jpeg";
import ciberSecurityImage from "../assets/ciberseguridad.jpg";
import ethicalHackingImage from "../assets/haking.jpg";
import dbImplementationImage from "../assets/basedatos.jpg";
import dataAnalysisImage from "../assets/ia.jpeg";

const presentationWeb = [
  {
    presentationName: "Páginas Web Estáticas",
    image: webStaticImage,
    description: `Transforma tu presencia en línea con páginas web estáticas diseñadas para ofrecer un 
                  rendimiento excepcional. Ofrecemos la creación de sitios web que combinan 
                  eficiencia y estética, ideales para empresas y proyectos que buscan una solución sólida y 
                  sin complicaciones con tecnologías avanzadas para crear sitios web que se destacan por su 
                  rendimiento y fiabilidad.`,
  },
  {
    presentationName: "Páginas Web Dinámicas y Responsivas",
    image: webDynamicImage,
    description: `Optimiza tu presencia en línea con soluciones avanzadas en desarrollo web. Ofrezco el diseño
                  y desarrollo de páginas web dinámicas y responsivas que garantizan una experiencia de usuario 
                  interactiva y adaptable en todos los dispositivos. Utilizamos tecnologías avanzadas para crear 
                  sitios web que no solo se adaptan a diferentes dispositivos, sino que también ofrecen funcionalidades 
                  interactivas y una gestión eficiente de contenido.`,
  },
];

const presentationCiber = [
  {
    presentationName: "Ciberseguridad",
    image: ciberSecurityImage,
    description: `Protege tu negocio con nuestras soluciones avanzadas en ciberseguridad. Ofrecemos servicios de 
                  seguridad informática para prevenir, detectar y responder a amenazas cibernéticas. Nuestro enfoque 
                  incluye la implementación de medidas de seguridad robustas, auditorías de seguridad, y capacitación para 
                  tu equipo con el fin de asegurar la integridad y confidencialidad de tu información.`,
  },
  {
    presentationName: "Ciberseguridad",
    image: ethicalHackingImage,
    description: `Realiza pruebas de seguridad con nuestros servicios de hacking ético. Evaluamos la seguridad de tus 
                  sistemas y redes mediante técnicas de hacking controladas para identificar vulnerabilidades antes de que 
                  puedan ser explotadas por atacantes maliciosos. Nuestro objetivo es fortalecer la seguridad de tu infraestructura 
                  y proteger tus activos digitales.`,
  },
];

const presentationData = [
  {
    presentationName: "Implementación de Bases de Datos",
    image: dbImplementationImage,
    description: `Optimiza y asegura tus datos con nuestras soluciones avanzadas de bases de datos. Ofrecemos servicios
                  de diseño, implementación y gestión de bases de datos eficientes y seguras. Nuestro enfoque incluye la
                  configuración de bases de datos personalizadas, optimización del rendimiento, respaldo y recuperación 
                  de datos, así como auditorías de seguridad para garantizar la integridad y disponibilidad de la información 
                  clave de tu negocio.`,
  },
  {
    presentationName: "Análisis de Datos con Machine Learning e IA",
    image: dataAnalysisImage,
    description: `Impulsa la innovación en tu negocio con el análisis avanzado de datos utilizando Machine Learning e Inteligencia Artificial.
                  Nuestros expertos aplican algoritmos de aprendizaje automático para descubrir patrones ocultos, realizar predicciones precisas 
                  y optimizar la toma de decisiones. Con nuestras soluciones personalizadas, podrás transformar grandes volúmenes de datos en 
                  información accionable, mejorando la eficiencia y obteniendo una ventaja competitiva en el mercado.`,
  },
];

export { presentationData, presentationCiber, presentationWeb };
