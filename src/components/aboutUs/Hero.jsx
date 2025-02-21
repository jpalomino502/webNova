import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const words = ["INNOVACIÓN", "CREATIVIDAD", "TECNOLOGÍA", "SOLUCIONES"];
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const current = words[currentWord];
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
        setDelta(100);
      } else {
        setText(current.substring(0, text.length + 1));
        setDelta(150);
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
        setDelta(500);
      }
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentWord, delta]);

  return (
    <section className="white bg-white h-screen py-20 relative overflow-hidden">
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center flex flex-col justify-center h-full mt-20 sm:mt-32 md:mt-0">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl text-black tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            DESCUBRE LA ESENCIA 
            <br />
            <span className="block">DE</span>
            <span className="block bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text inline-block uppercase">
              {text}
              <motion.span
                className="inline-block w-[2px] h-[1em] ml-1 bg-current align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              />
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
