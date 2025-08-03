'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = [
        { id: 'servicios', offset: 0 },
        { id: 'galeria', offset: 0 },
        { id: 'empresas', offset: 0 },
        { id: 'contacto', offset: 0 },
      ]

      // Actualizo offset para cada sección
      sections.forEach((section) => {
        const el = document.getElementById(section.id)
        if (el) {
          section.offset = el.getBoundingClientRect().top
        }
      })

      // Busco la sección cuyo top está más cerca a 0 pero sin pasarse (>= -100 para margen)
      const visibleSection = sections
        .filter((sec) => sec.offset <= 100)
        .sort((a, b) => b.offset - a.offset)[0]

      if (visibleSection) {
        setActiveSection(visibleSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // disparo inicial para setear activo al cargar
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme

  if (!mounted) return null

  // Clase para link activo
  const activeClass =
    'relative text-[#caa56a] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#caa56a] after:animate-glow'

  return (
    <>
      <style>
        {`
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 4px #caa56a;
            }
            50% {
              box-shadow: 0 0 10px #f9e4b7;
            }
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
        `}
      </style>

      <header className="fixed top-0 z-50 w-full bg-opacity-90 backdrop-blur-md">
        <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-bold tracking-wider">Carpintería Creativa</h1>
          </div>

          <nav className="items-center hidden gap-6 md:flex">
            <a
              href="#servicios"
              className={`text-sm hover:text-[#caa56a] transition ${
                activeSection === 'servicios' ? activeClass : ''
              }`}
            >
              Servicios
            </a>
            <a
              href="#galeria"
              className={`text-sm hover:text-[#caa56a] transition ${
                activeSection === 'galeria' ? activeClass : ''
              }`}
            >
              Galería
            </a>
            <a
              href="#empresas"
              className={`text-sm hover:text-[#caa56a] transition ${
                activeSection === 'empresas' ? activeClass : ''
              }`}
            >
              Empresas
            </a>
            <a
              href="#contacto"
              className={`text-sm hover:text-[#caa56a] transition ${
                activeSection === 'contacto' ? activeClass : ''
              }`}
            >
              Contacto
            </a>
            <button
              onClick={() =>
                setTheme(currentTheme === 'dark' ? 'light' : 'dark')
              }
              aria-label="Toggle tema"
              className="flex items-center p-2 border rounded-full border-neutral-300 dark:border-neutral-700"
            >
              {currentTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>

          {/* mobile menu */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() =>
                setTheme(currentTheme === 'dark' ? 'light' : 'dark')
              }
              aria-label="Toggle tema"
              className="flex items-center p-2 border rounded-full border-neutral-300 dark:border-neutral-700"
            >
             {currentTheme === "dark" ? (
                <Sun size={16} className="text-yellow-300" /> 
              ) : (
                <Moon size={16} className="text-neutral-800" />
              )}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Abrir menú"
              className="p-2 border rounded-md border-neutral-300 dark:border-neutral-700"
            >
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white dark:bg-[#1f1f23] border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex flex-col gap-3 px-6 py-4">
              <a
                href="#servicios"
                className={`text-base hover:text-[#caa56a] transition ${
                  activeSection === 'servicios' ? activeClass : ''
                }`}
                onClick={() => setOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#galeria"
                className={`text-base hover:text-[#caa56a] transition ${
                  activeSection === 'galeria' ? activeClass : ''
                }`}
                onClick={() => setOpen(false)}
              >
                Galería
              </a>
              <a
                href="#empresas"
                className={`text-base hover:text-[#caa56a] transition ${
                  activeSection === 'empresas' ? activeClass : ''
                }`}
                onClick={() => setOpen(false)}
              >
                Empresas
              </a>
              <a
                href="#contacto"
                className={`text-base hover:text-[#caa56a] transition ${
                  activeSection === 'contacto' ? activeClass : ''
                }`}
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
