"use client";

import React, { useState } from "react";
import { TabType } from "./Navbar";

interface HeroSectionProps {
  setActiveTab: (tab: TabType) => void;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  const [gifLoaded, setGifLoaded] = useState(false);
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  // A collection of reliable anime/cute girl mood GIFs
  const introGifs = [
    {
      url: "https://media.tenor.com/2b5TX3Dq3S8AAAAi/pout-anime.gif",
      title: "Jurus 'Aku Gak Apa-apa' 🥺",
      status: "Nungguin Dibelin Boba & Dipeluk",
      color: "from-pink-500 to-rose-400",
    },
    {
      url: "https://media.tenor.com/4J19_fN5J1cAAAAi/anime-eating.gif",
      title: "Serangan Hangry Galak 🍟",
      status: "Gula Darah Anjlok 🚨 Butuh Kentang / Seblak",
      color: "from-amber-400 to-rose-500",
    },
    {
      url: "https://media.tenor.com/Y171y_h7cEwAAAAi/anime-happy.gif",
      title: "Si Manja Tersipu Malu 🥰",
      status: "Super Happy & Merasa Dicintai 💖",
      color: "from-rose-400 to-purple-500",
    },
  ];

  const currentGif = introGifs[currentGifIndex];

  const nextGif = () => {
    setGifLoaded(false);
    setCurrentGifIndex((prev) => (prev + 1) % introGifs.length);
  };

  return (
    <section className="relative w-full py-8 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100/80 dark:bg-pink-950/60 border border-pink-300 dark:border-pink-700/50 text-pink-700 dark:text-pink-300 font-bold text-xs sm:text-sm mb-6 shadow-sm animate-pulse-glow">
        <span className="animate-spin text-base">✨</span>
        <span>Detektor Mood Cewek #1 & Penghasil Obat Anti-Ngambek 💕</span>
        <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">
          Viral
        </span>
      </div>

      {/* Main Grid Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Col: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gradient-romantic leading-[1.15]">
            Dia Lagi <span className="underline decoration-wavy decoration-rose-400">Silent Treatment?</span> Atau Cuma <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Lapar (Hangry)?</span>
          </h1>

          <p className="text-base sm:text-lg text-pink-950/80 dark:text-pink-100/80 font-medium max-w-xl leading-relaxed">
            Selamat datang di <strong className="text-rose-600 dark:text-rose-400">Tes Badmood Cewek!</strong> 🔮 Gak usah pusing nebak-nebak kenapa chat kamu cuma dibales &quot;Y&quot; atau di-read doang. Dalam 60 detik, algoritma kami bakal mendeteksi rahasia mood dia, akar masalahnya, dan ngasih resep romantis yang dijamin bikin dia senyum lagi!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => setActiveTab("quiz")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-extrabold text-lg shadow-xl hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <span>✨ Mulai Tes Mood Sekarang</span>
              <span className="group-hover:translate-x-1.5 transition-transform">➡️</span>
            </button>

            <button
              onClick={() => setActiveTab("kit")}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-card text-pink-900 dark:text-pink-200 font-bold text-base hover:bg-pink-100/50 dark:hover:bg-pink-900/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-pink-300/80 dark:border-pink-700/60"
            >
              <span>🚨 Buka Kotak P3K Romantis</span>
              <span className="text-xl">🧋🌹</span>
            </button>
          </div>

          {/* Quick Fun Statistics */}
          <div className="grid grid-cols-3 gap-3 w-full pt-6 border-t border-pink-200/60 dark:border-pink-900/60">
            <div className="glass-card p-3 rounded-xl text-center">
              <span className="block text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400">99.9%</span>
              <span className="text-[11px] sm:text-xs font-semibold text-pink-800 dark:text-pink-300">Tingkat Akurasi 💘</span>
            </div>
            <div className="glass-card p-3 rounded-xl text-center">
              <span className="block text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">10,000+</span>
              <span className="text-[11px] sm:text-xs font-semibold text-pink-800 dark:text-pink-300">Cewek Hangry Kenyangan 🍟</span>
            </div>
            <div className="glass-card p-3 rounded-xl text-center">
              <span className="block text-xl sm:text-2xl font-black text-amber-500">0</span>
              <span className="text-[11px] sm:text-xs font-semibold text-pink-800 dark:text-pink-300">Cowok Menang Debat 👑</span>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Girl Mood GIF Preview Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Ambient background glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-600 rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />

            <div className="relative glass-card rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-pink-300/80 dark:border-pink-600/60 overflow-hidden flex flex-col items-center">
              {/* Top Bar / Status Header */}
              <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-pink-200/60 dark:border-pink-800/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-300">
                    Scanner Vibe Cewek 📡
                  </span>
                </div>
                <button
                  onClick={nextGif}
                  className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/60 text-pink-700 dark:text-pink-200 text-xs font-bold hover:scale-105 transition-transform flex items-center gap-1 shadow-xs"
                >
                  <span>🔄 Ganti Mood</span>
                </button>
              </div>

              {/* GIF Display Container */}
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 flex items-center justify-center border border-pink-300/50 dark:border-pink-700/50 shadow-inner group">
                {!gifLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-pink-50/80 dark:bg-pink-950/80 z-10 backdrop-blur-sm">
                    <div className="w-10 h-10 border-4 border-rose-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-bold text-pink-700 dark:text-pink-300 animate-pulse">
                      Memanggil Mood Cewek Lucu... ✨
                    </span>
                  </div>
                )}
                <img
                  src={currentGif.url}
                  alt={currentGif.title}
                  onLoad={() => setGifLoaded(true)}
                  onError={() => setGifLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    gifLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                />
                
                {/* Overlay Badge on GIF */}
                <div className="absolute bottom-3 left-3 right-3 glass-card bg-white/85 dark:bg-black/75 px-3 py-2 rounded-xl border border-white/40 backdrop-blur-md shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-pink-900 dark:text-pink-100 block">
                      {currentGif.title}
                    </span>
                    <span className="text-[10px] font-semibold text-rose-500 dark:text-rose-400 block">
                      {currentGif.status}
                    </span>
                  </div>
                  <span className="text-xl animate-bounce">💖</span>
                </div>
              </div>

              {/* Card Footer Prescription Preview */}
              <div className="w-full mt-4 bg-pink-50/70 dark:bg-pink-900/40 rounded-2xl p-3.5 border border-pink-200/60 dark:border-pink-800/60">
                <div className="flex items-center justify-between text-xs font-bold text-pink-900 dark:text-pink-100 mb-1.5">
                  <span>Resep Dokter Asmara:</span>
                  <span className="text-rose-500 dark:text-rose-400 font-extrabold">Wajib Sekarang Juga 🚨</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl bg-white dark:bg-pink-950 p-1.5 rounded-lg shadow-xs">🧋🍟💐</span>
                  <span className="text-xs font-medium text-pink-800 dark:text-pink-200 leading-snug">
                    Boba Brown Sugar (less ice, 50% sugar), Kentang Goreng hangat, dan 10 menit pelukan hangat tanpa gangguan.
                  </span>
                </div>
              </div>

              {/* Click prompt */}
              <p className="text-[11px] text-pink-600/70 dark:text-pink-400/70 font-semibold mt-3 text-center">
                💡 Tips: Klik &quot;Ganti Mood&quot; di atas buat liat berbagai ekspresi ngambek dan manja dia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
