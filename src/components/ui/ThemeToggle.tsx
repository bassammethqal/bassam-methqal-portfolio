"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer border bg-white/65 dark:bg-[#0D131F]/65 backdrop-blur-xl text-slate-700 dark:text-[#60A5FA] border-slate-200/80 dark:border-white/10 hover:border-[#2563EB]/50 shadow-xs active:scale-95 whitespace-nowrap"
      aria-label="Toggle Light and Dark Mode"
      title={
        isDark
          ? language === "ar"
            ? "التبديل إلى الوضع الفاتح (Light Mode)"
            : "Switch to Light Mode"
          : language === "ar"
          ? "التبديل إلى الوضع الداكن (Dark Mode)"
          : "Switch to Dark Mode"
      }
    >
      <span className="relative flex items-center justify-center shrink-0">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#60A5FA] group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-[#2563EB] group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </span>
      <span className="hidden sm:inline-block whitespace-nowrap">
        {isDark
          ? language === "ar"
            ? "فاتح"
            : "Light"
          : language === "ar"
          ? "داكن"
          : "Dark"}
      </span>
    </button>
  );
}
