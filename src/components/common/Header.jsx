import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/common/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [theme, setTheme] = useState("black");

  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null); // Referencia para el header

  const inactivityTimeout = 1000;

  useEffect(() => {
    const detectTheme = () => {
      if (!headerRef.current) return;
      // Obtenemos el rectángulo del header
      const headerRect = headerRef.current.getBoundingClientRect();
      let detectedTheme = "black"; // Valor por defecto

      // Buscamos los elementos con las clases "white" y "black"
      const elements = document.querySelectorAll(".white, .black");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        // Si el elemento se intersecta con el header:
        if (rect.bottom > headerRect.top && rect.top < headerRect.bottom) {
          if (element.classList.contains("white")) {
            detectedTheme = "white";
          }
        }
      });
      setTheme(detectedTheme);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      if (currentScrollY > lastScrollY && currentScrollY > 150 && !isMenuOpen) {
        setIsVisible(false);
      } else if (currentScrollY <= 150 || currentScrollY <= lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      if (timeoutId) clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => setIsVisible(true), inactivityTimeout);
      setTimeoutId(newTimeoutId);
      detectTheme();
    };

    window.addEventListener("scroll", handleScroll);
    // Llamamos una vez para detectar el tema al montar el componente
    detectTheme();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY, isMenuOpen, timeoutId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}  // Asignamos la referencia al header
      className={`px-5 fixed top-4 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-[200%]"
      } ${theme === "white" ? "text-black" : "text-white"}`}
    >
      <nav
        className={`max-w-md mx-auto flex items-center justify-between h-12 px-4 rounded-3xl shadow-sm backdrop-blur-lg backdrop-saturate-150 ${
          theme === "white" ? "bg-white" : "bg-black/[.65]"
        }`}
      >
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            className={`h-8 ${theme === "white" ? "invert-0" : "invert"}`}
          />
        </a>
        <span className={`block md:hidden ml-2 text-xl ${theme === "white" ? "text-black" : "text-white"}`}>
          WebNova
        </span>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/servicios"
            className={`text-sm uppercase tracking-wider hover:text-gray-300 transition-colors ${
              theme === "white" ? "text-black" : "text-white"
            }`}
          >
            Servicios
          </a>
          <a
            href="/sobre-nosotros"
            className={`text-sm uppercase tracking-wider hover:text-gray-300 transition-colors ${
              theme === "white" ? "text-black" : "text-white"
            }`}
          >
            Sobre Nosotros
          </a>
          <a
            href="/proyectos"
            className={`text-sm uppercase tracking-wider hover:text-gray-300 transition-colors ${
              theme === "white" ? "text-black" : "text-white"
            }`}
          >
            Proyectos
          </a>
        </div>
        <div className="md:hidden ml-auto">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${
              theme === "white" ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
            } p-2`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          ref={menuRef}
          className={`absolute top-full left-0 right-0 mt-2 md:hidden backdrop-blur-lg backdrop-saturate-150 ${
            theme === "white" ? "bg-white" : "bg-black/[.65]"
          } rounded-2xl transition-all duration-500 ease-in-out ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/servicios"
              className={`block px-3 py-2 text-sm uppercase tracking-wider hover:text-gray-300 rounded-md ${
                theme === "white" ? "text-black" : "text-white"
              }`}
            >
              Servicios
            </a>
            <a
              href="/sobre-nosotros"
              className={`block px-3 py-2 text-sm uppercase tracking-wider hover:text-gray-300 rounded-md ${
                theme === "white" ? "text-black" : "text-white"
              }`}
            >
              Sobre Nosotros
            </a>
            <a
              href="/proyectos"
              className={`block px-3 py-2 text-sm uppercase tracking-wider hover:text-gray-300 rounded-md ${
                theme === "white" ? "text-black" : "text-white"
              }`}
            >
              Proyectos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
