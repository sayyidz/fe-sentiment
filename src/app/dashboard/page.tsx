'use client'

// import { LayoutDashboard } from 'lucide-react'
import { useEffect, useState } from 'react'
import TopFilesChart from '@/components/TopFilesChart'
import Link from 'next/link'
interface TopFile {
  name: string
  count: number
}

export default function DashboardPage() {
  const [topFiles, setTopFiles] = useState<TopFile[]>([])

  useEffect(() => {
    const fetchTopFiles = async () => {
      try {
        const res = await fetch('https://be-sentiment-production.up.railway.app/top-files')
        const data = await res.json()
        setTopFiles(data)
      } catch (err) {
        console.error('Gagal mengambil data:', err)
      }
    }
    fetchTopFiles()
  }, [])

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

      <div className="max-w-4xl mx-auto mt-8">
      {topFiles.length > 0 ? (
        <TopFilesChart data={topFiles} />
      ) : (
        <p className="text-gray-600"></p>
      )}
    </div>

    </div>
  )
}
