"use client";

import React, { useEffect, useState } from "react";

interface Heart {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  icon: string;
  opacity: number;
}

const HEARTS = ["💖", "🌸", "✨", "💕", "💘", "💌", "🍬", "🎀", "🌺", "🥺"];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Generate random floating romantic emojis in background
    const items: Heart[] = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 16,
      left: Math.random() * 95,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
      icon: HEARTS[Math.floor(Math.random() * HEARTS.length)],
      opacity: Math.random() * 0.4 + 0.3,
    }));
    setHearts(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft glowing background ambient light orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-pink-400/20 via-rose-300/15 to-transparent blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-purple-400/20 via-pink-400/15 to-transparent blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-rose-300/15 via-lavender-300/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />

      {/* Floating emojis/hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] select-none transform-gpu"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `float-up ${heart.duration}s linear infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.icon}
        </div>
      ))}
    </div>
  );
}
