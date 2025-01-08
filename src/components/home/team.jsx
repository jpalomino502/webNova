import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import davidChia from "../../assets/home/team/david_chia.webp";
import mariaHerrera from "../../assets/home/team/maria_herrera.webp";
import josephPalomino from "../../assets/home/team/joseph_palomino.webp";
import leonardoWalted from "../../assets/home/team/leonardo_walted.webp";
import gabrielLozada from "../../assets/home/team/gabriel_lozada.webp";
import damianMorales from "../../assets/home/team/damian_morales.webp";
import asrleyRodriguez from "../../assets/home/team/asrley_rodriguez.webp";

const teamMembers = [
  {
    name: "David Chía",
    role: "Socio Fundador Desarrollador Web",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: davidChia,
  },
  {
    name: "María Herrera",
    role: "Desarrolladora Frontend",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: mariaHerrera,
  },
  {
    name: "Joseph Palomino",
    role: "CEO y Desarrollador Full Stack",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: josephPalomino,
  },
  {
    name: "Leonardo Walted",
    role: "Desarrollador Web",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: leonardoWalted,
  },
  {
    name: "Gabriel Lozada",
    role: "Contador Público",
    career: "Contaduría",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: gabrielLozada,
  },
  {
    name: "Damián Morales",
    role: "Especialista en Innovación",
    career: "Ingeniería Electrónica",
    university: "Universidad Industrial de Santander (UIS)",
    image: damianMorales,
  },
  {
    name: "Asrley Rodríguez",
    role: "Administrador",
    career: "Administración de Empresas Dual",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: asrleyRodriguez,
  },
];

export default function TeamCarousel() {
  return (
    <div className="bg-black min-h-screen py-16 px-4" id="team">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12">
          Nuestro Equipo
        </h2>
        <p className="mx-auto max-w-2xl text-center text-white mb-20">
          Somos un equipo apasionado y comprometido con la innovación. Trabajamos juntos para crear soluciones digitales que marquen la diferencia y siempre buscamos aprender y crecer como profesionales.
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white text-xl font-medium">{member.name}</h3>
                  <p className="text-white text-sm">{member.role}</p>
                  <p className="text-white text-xs">{member.career}</p>
                  <p className="text-white text-xs">{member.university}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


