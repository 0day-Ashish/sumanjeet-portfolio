"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Regular.otf",
});

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Cinematic Loading Text */}
        <div className="overflow-hidden">
          <h2 
            className={`${clashDisplay.className} text-4xl lg:text-6xl text-white tracking-tighter transition-transform duration-1000 ease-out ${
              progress === 100 ? "translate-y-full" : "translate-y-0"
            }`}
          >
            Sumanjeet Prasad
          </h2>
        </div>
        
        {/* Progress Bar Container */}
        <div className="mt-8 w-64 lg:w-96 h-[1px] bg-white/10 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Decorative Shutter Effect */}
      <div 
        className={`absolute inset-0 border-[20px] border-black transition-all duration-1000 delay-300 ease-in-out ${
          progress === 100 ? "scale-[1.5] opacity-0" : "scale-100 opacity-100"
        }`}
      />
    </div>
  );
}
