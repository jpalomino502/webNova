import Button from "../ui/interactive-hover-button";
import Image from "../../assets/home/aboutUs/aboutUs.webp";

export default function aboutUs() {
  return (
    <div className="white relative min-h-screen bg-white overflow-hidden flex items-center">
      <div className="relative max-w-auto lg:px-60 px-10 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="aspect-square w-full max-w-md lg:max-w-lg">
              <img
                src={Image}
                alt="Servicios de WebNova"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="w-full text-left lg:text-right lg:w-1/2">
            <h2 className="text-3xl md:text-4xl mb-8">Nuestra Historia</h2>
            <div className="space-y-6">
              <p className="text-black">
                En <strong>WebNova</strong>, somos un equipo de visionarios apasionados por transformar el panorama digital. Desde nuestros inicios, nos hemos dedicado a crear soluciones innovadoras que mejoren la presencia en línea de las empresas, sin perder de vista los valores de creatividad, colaboración y calidad.
              </p>
              <Button text="Conoce a WebNova" onClick={() => window.location.href = '/sobre-nosotros'} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
