"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const words = ["IMPACTO", "RESULTADOS", "EFICIENCIA", "SOLUCIONES"]
  const [currentWord, setCurrentWord] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(150)

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = words[currentWord]
      if (isDeleting) {
        setText(current.substring(0, text.length - 1))
        setDelta(100)
      } else {
        setText(current.substring(0, text.length + 1))
        setDelta(150)
      }
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setCurrentWord((prev) => (prev + 1) % words.length)
        setDelta(500)
      }
    }, delta)
    return () => clearTimeout(timer)
  }, [text, isDeleting, currentWord, delta])

  return (
    <main className="white bg-white relative h-screen overflow-hidden">
      {/* Softer nebula/mist-like gradient effects for white background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side mist */}
        <motion.div
          className="absolute -left-20 top-1/4 w-[150px] h-[300px] rounded-full bg-gradient-to-r from-blue-600 to-transparent opacity-20 blur-[45px]"
          animate={{
            opacity: [0.15, 0.2, 0.15],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -left-10 bottom-1/3 w-[120px] h-[200px] rounded-full bg-gradient-to-r from-pink-600 to-transparent opacity-18 blur-[40px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Right side mist */}
        <motion.div
          className="absolute -right-20 top-1/3 w-[180px] h-[250px] rounded-full bg-gradient-to-l from-purple-600 to-transparent opacity-20 blur-[50px]"
          animate={{
            opacity: [0.15, 0.2, 0.15],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -right-10 bottom-1/4 w-[130px] h-[220px] rounded-full bg-gradient-to-l from-pink-600 to-transparent opacity-18 blur-[42px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 11,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Top mist */}
        <motion.div
          className="absolute top-0 left-1/4 w-[300px] h-[150px] rounded-full bg-gradient-to-b from-blue-600 to-transparent opacity-18 blur-[45px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -top-20 right-1/3 w-[250px] h-[120px] rounded-full bg-gradient-to-b from-pink-600 to-transparent opacity-15 blur-[40px]"
          animate={{
            opacity: [0.1, 0.15, 0.1],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Bottom mist */}
        <motion.div
          className="absolute -bottom-20 left-1/3 w-[280px] h-[130px] rounded-full bg-gradient-to-t from-purple-600 to-transparent opacity-18 blur-[47px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            y: [5, -5, 5],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-10 right-1/4 w-[220px] h-[100px] rounded-full bg-gradient-to-t from-blue-600 to-transparent opacity-15 blur-[42px]"
          animate={{
            opacity: [0.1, 0.15, 0.1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 11,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Corner mists */}
        <motion.div
          className="absolute -top-20 -left-20 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-blue-600 to-transparent opacity-18 blur-[55px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full bg-gradient-to-bl from-pink-600 to-transparent opacity-18 blur-[55px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-pink-600 to-transparent opacity-18 blur-[55px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-[200px] h-[200px] rounded-full bg-gradient-to-tl from-purple-600 to-transparent opacity-18 blur-[55px]"
          animate={{
            opacity: [0.12, 0.18, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 11,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center flex flex-col justify-center h-full mt-20 sm:mt-32 md:mt-0">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl text-black tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            IMPULSAMOS EL
            <br />
            <span>CAMBIO CON</span>
            <br />
            <span className="block bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 text-transparent bg-clip-text inline-block uppercase">
              {text}
              <motion.span
                className="inline-block w-[2px] h-[1em] ml-1 bg-current align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
            </span>
          </motion.h1>
        </div>
      </div>
    </main>
  )
}

