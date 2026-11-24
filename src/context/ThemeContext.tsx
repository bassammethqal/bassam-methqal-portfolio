"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PortfolioTheme = "dark" | "light";

interface ThemeContextType {
  theme: PortfolioTheme;
  toggleTheme: () => void;
  setTheme: (theme: PortfolioTheme) => void;
  isReady: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "bm_portfolio_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default is Dark Mode
  const [theme, setThemeState] = useState<PortfolioTheme>("dark");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "light" || saved === "minimal-luxury") {
        setThemeState("light");
      } else if (saved === "dark" || saved === "spatial-glass") {
        setThemeState("dark");
      }
    } catch {
      // fallback to dark
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme: PortfolioTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isReady }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
