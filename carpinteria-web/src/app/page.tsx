import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Galeria from './components/Galeria'
import Empresas from './components/Empresas'
import Contacto from './components/Contacto'
import Whatsapp from './components/Whatsapp'

export default function Home() {
  return (
    <>
      <Hero />
  <Servicios />
         <Galeria />
      <Empresas />
      <Contacto />
      <Whatsapp/>
    </>
  )
}
