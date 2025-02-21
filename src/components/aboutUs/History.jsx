import { useState, useLayoutEffect } from "react";
import Image from '../../assets/aboutUs/history/history.webp'

export default function HistorySection() {
  const [isMobile, setIsMobile] = useState(false);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useLayoutEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <section className="black relative bg-black w-full overflow-hidden py-20">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="relative max-w-auto lg:px-60 px-10">
        <div className="lg:text-center">
          <h2 className="text-5xl mb-8 text-white">Nuestra Historia</h2>
          <p className="mx-auto max-w-2xl text-white">
            WebNova nació en Bucaramanga, Colombia, en 2024, conformado por un grupo de estudiantes apasionados por la tecnología, la innovación y la creatividad. Con el deseo de transformar ideas en realidades digitales, nos hemos propuesto marcar la diferencia en el mundo digital.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Image} alt="Nuestra historia" className="max-w-7xl rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
