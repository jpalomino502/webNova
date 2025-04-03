import { useState, useLayoutEffect } from "react";
import Button from "../ui/interactive-hover-button-black";
import chefSyncImage from "../../assets/home/projets/chefsync.png";
import ravenWearImage from "../../assets/home/projets/ravenwear.png";
import comingSoonImage from "../../assets/home/projets/comingSoon.png";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "ChefSync",
      description:
        "Optimiza la gestión de tu restaurante con funcionalidades avanzadas como control de inventario y reportes en tiempo real.",
      image: chefSyncImage,
    },
    {
      id: 2,
      name: "Próximamente",
      description:
        "Estamos trabajando en nuevos proyectos innovadores. ¡Espéralos pronto!",
      image: comingSoonImage,
    },
    {
      id: 3,
      name: "RavenWear",
      description:
        "Tienda de ropa urbana con estilo único y moderno para destacar en cualquier ocasión.",
      image: ravenWearImage,
    },
  ];

  const [activeProject, setActiveProject] = useState(1);
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
    <section className="black relative min-h-screen bg-black w-full overflow-hidden pb-16">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="relative max-w-auto lg:px-60 px-10 py-20">
        <div className="mb-20 lg:text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-white">Nuestros Proyectos</h2>
          <p className="mx-auto max-w-2xl text-white">
            Cada proyecto que emprendemos es una oportunidad para innovar, crear y aportar valor.
          </p>
        </div>

        <div className="relative mb-24 flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative h-[500px] transition-all duration-300 ease-in-out
                ${isMobile || activeProject === index ? "z-20 w-full md:w-[550px] opacity-100" : "w-full md:w-[200px] opacity-50"}
                ${index === 1 && activeProject !== 0 && activeProject !== 2 ? "z-20" : "z-10"}`}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(activeProject)}
            >
              <div className="relative h-full w-full overflow-hidden transition-all duration-300 ease-in-out rounded-3xl">
                <img src={project.image} alt={project.name} className="rounded-3xl w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent rounded-b-3xl"></div>
              </div>

              {/* Condición para mostrar el texto solo cuando el proyecto esté activo */}
              {(isMobile || activeProject === index) && (
                <div className="absolute bottom-4 left-4 right-4 text-white transition-opacity duration-200">
                  <h3 className="text-xl">{project.name}</h3>
                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Button text="Más proyectos" className="pl-4 pr-4" onClick={() => window.location.href = '/proyectos'} />
        </div>
      </div>
    </section>
  );
}
