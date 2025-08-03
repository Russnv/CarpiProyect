"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/hero1.jpg",
  "/hero2.png",
  "/hero4.png",
  "/hero5.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[current]}
          className="absolute inset-0"
          initial={{ opacity: 0.8, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.8, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={images[current]}
            alt={`Imagen ${current + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center text-white px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Diseño y Carpintería a Medida
          </h1>
          <p className="text-lg md:text-xl drop-shadow-sm">
            Muebles únicos, interiores elegantes y soluciones a medida para cada
            ambiente.
          </p>
        </motion.div>
      </div>
      {/* Sección temporal para forzar scroll */}
      <section className="h-screen bg-white flex items-center justify-center text-2xl text-gray-700">
        Acá va la próxima sección: Servicios ✨
      </section>
    </section>
  );
}
