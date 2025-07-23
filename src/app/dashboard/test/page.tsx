"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

type ResultType = {
  original: string
  cleaned: string
  sentiment: string
  sector: string
}

export default function TestPage() {
  const [text, setText] = useState('')
  const [result, setResult] = useState<ResultType | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleTest = async () => {
    if (!text.trim()) {
      setError('Kalimat tidak boleh kosong')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const res = await fetch('https://be-sentiment-production.up.railway.app/test-sentiment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sentence: text })
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Terjadi kesalahan pada server')
      }

      const data: ResultType = await res.json()
      setResult(data)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Terjadi kesalahan tidak diketahui')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Uji Sentimen Kalimat</h1>
      {/* Kotak input (1 kolom penuh) */}
      <div className="bg-[#ACE1AF] border border-[#ACE1AF] rounded-2xl shadow-xl p-6 w-full">    
        <textarea
          className="w-full bg-white p-3 border rounded-2xl mb-4 text-gray-800 border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 transition"
          rows={4}
          placeholder="Masukkan kalimat..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleTest}
          className="bg-[#F9F7F0] hover:bg-gray-200 text-black px-6 py-2 rounded-xl shadow-md hover:shadow-lg"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Analisis'}
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>

      {/* Kotak hasil (4 kotak dalam 2 kolom) */}
      <AnimatePresence>
        {result && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="rounded-2xl p-4 bg-white border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-semibold mb-1 text-black">Kalimat asli:</p>
              <p className='text-black'>{result.original}</p>
            </motion.div>

            <motion.div
              className="rounded-2xl p-4 bg-white border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-semibold mb-1 text-black">Setelah dibersihkan:</p>
              <p className='text-black'>{result.cleaned}</p>
            </motion.div>

            <motion.div
              className="rounded-2xl p-4 bg-white border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-semibold mb-1 text-black">Sentimen:</p>
              <p className='text-black'>{result.sentiment}</p>
            </motion.div>

            <motion.div
              className="rounded-2xl p-4 bg-white border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-semibold mb-1 text-black">Sektor:</p>
              <p className='text-black'>{result.sector}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
