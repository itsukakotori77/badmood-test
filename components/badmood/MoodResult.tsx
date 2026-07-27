"use client";

import React, { useState } from "react";
import { QuizResultData } from "./MoodQuiz";
import { TabType } from "./Navbar";

interface MoodResultProps {
  result: QuizResultData;
  onRetake: () => void;
  setActiveTab: (tab: TabType) => void;
}

export default function MoodResult({ result, onRetake, setActiveTab }: MoodResultProps) {
  const [checkedRemedies, setCheckedRemedies] = useState<boolean[]>(
    new Array(result.remedies.length).fill(false)
  );
  const [showCelebration, setShowCelebration] = useState(false);

  const toggleRemedy = (idx: number) => {
    const next = [...checkedRemedies];
    next[idx] = !next[idx];
    setCheckedRemedies(next);

    // If all checked, trigger celebratory animation
    if (next.every((val) => val === true)) {
      setShowCelebration(true);
    }
  };

  const allDone = checkedRemedies.every((val) => val === true);

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 fade-scale-enter">
      {/* Top Banner Alert */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-rose-400 dark:border-rose-600 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-rose-500/30 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Diagnosis Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-pink-200/80 dark:border-pink-800/80 text-center sm:text-left">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-rose-500 text-white font-extrabold text-xs uppercase tracking-wider mb-2 shadow-sm animate-pulse">
              🚨 Diagnosa Badmood Selesai 🚨
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-gradient-romantic leading-tight">
              {result.title}
            </h1>
            <p className="text-sm font-bold text-pink-800 dark:text-pink-300 mt-1">
              Kategori: <span className="text-rose-600 dark:text-rose-400 underline">{result.category}</span>
            </p>
          </div>

          {/* Severity Badge */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-rose-500 to-purple-600 text-white p-4 rounded-3xl shadow-xl border-2 border-white/40 min-w-[130px]">
            <span className="text-3xl sm:text-4xl font-black">{result.severity}%</span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest mt-0.5">
              Meteran Badmood
            </span>
          </div>
        </div>

        {/* Main Grid: Description & GIF */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* GIF Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full h-64 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-pink-700 relative group">
              <img
                src={result.gifUrl}
                alt={result.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 inset-x-3 bg-white/85 dark:bg-black/80 backdrop-blur-md p-2.5 rounded-2xl border border-white/30 text-center">
                <span className="text-xs font-black text-pink-950 dark:text-pink-100 block">
                  Vibe Dia Sekarang 🥺👉👈
                </span>
              </div>
            </div>
          </div>

          {/* Diagnosis Explanation */}
          <div className="lg:col-span-7 space-y-4">
            <div className="glass-card p-5 rounded-2xl bg-white/70 dark:bg-black/40 border border-pink-300/80">
              <h3 className="text-base font-black text-pink-950 dark:text-pink-100 mb-2 flex items-center gap-2">
                <span>🔬 Analisis Ilmiah Asmara:</span>
              </h3>
              <p className="text-sm text-pink-900/90 dark:text-pink-200/90 leading-relaxed font-medium">
                {result.description}
              </p>
            </div>

            {/* Severity Warning Alert */}
            <div className="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 p-4 rounded-r-2xl">
              <div className="flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <p className="text-xs font-bold text-amber-900 dark:text-amber-200">
                    Peringatan Keras untuk Cowok / Pasangan:
                  </p>
                  <p className="text-xs text-amber-800 dark:text-amber-300 mt-0.5">
                    JANGAN PERNAH nanya &quot;Kamu masih marah ya?&quot; atau bilang &quot;Kamu lebay banget sih&quot;. Ikuti daftar resep dokter asmara di bawah ini sekarang juga!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Romantic Prescription Checklist */}
        <div className="bg-gradient-to-br from-pink-50/90 to-purple-50/80 dark:from-pink-950/60 dark:to-purple-950/60 p-6 rounded-3xl border-2 border-pink-300/80 dark:border-pink-800/80 shadow-inner">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-black text-pink-950 dark:text-pink-100 flex items-center gap-2">
              <span>💊 Daftar Resep Dokter Asmara yang Wajib Dilakukan:</span>
            </h3>
            <span className="text-xs font-bold bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full">
              {checkedRemedies.filter(Boolean).length} / {result.remedies.length} Selesai
            </span>
          </div>

          <div className="space-y-3">
            {result.remedies.map((remedy, idx) => {
              const isChecked = checkedRemedies[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleRemedy(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                    isChecked
                      ? "bg-rose-500 text-white border-rose-600 shadow-md scale-[1.01]"
                      : "bg-white/80 dark:bg-black/50 border-pink-200 dark:border-pink-800/80 text-pink-900 dark:text-pink-100 hover:border-pink-400"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-extrabold text-sm border-2 flex-shrink-0 transition-colors ${
                      isChecked
                        ? "bg-white text-rose-600 border-white"
                        : "border-pink-400 text-transparent"
                    }`}
                  >
                    ✓
                  </div>
                  <span className={`font-bold text-sm sm:text-base leading-snug ${isChecked ? "line-through opacity-90" : ""}`}>
                    Langkah {idx + 1}: {remedy}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Celebration Toast when all completed */}
          {allDone && (
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-center font-extrabold text-base shadow-xl animate-bounce flex items-center justify-center gap-3">
              <span className="text-2xl">🎉💖✨</span>
              <span>Semua Resep Telah Dilaksanakan! Mood dia udah kembali 100% Happy & Gak Ngambek Lagi!</span>
              <span className="text-2xl">🥰✨</span>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-pink-200/80 dark:border-pink-800/80">
          <button
            onClick={onRetake}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-card text-pink-900 dark:text-pink-200 font-bold text-sm hover:bg-pink-100 dark:hover:bg-pink-900/50 transition-all flex items-center justify-center gap-2 border border-pink-300/80"
          >
            <span>🔄 Tes Ulang Buat Mood / Cewek Lain</span>
          </button>

          <button
            onClick={() => setActiveTab("kit")}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 text-white font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 animate-pulse-glow"
          >
            <span>🚨 Buka Kotak P3K Romantis Sekarang ✨</span>
            <span className="text-xl">🧋🌹🫂</span>
          </button>
        </div>
      </div>
    </div>
  );
}
