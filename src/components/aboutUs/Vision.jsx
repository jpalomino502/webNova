import Image from "../../assets/aboutUs/vision/vision.webp";

export default function MisionVision() {
  return (
    <div className="white relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="relative max-w-auto lg:px-60 px-10 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl mb-8">Sueños y Propósito</h2>
            <div className="space-y-6">
              <p className="text-black">
                En <strong>WebNova</strong>, nos apasiona convertir ideas en realidades digitales impactantes. Fusionamos creatividad, tecnología y estrategia para diseñar soluciones que transformen el mundo digital y potencien negocios al siguiente nivel.
              </p>
              <p className="text-black">
                Aspiramos a ser pioneros en innovación digital, inspirando y liderando la evolución tecnológica con proyectos disruptivos. Nuestro objetivo es dejar huella en la industria con experiencias digitales únicas y revolucionarias.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <div className="aspect-square w-full max-w-md lg:max-w-lg">
              <img
                src={Image}
                alt="Misión y Visión de WebNova"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
