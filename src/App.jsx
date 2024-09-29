import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Main from "./components/Main.jsx";
import About from "./components/About.jsx";
import ServicioPrincipal from "./components/servicioPrincipal.jsx";
import "./style/app.css";

function App() {
  const [activeLink, setActiveLink] = useState("main");
  const [showFooter, setShowFooter] = useState(false);

  return (
    <React.StrictMode>
      <Navbar
        onShowCards={(value) => setActiveLink(value ? "service" : "")}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <div className="main-content">
        {activeLink === "main" && <Main />}
        {activeLink === "about" && <About />}
        {activeLink === "service" && <ServicioPrincipal />}
        {activeLink === "contact" && <Contact />}
      </div>
      <div className="whatsapp">
        <a
          className="whatsapp-icon"
          href="https://wa.me/573214570264?text=Me%20gustaria%20contactar%20contactar%20una%20asesoria%20para%20un%20producto..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <Footer show={showFooter} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
