'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/5491164806794"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed z-50 flex items-center justify-center w-16 h-16 transition-transform rounded-full shadow-xl bottom-6 right-6 hover:scale-110"
    >
      <Image
        src="/icons8-whatsapp-48.png"
        alt=""
        width={40}
        height={40}
        priority
      />
    </Link>
  )
}
