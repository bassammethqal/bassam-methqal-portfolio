"use client";

import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  lead?: string;
  align?: "start" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  title,
  subtitle,
  lead,
  align = "start",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-16 sm:mb-20 md:mb-24 relative",
        isCenter ? "text-center mx-auto max-w-4xl" : "max-w-4xl",
        className
      )}
    >
      {/* Unified Telemetry Header Badge */}
      <div
        className={cn(
          "flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6",
          isCenter ? "justify-center" : "justify-start"
        )}
      >
        {number && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-mono font-bold tracking-widest text-[#2563EB] dark:text-[#60A5FA] bg-slate-100 dark:bg-[#0D131F] border border-slate-200 dark:border-[#2563EB]/40 rounded-lg shadow-xs backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] animate-pulse" />
            <span>MODULE // {number}</span>
          </div>
        )}
        <span className="hidden sm:inline-block w-8 h-px bg-slate-300 dark:bg-white/10" />
        {subtitle && (
          <span className="text-xs sm:text-[12px] font-mono font-bold tracking-[0.2em] uppercase text-[#2563EB] dark:text-[#60A5FA]">
            {subtitle}
          </span>
        )}
      </div>

      {/* Main Title - High-Contrast in Both Modes */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight font-serifDisplay">
        {title}
      </h2>

      {/* Lead Narrative */}
      {lead && (
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-3xl">
          {lead}
        </p>
      )}

      {/* Unified Accent Rule */}
      <div
        className={cn(
          "mt-6 flex items-center gap-2",
          isCenter ? "justify-center" : "justify-start"
        )}
      >
        <span className="h-0.5 w-12 rounded-full bg-[#2563EB]" />
        <span className="h-0.5 w-2 rounded-full bg-[#2563EB] dark:bg-[#60A5FA] animate-pulse" />
      </div>
    </motion.div>
  );
}
