import background from '../../assets/common/background/geometry.webp';
import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen bg-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      {/* Content section */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-6 lg:px-20 pb-6 md:pb-6 lg:pb-12 text-black">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between w-full gap-6">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl font-semibold">
            Soluciones a<br />Tu Alcance
          </h1>

          {/* Description */}
          <p className="text-black text-left md:text-left lg:text-right text-base sm:text-lg md:max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget efficitur felis. Maecenas rhoncus, mi nec suscipit mollis,
            lacus velit aliquet lacus, et molestie turpis ligula ut neque.
          </p>
        </div>
      </div>
    </section>
  );
}
