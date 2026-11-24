"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
  Cpu,
  Compass,
  ShieldCheck,
  Radio,
  Sparkles,
  Github,
} from "lucide-react";

export function HeroSection() {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden bg-slate-50 dark:bg-[#080B11] bg-cyber-grid transition-colors duration-500"
    >
      {/* Ambient Glow Aura */}
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -start-32 w-[550px] h-[550px] rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 blur-[160px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 -end-32 w-[500px] h-[500px] rounded-full bg-[#2563EB]/8 dark:bg-[#2563EB]/12 blur-[160px] pointer-events-none -z-10"
      />

      {/* Edge-to-Edge Continuous Running Marquee */}
      <div className="w-full border-y border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0D131F]/90 py-3 backdrop-blur-xl overflow-hidden select-none mb-10 sm:mb-14 shadow-sm dark:shadow-lg dark:shadow-black/40">
        <div className="flex items-center gap-8 text-[11px] font-mono tracking-[0.25em] text-slate-600 dark:text-slate-400 uppercase whitespace-nowrap animate-marquee">
          <span className="text-[#2563EB] dark:text-[#3B82F6] flex items-center gap-1.5 font-bold">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#2563EB]" />
            <span>SYSTEM TELEMETRY</span>
          </span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
          <span>BASSAM METHQAL // CIS ARCHITECT</span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
          <span>SABA REGION UNIVERSITY (LEVEL 3)</span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
          <span>COORD: 15°26&apos;N 45°19&apos;E (MARIB, YEMEN)</span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
          <span>NEXT.JS 15 • TYPESCRIPT • TAILWIND</span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
          <span>GENERATIVE AI APIS &amp; LLM INTEGRATION</span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
          <span>RELATIONAL DATABASE MODELING &amp; SQL</span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
          <span>STATUS: READY FOR DIGITAL COLLABORATION</span>
          <span className="text-[#2563EB] dark:text-[#3B82F6]">✦</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        {/* Main Cockpit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center mb-16 lg:mb-20">
          
          {/* Main Terminal Dossier Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-7 sm:space-y-9 relative z-20"
          >
            {/* Top Identity Kicker Dossier */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#0D131F] border border-slate-200 dark:border-[#2563EB]/40 text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] shadow-xs backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                </span>
                <span>TERMINAL_SYS // 2026</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 shadow-xs backdrop-blur-md">
                <Cpu className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
                <span>{language === "ar" ? "جامعة إقليم سبأ — المستوى الثالث CIS" : "Saba Region Univ. — CIS Level 3"}</span>
              </div>
            </motion.div>

            {/* Monumental Headline Display */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[#2563EB]" />
                <span className="text-xs sm:text-[13px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] tracking-[0.25em] uppercase flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>&gt; {t.hero.greeting}</span>
                </span>
              </div>

              {/* Colossal Name in Solid Unified Luxury Typography */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] xl:text-[7rem] font-black tracking-tight text-slate-950 dark:text-white leading-[0.95] font-serifDisplay">
                {language === "ar" ? (
                  <span>
                    بسام <span className="text-[#2563EB] dark:text-[#3B82F6] drop-shadow-[0_0_25px_rgba(37,99,235,0.3)]">مثقال</span>
                  </span>
                ) : (
                  <span>
                    Bassam <span className="text-[#2563EB] dark:text-[#3B82F6] drop-shadow-[0_0_25px_rgba(37,99,235,0.3)]">Methqal</span>
                  </span>
                )}
              </h1>
            </motion.div>

            {/* Statement Console */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-[#0D131F]/85 border border-slate-200 dark:border-white/10 border-s-4 border-s-[#2563EB] backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pb-2 mb-3 border-b border-slate-200 dark:border-white/5">
                <span className="flex items-center gap-1.5 text-[#2563EB] dark:text-[#60A5FA] font-bold">
                  <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>SYSTEM_MANIFEST // ARCHITECTURE</span>
                </span>
                <span className="text-[#2563EB] dark:text-[#3B82F6] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] animate-pulse" />
                  STABLE_BUILD
                </span>
              </div>
              <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight font-thmanyah">
                {t.hero.title}
              </p>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {t.hero.description}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                {t.hero.ctaSecondary}
              </Button>
              <a
                href="https://github.com/bassammethqal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-mono font-bold text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white bg-white/90 dark:bg-[#0D131F]/90 hover:bg-slate-100 dark:hover:bg-[#131B2D] border border-slate-200 dark:border-white/10 hover:border-[#2563EB]/50 transition-all shadow-xs active:scale-95"
                title="GitHub: @bassammethqal"
              >
                <Github className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait Showcase with CONTINUOUS FLOATING & PULSING ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative z-10"
          >
            {/* Continuous floating wrapper */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative group w-full max-w-[295px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              {/* Corner Notches */}
              <div className="absolute -top-3 -start-3 w-7 h-7 border-t-2 border-s-2 border-[#2563EB] dark:border-[#3B82F6] z-30 pointer-events-none shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
              <div className="absolute -top-3 -end-3 w-7 h-7 border-t-2 border-e-2 border-[#2563EB] dark:border-[#3B82F6] z-30 pointer-events-none shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
              <div className="absolute -bottom-3 -start-3 w-7 h-7 border-b-2 border-s-2 border-[#2563EB] dark:border-[#3B82F6] z-30 pointer-events-none shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
              <div className="absolute -bottom-3 -end-3 w-7 h-7 border-b-2 border-e-2 border-[#2563EB] dark:border-[#3B82F6] z-30 pointer-events-none shadow-[0_0_12px_rgba(37,99,235,0.4)]" />

              {/* Continuous Pulsing Ambient Radar Halo */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.75, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-4 rounded-3xl bg-[#2563EB]/15 dark:bg-[#2563EB]/20 blur-2xl -z-10"
              />

              {/* Chassis Housing Frame */}
              <div className="relative p-3.5 sm:p-4 rounded-3xl bg-white/95 dark:bg-[#0D131F]/90 border border-slate-200 dark:border-white/15 backdrop-blur-2xl shadow-xl shadow-slate-200/60 dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-[#2563EB]/60">
                
                {/* Hardware Telemetry Header */}
                <div className="px-3.5 py-2 mb-3 rounded-xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                    </span>
                    <span>SYS_FRAME // 01</span>
                  </span>
                  <span className="text-[#2563EB] dark:text-[#3B82F6] font-bold">CIS • SABA UNIV</span>
                </div>

                {/* Inner Screen Frame with Profile Photo */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/15 shadow-inner">
                  <Image
                    src="/images/bassam-profile.jpg"
                    alt={
                      language === "ar"
                        ? "بسام مثقال - طالب نظم معلومات حاسوبية بجامعة إقليم سبأ"
                        : "Bassam Methqal - Computer Information Systems Student at Saba Region University"
                    }
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 440px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Shading Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Coordinates HUD */}
                  <div className="absolute top-3 end-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 dark:bg-[#080B11]/90 backdrop-blur-md text-[#60A5FA] text-[10px] font-mono border border-[#2563EB]/40 shadow-md">
                    <Compass className="w-3 h-3 text-[#3B82F6]" />
                    <span>15°26&apos;N 45°19&apos;E</span>
                  </div>

                  {/* Verified Identity Terminal Badge */}
                  <div className="absolute bottom-3 start-3 end-3 p-3 rounded-xl bg-slate-900/90 dark:bg-[#080B11]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
                      <span className="text-xs font-bold tracking-wide">
                        {language === "ar" ? "بسام مثقال" : "Bassam Methqal"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#60A5FA] uppercase font-bold">
                      {language === "ar" ? "اليمن — مأرب" : "Marib, Yemen"}
                    </span>
                  </div>
                </div>

                {/* Live Real-time Status Card with Continuous Heartbeat */}
                <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#080B11] border border-slate-200 dark:border-[#2563EB]/30 flex items-center justify-between text-xs font-mono shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                    </span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {language === "ar" ? "متاح للحلول الرقمية" : "Ready for Digital Solutions"}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase">
                    SYS // ACTIVE
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3-Part Telemetry System Ledgers */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-slate-200 dark:border-white/10"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="group p-6 rounded-2xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-md shadow-slate-200/50 dark:shadow-none cyber-card-hover relative overflow-hidden transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest">
                [ 01 // ACADEMIC ]
              </span>
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">
              {language === "ar" ? "المستوى الثالث" : "Level 3"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {language === "ar"
                ? "جامعة إقليم سبأ — نظم معلومات حاسوبية"
                : "Saba Region University — CIS"}
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="group p-6 rounded-2xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-md shadow-slate-200/50 dark:shadow-none cyber-card-hover relative overflow-hidden transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest">
                [ 02 // STACK ]
              </span>
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">
              Next.js 15 + AI
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              {language === "ar"
                ? "واجهات حديثة ودمج نماذج الذكاء الاصطناعي"
                : "Modern Web & LLM Integration"}
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="group p-6 rounded-2xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-md shadow-slate-200/50 dark:shadow-none cyber-card-hover relative overflow-hidden transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest">
                [ 03 // LOCATION ]
              </span>
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">
              {language === "ar" ? "مأرب، اليمن" : "Marib, Yemen"}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              15°26&apos;N 45°19&apos;E • UTC+3
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
