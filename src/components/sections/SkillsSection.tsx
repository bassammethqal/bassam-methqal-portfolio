"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, GraduationCap, Database, Wrench, Sparkles, Terminal } from "lucide-react";

export function SkillsSection() {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);

  const categoryIcons = [
    <Code2 key="code" className="w-5 h-5 text-[#3B82F6]" />,
    <GraduationCap key="grad" className="w-5 h-5 text-[#3B82F6]" />,
    <Database key="db" className="w-5 h-5 text-[#3B82F6]" />,
    <Wrench key="wrench" className="w-5 h-5 text-[#3B82F6]" />,
  ];

  const categoryCodes = ["CAT // 01", "CAT // 02", "CAT // 03", "CAT // 04"];

  const getStatusBadge = (status?: string) => {
    if (!status) return "bg-slate-100 dark:bg-[#080B11] text-slate-500 dark:text-slate-400 border-slate-200 dark:border-white/10";
    return "bg-[#2563EB]/10 dark:bg-[#2563EB]/15 text-[#2563EB] dark:text-[#60A5FA] border-[#2563EB]/30 dark:border-[#2563EB]/40 font-bold";
  };

  const categories = t.skills.categories;
  const filteredCategories = selectedFilter === null ? categories : [categories[selectedFilter]];

  return (
    <section id="skills" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Cyber Watermark */}
      <div className="absolute top-12 end-6 sm:end-12 text-[10rem] sm:text-[16rem] font-mono font-black text-slate-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none -z-0 leading-none">
        03
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number={t.skills.sectionNumber}
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          lead={t.skills.lead}
        />

        {/* Telemetry Filter Pills (Solid Accent - No Multi-Gradients) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-6 border-b border-slate-200 dark:border-white/10">
          <button
            onClick={() => setSelectedFilter(null)}
            className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
              selectedFilter === null
                ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] font-black"
                : "bg-white dark:bg-[#0D131F] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-xs"
            }`}
          >
            [ {language === "ar" ? "كافة المجموعات" : "ALL_SPECIMENS"} ]
          </button>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedFilter(idx)}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                selectedFilter === idx
                  ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] font-black"
                  : "bg-white dark:bg-[#0D131F] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-xs"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Telemetry Matrix Grid with AnimatePresence & Repeating Scroll */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => {
              const actualIdx = selectedFilter !== null ? selectedFilter : idx;
              return (
                <motion.div
                  key={category.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 sm:p-10 rounded-3xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg dark:cyber-card-shadow hover:border-[#2563EB]/50 hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 shadow-sm text-[#2563EB] dark:text-[#3B82F6]">
                          {categoryIcons[actualIdx % categoryIcons.length]}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest block mb-0.5">
                            {categoryCodes[actualIdx % categoryCodes.length]}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-serifDisplay">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#3B82F6] px-2.5 py-1 rounded bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10">
                        {category.skills.length} ITEMS
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="space-y-3">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="group/item p-3.5 rounded-2xl bg-slate-50 dark:bg-[#080B11]/70 border border-slate-200/60 dark:border-white/5 hover:border-[#2563EB]/40 flex items-center justify-between gap-3 transition-all duration-200"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] group-hover/item:scale-150 transition-transform" />
                            <span className="text-sm font-bold text-slate-800 dark:text-white group-hover/item:text-[#2563EB] dark:group-hover/item:text-[#60A5FA] transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          {skill.status && (
                            <span
                              className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-lg border ${getStatusBadge(
                                skill.status
                              )}`}
                            >
                              {skill.status}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 text-[#2563EB] dark:text-[#60A5FA]">
                      <Terminal className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
                      <span>CIS_COMPETENCY_VERIFIED</span>
                    </span>
                    <span className="text-[#2563EB] dark:text-[#3B82F6] font-bold">INDEX: 0{actualIdx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
