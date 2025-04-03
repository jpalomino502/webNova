import React from 'react';

const Info = () => {
  return (
    <div className="white relative bg-white w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-10 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full text-center">
            <h2 className="text-3xl md:text-4xl mb-8 text-black">
              Lo que hacemos
            </h2>
            <div className="space-y-6">
              <p className="text-black">
                En WebNova, cada proyecto es una oportunidad para innovar y crear soluciones digitales únicas. 
                Trabajamos con pasión y dedicación para ofrecer experiencias excepcionales que no solo cumplen, sino superan las expectativas.
              </p>        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
