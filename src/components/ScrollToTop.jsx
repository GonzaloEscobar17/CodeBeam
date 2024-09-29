import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Restablece el scroll al principio cuando cambia la ruta
  }, [pathname]);

  return null;
};

export default ScrollToTop;
