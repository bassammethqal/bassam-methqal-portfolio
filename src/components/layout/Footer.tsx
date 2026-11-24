"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolio-data";
import { ArrowUp, Instagram, Mail, MessageCircle, Activity, Github } from "lucide-react";

export function Footer() {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeSocials = portfolioData.profile.social.filter((item) => item.active && (item.url || item.handle));

  return (
    <footer className="border-t border-white/10 bg-[#080B11] pt-16 pb-12 relative overflow-hidden">
      {/* Top laser accent in unified blue */}
      <div className="absolute top-0 inset-x-0 h-px bg-[#2563EB]/60 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#080B11] text-[#3B82F6] border border-[#2563EB]/40 font-mono font-black text-xs tracking-wider shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
                BM
                <span className="absolute -bottom-1 -end-1 w-2.5 h-2.5 rounded-full bg-[#3B82F6] border-2 border-[#080B11] animate-pulse" />
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight block font-thmanyah">
                  {language === "ar" ? "بسام مثقال" : "Bassam Methqal"}
                </span>
                <span className="text-[11px] font-mono font-semibold text-[#60A5FA] block">
                  CIS // Saba Region University (Level 3)
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#60A5FA] pt-1">
              <Activity className="w-3.5 h-3.5 animate-pulse text-[#3B82F6]" />
              <span>MARIB_YEMEN // 15°26&apos;N 45°19&apos;E (UTC+3)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
              {language === "ar" ? "[ أقسام المنظومة ]" : "[ SYSTEM_DIRECTORY ]"}
            </span>
            <div className="grid grid-cols-2 gap-2.5 text-xs font-medium">
              <a href="#hero" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.home}
              </a>
              <a href="#about" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.about}
              </a>
              <a href="#interests" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.interests}
              </a>
              <a href="#skills" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.skills}
              </a>
              <a href="#projects" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.projects}
              </a>
              <a href="#journey" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.journey}
              </a>
              <a href="#education" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.education}
              </a>
              <a href="#contact" className="text-slate-400 hover:text-[#60A5FA] transition-colors">
                {t.nav.contact}
              </a>
            </div>
          </div>

          {/* Social and Return to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end gap-6">
            <div className="space-y-3 w-full md:w-auto">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block md:text-end">
                {language === "ar" ? "[ القنوات المعتمدة ]" : "[ DISPATCH_CHANNELS ]"}
              </span>
              <div className="flex flex-wrap gap-2 md:justify-end">
                <a
                  href="https://github.com/bassammethqal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#3B82F6] hover:border-[#2563EB]/50 transition-colors shadow-xs"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/bassam.methqal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#3B82F6] hover:border-[#2563EB]/50 transition-colors shadow-xs"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                {portfolioData.profile.email && (
                  <a
                    href={`mailto:${portfolioData.profile.email}`}
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#3B82F6] hover:border-[#2563EB]/50 transition-colors shadow-xs"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {portfolioData.profile.whatsapp && (
                  <a
                    href="https://wa.me/967773461637"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] dark:hover:text-[#3B82F6] hover:border-[#2563EB]/50 transition-colors shadow-xs"
                    aria-label="WhatsApp"
                    title="WhatsApp: +967 773461637"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>{language === "ar" ? "العودة للأعلى" : "TOP_OF_FILE"}</span>
              <div className="p-2 rounded-xl bg-[#0D131F] border border-white/10 group-hover:border-[#2563EB]/50 group-hover:bg-[#080B11] transition-all">
                <ArrowUp className="w-3.5 h-3.5 text-[#3B82F6] group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Colophon Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Bassam Methqal. {language === "ar" ? "كافة الحقوق محفوظة." : "All rights reserved."}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>ENGINE: NEXT.JS 15</span>
            <span>•</span>
            <span>TYPE: THMANYAH SANS &amp; SERIF</span>
            <span>•</span>
            <span>SYSTEM: CIS-SRU</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
