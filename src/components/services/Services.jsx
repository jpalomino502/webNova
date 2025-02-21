import React from 'react';

const Services = () => {
  return (
    <div className="black relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="relative max-w-auto px-10 lg:px-60 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12">
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="aspect-square w-full max-w-md lg:max-w-lg relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rotate-6 bg-pink-500 opacity-30 rounded-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 -rotate-6 bg-blue-500 opacity-30 rounded-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rotate-12 bg-purple-500 opacity-30 rounded-3xl"></div>
            </div>
          </div>

          <div className="w-full text-left lg:text-right lg:w-1/2">
            <h2 className="text-5xl mb-8 text-white">Nuestros Servicios</h2>

            <div className="space-y-6">
              <p className="text-white">
                En WebNova no solo desarrollamos soluciones; las creamos con precisión y pasión. Utilizamos tecnología de vanguardia para transformar cada desafío digital en una experiencia única.
              </p>
              <p className="text-white">
                Desde sitios web responsivos hasta aplicaciones interactivas, fusionamos innovación y eficiencia para impulsar tu negocio al futuro. ¡Descubre cómo podemos revolucionar tu presencia en línea!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Services;