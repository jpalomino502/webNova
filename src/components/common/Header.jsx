import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/common/logo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState("black");

  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const detectTheme = () => {
      if (!headerRef.current) return;
      const headerRect = headerRef.current.getBoundingClientRect();
      let detectedTheme = "black";
      const elements = document.querySelectorAll(".white, .black");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
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
      setIsVisible(currentScrollY <= 150 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
      detectTheme();
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    detectTheme();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
      ref={headerRef}
      className={`px-5 fixed top-4 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-[200%]"
      } ${theme === "white" ? "text-black" : "text-white"}`}
    >
      <nav
        className={`max-w-md mx-auto flex items-center justify-between h-12 px-4 rounded-3xl shadow-sm backdrop-blur-lg backdrop-saturate-150 ${
          theme === "white" ? "bg-white/60" : "bg-black/60"
        }`}
      >
        <a href="/">
          <img
            src={Logo}
            alt="Logo"
            className={`h-8 ${theme === "white" ? "invert-0" : "invert"}`}
          />
        </a>
        <span className="block md:hidden ml-2 text-xl">WebNova</span>
        <div className="hidden md:flex items-center space-x-8">
          {["Servicios", "Sobre Nosotros", "Proyectos"].map((text, index) => (
            <a
              key={index}
              href={`/${text.toLowerCase().replace(/ /g, "-")}`}
              className={`relative text-sm uppercase tracking-wider transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                theme === "white" ? "text-black" : "text-white"
              }`}
            >
              {text}
            </a>
          ))}
        </div>
        <div className="md:hidden ml-auto">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 ${theme === "white" ? "text-black" : "text-white"}`}
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
            theme === "white" ? "bg-white" : "bg-black"
          } rounded-2xl transition-all duration-500 ease-in-out flex flex-col items-center ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {["Servicios", "Sobre Nosotros", "Proyectos"].map((text, index) => (
            <a
              key={index}
              href={`/${text.toLowerCase().replace(/ /g, "-")}`}
              className={`block w-full text-left px-3 py-2 text-sm uppercase tracking-wider rounded-md transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                theme === "white" ? "text-black" : "text-white"
              }`}
            >
              {text}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
