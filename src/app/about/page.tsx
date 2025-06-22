import Navbar from '@/components/Navbar'

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Tentang Kami</h1>
        <p>
          Kami adalah tim pengembang yang fokus pada pengembangan teknologi analisis sentimen untuk pariwisata...
        </p>
      </div>
    </div>
  )
}
