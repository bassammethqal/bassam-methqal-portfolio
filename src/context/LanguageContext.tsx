"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TranslationDictionary, translations } from "@/data/translations";

interface LanguageContextType {
  language: Language;
  direction: "rtl" | "ltr";
  t: TranslationDictionary;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "bm_preferred_language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default is Arabic as required
  const [language, setLanguageState] = useState<Language>("ar");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check saved preference on client mount
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "ar" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may fail in private mode; fallback to default "ar"
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    // Update HTML attributes according to the active language
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = language;

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const direction = language === "ar" ? "rtl" : "ltr";
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        t,
        toggleLanguage,
        setLanguage,
        isReady,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
