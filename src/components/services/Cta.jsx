import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/interactive-hover-button";

const Cta = () => {
  const t = {
    heading: "Descubre nuestros servicios para impulsar tu negocio",
    paragraph:
      "En WebNova ofrecemos soluciones tecnológicas a medida para llevar tu empresa al siguiente nivel.",
    contact:
      '¿Tienes preguntas? Escríbenos a <a href="mailto:webnova@webnova.com" class="text-blue-600 hover:underline">webnova@webnova.com</a>',
  };

  return (
    <section className="white bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
      <div className="relative max-w-auto lg:text-center lg:px-60 py-20 px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl pb-5 bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500"
          >
            {t.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-black lg:text-center mb-12"
            dangerouslySetInnerHTML={{ __html: t.paragraph }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex lg:justify-center"
          >
            <Button
              text="Conoce a WebNova"
              onClick={() =>
                window.location.href = "https://wa.me/message/4VLAEDVS3JPNN1"
              }
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: t.contact }}
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
