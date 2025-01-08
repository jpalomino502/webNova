import Button from "../ui/interactive-hover-button";
import Logo from "../../assets/home/services/services.webp";
import Image from "../../assets/home/hero/texture.webp"

export default function aboutUs() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center">
        <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url(${Image})`,
        }}
        />
      <div className="relative max-w-auto lg:px-60 px-10 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <div className="aspect-square w-full max-w-md lg:max-w-lg">
              <img
                src={Logo}
                alt="Servicios de WebNova"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="w-full text-right lg:w-1/2 px-4">
            <h2 className="text-5xl mb-8">Detrás de Webnova
            </h2>
            <div className="space-y-6">
              <p className="text-black">
                En <strong>WebNova</strong>, nos especializamos en ofrecer soluciones digitales innovadoras. Desde el diseño de sitios web modernos hasta estrategias avanzadas de marketing digital, estamos aquí para ayudarte a destacar en línea.
              </p>
              <p className="text-black">
                Nuestro equipo de expertos trabaja contigo para construir experiencias únicas que impulsen tu negocio. Con WebNova, llevamos tus ideas al siguiente nivel utilizando las últimas tecnologías y tendencias del mercado.
              </p>
              <Button text="Más información" className="pl-4 pr-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
