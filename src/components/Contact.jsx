import React, { useState } from "react";
import Gif from "../assets/formulariogif.gif";
import "../style/contact.css";

function Contact() {
  const [showMensaje, setShowMensaje] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showImage, setShowImage] = useState(true);

  // Estado para los valores del formulario
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (termsAccepted && privacyAccepted) {
      try {
        // Aquí enviamos los datos al backend
        const response = await fetch("http://localhost:3001/api/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formValues.name,
            email: formValues.email,
            description: formValues.description,
            termsAccepted,
            privacyAccepted,
          }),
        });

        if (response.ok) {
          setShowMensaje(true);
          setShowImage(false);

          // Reinicia los valores del formulario
          setFormValues({
            name: "",
            email: "",
            description: "",
          });
          setTermsAccepted(false);
          setPrivacyAccepted(false);
        } else {
          alert("Error al enviar el formulario.");
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Error al enviar el formulario.");
      }
    } else {
      alert("Debes aceptar los términos y la política de privacidad.");
    }
  };

  const handleCloseMensaje = () => {
    setShowMensaje(false);
    setShowImage(true);
  };

  // Maneja el cambio de los valores del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div
      className={`contenedor-principal ${showMensaje ? "mensaje-open" : ""}`}
    >
      <div className="contenedor-imagen">
        {showImage && <img src={Gif} alt="Imagen principal" />}
        <div className="imagen-placeholder"></div>
        <p className="texto-imagen">
          Estás en unos pocos minutos para impulsar tu negocio
        </p>
        <p className="texto-imagen">Tus Sueños Cumplidos Con CodeBeam</p>
        <div className="redes-sociales">
          <a
            href="mailto:codebeam2024@outlook.com"
            className="boton-social correo"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://twitter.com"
            className="boton-social twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="contenedor-formulario">
        <div className="encabezado-formulario">
          <h2 className="encabezado-texto">Ponte en contacto con nosotros</h2>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="campo-formulario">
            <input
              type="text"
              name="name"
              value={formValues.name}
              placeholder="Nombre"
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo-formulario">
            <input
              type="email"
              name="email"
              value={formValues.email}
              placeholder="Correo"
              onChange={handleChange}
              required
            />
          </div>
          <div className="campo-formulario">
            <textarea
              name="description"
              value={formValues.description}
              placeholder="Descripción del producto"
              rows="4"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="campo-checkbox">
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              Acepto los términos y condiciones
            </label>
          </div>
          <div className="campo-checkbox">
            <label>
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
              />
              Acepto la política de privacidad
            </label>
          </div>

          <button type="submit" className="boton-submit">
            Enviar
          </button>
        </form>
      </div>
      {/* Mensaje */}
      {showMensaje && (
        <div className="mensaje">
          <div className="mensaje-content">
            <span className="close" onClick={handleCloseMensaje}>
              &times;
            </span>
            <p>
              Recibimos tu solicitud, pronto nos pondremos en contacto contigo.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
