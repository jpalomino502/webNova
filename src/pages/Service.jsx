import { useEffect } from 'react';
import Hero from '../components/services/Hero';
import Services from '../components/services/Services';
import Features from '../components/services/Features';
import ProcessStep from '../components/services/ProcessStep';
import Cta from '../components/services/Cta';

export default function Servicicos() {
  useEffect(() => {
    document.title = "Servicios - WebNova";
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Features />
      <ProcessStep />
      <Cta />
    </>
  );
}
