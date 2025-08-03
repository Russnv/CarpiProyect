"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Sun, Moon } from "lucide-react";

export default function Footer() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;

  return (
    <footer
      className={`relative overflow-hidden pt-16 pb-8 ${
        currentTheme === "dark"
          ? "bg-black text-white"
          : "bg-[#f0ece6] text-gray-800"
      }`}
    >
      <div
        className={`absolute inset-0 pointer-events-none bg-[url('/footer-texture.png')] bg-cover ${
          currentTheme === "dark" ? "opacity-5" : "opacity-10"
        }`}
      />

      <div className="relative z-10 grid grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:grid-cols-3">
        {/* Contacto */}
        <div>
          <h3 className="mb-3 text-xl font-bold">Contacto</h3>
          <p className="mb-1 text-sm">📍 Ciudadela, Argentina</p>
          <p className="mb-1 text-sm">✉️ info@tucarpinteria.com</p>
          <p className="text-sm">📞 +54 9 11 6480 6794</p>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="mb-3 text-xl font-bold">Navegación</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#servicios" className="hover:text-[#caa56a] transition">
              Servicios
            </a>
            <a href="#galeria" className="hover:text-[#caa56a] transition">
              Galería
            </a>
            <a href="#empresas" className="hover:text-[#caa56a] transition">
              Empresas
            </a>
            <a href="#contacto" className="hover:text-[#caa56a] transition">
              Contacto
            </a>
          </div>
        </div>

        {/* Redes + tema */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="mb-3 text-xl font-bold">Seguinos</h3>
            <div className="flex gap-4 mb-6">
              <a
                aria-label="Instagram"
                href="#"
                className="hover:text-[#caa56a] transition"
              >
                <Instagram size={20} />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="hover:text-[#caa56a] transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <div className="text-sm font-medium">Tema:</div>
            <button
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              aria-label="Alternar tema claro/oscuro"
              title={currentTheme === "dark" ? "Tema claro" : "Tema oscuro"} 
              className="flex items-center justify-center w-8 h-8 rounded-full shadow-sm transition hover:brightness-95
               bg-[#f7f3ef] dark:bg-neutral-700 dark:text-white"
            >
              {currentTheme === "dark" ? (
                <Sun size={16} className="text-yellow-300" /> 
              ) : (
                <Moon size={16} className="text-neutral-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 pt-6 mt-12 text-sm text-center border-t border-neutral-400 dark:border-neutral-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          © {new Date().getFullYear()} Carpintería Creativa. Todos los derechos
          reservados.
          <span className="block mt-1">
            Desarrollado por Natalia Villalba · Frontend Developer
          </span>
        </p>
      </motion.div>
    </footer>
  );
}
