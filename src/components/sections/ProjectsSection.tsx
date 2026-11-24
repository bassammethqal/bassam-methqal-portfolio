"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolioData, ProjectItem } from "@/data/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe, Activity, LayoutTemplate, Sparkles, Terminal } from "lucide-react";
import { cn } from "@/utils/cn";

export function ProjectsSection() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { key: "all", label: language === "ar" ? "كافة المشاريع (3)" : "All Projects (3)" },
    { key: "studyflow", label: language === "ar" ? "مشروع الطالب" : "Student Project" },
    { key: "malaebi", label: language === "ar" ? "مشروع حجز ملاعب" : "Stadium Booking" },
    { key: "mareb-events", label: language === "ar" ? "مشروع حجز صالات" : "Halls Booking" },
  ];

  const filteredProjects = portfolioData.projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.id === activeFilter;
  });

  const renderProjectVisualMockup = (projectId: string) => {
    switch (projectId) {
      case "studyflow":
        return (
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between gap-3 bg-slate-100 dark:bg-[#080B11] text-slate-800 dark:text-slate-200 font-mono text-xs select-none border-b border-slate-200 dark:border-white/10">
            <div dir="ltr" className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-1.5 font-mono truncate">study-flow-mu-pearl.vercel.app</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#2563EB] dark:text-[#60A5FA] px-2 py-0.5 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 border border-[#2563EB]/30 dark:border-[#2563EB]/40 font-bold whitespace-nowrap shrink-0">
                REACT + NEON DB
              </span>
            </div>
            
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-xs dark:shadow-md">
              <div className="min-w-0">
                <span dir="ltr" className="text-[10px] text-[#2563EB] dark:text-[#60A5FA] font-bold block">STUDYFLOW // v4.1 ACADEMIC</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block font-thmanyah mt-0.5">منصة تنظيم حياة ومقررات الطالب</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5 mt-1">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                  </span>
                  <span>متابعة المقررات والجداول والمهام الأكاديمية</span>
                </span>
              </div>
              <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#2563EB] text-white text-[10px] sm:text-[11px] font-black shadow-[0_0_15px_rgba(37,99,235,0.4)] whitespace-nowrap shrink-0">
                {language === "ar" ? "نظام الطالب" : "STUDENT_SYS"}
              </div>
            </div>

            <div dir="ltr" className="flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] text-slate-500 font-mono">
              <span>STACK: VITE • EXPRESS • NEON DB</span>
              <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">LIVE DEPLOYMENT</span>
            </div>
          </div>
        );

      case "malaebi":
        return (
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between gap-3 bg-slate-100 dark:bg-[#080B11] text-slate-800 dark:text-slate-200 font-mono text-xs select-none border-b border-slate-200 dark:border-white/10">
            <div dir="ltr" className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-1.5 font-mono truncate">malaebi-player-psi.vercel.app</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#2563EB] dark:text-[#60A5FA] px-2 py-0.5 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 border border-[#2563EB]/30 dark:border-[#2563EB]/40 font-bold whitespace-nowrap shrink-0">
                17-SCREEN PWA + NESTJS
              </span>
            </div>

            <div className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-xs dark:shadow-md">
              <div className="min-w-0">
                <span dir="ltr" className="text-[10px] text-[#2563EB] dark:text-[#60A5FA] font-bold block">PITCH BOOKING // REALTIME</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block font-thmanyah mt-0.5">ملاعبي — حجز الملاعب بالوقت الفعلي</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5 mt-1">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                  </span>
                  <span>حجز الفترات ومنع التضارب عبر OTP</span>
                </span>
              </div>
              <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#2563EB] text-white text-[10px] sm:text-[11px] font-black shadow-[0_0_15px_rgba(37,99,235,0.4)] whitespace-nowrap shrink-0">
                {language === "ar" ? "حجز ملاعب" : "BOOKING_PWA"}
              </div>
            </div>

            <div dir="ltr" className="flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] text-slate-500 font-mono">
              <span>NESTJS • SUPABASE • POSTGRESQL</span>
              <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">THMANYAH SANS UI</span>
            </div>
          </div>
        );

      case "mareb-events":
        return (
          <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between gap-3 bg-slate-100 dark:bg-[#080B11] text-slate-800 dark:text-slate-200 font-mono text-xs select-none border-b border-slate-200 dark:border-white/10">
            <div dir="ltr" className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-1.5 font-mono truncate">marebevents.vercel.app</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#2563EB] dark:text-[#60A5FA] px-2 py-0.5 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 border border-[#2563EB]/30 dark:border-[#2563EB]/40 font-bold whitespace-nowrap shrink-0">
                NEXT.JS 15 + DRIZZLE ORM
              </span>
            </div>
            
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 shadow-xs dark:shadow-md">
              <div className="min-w-0">
                <span dir="ltr" className="text-[10px] text-[#2563EB] dark:text-[#60A5FA] font-bold block">HALL &amp; VENUE RESERVATION</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white block font-thmanyah mt-0.5">مناسبات مأرب — حجز الصالات والقاعات</span>
                <span className="text-[10px] text-slate-600 dark:text-slate-300 font-bold flex items-center gap-1.5 mt-1">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                  </span>
                  <span>تقويم التوفر السحابي وإدارة الحجوزات</span>
                </span>
              </div>
              <div className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#2563EB] text-white text-[10px] sm:text-[11px] font-black shadow-[0_0_15px_rgba(37,99,235,0.4)] whitespace-nowrap shrink-0">
                {language === "ar" ? "حجز صالات" : "VENUES_APP"}
              </div>
            </div>

            <div dir="ltr" className="flex flex-wrap items-center justify-between gap-1.5 text-[9px] sm:text-[10px] text-slate-500 font-mono">
              <span>DATABASE: POSTGRESQL (SUPABASE)</span>
              <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">MARIB CITY</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Watermark */}
      <div className="absolute top-12 start-6 sm:start-12 text-[10rem] sm:text-[16rem] font-mono font-black text-slate-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none -z-0 leading-none">
        04
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number={t.projects.sectionNumber}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          lead={t.projects.lead}
        />

        {/* Filter Tabs (Solid Unified Accent) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-slate-200 dark:border-white/10">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer",
                activeFilter === tab.key
                  ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] font-black"
                  : "bg-white dark:bg-[#0D131F] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-xs"
              )}
            >
              [ {tab.label} ]
            </button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence & Repeating Scroll */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: ProjectItem) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group rounded-3xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-lg dark:cyber-card-shadow hover:border-[#2563EB]/50 hover:shadow-[0_20px_45px_rgba(37,99,235,0.25)] overflow-hidden flex flex-col justify-between transition-all duration-300"
              >
                {/* Visual Mockup Header */}
                <div className="min-h-[215px] sm:h-64 relative overflow-hidden bg-slate-100 dark:bg-[#080B11]">
                  {renderProjectVisualMockup(project.id)}
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-9 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-[10px] font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-[#2563EB]/30">
                        {project.categoryLabel[language]}
                      </span>
                      <span className="text-[10px] font-mono font-semibold text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                        </span>
                        <span>{project.badge[language]}</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors font-serifDisplay">
                      {project.title[language]}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Tech Chips & Direct Action Links */}
                  <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      {project.liveLinks && project.liveLinks.length > 0 ? (
                        project.liveLinks.map((linkItem, lIdx) => (
                          <a
                            key={lIdx}
                            href={linkItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer active:scale-95",
                              linkItem.role === "owner"
                                ? "text-[#2563EB] dark:text-[#60A5FA] bg-[#2563EB]/10 dark:bg-[#2563EB]/15 hover:bg-[#2563EB]/20 border border-[#2563EB]/30 dark:border-[#2563EB]/40"
                                : "text-white bg-[#2563EB] hover:bg-[#1d4ed8] shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                            )}
                            title={linkItem.label[language]}
                          >
                            <Globe className="w-3.5 h-3.5" />
                            <span>{linkItem.label[language]}</span>
                            <ExternalLink className="w-3 h-3 rtl:rotate-180" />
                          </a>
                        ))
                      ) : project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1d4ed8] shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all cursor-pointer active:scale-95"
                          title={language === "ar" ? "معاينة المنصة مباشرة" : "Live Demo"}
                        >
                          <Globe className="w-4 h-4" />
                          <span>{language === "ar" ? "المعاينة المباشرة" : "Live Demo"}</span>
                          <ExternalLink className="w-3.5 h-3.5 rtl:rotate-180" />
                        </a>
                      ) : null}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-[#080B11] hover:bg-slate-200 dark:hover:bg-[#131B2D] border border-slate-200 dark:border-white/10 hover:border-[#2563EB]/40 transition-all cursor-pointer shadow-xs active:scale-95"
                          title={language === "ar" ? "مستودع الكود على جيتهب" : "GitHub Repository"}
                        >
                          <Github className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                          <span>{language === "ar" ? "مستودع الكود" : "Source Code"}</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
