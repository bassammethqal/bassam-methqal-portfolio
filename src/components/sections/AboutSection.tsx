"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Layers, Zap, Terminal, Database, Sparkles, Compass } from "lucide-react";

export function AboutSection() {
  const { t, language } = useLanguage();

  const pillarIcons = [
    <Database key="db" className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6]" />,
    <Layers key="layers" className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6]" />,
    <Zap key="zap" className="w-5 h-5 text-[#2563EB] dark:text-[#3B82F6]" />,
  ];

  const moduleCodes = ["MOD // 01", "MOD // 02", "MOD // 03"];

  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-500">
      {/* Background Watermark */}
      <div className="absolute top-12 end-6 sm:end-12 text-[10rem] sm:text-[16rem] font-mono font-black text-slate-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none -z-0 leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number={t.about.sectionNumber}
          title={t.about.title}
          subtitle={t.about.subtitle}
          lead={t.about.lead}
        />

        {/* Tactical Pull-Quote Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-16 p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 border-s-4 border-s-[#2563EB] backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#2563EB] dark:text-[#60A5FA] mb-3 font-bold">
              <Terminal className="w-4 h-4 text-[#2563EB]" />
              <span>CORE_PHILOSOPHY // MANIFESTO</span>
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight font-thmanyah">
              &ldquo;
              {language === "ar"
                ? "أرى في نظم المعلومات الأساس الهيكلي المتين، وفي تطوير الويب والواجهات التعبير البصري الأكثر حيوية لبناء تجارب رقمية نافعة."
                : "I see Information Systems as the structural core, and modern web development as the visual medium to craft meaningful digital experiences."}
              &rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest">
              <span>BASSAM METHQAL</span>
              <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
              <span>CIS // SABA REGION UNIVERSITY</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Hardware Identity Dossier Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-white/95 dark:bg-[#0D131F]/85 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden">
              {/* Dossier Header Tag */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    IDENTITY_SYS // 2026
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#2563EB] dark:text-[#60A5FA] font-bold">
                  REF: CIS-SRU-L3
                </span>
              </div>

              {/* Profile Avatar & Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#2563EB]/50 shadow-md shrink-0">
                  <Image
                    src="/images/bassam-profile.jpg"
                    alt={language === "ar" ? "بسام مثقال" : "Bassam Methqal"}
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight font-thmanyah">
                    {language === "ar" ? "بسام مثقال" : "Bassam Methqal"}
                  </h4>
                  <p className="text-xs text-[#2563EB] dark:text-[#60A5FA] font-semibold font-mono">
                    {language === "ar" ? "طالب نظم معلومات حاسوبية" : "CIS Undergraduate"}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {language === "ar" ? "جامعة إقليم سبأ — المستوى الثالث" : "Saba Region University — Lvl 3"}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
              </div>

              {/* Technical Blueprint Footnote */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 text-[#2563EB] dark:text-[#60A5FA] font-bold">
                  <Compass className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>MARIB // YEMEN</span>
                </span>
                <span className="text-[#2563EB] dark:text-[#3B82F6] font-semibold">AUTHENTIC PROFILE</span>
              </div>
            </div>
          </motion.div>

          {/* 3 Pillars Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {t.about.pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group p-7 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-md shadow-slate-200/50 dark:shadow-none hover:border-[#2563EB]/50 hover:shadow-[0_15px_35px_rgba(37,99,235,0.2)] relative overflow-hidden transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
                      {pillarIcons[idx]}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] px-2.5 py-1 rounded bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10">
                      {moduleCodes[idx]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors font-thmanyah">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Sparkles className="w-3 h-3 text-[#2563EB] dark:text-[#3B82F6]" />
                    <span>VERIFIED CORE COMPETENCY</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
