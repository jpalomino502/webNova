import { useState, useLayoutEffect } from 'react';
import Button from "../ui/interactive-hover-button-black";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Project One",
      type: "Design",
      year: "2022",
      description: "Innovation in design patterns",
      image: "http://clapat.ro/themes/nanotech/images/02hero.jpg",
    },
    {
      id: 2,
      name: "Willo",
      type: "Branding",
      year: "2024",
      description: "Modern brand identity design",
      image: "http://clapat.ro/themes/nanotech/images/02hero.jpg",
    },
    {
      id: 3,
      name: "Project Three",
      type: "Development",
      year: "2023",
      description: "Creative development solutions",
      image: "http://clapat.ro/themes/nanotech/images/02hero.jpg",
    },
  ];

  const [activeProject, setActiveProject] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const updateScreenSize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useLayoutEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <section className="relative min-h-screen bg-black w-full overflow-hidden py-20">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-20 text-center">
          <h2 className="text-5xl mb-8 text-white">Innovaciones</h2>
          <p className="mx-auto max-w-2xl text-white">
            Phasellus tempus neque sagittis, consequat dui vitae, mattis ligula. Nam consequat
            luctus libero nec scelerisque. Aliquam odio magna, fermentum quis auctor ut,
            euismod quis tellus.
          </p>
        </div>

        <div className="relative mb-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group rounded-lg relative h-[400px] md:h-[600px] transition-all duration-700 ease-in-out
                ${activeProject === index 
                  ? 'z-20 w-full md:w-[600px]' 
                  : 'w-full md:w-[200px]'
                }
                ${index === 1 && activeProject !== 0 && activeProject !== 2 
                  ? 'z-20' 
                  : 'z-10'}`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="relative rounded-lg h-full w-full overflow-hidden transition-all duration-700 ease-in-out bg-black">
                {(activeProject === index || isMobile) && (
                  <div className="absolute rounded-lg left-4 top-4 z-10 bg-white/50 px-2 py-1 text-sm text-black">
                    {project.year}
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white rounded-b-lg">
                {(activeProject === index || isMobile) && (
                  <>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-sm">{project.type}</p>
                    <p className="mt-2 text-sm">{project.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20 text-center">
            <Button text="Ver más" className="pl-4 pr-4" />
        </div>

        {/* <div className="rounded-lg bg-primary/10 p-8 text-center bg-white text-black">
          <h3 className="mb-4 text-2xl font-bold">¿Tienes una idea creativa?</h3>
          <p className="mb-6 text-black">
            Estamos aquí para ayudarte a convertir tus ideas en realidad. Contáctanos ahora y comencemos a trabajar juntos.
          </p>
          <button size="lg" className="bg-black text-white hover:bg-white hover:text-black border-2 border-black">
            Contactar ahora
          </button>
        </div> */}
      </div>
    </section>
  );
}
