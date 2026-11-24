"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { cn } from "@/utils/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center p-1 rounded-xl bg-white/65 dark:bg-[#0D131F]/65 border border-slate-200/80 dark:border-white/10 shadow-xs text-xs font-mono font-bold backdrop-blur-xl whitespace-nowrap",
        className
      )}
      role="group"
      aria-label="Language selection"
    >
      <div className="flex items-center ps-2 pe-1 text-[#2563EB] dark:text-[#60A5FA]">
        <Globe className="w-3.5 h-3.5" />
      </div>

      <button
        onClick={() => setLanguage("ar")}
        className={cn(
          "px-2.5 py-1 rounded-lg transition-all duration-200 font-bold cursor-pointer text-[11px] whitespace-nowrap",
          language === "ar"
            ? "bg-[#2563EB] text-white shadow-[0_0_12px_rgba(37,99,235,0.4)] font-black"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
        )}
        aria-label="التبديل إلى اللغة العربية"
        aria-pressed={language === "ar"}
      >
        عربي
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "px-2.5 py-1 rounded-lg transition-all duration-200 font-bold cursor-pointer text-[11px] whitespace-nowrap",
          language === "en"
            ? "bg-[#2563EB] text-white shadow-[0_0_12px_rgba(37,99,235,0.4)] font-black"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
        )}
        aria-label="Switch to English language"
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
