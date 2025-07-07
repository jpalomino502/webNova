"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const words = ["AUTENTICIDAD", "INTEGRIDAD", "EXCELENCIA", "CONFIANZA"]
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
    <section className="white bg-white h-screen py-20 relative overflow-hidden">
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center flex flex-col justify-center h-full mt-20 sm:mt-32 md:mt-0">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl text-black tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            DESCUBRE LA ESENCIA
            <br />
            <span className="block">DE</span>
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
    </section>
  )
}
