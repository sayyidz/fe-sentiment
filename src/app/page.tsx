'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-black">SentimentAnalysis</div>
        <nav className="space-x-6 text-md font-medium text-black">
          <Link href="#home">Home</Link>
          <Link href="#research">Tentang Penelitian</Link>
          <Link href="#about">Tentang Kami</Link>
          <Link
            href="/login"
            className="bg-[#A3BCA6] text-white px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Login
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-15 space-y-32 bg-white">
        {/* Home Section */}
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6">
          {/* Background Image */}
          <Image
            src="/login-bg1.jpg"
            alt=""
            fill
            className="object-cover z-0"
            priority
          />

          {/* Overlay opsional agar teks lebih terbaca */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          {/* Main Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Analisis Sentimen Tempat Wisata</h1>
            <p className="max-w-4xl">
              Platform analisis sentimen untuk memahami opini wisatawan terhadap destinasi wisata.
            </p>
          </div>
        </section>

        {/* Tentang Penelitian Section */}
        <section id="research" className="min-h-screen bg-white px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">
              <span className="font-normal text-black">Tentang </span>
              <span className="font-bold text-[#A3BCA6]">Penelitian</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-10">
              {/* Kiri: Latar Belakang dan Tujuan */}
              <div className="flex-1 space-y-12">
                {/* Latar Belakang */}
                <div>
                  <h3 className="text-xl font-semibold text-[#4C5C4D] mb-3">Latar Belakang</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Dalam era digital, ulasan pengguna di platform seperti Google Maps memberikan wawasan berharga
                    mengenai persepsi wisatawan terhadap destinasi wisata. Namun, informasi ini seringkali tersebar
                    dan tidak terstruktur. Analisis sentimen memungkinkan kita mengolah opini tersebut menjadi
                    data yang terukur, sehingga membantu pengambilan keputusan yang lebih baik.
                  </p>
                </div>

                {/* Tujuan Penelitian */}
                <div>
                  <h3 className="text-xl font-semibold text-[#4C5C4D] mb-3">Tujuan Penelitian</h3>
                  <p className="text-gray-800 leading-relaxed">
                    Penelitian ini bertujuan untuk mengembangkan sistem analisis sentimen otomatis terhadap
                    ulasan destinasi wisata, sehingga dapat memberikan gambaran umum mengenai sentimen publik
                    (positif, netral, negatif) yang dapat digunakan oleh pengelola untuk meningkatkan kualitas
                    layanan dan promosi tempat wisata.
                  </p>
                </div>
              </div>

              {/* Kanan: Metodologi */}
              <div className="flex-1 bg-[#A3BCA6] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-black mb-3">Metodologi</h3>
                <p className="text-black leading-relaxed">
                  Metodologi yang digunakan mencakup lima tahap utama: <br />
                  <strong>(1)</strong> Pengumpulan data ulasan dari Google Maps untuk beberapa destinasi wisata populer di wilayah Bandung menggunakan teknik web scraping, <br />
                  <strong>(2)</strong> Pembersihan dan praproses teks dilakukan dengan menghapus tanda baca, angka, emoji, dan stopwords serta proses tokenisasi, <br />
                  <strong>(3)</strong> Ekstraksi fitur menggunakan Term Frequency–Inverse Document Frequency (TF-IDF) untuk mengubah teks menjadi vektor numerik, <br />
                  <strong>(4)</strong> Klasifikasi dilakukan menggunakan algoritma Support Vector Machine (SVM) dengan pengaturan parameter optimal, <br />
                  <strong>(5)</strong> Evaluasi performa model dilakukan berdasarkan akurasi, precision, recall, F1-score, dan confusion matrix. <br />
                </p>
              </div>
            </div>
          </div>
        </section>


        <section id="destinasi" className="bg-slate-100 px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl mb-12 text-center">
              <span className="font-normal text-black">Destinasi </span>
              <span className="font-bold text-[#A3BCA6]">Wisata Populer</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Destinasi 1 */}
              <div className="bg-[#A3BCA6] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="w-full h-48 relative">
                  <Image
                    src="/kawahputih.jpg"
                    alt="Kawah Putih"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">Kawah Putih, Ciwidey</h3>
                  <p className="text-black text-sm">
                    Danau vulkanik dengan air berwarna putih kehijauan yang memesona, dikelilingi kabut tipis dan pegunungan. Cocok untuk wisata alam dan fotografi.
                  </p>
                </div>
              </div>

              {/* Destinasi 2 */}
              <div className="bg-[#C1D5A4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="w-full h-48 relative">
                  <Image
                    src="/tangkubanperahu.jpg"
                    alt="Tangkuban Perahu"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">Tangkuban Perahu, Lembang</h3>
                  <p className="text-black text-sm">
                    Gunung berapi aktif yang terkenal dengan kawahnya yang luas dan legenda Sangkuriang. Menyuguhkan pemandangan pegunungan yang menyejukkan.
                  </p>
                </div>
              </div>

              {/* Destinasi 3 */}
              <div className="bg-[#ACE1AF] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="w-full h-48 relative">
                  <Image
                    src="/lembangparkzoo.jpg"
                    alt="Lembang Park Zoo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">Lembang Park Zoo, Lembang</h3>
                  <p className="text-black text-sm">
                    Kebun binatang modern dengan koleksi satwa yang lengkap, area bermain anak, serta suasana sejuk khas pegunungan Lembang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tentang Kami Section */}
        <section id="about" className="min-h-screen bg-white px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font mb-12 text-center">
              <span className="font text-black">Tentang </span>
              <span className="font-bold text-[#A3BCA6]">Kami</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center py-15">
              {/* Peneliti 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 relative mb-4">
                  <Image
                    src="/ridwan.jpg"
                    alt="Peneliti 1"
                    fill
                    className="rounded-full object-cover object-bottom shadow-md"
                    priority
                  />
                </div>
                <h4 className="text-lg font-semibold text-black">Ridwan Ramadhan</h4>
                <p className="text-sm text-black">Anggota Tim</p>
              </div>

              {/* Peneliti 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 relative mb-4">
                  <Image
                    src="/login-bg2.jpg"
                    alt="Peneliti 2"
                    fill
                    className="rounded-full object-cover shadow-md"
                    priority
                  />
                </div>
                <h4 className="text-lg font-semibold text-black">Haris Tri Nugroho</h4>
                <p className="text-sm text-black">Anggota Tim</p>
              </div>

              {/* Peneliti 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-40 h-40 relative mb-4">
                  <Image
                    src="/sayyid.jpg"
                    alt="Peneliti 3"
                    fill
                    className="rounded-full object-cover shadow-md"
                    priority
                  />
                </div>
                <h4 className="text-lg font-semibold text-black">Sayyid Izzuddin Mubarok</h4>
                <p className="text-sm text-black">Anggota Tim</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
