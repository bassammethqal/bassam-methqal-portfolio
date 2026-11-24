"use client";

import { useTheme } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative min-h-screen transition-colors duration-500 overflow-x-hidden bg-slate-50 dark:bg-[#080B11] text-slate-900 dark:text-[#F8FAFC] selection:bg-[#2563EB] selection:text-white">
      {/* Unified Ambient Atmosphere (Single Signature Color: Electric Blue) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Unified Blue Ambient Aura */}
        <div className="absolute -top-32 -start-32 w-[700px] h-[700px] rounded-full bg-[#2563EB]/[0.06] dark:bg-[#2563EB]/[0.09] blur-[160px] animate-pulse" />
        <div className="absolute top-1/2 -end-40 w-[650px] h-[650px] rounded-full bg-[#2563EB]/[0.05] dark:bg-[#2563EB]/[0.07] blur-[160px]" />
        <div className="absolute -bottom-32 start-1/3 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.04] dark:bg-[#2563EB]/[0.06] blur-[150px]" />
        {/* Fine Architectural Blueprint Grid */}
        <div className="absolute inset-0 bg-cyber-grid opacity-25 dark:opacity-40" />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Interests Section */}
      <InterestsSection />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Journey Section */}
      <JourneySection />

      {/* 7. Education Section */}
      <EducationSection />

      {/* 8. Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
