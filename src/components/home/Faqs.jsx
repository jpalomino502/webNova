import React, { useState } from 'react';

const faqs = [
  {
    question: "¿Qué servicios ofrece WebNova?",
    answer:
      "WebNova ofrece servicios de diseño y desarrollo web, optimización SEO y gestión de marcas en línea para ayudarte a destacar en el mundo digital.",
  },
  {
    question: "¿Cómo puede WebNova mejorar mi presencia online?",
    answer:
      "Con estrategias personalizadas, como diseño web profesional, campañas de marketing digital y SEO avanzado, WebNova optimiza tu presencia en línea para atraer más clientes.",
  },
  {
    question: "¿Qué es el diseño web responsivo y por qué es importante?",
    answer:
      "El diseño web responsivo asegura que tu sitio se vea y funcione perfectamente en cualquier dispositivo. Es esencial para mejorar la experiencia del usuario y posicionarte mejor en buscadores.",
  },
  {
    question: "¿Por qué elegir a WebNova para mi proyecto digital?",
    answer:
      "WebNova combina creatividad, tecnología y estrategias efectivas para ofrecer soluciones digitales innovadoras que impulsan tu negocio hacia el éxito.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="black crelative bg-black text-white flex flex-col items-center justify-center overflow-hidden py-24" id="faqs">
      <div className="relative max-w-auto lg:px-60 px-10">
      <h2 className="text-3xl  mb-8 text-center text-white">FAQs de WebNova</h2>
        <dl>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`mb-4 overflow-hidden ${activeIndex === index ? 'shadow-md border border-gray-600' : 'border-b border-gray-600'}`}
            >
              <dt>
                <button
                  className="w-full p-4 flex justify-between items-center bg-black text-left transition-all duration-300 ease-in-out focus:outline-none hover:bg-zinc-900"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index ? "true" : "false"}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg transition-transform duration-300 text-white">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 text-2xl text-white ${activeIndex === index ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={`bg-black overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-4 text-gray-300">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQs;