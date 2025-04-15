import { useEffect } from 'react';
import Hero from '../components/aboutUs/Hero';
import History from '../components/aboutUs/History';
import Vision from '../components/aboutUs/Vision';
import Team from '../components/aboutUs/team';

export default function Home() {
  useEffect(() => {
    document.title = "Sobre Nosotros - WebNova";
  }, []);

  return (
    <>
      <Hero />
      <History />
      <Vision />
      <Team />
    </>
  );
}