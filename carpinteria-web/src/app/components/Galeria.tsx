'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fotos = [
  '/galeria1.jpg',
  '/galeria2.jpg',
  '/galeria3.jpg',
  '/galeria4.jpg',
  '/galeria5.jpg',
  '/galeria6.jpg',
]

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="py-20 bg-[#f0ece6] dark:bg-[#1f1f23] text-gray-800 dark:text-gray-100"
    >
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-semibold text-center md:text-4xl text-gray-900 dark:text-white">
          Proyectos destacados
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((src, i) => (
            <motion.div
              key={src}
              className="relative overflow-hidden shadow-md rounded-xl"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Image
                src={src}
                alt={`Proyecto ${i + 1}`}
                width={500}
                height={400}
                className="object-cover w-full h-64 sm:h-56"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-sm font-medium">Proyecto {i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
