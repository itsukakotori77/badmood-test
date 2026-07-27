"use client";

import React, { useState } from "react";
import FloatingHearts from "@/components/badmood/FloatingHearts";
import Navbar, { TabType } from "@/components/badmood/Navbar";
import HeroSection from "@/components/badmood/HeroSection";
import MoodQuiz, { QuizResultData } from "@/components/badmood/MoodQuiz";
import MoodResult from "@/components/badmood/MoodResult";
import EmergencyKit from "@/components/badmood/EmergencyKit";
import MoodGallery from "@/components/badmood/MoodGallery";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [quizResult, setQuizResult] = useState<QuizResultData | null>(null);
  const [isInQuizMode, setIsInQuizMode] = useState(false);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (tab !== "quiz") {
      setIsInQuizMode(false);
    } else if (!quizResult) {
      setIsInQuizMode(true);
    }
  };

  const handleStartQuiz = () => {
    setQuizResult(null);
    setIsInQuizMode(true);
  };

  const handleQuizComplete = (result: QuizResultData) => {
    setQuizResult(result);
    setIsInQuizMode(false);
  };

  const handleQuizCancel = () => {
    setIsInQuizMode(false);
    setActiveTab("home");
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between selection:bg-rose-500 selection:text-white">
      {/* Background Animated Emojis & Light Orbs */}
      <FloatingHearts />

      {/* Navigation Header */}
      <div className="relative z-10">
        <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      {/* Main Dynamic Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full py-4 sm:py-8">
        {activeTab === "home" && (
          <HeroSection setActiveTab={handleTabChange} />
        )}

        {activeTab === "quiz" && (
          <div className="w-full">
            {isInQuizMode || !quizResult ? (
              <MoodQuiz
                onComplete={handleQuizComplete}
                onCancel={handleQuizCancel}
              />
            ) : (
              <MoodResult
                result={quizResult}
                onRetake={handleStartQuiz}
                setActiveTab={handleTabChange}
              />
            )}
          </div>
        )}

        {activeTab === "kit" && <EmergencyKit />}

        {activeTab === "gallery" && <MoodGallery />}
      </div>

      {/* Romantic Footer */}
      <footer className="relative z-10 w-full py-8 px-4 mt-12 border-t border-pink-200/60 dark:border-pink-900/60 glass-card bg-white/40 dark:bg-black/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-bounce">💖</span>
            <div>
              <span className="font-black text-sm text-gradient-romantic block">
                Detektor Mood & Tes Badmood Cewek
              </span>
              <span className="text-xs text-pink-700 dark:text-pink-300">
                Alat diagnosa kode cewek nomor #1 & kotak P3K romantis instan.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold text-pink-800 dark:text-pink-200">
            <button
              onClick={() => handleTabChange("quiz")}
              className="hover:text-rose-600 transition-colors"
            >
              Tes Badmood ✨
            </button>
            <button
              onClick={() => handleTabChange("kit")}
              className="hover:text-rose-600 transition-colors"
            >
              Kotak P3K 🚨
            </button>
            <button
              onClick={() => handleTabChange("gallery")}
              className="hover:text-rose-600 transition-colors"
            >
              Kamus GIF 🥺
            </button>
          </div>

          <div className="text-xs text-pink-600 dark:text-pink-400 font-medium">
            <span>Dibuat dengan 💕 & 🧋 Boba untuk Cewek & Pacar di Seluruh Dunia</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
