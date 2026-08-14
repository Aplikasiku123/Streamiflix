import React from "react";

const categories = [
  { name: "Trending Minggu Ini", videos: [1,2,3,4,5,6] },
  { name: "Terbaru", videos: [1,2,3,4,5,6] },
  { name: "Paling Banyak Ditonton", videos: [1,2,3,4,5,6] },
];

export default function HomePage() {
  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">

      {/* 1. Navbar */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur z-50 px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-600">StreamFlix</h1>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Cari video..."
            className="bg-gray-800 px-3 py-2 rounded-lg text-sm hidden md:block"
          />
          <button className="bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold">Login</button>
        </div>
      </header>

      {/* 2. Hero Banner */}
      <section className="pt-20 relative">
        <img
          src="https://via.placeholder.com/1920x800/111/fff?text=Banner+Video+Unggulan"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
          alt="banner"
        />
        <div className="absolute bottom-10 left-4 md:left-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Judul Video Unggulan</h2>
          <p className="max-w-lg text-gray-300 mb-4 hidden md:block">
            Deskripsi singkat video unggulan. Bikin penasaran biar orang klik.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200">
            ▶ Putar
          </button>
        </div>
      </section>

      {/* 3. Rak Video per Kategori */}
      <main className="px-4 md:px-8 py-8 space-y-8">
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3 className="text-xl font-semibold mb-3">{cat.name}</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {cat.videos.map((v) => (
                <div key={v} className="min-w-[160px] md:min-w-[240px] group cursor-pointer">
                  <img
                    src={`https://via.placeholder.com/400x225/222/fff?text=Thumb+${v}`}
                    className="rounded-lg group-hover:scale-105 transition"
                    alt="thumbnail"
                  />
                  <p className="text-sm mt-2 truncate">Judul Video {v}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* 4. Footer */}
      <footer className="border-t border-gray-800 px-4 md:px-8 py-6 text-center text-gray-500 text-sm">
        <p>© 2026 StreamFlix. Untuk 18+ saja. Tonton dengan bijak.</p>
      </footer>

      {/* 5. Age Gate Pop-up Sederhana */}
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]">
        <div className="bg-[#181818] p-6 rounded-lg text-center max-w-sm">
          <h2 className="text-xl font-bold mb-3">Verifikasi Umur</h2>
          <p className="text-gray-400 mb-4">Situs ini berisi konten untuk 18+. Apakah kamu sudah cukup umur?</p>
          <div className="flex gap-3">
            <button className="bg-red-600 flex-1 py-2 rounded">Ya, Saya 18+</button>
            <button className="bg-gray-700 flex-1 py-2 rounded">Keluar</button>
          </div>
        </div>
      </div>

    </div>
  )
      }
