import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/interactive-hover-button";

const Cta = () => {
  const t = {
    heading: "Impulsa tu negocio con WebNova",
    paragraph:
      "En WebNova ofrecemos soluciones tecnológicas a medida para llevar tu empresa al siguiente nivel.",
    contact:
    '¿Tienes preguntas? Escríbenos a <a href="mailto:webnova@webnova.com" class="text-pink-600 hover:underline">webnova@webnova.com</a>',
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl text-black"
        >
          {t.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-gray-600 text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: t.paragraph }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8"
        >
          <Button
            text="Contáctanos"
            onClick={() =>
              window.location.href = "https://wa.me/message/4VLAEDVS3JPNN1"
            }
            variant="primary"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-sm text-black"
          dangerouslySetInnerHTML={{ __html: t.contact }}
        />
      </div>
    </section>
  );
};

export default Cta;
