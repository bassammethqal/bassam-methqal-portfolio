"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio-data";
import { Menu, X, ArrowUpRight, Activity, Github } from "lucide-react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#interests", label: t.nav.interests },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#journey", label: t.nav.journey },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 backdrop-blur-2xl border-b",
        isScrolled
          ? "bg-white/80 dark:bg-[#080B11]/80 border-slate-200/80 dark:border-white/10 shadow-[0_10px_35px_rgba(15,23,42,0.08)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.65)] py-3"
          : "bg-white/55 dark:bg-[#080B11]/55 border-slate-200/50 dark:border-white/5 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Monogram & Name */}
          <a
            href="#hero"
            className="group flex items-center gap-2 sm:gap-3 transition-opacity hover:opacity-90 cursor-pointer shrink-0"
            aria-label="Bassam Methqal Portfolio Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 dark:bg-[#0D131F]/90 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center font-mono font-black text-xs sm:text-sm tracking-wider border border-[#2563EB]/30 transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              BM
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] animate-pulse border-2 border-white dark:border-[#080B11]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-lg text-slate-950 dark:text-white leading-tight tracking-tight flex items-center gap-2 font-serifDisplay whitespace-nowrap">
                <span>{language === "ar" ? "بسام مثقال" : "Bassam Methqal"}</span>
                <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#2563EB]/10 dark:bg-[#2563EB]/15 text-[#2563EB] dark:text-[#60A5FA] border border-[#2563EB]/25 dark:border-[#2563EB]/30">
                  <Activity className="w-2.5 h-2.5 animate-pulse text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>CIS-L3</span>
                </span>
              </span>
              <span className="hidden sm:block text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 tracking-wide whitespace-nowrap">
                {portfolioData.profile.shortRole[language]}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Glassmorphic Pill Container) */}
          <nav
            className="hidden xl:flex items-center gap-0.5 p-1.5 rounded-2xl bg-white/60 dark:bg-[#0D131F]/60 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-xs"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-[#2563EB]/10 dark:hover:bg-white/5 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + Language Switcher + GitHub + Contact CTA + Mobile Menu Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* GitHub Profile Quick Link */}
            <a
              href="https://github.com/bassammethqal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/65 dark:bg-[#0D131F]/65 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:border-[#2563EB]/40 transition-all shadow-xs"
              aria-label="GitHub Profile"
              title="GitHub: bassammethqal"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Theme Direction Switcher */}
            <ThemeToggle />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* CTA Button */}
            <div className="hidden sm:block">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="whitespace-nowrap"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                {t.nav.contact}
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-white/65 dark:bg-[#0D131F]/65 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 cursor-pointer shadow-xs"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu with Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden mt-4 p-5 rounded-2xl bg-white/90 dark:bg-[#0D131F]/90 border border-slate-200 dark:border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 overflow-hidden"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#2563EB] dark:hover:text-[#60A5FA] hover:bg-[#2563EB]/10 dark:hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200 dark:border-white/10 mt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.contact}
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
