import React from 'react';

const Services = () => {
  return (
    <div className="black relative bg-black w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-10 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-white">
              Nuestros Servicios
            </h2>
            <div className="space-y-6">
              <p className="text-white">
                En WebNova no solo desarrollamos soluciones; las creamos con precisión y pasión.
                Utilizamos tecnología de vanguardia para transformar cada desafío digital en una experiencia única.
              </p>
              <p className="text-white">
                Desde sitios web responsivos hasta aplicaciones interactivas, fusionamos innovación y eficiencia
                para impulsar tu negocio al futuro. ¡Descubre cómo podemos revolucionar tu presencia en línea!
              </p>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <img
              src="/ruta/de/tu-imagen.jpg"
              alt="Descripción de la imagen"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
