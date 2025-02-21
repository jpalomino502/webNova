import React from 'react';

const Features = () => {
  return (
    <div className="white bg-white min-h-screen py-20">
      <div className="relative max-w-auto lg:px-60 px-10">
      <div className="mb-10 lg:text-center">
        <h2 className="text-5xl mb-8 text-black">Lo que hacemos</h2>
        <p className="mx-auto max-w-2xl text-black">
        Transformamos ideas en realidades digitales, creando soluciones innovadoras que impulsan el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2">
          <div className="md:col-span-2 md:row-span-1">
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-[4/3] md:aspect-[16/6]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl text-white font-light">Innovación Digital</h3>
                  <div className="flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-white/30"></div>
                    ))}
                  </div>
                </div>
                <p className="text-lg text-white/80 font-light max-w-xl">
                  Transformamos ideas en realidades digitales, creando soluciones que definen el futuro de tu negocio.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-start-3 md:row-span-2 flex">
            <div className="relative overflow-hidden rounded-2xl bg-black aspect-[4/3] md:aspect-auto w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-purple-500/20 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl text-white font-light">Apps Móviles</h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm"></div>
                </div>
                <p className="text-lg text-white/80 font-light">
                  Soluciones móviles innovadoras que llevan tu negocio al siguiente nivel.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-start-1 md:row-start-2 pt-3 md:pt-0">
            <div className="group relative overflow-hidden rounded-2xl bg-black aspect-[4/3] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-red-500/20"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-light">Desarrollo Web</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
                <p className="text-lg font-light opacity-80">
                  Creamos experiencias digitales únicas y memorables que conectan con tus usuarios.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-start-2 md:row-start-2 pt-3 md:pt-0">
            <div className="group relative overflow-hidden rounded-2xl bg-black aspect-[4/3] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-blue-500/20"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-light">Diseño UI/UX</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  </div>
                </div>
                <p className="text-lg font-light opacity-80">
                  Interfaces intuitivas que transforman la manera de interactuar con tu marca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
