import { useEffect } from 'react';
import Hero from "../components/projects/Hero"
import Info from "../components/projects/Info"
import Projects from "../components/projects/Projects"
import Cta from "../components/projects/Cta"

const projects = () => {
  useEffect(() => {
    document.title = "Proyectos - WebNova";
  }, []);

  return (
    <>
      <Hero />
      <Info />
      <Projects />
      <Cta />
    </>
  );
}

export default projects;