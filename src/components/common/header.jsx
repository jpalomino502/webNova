import React, { useState, useEffect } from 'react';
import Logo from '../../assets/common/logo.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150 && !isMenuOpen) {
        setIsVisible(false); 
      } else if (currentScrollY < lastScrollY || currentScrollY <= 150) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  return (
    <header
      className={`px-5 fixed top-4 left-0 right-0 z-50 transition-all duration-1000 ease-in-out ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-[200%]'
      }`}
    >
      <nav
        className="max-w-xl mx-auto flex items-center justify-between h-12 px-4
          rounded-3xl shadow-sm backdrop-blur-lg backdrop-saturate-150 bg-black/[.65]"
      >
        <img src={Logo} alt="Logo" className="h-8 invert" />
        <span className="block md:hidden ml-2 text-white text-xl">WebNova</span>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/servicios" className="text-sm text-white uppercase tracking-wider hover:text-gray-300 transition-colors">
            Servicios
          </a>
          <a href="/sobre-nosotros" className="text-sm text-white uppercase tracking-wider hover:text-gray-300 transition-colors">
            Sobre Nosotros
          </a>
          <a href="/proyectos" className="text-sm text-white uppercase tracking-wider hover:text-gray-300 transition-colors">
            Proyectos
          </a>
          <a href="/contacto" className="text-sm text-white uppercase tracking-wider hover:text-gray-300 transition-colors">
            Contacto
          </a>
        </div>

        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 p-2"
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
          className={`absolute top-full left-0 right-0 mt-2 md:hidden backdrop-blur-lg backdrop-saturate-150 bg-black/[.65] rounded-lg transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/servicios"
              className="block px-3 py-2 text-sm text-white uppercase tracking-wider hover:text-gray-300 rounded-md"
            >
              Servicios
            </a>
            <a
              href="/sobre-nosotros"
              className="block px-3 py-2 text-sm text-white uppercase tracking-wider hover:text-gray-300 rounded-md"
            >
              Sobre Nosotros
            </a>
            <a
              href="/proyectos"
              className="block px-3 py-2 text-sm text-white uppercase tracking-wider hover:text-gray-300 rounded-md"
            >
              Proyectos
            </a>
            <a
              href="/contacto"
              className="block px-3 py-2 text-sm text-white uppercase tracking-wider hover:text-gray-300 rounded-md"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
