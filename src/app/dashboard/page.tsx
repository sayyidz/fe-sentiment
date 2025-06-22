import { LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-black mb-4">
        Dashboard
      </h1>
      {/* TOP 2 BORDER (LEFT & RIGHT) */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="border border-[#ACE1AF] rounded-xl shadow-md p-4 transition-all duration-300 bg-[#ACE1AF] hover:shadow-xl">
          <h2 className="text-lg text-black mb-2">
            <span className="font-bold">Analisis </span>
            <span className="font-bold">Sentimen</span>
          </h2>
          <p className="text-black text-sm mb-2">Unggah dataset untuk mendapatkan visualisasi dan klasifikasi sentimen hanya dengan satu klik.</p>
          <Link
            href="/dashboard/analysis"
            className="inline-block bg-[#F9F7F0] hover:bg-gray-200 text-black text-sm px-4 py-2 rounded-md transition"
          >
            Buka Halaman Analysis
          </Link>
        </div>
        <div className="border border-[#ACE1AF] rounded-xl shadow-md p-4 transition-all duration-300 bg-[#ACE1AF] hover:shadow-xl">
          <h2 className="text-lg text-black mb-2">
            <span className="font-bold">Tes </span>
            <span className="font-bold">Sentimen</span>
          </h2>
          <p className="text-black text-sm mb-2">Uji satu kalimat untuk mengetahui sentimen positif, negatif, dan netral secara instan.</p>
          <Link
            href="/dashboard/test"
            className="inline-block bg-[#F9F7F0] hover:bg-gray-200 text-black text-sm px-4 py-2 rounded-md transition"
          >
            Buka Halaman Test
          </Link>
        </div>
      </div>

      <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800 mb-4">
  <LayoutDashboard size={24} /> Overview
</h2>

<p className="text-black leading-relaxed">
  Sentiment Analysis adalah platform analisis sentimen yang memungkinkan Anda mengunggah dataset ulasan atau
  menguji satu kalimat secara langsung untuk mengetahui apakah suatu teks bersifat positif, negatif,
  atau netral.
</p>

<ul className="list-disc list-inside text-black mt-4 space-y-1">
  <li>📊 Unggah file dan dapatkan grafik serta klasifikasi sentimen.</li>
  <li>💬 Uji kalimat tunggal secara cepat dan akurat.</li>
  <li>🧠 Didukung oleh model machine learning terkini.</li>
</ul>

<div className="mt-6 text-center">
  <p className="text-black font-semibold">
    Silakan navigasikan melalui sidebar untuk mulai menggunakan fitur.
  </p>
</div>

    </div>
  )
}
