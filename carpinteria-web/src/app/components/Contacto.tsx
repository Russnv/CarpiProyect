'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { useState } from 'react'

const schema = z.object({
  nombre: z.string().min(1, 'Requerido'),
  email: z.string().email('Email inválido'),
  mensaje: z.string().min(5, 'Mínimo 5 caracteres'),
})

type FormData = z.infer<typeof schema>

export default function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const [sendStatus, setSendStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const onSubmit = async (data: FormData) => {
    setSendStatus('sending')
    console.log('Formulario enviado:', data)
    // Simulamos envío con timeout
    await new Promise((r) => setTimeout(r, 2000))
    setSendStatus('sent')
    reset()
    // Después de 3 seg vuelve a estado idle para poder enviar otra consulta
    setTimeout(() => setSendStatus('idle'), 3000)
  }

  return (
    <section className="py-20 bg-[#f0ece6] dark:bg-[#1f1f23]">
      <div className="max-w-3xl px-6 mx-auto">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Contacto
        </h2>
        <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">Nombre</label>
              <input
                {...register('nombre')}
                className={`border rounded px-4 py-2 bg-white text-gray-800 dark:bg-neutral-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#caa56a] ${
                  errors.nombre ? 'border-red-500' : ''
                }`}
                placeholder="Tu nombre"
                disabled={sendStatus === 'sending'}
              />
              {errors.nombre && <p className="mt-1 text-sm text-red-500">{errors.nombre.message}</p>}
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                {...register('email')}
                className={`border rounded px-4 py-2 bg-white text-gray-800 dark:bg-neutral-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#caa56a] ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="tu@correo.com"
                type="email"
                disabled={sendStatus === 'sending'}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
            <textarea
              {...register('mensaje')}
              className={`border rounded px-4 py-2 min-h-[120px] bg-white text-gray-800 dark:bg-neutral-800 dark:text-gray-100 border-gray-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#caa56a] ${
                errors.mensaje ? 'border-red-500' : ''
              }`}
              placeholder="Qué necesitás..."
              disabled={sendStatus === 'sending'}
            />
            {errors.mensaje && <p className="mt-1 text-sm text-red-500">{errors.mensaje.message}</p>}
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={sendStatus === 'sending'}
              className="bg-[#4b2e1f] text-white px-8 py-3 rounded-full font-semibold hover:brightness-105 transition disabled:opacity-60"
            >
              {sendStatus === 'sending' ? 'Enviando...' : 'Enviar consulta'}
            </button>
          </div>
          {sendStatus === 'sent' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-semibold text-center text-green-600 dark:text-green-400"
            >
              ¡Mensaje enviado con éxito!
            </motion.p>
          )}
        </form>
      </div>
    </section>
  )
}
