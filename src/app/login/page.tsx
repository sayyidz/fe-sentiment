'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Tambahkan validasi atau autentikasi di sini kalau perlu
    router.push('/dashboard')
  }
  return (
    <div className="flex min-h-screen gap-6">
      {/* Left section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <div className="max-w-sm w-full">
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <div className="w-40 h-20 relative">
              <Image
                src="/logo HRS 4.png" // pastikan file ada di public/logo.png
                alt="Logo"
                className="object-contain"
                priority
                fill
              />
            </div>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Welcome</h2>
          <p className="text-sm text-center text-gray-500 mb-6">Please enter your account.</p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Passwords"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-gray-500 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="w-full bg-[#A3BCA6] text-white py-3 rounded-md hover:bg-gray-300 transition"
            >
              Continue
            </button>
          </form>
        </div>
      </div>

      {/* Right section - Image */}
      <div className="hidden md:block md:w-[50%]">
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src="/login-bg.jpg" // letakkan gambar di public/
            alt="Login Background"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </div>
    </div>
  )
}
