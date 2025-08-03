'use client'

import { motion } from 'framer-motion'

const servicios = [
  {
    title: 'Carpintería a medida',
    desc: 'Diseños personalizados para cada espacio con maderas nobles y acabados únicos.',
    icon: '🪵',
  },
  {
    title: 'Cocinas a medida',
    desc: 'Integración funcional y estética: cocinas pensadas para vos y tu estilo de vida.',
    icon: '🍽️',
  },
  {
    title: 'Interiorismo',
    desc: 'Ambientes con identidad, armonía y confort, hechos a medida.',
    icon: '🎨',
  },
]

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20 bg-white dark:bg-[#1f1f23] text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          Nuestros servicios
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              className="border rounded-2xl p-6 shadow-lg hover:shadow-2xl transition bg-[#f7f3ef] dark:bg-neutral-800 border-gray-300 dark:border-neutral-700"
              whileHover={{ y: -4, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
