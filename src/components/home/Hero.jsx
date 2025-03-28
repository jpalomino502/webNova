import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = ["CREATIVOS", "INNOVADORES", "DINÁMICOS", "ÚNICOS"];
  const [currentWord, setCurrentWord] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = words[currentWord];
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
  }, [text, isDeleting, currentWord, delta, words]);

  return (
    <main className="black relative h-screen overflow-hidden bg-black fuente_home">
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center flex flex-col justify-center h-full mt-20 sm:mt-32 md:mt-0">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            SOMOS
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text inline-block">
              <span className="inline-block min-w-[1em] text-left">
                {text}
                <motion.span
                  className="inline-block w-[2px] h-[1em] ml-1 bg-current align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </span>
            </span>
          </motion.h1>
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            DIGITALES
          </motion.h2>
        </div>
      </div>
    </main>
  );
}
