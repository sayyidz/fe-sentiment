'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between shadow bg-white">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-gray-800">
        SentimentAI
      </Link>

      {/* Navigation */}
      <nav className="space-x-6 text-sm font-medium text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/about">Tentang Kami</Link>
        <Link href="/research">Tentang Penelitian</Link>
        <Link
          href="/login"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Login
        </Link>
      </nav>
    </header>
  )
}
