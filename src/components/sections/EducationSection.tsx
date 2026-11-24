"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Building2, Sparkles, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  const { t, language } = useLanguage();
  const academic = portfolioData.profile.academic;

  return (
    <section id="education" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Watermark */}
      <div className="absolute top-12 start-6 sm:start-12 text-[10rem] sm:text-[16rem] font-mono font-black text-slate-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none -z-0 leading-none">
        06
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number={t.education.sectionNumber}
          title={t.education.title}
          subtitle={t.education.subtitle}
          lead={t.education.lead}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Academic Credential Plaque with Repeating Scroll */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-12 rounded-3xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 border-s-4 border-s-[#2563EB] backdrop-blur-xl shadow-lg dark:cyber-card-shadow hover:border-[#2563EB]/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)] space-y-8 relative overflow-hidden transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 shrink-0 shadow-sm mt-1 text-[#2563EB] dark:text-[#3B82F6]">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-mono font-bold bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 uppercase">
                      {academic.qualification[language]}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 dark:text-white leading-tight font-serifDisplay">
                      {academic.major[language]}
                    </h3>
                    {academic.university ? (
                      <div className="flex items-center gap-2 pt-1 text-sm sm:text-base font-bold text-[#2563EB] dark:text-[#60A5FA]">
                        <Building2 className="w-4 h-4 shrink-0 text-[#2563EB]" />
                        <span>{academic.university[language]}</span>
                      </div>
                    ) : null}
                  </div>
                </div>

                <span className="self-start px-3.5 py-1.5 text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] bg-slate-100 dark:bg-[#080B11] border border-[#2563EB]/40 rounded-xl shrink-0 shadow-sm">
                  {academic.level[language]}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {t.education.description}
              </p>

              <div className="pt-5 border-t border-slate-200 dark:border-white/10">
                <span className="text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest block mb-3 font-mono">
                  [ {t.education.focusAreasTitle} ]
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {t.education.focusAreas.map((item, fIdx) => (
                    <span
                      key={fIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 hover:border-[#2563EB]/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Continuous Education / Self-Directed Study Card with Repeating Scroll */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg dark:cyber-card-shadow hover:border-[#2563EB]/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.25)] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 shadow-sm text-[#2563EB] dark:text-[#3B82F6]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest block mb-0.5">
                    AUTODIDACTIC // CONTINUOUS
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white font-thmanyah">
                    {t.education.certificationsTitle}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {t.education.certificationsLead}
              </p>

              <div className="space-y-3 pt-2">
                {t.education.selfStudyPoints.map((point, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#080B11] border border-slate-200/70 dark:border-white/5 flex items-center gap-3 text-xs font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6] shrink-0" />
                    <span className="font-bold text-slate-800 dark:text-white leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-[#2563EB] dark:text-[#60A5FA] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
                <span>CONTINUOUS ENHANCEMENT</span>
              </span>
              <span>2024 - 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
