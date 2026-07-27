"use client";

import React, { useState } from "react";

interface RemedyAction {
  id: string;
  name: string;
  icon: string;
  desc: string;
  boost: number;
  effectText: string;
}

const REMEDIES: RemedyAction[] = [
  {
    id: "boba",
    name: "Boba Brown Sugar Ukuran Large 🧋",
    icon: "🧋",
    desc: "Less ice, 50% sugar + ekstra boba. Sesajen perdamaian paling ampuh.",
    boost: 25,
    effectText: "Slurp! Gula darah naik seketika, tingkat ngambek berkurang 25%!",
  },
  {
    id: "fries",
    name: "Kentang Goreng Hangat / Seblak 🍟",
    icon: "🍟",
    desc: "Gurih renyah dengan saus sambal. Dia bakal ngambil punya kamu juga kok.",
    boost: 25,
    effectText: "Kriuk kriuk! Alarm hangry langsung padam tanpa sisa!",
  },
  {
    id: "roses",
    name: "99 Mawar Virtual & Chat Romantis 🌹",
    icon: "💐",
    desc: "Sebuket bunga ditemani paragraf panjang berisi pujian tulus.",
    boost: 20,
    effectText: "Dia tersipu malu dan langsung nge-screenshot chat kamu buat dimasukin ke Close Friends! 💌",
  },
  {
    id: "hug",
    name: "Pelukan Burito Selimut Hangat 🧸",
    icon: "🫂",
    desc: "Gulung dia pakai selimut dan cium keningnya sampai luluh.",
    boost: 15,
    effectText: "Kehangatan meresap! Dia langsung nyender dan berhenti ngehela napas. 🥰",
  },
  {
    id: "compliment",
    name: "Mantra Validasi Anti-Gagal ✨",
    icon: "👑",
    desc: "Bilang: 'Kamu cantik banget hari ini, dan kamu 100% bener kok.'",
    boost: 15,
    effectText: "Ego terselamatkan! Pertahanan silent treatment langsung hancur lebur! 💖",
  },
];

export default function EmergencyKit() {
  const [happiness, setHappiness] = useState(15);
  const [history, setHistory] = useState<string[]>([]);
  const [activeAnimation, setActiveAnimation] = useState<string | null>(null);

  const triggerRemedy = (item: RemedyAction) => {
    const nextVal = Math.min(100, happiness + item.boost);
    setHappiness(nextVal);
    setHistory((prev) => [item.effectText, ...prev.slice(0, 4)]);
    setActiveAnimation(item.icon);
    setTimeout(() => setActiveAnimation(null), 1200);
  };

  const resetKit = () => {
    setHappiness(15);
    setHistory([]);
  };

  // Determine Girl Mood GIF and status based on current happiness
  const getGirlMood = () => {
    if (happiness < 30) {
      return {
        title: "Status Bahaya: Ngambek & Hangry 😤",
        status: "Dia lagi ngabaikan chat kamu dan melotot ke dinding.",
        gifUrl: "https://media.tenor.com/p_oQk66gW9gAAAAi/anime-angry.gif",
        badgeColor: "bg-rose-500",
      };
    } else if (happiness < 65) {
      return {
        title: "Status: Nyemil & Mulai Luluh 🍟🥺",
        status: "Boba dan kentang gorengnya mulai bekerja! Pertahanannya mulai turun.",
        gifUrl: "https://media.tenor.com/4J19_fN5J1cAAAAi/anime-eating.gif",
        badgeColor: "bg-amber-500",
      };
    } else if (happiness < 95) {
      return {
        title: "Status: Mode Burito Manja 🧸🥰",
        status: "Hampir 100% happy! Dia siap buat dipeluk hangat dan nonton bareng.",
        gifUrl: "https://media.tenor.com/62-2V1l1p0wAAAAi/anime-cuddle.gif",
        badgeColor: "bg-purple-500",
      };
    } else {
      return {
        title: "100% PULIH: Super Happy & Tersipu Malu! 💖🎉",
        status: "MISI BERHASIL! Dia udah senyum, tersipu malu, dan makin sayang sama kamu!",
        gifUrl: "https://media.tenor.com/Y171y_h7cEwAAAAi/anime-happy.gif",
        badgeColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
      };
    }
  };

  const currentMood = getGirlMood();

  return (
    <div className="w-full max-w-5xl mx-auto py-6 px-4 sm:px-6 fade-scale-enter">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-extrabold text-xs uppercase tracking-wider mb-2">
          🚨 Kotak P3K Pacar Virtual 🚨
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-gradient-romantic tracking-tight">
          Penawar Badmood Instan
        </h1>
        <p className="text-sm sm:text-base text-pink-900/80 dark:text-pink-200/80 mt-2 font-medium">
          Dia lagi ngambek atau badmood sekarang? Klik tombol sesajen di bawah ini buat ngasih resep romantis virtual dan lihat meteran kebahagiaan dia naik sampai 100%! 💕
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Live Girl Happiness Monitor */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="glass-card rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-pink-300/80 dark:border-pink-700/60 relative overflow-hidden flex flex-col items-center">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500/20 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />

            {/* Happiness Meter Progress */}
            <div className="w-full mb-4">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider mb-1.5">
                <span className="text-pink-900 dark:text-pink-100">Meteran Kebahagiaan Cewek:</span>
                <span className="text-rose-600 dark:text-rose-400 font-black text-base">{happiness}%</span>
              </div>
              <div className="w-full h-4 bg-pink-100 dark:bg-pink-950 rounded-full overflow-hidden p-0.5 border border-pink-300 dark:border-pink-800 shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-emerald-400 rounded-full transition-all duration-500 relative flex items-center justify-end pr-1"
                  style={{ width: `${happiness}%` }}
                >
                  <span className="text-[10px]">✨</span>
                </div>
              </div>
            </div>

            {/* GIF Viewport */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-pink-800 bg-pink-100 dark:bg-pink-950 flex items-center justify-center group">
              <img
                src={currentMood.gifUrl}
                alt={currentMood.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />

              {/* Floating Animation Confetti when clicking button */}
              {activeAnimation && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xs z-20 animate-fade-in">
                  <span className="text-7xl animate-bounce transform scale-150 drop-shadow-2xl">
                    {activeAnimation}
                  </span>
                </div>
              )}

              {/* Status Badge overlay */}
              <div className="absolute bottom-3 inset-x-3 glass-card bg-white/90 dark:bg-black/85 backdrop-blur-md p-3 rounded-xl border border-white/40 shadow-lg">
                <span className="text-xs font-black text-pink-950 dark:text-pink-100 block">
                  {currentMood.title}
                </span>
                <span className="text-[10px] font-medium text-pink-800 dark:text-pink-300 block mt-0.5 leading-snug">
                  {currentMood.status}
                </span>
              </div>
            </div>

            {/* Reset Button */}
            <div className="w-full flex justify-between items-center mt-4 pt-3 border-t border-pink-200/60 dark:border-pink-800/60">
              <span className="text-xs font-bold text-pink-700 dark:text-pink-300">
                {happiness === 100 ? "🎉 Senyum Kembali 100%!" : "💡 Terus klik sesajen di bawah!"}
              </span>
              <button
                onClick={resetKit}
                className="text-xs font-extrabold text-rose-500 hover:text-rose-700 underline px-2 py-1 rounded hover:bg-pink-100/50 transition-colors"
              >
                🔄 Reset Meteran
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Remedy Action Buttons */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glass-card rounded-3xl p-6 shadow-xl border border-pink-300/60 dark:border-pink-800/50">
            <h2 className="text-lg font-black text-pink-950 dark:text-pink-50 mb-1 flex items-center gap-2">
              <span>🧰 Pilih Sesajen yang Mau Dikasih:</span>
            </h2>
            <p className="text-xs text-pink-700 dark:text-pink-300 mb-5">
              Klik item di bawah buat kirim sesajen virtual dan lihat ngambeknya luntur secara real-time!
            </p>

            <div className="grid grid-cols-1 gap-3">
              {REMEDIES.map((rem) => (
                <button
                  key={rem.id}
                  onClick={() => triggerRemedy(rem)}
                  disabled={happiness >= 100}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${
                    happiness >= 100
                      ? "bg-pink-100/40 dark:bg-pink-950/20 border-pink-200/40 text-pink-400 opacity-60 cursor-not-allowed"
                      : "bg-white/80 dark:bg-black/40 border-pink-200/80 dark:border-pink-800/60 text-pink-950 dark:text-pink-100 hover:border-rose-500 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50/50 dark:hover:from-pink-950/60 dark:hover:to-rose-950/40 hover:shadow-lg hover:scale-[1.02] active:scale-95"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl p-2.5 rounded-2xl bg-pink-100/70 dark:bg-pink-900/60 shadow-inner group-hover:scale-110 transition-transform">
                      {rem.icon}
                    </span>
                    <div>
                      <h3 className="font-black text-sm sm:text-base leading-snug group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                        {rem.name}
                      </h3>
                      <p className="text-xs text-pink-700 dark:text-pink-300 mt-0.5 font-medium">
                        {rem.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 font-black text-xs group-hover:bg-rose-500 group-hover:text-white transition-all shadow-xs">
                      +{rem.boost}% Happy
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Live Action Log / Feed */}
          {history.length > 0 && (
            <div className="glass-card rounded-2xl p-4 border border-pink-300/60 bg-pink-50/60 dark:bg-pink-950/40 animate-fade-in">
              <h3 className="text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2.5 flex items-center gap-1.5">
                <span>⚡ Log Efektivitas Sesajen Secara Live:</span>
              </h3>
              <div className="space-y-2">
                {history.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-xs font-bold text-pink-900 dark:text-pink-100 bg-white/70 dark:bg-black/50 p-2.5 rounded-xl border border-pink-200/50 dark:border-pink-800/50 flex items-center gap-2 shadow-2xs"
                  >
                    <span className="text-rose-500">👉</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
