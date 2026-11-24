"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

export function JourneySection() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Watermark */}
      <div className="absolute top-12 end-6 sm:end-12 text-[10rem] sm:text-[16rem] font-mono font-black text-slate-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none -z-0 leading-none">
        05
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number={t.journey.sectionNumber}
          title={t.journey.title}
          subtitle={t.journey.subtitle}
          lead={t.journey.lead}
        />

        <div className="relative max-w-4xl mx-auto mt-16 sm:mt-20">
          {/* Illuminated Data Spine in Unified Blue */}
          <div className="absolute top-4 bottom-4 start-6 sm:start-8 w-[2px] bg-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.6)]" />

          <div className="space-y-12 sm:space-y-14">
            {t.journey.milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex items-start gap-6 sm:gap-10 group"
              >
                {/* Node indicator with continuous pulse */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-[#080B11] border-2 border-[#2563EB]/40 group-hover:border-[#2563EB] flex items-center justify-center shrink-0 shadow-md dark:shadow-2xl transition-all duration-300"
                >
                  <span className="font-mono text-xs sm:text-sm font-black text-[#2563EB] dark:text-[#60A5FA]">
                    0{idx + 1}
                  </span>
                  <span className="absolute -inset-1 rounded-2xl bg-[#2563EB]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Milestone Card */}
                <div className="flex-1 p-7 sm:p-10 rounded-3xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg dark:cyber-card-shadow hover:border-[#2563EB]/50 hover:shadow-[0_20px_45px_rgba(37,99,235,0.25)] relative overflow-hidden transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 text-[#2563EB] dark:text-[#60A5FA] shadow-xs">
                      {milestone.period}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#3B82F6] uppercase tracking-wider">
                      {milestone.role}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-950 dark:text-white mb-3.5 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors duration-300 font-serifDisplay">
                    {milestone.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    {milestone.description}
                  </p>

                  <div className="space-y-2.5 pt-5 border-t border-slate-200 dark:border-white/10">
                    {milestone.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="max-w-2xl mx-auto mt-16 p-5 rounded-2xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl text-center text-xs font-mono text-slate-600 dark:text-slate-400 shadow-sm flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
          <span>{t.journey.notice}</span>
        </motion.div>
      </div>
    </section>
  );
}
