"use client";

import React, { useState } from "react";

export type TabType = "home" | "quiz" | "kit" | "gallery";

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const navItems: { id: TabType; label: string; icon: string }[] = [
    { id: "home", label: "Beranda", icon: "🏠" },
    { id: "quiz", label: "Tes Badmood", icon: "🔮" },
    { id: "kit", label: "Kotak P3K Romantis", icon: "🚨" },
    { id: "gallery", label: "Kamus GIF Mood", icon: "🥺" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 sm:px-6">
      <div className="max-w-6xl mx-auto glass-card rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg border border-pink-300/40 dark:border-pink-800/40">
        {/* Brand / Title */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab("home")}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
            💖
          </div>
          <div>
            <span className="font-black text-lg sm:text-xl tracking-tight text-gradient-romantic block leading-tight">
              Detektor Mood Cewek
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-rose-500 dark:text-rose-300 tracking-wider uppercase block">
              Tes Badmood Pacar ✨
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-pink-100/60 dark:bg-pink-950/40 p-1.5 rounded-full border border-pink-200/50 dark:border-pink-800/30">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-md scale-105"
                    : "text-pink-900 dark:text-pink-200 hover:bg-pink-200/50 dark:hover:bg-pink-900/40"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Music Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleAudio}
            className={`relative flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
              isPlaying
                ? "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-300 animate-pulse-glow"
                : "bg-white/50 dark:bg-black/40 border-pink-300/60 text-pink-700 dark:text-pink-300 hover:bg-pink-50 dark:hover:bg-pink-950/60"
            }`}
            title="Aktifkan Musik Lofi Romantis"
          >
            <span className="text-base">{isPlaying ? "🎵" : "🔇"}</span>
            <span className="hidden sm:inline">
              {isPlaying ? "Lofi Romantis Aktif" : "Musik Mati"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center justify-around gap-1 mt-2 glass-card rounded-2xl p-1.5 border border-pink-300/40 shadow-sm">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl font-bold text-xs transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-sm"
                  : "text-pink-900 dark:text-pink-200"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Music toast notification */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 glass-card bg-gradient-to-r from-pink-500 to-rose-400 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce border border-white/20">
          <span className="text-2xl">✨</span>
          <div>
            <p className="font-bold text-sm">
              {isPlaying ? "Vibe Romantis Aktif! 💕" : "Musik Bisu 🤫"}
            </p>
            <p className="text-xs text-pink-100">
              {isPlaying ? "Memutar melodi manis biar dia gak ngambek..." : "Mode senyap untuk menghadapi silent treatment."}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
