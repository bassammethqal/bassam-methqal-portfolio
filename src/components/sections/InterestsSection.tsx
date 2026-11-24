"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { LayoutGrid, Server, Palette, Cpu, Code2, Database, BrainCircuit, Terminal } from "lucide-react";

export function InterestsSection() {
  const { t, language } = useLanguage();

  const getInterestIcon = (id: string) => {
    switch (id) {
      case "web-dev":
        return <LayoutGrid className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6]" />;
      case "programming-cis":
        return <Server className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6]" />;
      case "ai-applications":
        return <Cpu className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6]" />;
      case "design-ux":
        return <Palette className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6]" />;
      default:
        return <LayoutGrid className="w-6 h-6 text-[#2563EB] dark:text-[#3B82F6]" />;
    }
  };

  const items = t.interests.items;
  const webItem = items.find((i) => i.id === "web-dev") || items[0];
  const cisItem = items.find((i) => i.id === "programming-cis") || items[1];
  const aiItem = items.find((i) => i.id === "ai-applications") || items[2];
  const designItem = items.find((i) => i.id === "design-ux") || items[3];

  return (
    <section id="interests" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-500">
      {/* Background Watermark */}
      <div className="absolute top-12 start-6 sm:start-12 text-[10rem] sm:text-[16rem] font-mono font-black text-slate-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none -z-0 leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number={t.interests.sectionNumber}
          title={t.interests.title}
          subtitle={t.interests.subtitle}
          lead={t.interests.lead}
        />

        {/* Asymmetric Bento Pavilions with Repeating Scroll & Continuous Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* BENTO 01: Web Development & Architecture (Wide - 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="lg:col-span-7 group p-6 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-[#2563EB]/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 group-hover:border-[#2563EB]/50 transition-all shadow-xs shrink-0">
                    {getInterestIcon(webItem.id)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest whitespace-nowrap">
                    PAVILION // 01
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-[#080B11] text-[10px] font-mono text-[#2563EB] dark:text-[#60A5FA] border border-slate-200 dark:border-[#2563EB]/30 whitespace-nowrap">
                  <Code2 className="w-3 h-3 text-[#2563EB] dark:text-[#3B82F6] shrink-0" />
                  <span>NEXT.JS 15 // TS</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3.5 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors font-serifDisplay">
                {webItem.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
                {webItem.description}
              </p>

              {/* Simulated Code Architecture Preview */}
              <div dir="ltr" className="p-4 rounded-2xl bg-slate-100/90 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 font-mono text-[11px] sm:text-xs text-slate-800 dark:text-slate-300 space-y-1.5 mb-6 shadow-inner text-left overflow-x-auto">
                <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500 pb-2 border-b border-slate-200 dark:border-white/5 whitespace-nowrap">
                  <span className="flex items-center gap-1 text-[#2563EB] dark:text-[#60A5FA] font-bold">
                    <Terminal className="w-3 h-3 text-[#2563EB]" />
                    <span>AppRouter.tsx</span>
                  </span>
                  <span className="text-[#2563EB] dark:text-[#3B82F6]">React 19 + TypeScript</span>
                </div>
                <p className="text-slate-900 dark:text-white font-bold whitespace-nowrap">
                  export async function <span className="text-[#2563EB] dark:text-[#60A5FA]">DigitalSolution</span>() {`{`}
                </p>
                <p className="pl-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  const data = await <span className="text-[#2563EB] dark:text-[#3B82F6]">fetchSystemsMetrics</span>(&apos;CIS-SRU&apos;);
                </p>
                <p className="pl-4 text-[#2563EB] dark:text-[#60A5FA] whitespace-nowrap">
                  return &lt;<span className="text-slate-900 dark:text-white">ResponsiveInterface</span> data={'{data}'} telemetry=&quot;active&quot; /&gt;;
                </p>
                <p className="text-slate-900 dark:text-white">{`}`}</p>
              </div>
            </div>

            {/* Topic Chips */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
              {webItem.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 rounded-lg group-hover:border-[#2563EB]/40 transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BENTO 02: Programming & Database CIS (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="lg:col-span-5 group p-6 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-[#2563EB]/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 group-hover:border-[#2563EB]/50 transition-all shadow-xs shrink-0">
                    {getInterestIcon(cisItem.id)}
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest whitespace-nowrap">
                    PAVILION // 02
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-[#080B11] text-[10px] font-mono text-[#2563EB] dark:text-[#60A5FA] border border-slate-200 dark:border-[#2563EB]/30 whitespace-nowrap">
                  <Database className="w-3 h-3 text-[#2563EB] dark:text-[#3B82F6] shrink-0" />
                  <span>SQL // 3NF</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3.5 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors font-serifDisplay">
                {cisItem.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {cisItem.description}
              </p>

              {/* Relational Database Matrix HUD */}
              <div dir="ltr" className="p-4 rounded-2xl bg-slate-100/90 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 font-mono text-xs space-y-2 mb-6 text-left overflow-x-auto">
                <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500 pb-2 border-b border-slate-200 dark:border-white/5 whitespace-nowrap">
                  <span>RELATIONAL SCHEMA</span>
                  <span className="text-[#2563EB] dark:text-[#60A5FA]">CIS_3RD_LEVEL</span>
                </div>
                <div className="text-[11px] text-slate-800 dark:text-slate-300 whitespace-nowrap">
                  <span className="text-[#2563EB] dark:text-[#3B82F6]">TABLE</span> Systems_Architecture (
                </div>
                <div className="pl-4 text-[10px] text-slate-600 dark:text-slate-400 space-y-0.5 whitespace-nowrap">
                  <div>id: <span className="text-[#2563EB] dark:text-[#60A5FA]">UUID PRIMARY KEY</span>,</div>
                  <div>specialty: <span className="text-slate-900 dark:text-white">VARCHAR(&quot;CIS&quot;)</span>,</div>
                  <div>relational_integrity: <span className="text-[#2563EB] dark:text-[#3B82F6]">BOOLEAN(TRUE)</span></div>
                </div>
                <div className="text-[11px] text-slate-800 dark:text-slate-300">);</div>
              </div>
            </div>

            {/* Topic Chips */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
              {cisItem.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 rounded-lg group-hover:border-[#2563EB]/40 transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BENTO 03: AI Applications & Integration (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="lg:col-span-5 group p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-[#2563EB]/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 group-hover:border-[#2563EB]/50 transition-all shadow-xs">
                    {getInterestIcon(aiItem.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest">
                    PAVILION // 03
                  </span>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-[#080B11] text-[10px] font-mono text-[#2563EB] dark:text-[#60A5FA] border border-slate-200 dark:border-[#2563EB]/30">
                  <BrainCircuit className="w-3 h-3 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>LLM // PIPELINE</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3.5 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors font-thmanyah">
                {aiItem.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                {aiItem.description}
              </p>

              {/* AI Streaming Telemetry Simulation */}
              <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 font-mono text-xs space-y-2 mb-6">
                <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 border-b border-slate-200 dark:border-white/5">
                  <span className="text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                    </span>
                    STREAMING_PROMPT
                  </span>
                  <span className="text-[#2563EB] dark:text-[#3B82F6]">LATENCY: 12ms</span>
                </div>
                <div className="text-[11px] text-slate-800 dark:text-slate-200">
                  &gt; model: <span className="text-[#2563EB] dark:text-[#60A5FA]">&quot;gemini-3.8-flash&quot;</span>
                </div>
                <div className="text-[11px] text-[#2563EB] dark:text-[#60A5FA]">
                  &gt; query: &quot;الهيكلة المثالية لمنظومة CIS&quot;
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 italic">
                  ✓ Response token generated: 142 tokens/sec
                </div>
              </div>
            </div>

            {/* Topic Chips */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
              {aiItem.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 rounded-lg group-hover:border-[#2563EB]/40 transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BENTO 04: UI/UX & Design Systems (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="lg:col-span-7 group p-8 sm:p-10 rounded-3xl bg-white/90 dark:bg-[#0D131F]/80 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-[#2563EB]/50 hover:shadow-[0_20px_50px_rgba(37,99,235,0.2)] flex flex-col justify-between relative overflow-hidden transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 group-hover:border-[#2563EB]/50 transition-all shadow-xs">
                    {getInterestIcon(designItem.id)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2563EB] dark:text-[#60A5FA] uppercase tracking-widest">
                    PAVILION // 04
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-[#080B11] text-[10px] font-mono text-[#2563EB] dark:text-[#60A5FA] border border-slate-200 dark:border-[#2563EB]/30">
                  <Palette className="w-3 h-3 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>DESIGN_SYSTEM</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3.5 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors font-thmanyah">
                {designItem.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
                {designItem.description}
              </p>

              {/* Design System Hierarchy Tokens */}
              <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 mb-6">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pb-2 mb-3 border-b border-slate-200 dark:border-white/5">
                  <span>UNIFIED PALETTE TOKENS</span>
                  <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">THMANYAH SANS &amp; SERIF</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2.5 rounded-xl bg-[#2563EB] text-white font-bold">COBALT #2563EB</div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#0D131F] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/15">PANEL</div>
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#080B11] text-slate-700 dark:text-slate-300 border border-[#2563EB]/30">CANVAS</div>
                </div>
              </div>
            </div>

            {/* Topic Chips */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
              {designItem.topics.map((topic, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 rounded-lg group-hover:border-[#2563EB]/40 transition-colors"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
