"use client";

import React, { useState } from "react";

interface MoodCardData {
  id: string;
  title: string;
  category: "hangry" | "silent" | "cuddle" | "happy";
  gifUrl: string;
  whatSheSays: string;
  whatSheMeans: string;
  dangerLevel: string;
  dangerColor: string;
  remedy: string;
  remedyIcon: string;
}

const MOOD_GALLERY_DATA: MoodCardData[] = [
  {
    id: "pout",
    title: "Jurus 'Aku Gapapa' 🥺",
    category: "hangry",
    gifUrl: "https://media.tenor.com/2b5TX3Dq3S8AAAAi/pout-anime.gif",
    whatSheSays: "\"Aku gapapa kok. Terserah kamu aja.\"",
    whatSheMeans: "Aku KENAPA-NAPA! Kalau kamu beneran 'terserah', siap-siap perang dunia. Beliin boba sekarang juga.",
    dangerLevel: "🚨 BAHAYA (Level 4)",
    dangerColor: "text-rose-500 bg-rose-500/10 border-rose-500/30",
    remedy: "Boba Brown Sugar + Kentang",
    remedyIcon: "🧋🍟",
  },
  {
    id: "snack",
    title: "Serangan Begal Makanan 🍟",
    category: "hangry",
    gifUrl: "https://media.tenor.com/4J19_fN5J1cAAAAi/anime-eating.gif",
    whatSheSays: "\"Gak usah pesen buat aku, nanti aku minta punya kamu dikit aja.\"",
    whatSheMeans: "Aku bakal ngabisin 80% kentang goreng dan ayam krispi kamu. Pesen ukuran ekstra besar atau kamu bakal kelaparan.",
    dangerLevel: "🚨 DARURAT (Level 5)",
    dangerColor: "text-amber-600 bg-amber-500/10 border-amber-500/30",
    remedy: "Pesen 2x Porsi Kentang Goreng",
    remedyIcon: "🍟🍟",
  },
  {
    id: "silent",
    title: "Tatapan Hening Mematikan 👀",
    category: "silent",
    gifUrl: "https://media.tenor.com/p_oQk66gW9gAAAAi/anime-angry.gif",
    whatSheSays: "*Radio Silence / Bales 'Y', 'Oh', 'K' doang*",
    whatSheMeans: "Kamu lupa tanggal anniv, kelamaan main game, atau tadi malam nafas kamu kerasa terlalu kencang pas aku lagi mau tidur.",
    dangerLevel: "🔥 EKSTREM (Level 5)",
    dangerColor: "text-purple-600 bg-purple-500/10 border-purple-500/30",
    remedy: "Minta Maaf Tulus + Cokelat",
    remedyIcon: "💐🍫",
  },
  {
    id: "burrito",
    title: "Selimut Burito Sedih 🌯",
    category: "cuddle",
    gifUrl: "https://media.tenor.com/62-2V1l1p0wAAAAi/anime-cuddle.gif",
    whatSheSays: "\"Tinggalin aku sendiri deh, aku cuma ngantuk.\"",
    whatSheMeans: "JANGAN TINGGALIN AKU! Selimutin aku dan peluk yang erat sambil bilang kalau aku lucu.",
    dangerLevel: "🧸 SEDANG (Level 3)",
    dangerColor: "text-pink-600 bg-pink-500/10 border-pink-500/30",
    remedy: "20 Menit Pelukan & Cium Kening",
    remedyIcon: "🫂🧸",
  },
  {
    id: "stare",
    title: "Tatapan Nunggu Perhatian 👀",
    category: "cuddle",
    gifUrl: "https://media.tenor.com/0d9z6m2_9K0AAAAi/anime-stare.gif",
    whatSheSays: "*Neliatin kamu terus pas kamu lagi main game / scroll TikTok*",
    whatSheMeans: "Waktu 30 menit main game kamu udah habis. Sekarang waktunya fokus dan perhatikan pacar kamu.",
    dangerLevel: "⚠️ PERINGATAN (Level 3)",
    dangerColor: "text-amber-500 bg-amber-500/10 border-amber-500/30",
    remedy: "Matikan PC / HP & Nonton Bareng",
    remedyIcon: "📺🍿",
  },
  {
    id: "happy",
    title: "Si Manja Tersipu Malu 🥰",
    category: "happy",
    gifUrl: "https://media.tenor.com/Y171y_h7cEwAAAAi/anime-happy.gif",
    whatSheSays: "\"Kamu pacar terbaik di dunia! 💖\"",
    whatSheMeans: "Boba, seblak, dan pelukannya berhasil! Aku sayang banget sama kamu dan gak ngambek lagi.",
    dangerLevel: "💖 AMAN (Level 0)",
    dangerColor: "text-emerald-600 bg-emerald-500/10 border-emerald-500/30",
    remedy: "Pertahankan Kasih Sayang",
    remedyIcon: "💖✨",
  },
];

export default function MoodGallery() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "✨ Semua Mood" },
    { id: "hangry", label: "🍟 Hangry & Makanan" },
    { id: "silent", label: "🤫 Silent Treatment" },
    { id: "cuddle", label: "🧸 Butuh Pelukan" },
    { id: "happy", label: "🥰 Happy & Kenyang" },
  ];

  const filteredData =
    filter === "all"
      ? MOOD_GALLERY_DATA
      : MOOD_GALLERY_DATA.filter((item) => item.category === filter);

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-4 sm:px-6 fade-scale-enter">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <span className="inline-block px-4 py-1 rounded-full bg-pink-100 dark:bg-pink-950 text-rose-600 dark:text-rose-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          🥺 Ensiklopedia Rahasia Cewek 📖
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-gradient-romantic tracking-tight">
          Kamus GIF Mood & Arti Kode Cewek
        </h1>
        <p className="text-sm sm:text-base text-pink-900/80 dark:text-pink-200/80 mt-2 font-medium">
          Suka bingung sama maksud di balik ekspresi atau kode dia? Jelajahi database GIF mood cewek, terjemahkan bahasa rahasianya, dan temukan obat penawarnya! 💕
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md scale-105"
                  : "glass-card text-pink-900 dark:text-pink-200 hover:bg-pink-100/60 dark:hover:bg-pink-900/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Mood Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((card) => (
          <div
            key={card.id}
            className="glass-card rounded-3xl overflow-hidden border-2 border-pink-300/70 dark:border-pink-800/60 shadow-xl flex flex-col justify-between group glass-card-hover"
          >
            {/* GIF Viewport */}
            <div className="relative w-full h-56 overflow-hidden bg-pink-100 dark:bg-pink-950/60 border-b border-pink-200/60 dark:border-pink-800/60">
              <img
                src={card.gifUrl}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border shadow-xs backdrop-blur-md ${card.dangerColor}`}
                >
                  {card.dangerLevel}
                </span>
              </div>
            </div>

            {/* Card Content & Secret Translator */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-black text-pink-950 dark:text-pink-50 leading-snug">
                  {card.title}
                </h3>

                {/* Secret Translator Box */}
                <div className="mt-3 space-y-2 bg-pink-50/80 dark:bg-pink-950/40 p-3.5 rounded-2xl border border-pink-200/60 dark:border-pink-800/50">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-pink-500 block">
                      💬 Apa Kata Dia:
                    </span>
                    <p className="text-xs font-bold text-pink-950 dark:text-pink-100 italic mt-0.5">
                      {card.whatSheSays}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-pink-200/50 dark:border-pink-800/50">
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-500 block">
                      🔮 Maksud Sebenarnya:
                    </span>
                    <p className="text-xs font-medium text-pink-900 dark:text-pink-200 mt-0.5 leading-relaxed">
                      {card.whatSheMeans}
                    </p>
                  </div>
                </div>
              </div>

              {/* Remedy Footer */}
              <div className="pt-3 border-t border-pink-200/60 dark:border-pink-800/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400 block uppercase">
                    Resep Penawar:
                  </span>
                  <span className="text-xs font-black text-rose-600 dark:text-rose-400 block mt-0.5">
                    {card.remedy}
                  </span>
                </div>
                <span className="text-2xl p-2 rounded-xl bg-pink-100 dark:bg-pink-900/60 shadow-xs group-hover:scale-110 transition-transform">
                  {card.remedyIcon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
