'use client'

import { motion } from 'framer-motion'

export default function Empresas() {
  return (
    <section
      id="empresas"
      className="py-20 bg-white dark:bg-[#1f1f23] text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
          Soluciones para empresas y constructoras
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Ofrecemos desarrollo de proyectos a gran escala: fraccionamientos, viviendas, interiores corporativos y más. Calidad, precisión y compromiso en cada etapa.
        </p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#f7f3ef] dark:bg-neutral-800 rounded-xl p-6 shadow-lg flex-1 border border-gray-200 dark:border-neutral-700">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Proyectos a medida
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Adaptamos nuestras soluciones según el alcance y branding de tu empresa.
            </p>
          </div>

          <div className="bg-[#f7f3ef] dark:bg-neutral-800 rounded-xl p-6 shadow-lg flex-1 border border-gray-200 dark:border-neutral-700">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Escalabilidad
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Desde una unidad piloto hasta ejecuciones masivas sin perder detalle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
