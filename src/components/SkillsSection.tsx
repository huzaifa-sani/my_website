"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolioData";
import { Cpu, Terminal, Layers, Cloud, Wrench, CheckCircle } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  return (
    <section
      id="skills"
      className="w-full border-b-[1.5px] border-[#111111] dark:border-[#262a33] px-4 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 pb-6 border-b-[1.5px] border-[#111111] dark:border-[#262a33] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-zinc-400 mb-2">
              Section 03 // Technical Stack & Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0]">
              Capabilities
            </h2>
          </div>
          <div className="font-mono text-xs text-[#111111]/60 dark:text-zinc-400 uppercase tracking-widest">
            ENGINEERING SPEC // PRODUCTION TESTED
          </div>
        </div>

        {/* 4 Category Blueprint Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.skills.map((category: SkillCategory, index: number) => (
            <div
              key={category.code}
              className="relative border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-6 shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#22c55e] transition-all hover:translate-x-1"
            >

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#111111]/20 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-emerald-500 text-black font-mono text-[10px] font-black uppercase">
                    {category.code}
                  </span>
                  <h3 className="font-heading font-black text-lg uppercase tracking-tight text-[#111111] dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-zinc-400 uppercase">
                  {category.skills.length} MODULES
                </span>
              </div>

              <p className="font-sans text-xs text-zinc-600 dark:text-zinc-400 mb-6">
                {category.description}
              </p>

              {/* Skills Tags List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center justify-between p-2.5 border text-xs font-mono transition-colors ${
                      skill.highlight
                        ? "border-[#111111] dark:border-emerald-500/40 bg-zinc-50 dark:bg-emerald-950/10 text-[#111111] dark:text-zinc-100"
                        : "border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-[#0e1015] text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5 truncate">
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      )}
                      <span className="truncate">{skill.name}</span>
                    </span>
                    <span
                      className={`text-[10px] px-1 py-0.5 uppercase tracking-wider shrink-0 ${
                        skill.level === "Expert"
                          ? "text-emerald-600 dark:text-emerald-400 font-black"
                          : "text-zinc-400 dark:text-zinc-500"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Flutter & Dart Core Highlight Bar */}
        <div className="mt-8 p-5 border-[1.5px] border-[#111111] dark:border-[#272c35] bg-zinc-100 dark:bg-[#0f1117] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[#111111] dark:text-white font-bold">
              CROSS-PLATFORM ENGINE SPEC:
            </span>
            <span className="text-zinc-600 dark:text-zinc-400">
              Flutter 3.x (Impeller & Skia) • Dart 3.x (Null-Safety) • iOS 14+ • Android API 21+
            </span>
          </div>
          <a
            href="https://github.com/huzaifa-sani"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-white dark:bg-zinc-800 border border-[#111111] dark:border-zinc-700 text-[#111111] dark:text-white font-bold uppercase hover:bg-emerald-500 hover:text-black transition-colors"
          >
            Review GitHub Commits
          </a>
        </div>
      </div>
    </section>
  );
};
