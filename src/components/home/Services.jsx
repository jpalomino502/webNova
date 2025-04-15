import Button from "../ui/interactive-hover-button";
import Image from "../../assets/home/services/services.webp";

export default function Services() {
  return (
    <div className="white relative min-h-screen bg-white overflow-hidden flex items-center">
      <div className="relative max-w-auto lg:px-60 px-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl mb-8">Servicios de WebNova</h2>
            <div className="space-y-6">
              <p className="text-black">
                En <strong>WebNova</strong>, nos especializamos en ofrecer soluciones digitales innovadoras. Desde el diseño de sitios web modernos hasta estrategias avanzadas de marketing digital, estamos aquí para ayudarte a destacar en línea.
              </p>
              <p className="text-black">
                Nuestro equipo de expertos trabaja contigo para construir experiencias únicas que impulsen tu negocio. Con WebNova, llevamos tus ideas al siguiente nivel utilizando las últimas tecnologías y tendencias del mercado.
              </p>
              <Button text="Más información"  onClick={() => window.location.href = '/servicios'} className="pl-4 pr-4" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="aspect-square w-full max-w-md lg:max-w-lg">
              <img
                src={Image}
                alt="Servicios de WebNova"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
