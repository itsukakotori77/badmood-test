"use client";

import React, { useState } from "react";

export interface QuizResultData {
  category: string;
  severity: number;
  title: string;
  description: string;
  gifUrl: string;
  remedies: string[];
}

interface MoodQuizProps {
  onComplete: (result: QuizResultData) => void;
  onCancel: () => void;
}

interface Question {
  id: number;
  question: string;
  subtitle: string;
  gifUrl: string;
  gifTitle: string;
  options: {
    label: string;
    icon: string;
    points: { hangry: number; silent: number; cuddles: number };
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Gimana gaya chat dia ke kamu dalam 3 jam terakhir?",
    subtitle: "Analisis chat, ketikan, dan tanda-tanda ngambeknya dengan seksama...",
    gifUrl: "https://media.tenor.com/2b5TX3Dq3S8AAAAi/pout-anime.gif",
    gifTitle: "Jurus 'Gapapa.' 😤",
    options: [
      {
        label: "Cuma bales 'Gapapa.', 'Y', atau 'Oha' tanpa emoji sama sekali",
        icon: "💬",
        points: { hangry: 20, silent: 40, cuddles: 10 },
      },
      {
        label: "Di-read doang (Centang biru) / Hening cipta radio silence 🤫",
        icon: "📱",
        points: { hangry: 10, silent: 50, cuddles: 15 },
      },
      {
        label: "Ngehela napas panjang sambil tatapan kosong ke arah jauh",
        icon: "🥺",
        points: { hangry: 15, silent: 20, cuddles: 45 },
      },
      {
        label: "Nge-share Reels kucing makan jajan atau video kuliner di IG/TikTok",
        icon: "🐱",
        points: { hangry: 50, silent: 5, cuddles: 25 },
      },
    ],
  },
  {
    id: 2,
    question: "Kapan terakhir kali dia makan Boba, Kentang Goreng, Seblak, atau camilan? 🧋",
    subtitle: "Kadar gula darah adalah penyebab nomor 1 cewek tiba-tiba badmood!",
    gifUrl: "https://media.tenor.com/4J19_fN5J1cAAAAi/anime-eating.gif",
    gifTitle: "Darurat Asupan 🍟",
    options: [
      {
        label: "Baru aja dalam 2 jam terakhir (Dia kenyang & aman tenteram)",
        icon: "🥗",
        points: { hangry: 0, silent: 15, cuddles: 20 },
      },
      {
        label: "Udah lebih dari 4 jam yang lalu (ZONA BAHAYA HANGRY! 🚨)",
        icon: "🍟",
        points: { hangry: 60, silent: 10, cuddles: 10 },
      },
      {
        label: "Tadi pas ditawarin dia bilang 'Gak usah, gak lapar' (JEBAKAN BATMAN!)",
        icon: "🪤",
        points: { hangry: 70, silent: 30, cuddles: 5 },
      },
      {
        label: "Kita lagi program diet (Kesalahan fatal seorang cowok)",
        icon: "🥦",
        points: { hangry: 80, silent: 25, cuddles: 15 },
      },
    ],
  },
  {
    id: 3,
    question: "Pas kamu tanya 'Kamu kenapa / ada masalah apa?', dia jawab apa?",
    subtitle: "Gimana reaksi dia pas kamu coba ajak ngobrol baik-baik?",
    gifUrl: "https://media.tenor.com/0d9z6m2_9K0AAAAi/anime-stare.gif",
    gifTitle: "Tatapan Mencurigakan 👀",
    options: [
      {
        label: "Jawab: 'Gak ada apa-apa kok, cuma capek aja' 😤",
        icon: "😴",
        points: { hangry: 25, silent: 45, cuddles: 30 },
      },
      {
        label: "Ditanya 5 kali malah melotot kayak gunung berapi mau meletus 🌋",
        icon: "🔥",
        points: { hangry: 40, silent: 60, cuddles: 10 },
      },
      {
        label: "Gak berani nanya, takut kena semprot atau perang dunia",
        icon: "🛡️",
        points: { hangry: 20, silent: 40, cuddles: 35 },
      },
      {
        label: "Langsung nyodorin cokelat / jajan tanpa banyak tanya 🍫",
        icon: "🍫",
        points: { hangry: 5, silent: 10, cuddles: 50 },
      },
    ],
  },
  {
    id: 4,
    question: "Gimana bahasa tubuh dan tatapan mata dia sekarang?",
    subtitle: "Cek diagnosa akhir sebelum komputer menghitung rumus mood dia!",
    gifUrl: "https://media.tenor.com/62-2V1l1p0wAAAAi/anime-cuddle.gif",
    gifTitle: "Mode Burito Manja 🌯",
    options: [
      {
        label: "Gulung diri pakai selimut kayak burito sedih yang butuh pelukan 🌯🥺",
        icon: "🧸",
        points: { hangry: 15, silent: 15, cuddles: 70 },
      },
      {
        label: "Tatapan tajam setajam silet yang bisa melelehkan baja 👀🔥",
        icon: "⚡",
        points: { hangry: 35, silent: 70, cuddles: 5 },
      },
      {
        label: "Lagi scrolling GoFood / GrabFood / ShopeeFood di HP-nya 📱🍔",
        icon: "🍕",
        points: { hangry: 75, silent: 10, cuddles: 15 },
      },
      {
        label: "Senyum-senyum tipis, sebenarnya cuma pengen dimanja & diperhatikan 🥰",
        icon: "💖",
        points: { hangry: 5, silent: 5, cuddles: 60 },
      },
    ],
  },
];

export default function MoodQuiz({ onComplete, onCancel }: MoodQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [scores, setScores] = useState({ hangry: 0, silent: 0, cuddles: 0 });
  const [isCalculating, setIsCalculating] = useState(false);

  const currentQ = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const chosen = currentQ.options[selectedOption];
    const newScores = {
      hangry: scores.hangry + chosen.points.hangry,
      silent: scores.silent + chosen.points.silent,
      cuddles: scores.cuddles + chosen.points.cuddles,
    };
    setScores(newScores);
    setSelectedOption(null);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate final result
      setIsCalculating(true);
      setTimeout(() => {
        calculateResult(newScores);
      }, 1500);
    }
  };

  const calculateResult = (finalScores: {
    hangry: number;
    silent: number;
    cuddles: number;
  }) => {
    const total = finalScores.hangry + finalScores.silent + finalScores.cuddles;
    const maxScore = Math.max(
      finalScores.hangry,
      finalScores.silent,
      finalScores.cuddles,
    );

    let result: QuizResultData;

    if (maxScore === finalScores.hangry) {
      const severity = Math.min(
        99,
        Math.floor((finalScores.hangry / 200) * 100) + 40,
      );
      result = {
        category: "Hangry & Kurang Asupan Jajan",
        severity,
        title: "Darurat Hangry Level 5 🚨🍟",
        description:
          "Hasil diagnosa: Kadar gula darah dia anjlok di bawah batas normal! Pas cewek lagi 'hangry' (lapar jadi galak), kata 'Aku gapapa' itu sebenarnya sirine bahaya. JANGAN ajak debat atau logika. Cuma karbohidrat, seblak, dan boba manis yang bisa mengembalikan perdamaian dunia.",
        gifUrl: "https://media.tenor.com/4J19_fN5J1cAAAAi/anime-eating.gif",
        remedies: [
          "Beliin Boba Brown Sugar ukuran Large (less ice, 50% sugar, ekstra boba) sekarang juga 🧋",
          "GoFood-in Kentang Goreng hangat, Seblak, atau Ayam Krispi tanpa perlu nanya 🍟",
          "Bilang: 'Aku udah pesenin makanan kesukaan kamu, yuk nonton bareng' 📺",
          "JANGAN PERNAH ungkit kalimat 'Tadi katanya gak lapar' 🤫",
        ],
      };
    } else if (maxScore === finalScores.silent) {
      const severity = Math.min(
        99,
        Math.floor((finalScores.silent / 200) * 100) + 45,
      );
      result = {
        category: "Silent Treatment & Kurang Perhatian",
        severity,
        title: "Ratu Silent Treatment Penguasa Hening 👑🤫",
        description:
          "Hasil diagnosa: Kamu kemungkinan lupa tanggal penting, kelamaan main game, atau dia mimpi kamu selingkuh pas tidur! Hening cipta adalah kekuatan super dia. Satu-satunya obat penawar adalah kasih sayang bertubi-tubi dan mengalah tanpa syarat.",
        gifUrl: "https://media.tenor.com/p_oQk66gW9gAAAAi/anime-angry.gif",
        remedies: [
          "Minta maaf tulus tanpa pembelaan: 'Kamu bener sayang, aku yang salah, aku sayang banget sama kamu' 💐",
          "Kasih kado kejutan atau bawain martabak / dessert favoritnya 🍫",
          "Dengerin curhatan dia selama 15 menit penuh TANPA main HP 📱❌",
          "Puji dia: 'Hari ini kamu kelihatan cantik banget banget banget' ✨",
        ],
      };
    } else {
      const severity = Math.min(
        95,
        Math.floor((finalScores.cuddles / 200) * 100) + 35,
      );
      result = {
        category: "Butuh Perhatian & Cuddle Starved",
        severity,
        title: "Si Burito Manja Butuh Pelukan 🌯🥺",
        description:
          "Hasil diagnosa: Dia lagi mengalami krisis pelukan dan perhatian! Wajah cembetut dan ngambeknya cuma tameng buat ngelindungi hati kecilnya yang pengen diselimuti hangat, dicium keningnya, dan diperlakukan kayak tuan putri kesayangan.",
        gifUrl: "https://media.tenor.com/62-2V1l1p0wAAAAi/anime-cuddle.gif",
        remedies: [
          "Gulung dia pakai selimut hangat kayak burito sekarang juga 🧸",
          "Berikan pelukan hangat dan ciuman kening minimal 20 menit tanpa henti 😘",
          "Putarin film romantis atau drakor / anime favoritnya 🎬",
          "Elus kepalanya dan bilang kalau dia adalah orang paling berharga di dunia 💖",
        ],
      };
    }

    onComplete(result);
  };

  if (isCalculating) {
    return (
      <div className="w-full max-w-2xl mx-auto py-16 px-6 text-center glass-card rounded-3xl border border-pink-400 shadow-2xl flex flex-col items-center justify-center space-y-6 fade-scale-enter">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 border-8 border-pink-200 dark:border-pink-900 rounded-full animate-ping opacity-75" />
          <div className="w-20 h-20 border-8 border-rose-500 border-t-transparent rounded-full animate-spin" />
          <span className="absolute text-3xl animate-bounce">🔮</span>
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gradient-romantic">
            Menganalisis Rumus Mood Dia... ✨
          </h2>
          <p className="text-sm sm:text-base text-pink-800 dark:text-pink-200 mt-2 font-medium">
            Mencocokkan frekuensi helaan napas, jadwal jajan, dan database emoji cewek ngambek! 🥺💖
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6 fade-scale-enter">
      {/* Quiz Top Header & Progress */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-pink-300/80 dark:border-pink-700/60 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400">
              Pertanyaan {currentStep + 1} dari {QUESTIONS.length}
            </span>
          </div>
          <button
            onClick={onCancel}
            className="text-xs font-bold text-pink-600 dark:text-pink-400 hover:text-rose-600 underline"
          >
            Batal Tes ❌
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-pink-100 dark:bg-pink-950 rounded-full overflow-hidden p-0.5 mb-6 border border-pink-200 dark:border-pink-800">
          <div
            className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-full transition-all duration-500 relative flex items-center justify-end pr-1"
            style={{ width: `${progress}%` }}
          >
            <span className="text-[10px] leading-none">💖</span>
          </div>
        </div>

        {/* Grid for Question and GIF preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Question & Options Col */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-pink-900 dark:text-pink-900 leading-snug">
                {currentQ.question}
              </h2>
              <p className="text-xs sm:text-sm text-pink-700 dark:text-pink-300 mt-1 font-medium">
                {currentQ.subtitle}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${
                      isSelected
                        ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-rose-600 shadow-lg scale-[1.02]"
                        : "bg-white/60 dark:bg-black/40 border-pink-200/80 dark:border-pink-800/60 text-pink-900 dark:text-pink-100 hover:bg-pink-50 dark:hover:bg-pink-900/40 hover:border-pink-400"
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl p-2 rounded-xl bg-pink-100/50 dark:bg-pink-900/50 shadow-inner flex-shrink-0">
                      {opt.icon}
                    </span>
                    <span className="font-extrabold text-sm sm:text-base leading-snug">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center lg:flex-row flex-col justify-between pt-4">
              <button
                onClick={() => {
                  if (currentStep > 0) {
                    setCurrentStep(currentStep - 1);
                    setSelectedOption(null);
                  }
                }}
                disabled={currentStep === 0}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  currentStep === 0
                    ? "opacity-30 cursor-not-allowed text-pink-400"
                    : "text-pink-800 dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-pink-900/50"
                }`}
              >
                ⬅️ Sebelumnya
              </button>

              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`px-8 py-3 rounded-xl font-extrabold text-base transition-all duration-300 flex items-center gap-2 ${
                  selectedOption === null
                    ? "bg-pink-200 dark:bg-pink-900/50 text-pink-400 dark:text-pink-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg hover:scale-105 active:scale-95 animate-pulse-glow"
                }`}
              >
                <span>
                  {currentStep === QUESTIONS.length - 1
                    ? "✨ Lihat Hasil Diagnosa"
                    : "Pertanyaan Selanjutnya ➡️"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Col: Live Girl Reaction GIF */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center bg-pink-50/70 dark:bg-pink-950/40 p-4 sm:p-5 rounded-3xl border border-pink-300/60 dark:border-pink-800/50 shadow-inner">
            <span className="text-xs font-black uppercase tracking-wider text-rose-500 mb-2 block">
              Scanner Reaksi Cewek 📡
            </span>
            <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden shadow-md border-2 border-white/60 dark:border-pink-700/50 relative bg-pink-100 dark:bg-pink-900/40">
              <img
                src={currentQ.gifUrl}
                alt={currentQ.gifTitle}
                className="w-full h-full object-cover animate-pulse-glow"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-white/80 dark:bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl text-center border border-white/30">
                <span className="text-xs font-bold text-pink-900 dark:text-pink-100">
                  {currentQ.gifTitle}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-pink-700 dark:text-pink-300 font-medium mt-3 text-center leading-relaxed">
              💡 Perhatikan gimana ekspresi dia berubah pas kamu jawab pertanyaannya! Pilih jawaban di kiri untuk lanjut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
