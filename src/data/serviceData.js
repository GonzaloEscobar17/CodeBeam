// serviceData.js
import desarolloImg from "../assets/desarollo.jpg";
import seguridadImg from "../assets/seguridad.jpg";
import datosImg from "../assets/datos.jpg";

const serviceData = [
  {
    image: desarolloImg,
    serviceName: "Desarollo Web",
    description: `Ofrecemos soluciones completas de desarrollo web y aplicaciones móviles diseñadas
                    para impulsar tu negocio. Nuestro servicio abarca desde el diseño y la creación de
                    páginas web responsivas hasta el desarrollo de aplicaciones móviles personalizadas 
                    para iOS y Android. Utilizamos las últimas tecnologías y mejores prácticas para 
                    asegurar un rendimiento óptimo y una experiencia de usuario excepcional.`,
  },
  {
    image: seguridadImg,
    serviceName: "Ciberseguridad",
    description: `Protege tu negocio de amenazas digitales con nuestros servicios de ciberseguridad
                    avanzados. Ofrecemos soluciones completas que incluyen auditorías de seguridad, 
                    análisis de vulnerabilidades, pruebas de penetración y desarrollo de estrategias 
                    de defensa personalizadas. Nuestro enfoque proactivo asegura que tus sistemas, redes 
                    y datos estén protegidos contra ataques cibernéticos y brechas de seguridad.`,
  },
  {
    image: datosImg,
    serviceName: "Data & Analytics",
    description: `Transforma tus datos en estrategias inteligentes con nuestros servicios de Data & 
                    Analytics. Ofrecemos análisis de datos avanzados, visualización de información y 
                    desarrollo de modelos predictivos para ayudarte a tomar decisiones basadas en datos 
                    precisos y relevantes. Desde la recopilación y limpieza de datos hasta la generación 
                    de informes detallados y dashboards interactivos, nuestro enfoque integral asegura que 
                    obtengas insights valiosos para optimizar tu rendimiento.`,
  },
];

export default serviceData;
