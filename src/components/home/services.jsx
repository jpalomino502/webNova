import Logo from "../../assets/home/services/services.webp";

export default function Services() {
    return (
      <div className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://tailwindui.com/plus/img/beams-home@95.jpg")'
          }}
        />
  
        {/* Content Container */}
        <div className="relative max-w-auto lg:px-60 px-10 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 px-4">
              <h1 className="text-5xl mb-8">Servicios de WebNova</h1>
              <div className="space-y-6">
                <p className="text-black">
                  En <strong>WebNova</strong>, nos especializamos en ofrecer soluciones digitales innovadoras. Desde el diseño de sitios web modernos hasta estrategias avanzadas de marketing digital, estamos aquí para ayudarte a destacar en línea.
                </p>
                <p className="text-black">
                  Nuestro equipo de expertos trabaja contigo para construir experiencias únicas que impulsen tu negocio. Con WebNova, llevamos tus ideas al siguiente nivel utilizando las últimas tecnologías y tendencias del mercado.
                </p>
                <button className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                  Más información
                </button>
              </div>
            </div>
  
            {/* Right Column - Image */}
            <div className="w-full lg:w-1/2 flex justify-center px-4">
              <div className="aspect-square w-full max-w-md lg:max-w-lg">
                <img 
                  src={Logo} 
                  alt="WebNova Services" 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
