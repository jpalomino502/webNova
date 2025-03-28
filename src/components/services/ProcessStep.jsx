import React from 'react';

const OurProcess = () => {
  return (
    <div className="black bg-black min-h-screen">
      <div className="relative max-w-auto lg:px-60 py-20 px-10">
        <div className="mb-20 lg:text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-white  tracking-tight">
            Nuestro Proceso
          </h2>
          <p className="mx-auto max-w-2xl text-white text-lg">
            Transformamos ideas en realidades digitales, creando soluciones innovadoras que impulsan el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 to-transparent hidden md:block" />

          <div className="group relative hover:translate-y-[-5px] transition-all duration-300 ease-out">
            <span className="absolute -left-4 text-purple-500 text-8xl  opacity-20 group-hover:opacity-30 transition-opacity">
              01
            </span>
            <div className="pl-8 pt-6">
              <h3 className="text-white text-2xl mb-4 ">Análisis</h3>
              <p className="text-white">
                Definición de requerimientos técnicos y funcionales. 
                Elaboración del cronograma estratégico.
              </p>
            </div>
          </div>

          <div className="group relative hover:translate-y-[-5px] transition-all duration-300 ease-out">
            <span className="absolute -left-4 text-purple-500 text-8xl  opacity-20 group-hover:opacity-30 transition-opacity">
              02
            </span>
            <div className="pl-8 pt-6">
              <h3 className="text-white text-2xl mb-4 ">Diseño</h3>
              <p className="text-white">
                Creación de wireframes y mockups inspiradores.
                Validación de experiencia de usuario.
              </p>
            </div>
          </div>

          <div className="group relative hover:translate-y-[-5px] transition-all duration-300 ease-out">
            <span className="absolute -left-4 text-purple-500 text-8xl  opacity-20 group-hover:opacity-30 transition-opacity">
              03
            </span>
            <div className="pl-8 pt-6">
              <h3 className="text-white text-2xl mb-4 ">Desarrollo</h3>
              <p className="text-white">
                Implementación de interfaces modernas.
                Integración de tecnologías avanzadas.
              </p>
            </div>
          </div>

          <div className="group relative hover:translate-y-[-5px] transition-all duration-300 ease-out">
            <span className="absolute -left-4 text-purple-500 text-8xl  opacity-20 group-hover:opacity-30 transition-opacity">
              04
            </span>
            <div className="pl-8 pt-6">
              <h3 className="text-white text-2xl mb-4 ">Lanzamiento</h3>
              <p className="text-white">
                Optimización de rendimiento.
                Despliegue y monitorización continua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;