"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Layers,
  Cpu,
  Zap,
  Globe2,
  FileDown,
  Check,
  ShieldCheck,
  Boxes,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full border-b-[1.5px] border-[#111111] dark:border-[#262a33] px-4 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 pb-6 border-b-[1.5px] border-[#111111] dark:border-[#262a33] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-zinc-400 mb-2">
              Section 02 // Engineering Philosophy & Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0]">
              About Specification
            </h2>
          </div>
          <div className="font-mono text-xs text-[#111111]/60 dark:text-zinc-400 uppercase tracking-widest">
            PARADIGM: CLEAN ARCHITECTURE // REACTIVE
          </div>
        </div>

        {/* Two-Column Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Metadata Matrix */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-5 shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#22c55e]">
              <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-4 pb-2 border-b border-[#111111]/20 dark:border-zinc-800 flex items-center justify-between">
                <span>SYSTEM SPECIFICATION</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">v2.6</span>
              </div>

              <div className="divide-y divide-[#111111]/10 dark:divide-zinc-800 font-mono text-xs">
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">NAME:</span>
                  <span className="font-bold text-[#111111] dark:text-white">
                    {PORTFOLIO_DATA.personal.name}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">ROLE:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    Flutter Developer
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">ECOSYSTEMS:</span>
                  <span className="font-bold text-[#111111] dark:text-white">
                    Android & iOS
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">STATE ENGINE:</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">
                    GetX & Bloc
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">STORE DEPLOYMENTS:</span>
                  <span className="font-bold text-[#111111] dark:text-white">
                    4 Live Apps
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">AGENCY:</span>
                  <span className="font-bold text-[#111111] dark:text-white">
                    Sparktech Agency
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">LOCATION:</span>
                  <span className="font-bold text-[#111111] dark:text-white">
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className="py-2.5 flex justify-between items-center">
                  <span className="text-zinc-500 uppercase">EDUCATION:</span>
                  <span className="font-bold text-[#111111] dark:text-white text-right">
                    BSc CSE (Canadian Univ BD)
                  </span>
                </div>
              </div>

              {/* Direct CV Spec Link */}
              <div className="mt-5 pt-4 border-t border-[#111111]/20 dark:border-zinc-800">
                <a
                  href={PORTFOLIO_DATA.personal.cvFilename}
                  download="Huzaifa_Sani_CV.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 border-[1.5px] border-[#111111] dark:border-emerald-400 bg-[#111111] text-[#f4f4f0] dark:bg-emerald-400/10 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-black transition-colors"
                >
                  <FileDown size={14} />
                  <span>Download Full CV (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Architectural Pillars */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-white">
                {PORTFOLIO_DATA.about.heading}
              </h3>
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                {PORTFOLIO_DATA.about.summary}
              </p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {PORTFOLIO_DATA.about.detailedBio}
              </p>
            </div>

            {/* 4 Architectural Blueprint Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.about.architecturalPillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] transition-all hover:translate-x-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      0{i + 1} //
                    </span>
                    <h4 className="font-heading font-black text-sm uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
