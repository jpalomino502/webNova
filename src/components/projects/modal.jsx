"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function Modal({ isOpen, onClose, url, title }) {
  const [isMounted, setIsMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isEntering, setIsEntering] = useState(true)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }

  useEffect(() => {
    setIsMounted(true)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && isMounted) {
      setIsEntering(true)
      const timer = setTimeout(() => {
        setIsEntering(false)
      }, 10)
      return () => clearTimeout(timer)
    }
  }, [isOpen, isMounted])

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false)
    }
  }, [isOpen])

  if (!isMounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isEntering ? "opacity-0" : isClosing ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleClose}
      />
      <div
        className={`relative z-10 w-full max-w-5xl h-[85vh] md:h-[80vh] bg-black rounded-xl overflow-hidden 
          border border-white/10 shadow-2xl transition-all duration-300 ${
            isEntering
              ? "opacity-0 scale-95 translate-y-4"
              : isClosing
                ? "opacity-0 scale-95 translate-y-4"
                : "opacity-100 scale-100 translate-y-0"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg font-medium text-white truncate">{title}</h3>
          <button onClick={handleClose} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="w-full h-[calc(100%-60px)]">
          <iframe
            src={url}
            className="w-full h-full border-0"
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
