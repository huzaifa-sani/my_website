"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationCertifications } from "@/components/EducationCertifications";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen draft-grid text-[#111111] dark:text-[#f4f4f0] overflow-x-hidden selection:bg-emerald-400 selection:text-black">
      {/* Interactive Command Palette (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Top Engineering Coordinate Header */}
      <Header onOpenCommand={() => setCommandPaletteOpen(true)} />

      {/* Main Assembly */}
      <main className="w-full">
        {/* Section 01: Hero & Executive Profile */}
        <Hero />

        {/* Section 02: Architectural Specification & About */}
        <AboutSection />

        {/* Section 03: Capabilities & Technical Stack */}
        <SkillsSection />

        {/* Section 04: Work Experience Log */}
        <ExperienceSection />

        {/* Section 05: Project Manifest & Live Store Apps */}
        <ProjectsSection />

        {/* Section 06: Education & Certifications */}
        <EducationCertifications />

        {/* Section 07: Telemetry & Contact Form */}
        <ContactSection />
      </main>

      {/* Technical Blueprint Footer */}
      <Footer />
    </div>
  );
}
