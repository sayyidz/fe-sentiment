'use client'
import dynamic from 'next/dynamic'

const SentimentChart = dynamic(() => import('@/components/SentimentChart'), { ssr: false })
const CustomBarChart = dynamic(() => import('@/components/CustomBarChart'), { ssr: false })
const Top5BulananChart = dynamic(() => import('@/components/Top5BulananChart'), { ssr: false })

import { useState, useRef } from 'react'
import { UploadCloud, BarChart2 } from 'lucide-react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Title, Tooltip)

interface SentimentResult {
  text: string
  sentiment: 'Positive' | 'Negative' | 'Neutral'
}

interface NegatifPerBulanItem {
  bulan_tahun: string
  jumlah_negatif: number
}

interface Dataset {
  label: string
  data: number[]
}

interface Top5Bulanan {
  labels: string[]
  datasets: Dataset[]
}

interface RawDataItem {
  ulasan: string
  prediksi: number
}


export default function AnalysisPage() {
  const [file, setFile] = useState<File | null>(null)
  const [results, setResults] = useState<SentimentResult[]>([])
  const [sentimentChart, setSentimentChart] = useState<Record<string, number>>({})
  const [negatifPerSektor, setNegatifPerSektor] = useState<Record<string, number>>({})
  const [negatifPerBulan, setNegatifPerBulan] = useState<NegatifPerBulanItem[]>([])
  const [top5Bulanan, setTop5Bulanan] = useState<Top5Bulanan>({ labels: [], datasets: [] })
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('http://localhost:5001/predict', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) throw new Error('Failed to analyze')

      const result = await res.json()
      setResults(
        (result.data as RawDataItem[]).map((item) => ({
          text: item.ulasan || '-',
          sentiment:
            item.prediksi === 1
              ? 'Positive'
              : item.prediksi === 0
              ? 'Neutral'
              : 'Negative',
        }))
      )
      console.log('top5_bulanan:', result.top5_bulanan)

      setSentimentChart(result.chart)
      setNegatifPerSektor(result.negatif_per_sektor)
      setNegatifPerBulan(result.negatif_per_bulan)
      setTop5Bulanan(result.top5_bulanan)
    } catch (error) {
      console.error('Upload error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-black">Analisis Sentimen</h1>

      <div className="bg-[#ACE1AF] shadow-xl rounded-2xl p-4 mb-10 border border-[#ACE1AF]">
        <h2 className="text-lg font-bold flex items-center gap-3 mb-4 text-black">
          <UploadCloud size={20} className="text-black" />
          Unggah dataset anda
        </h2>

        <div className="mb-4">
          <span className="text-black font-medium">Pilih file</span>
          <div className="flex items-center gap-4 mt-2">
            <button
              type="button"
              className="bg-[#F9F7F0] border border-[#F9F7F0] rounded-lg px-4 py-2 text-sm text-black shadow-sm hover:bg-gray-200 transition"
              onClick={() => inputRef.current?.click()}
            >
              Cari
            </button>
            <span className="text-sm text-gray-600 truncate max-w-xs">
              {file ? file.name : 'Tidak ada file yang dipilih'}
            </span>
          </div>

          <input
            type="file"
            accept=".csv,.xlsx"
            ref={inputRef}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />
        </div>

        <button
          onClick={handleUpload}
          className="w-full bg-[#F9F7F0] hover:bg-gray-200 text-black py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
        >
          {loading ? 'Menganalisis...' : 'Analisis'}
        </button>
      </div>

      {results.length > 0 && (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <SentimentChart
                data={{
                  Positif: sentimentChart?.Positif ?? sentimentChart?.positif ?? 0,
                  Netral: sentimentChart?.Netral ?? sentimentChart?.netral ?? 0,
                  Negatif: sentimentChart?.Negatif ?? sentimentChart?.negatif ?? 0,
                }}
              />
            </div>

            <div className="">
              <CustomBarChart
                title="Komentar Negatif per Sektor"
                labels={Object.keys(negatifPerSektor)}
                data={Object.values(negatifPerSektor)}
                color="#f87171"
              />
            </div>
          </div>

          <CustomBarChart
            title="Komentar Negatif per Bulan"
            labels={negatifPerBulan.map(item => item.bulan_tahun)}
            data={negatifPerBulan.map(item => item.jumlah_negatif)}
            color="#a855f7"
          />

          {top5Bulanan.datasets.length > 0 && <Top5BulananChart data={top5Bulanan} />}
          
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4 text-black">
              <BarChart2 size={20} /> Tabel Hasil Sentimen
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-black border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2">Teks</th>
                    <th className="px-4 py-2">Sentimen</th>
                    <th className="px-4 py-2">Waktu</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, index) => (
                    <tr key={index} className="bg-white shadow-sm rounded-md hover:shadow-md transition">
                      <td className="px-4 py-3 rounded-l-xl">{item.text}</td>
                      <td
                        className={`px-4 py-2 ${
                          item.sentiment === 'Positive'
                            ? 'text-green-600'
                            : item.sentiment === 'Negative'
                            ? 'text-red-600'
                            : 'text-gray-600'
                        }`}
                      >
                        {item.sentiment}
                      </td>
                      <td className="px-4 py-3 rounded-r-xl text-gray-500">
                        {new Date().toLocaleString('id-ID', {
                          dateStyle: 'short',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}