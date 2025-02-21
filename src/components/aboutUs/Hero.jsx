import React from "react";

const Hero = () => {

  return (
    <section className="white h-screen py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 md:px-6 lg:px-28 pb-6 md:pb-6 lg:pb-12 text-black">
        <div className="flex flex-col justify-between w-full gap-6 text-center ">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-black tracking-tighter">
          Descubre la esencia de<br />
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text inline-block">
              WebNova
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
