import { useEffect } from 'react';
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projets from "../components/home/Projets";
import AboutUs from "../components/home/AboutUs";
import Faqs from "../components/home/Faqs";

export default function Home() {
  useEffect(() => {
    document.title = "Inicio - WebNova";
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Projets />
      <AboutUs />
      {/*<Faqs />*/}
    </>
  );
}
