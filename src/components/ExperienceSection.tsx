"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full border-b-[1.5px] border-[#111111] dark:border-[#262a33] px-4 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 pb-6 border-b-[1.5px] border-[#111111] dark:border-[#262a33] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-zinc-400 mb-2">
              Section 04 // Work Experience & Engineering History
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0]">
              Deployment Log
            </h2>
          </div>
          <div className="font-mono text-xs text-[#111111]/60 dark:text-zinc-400 uppercase tracking-widest">
            LOG STATUS: PRODUCTION // VERIFIED
          </div>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-6 sm:p-8 shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#22c55e]"
            >

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-[#111111]/20 dark:border-zinc-800 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      CURRENT ENGAGEMENT // [ACTIVE]
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-zinc-600 dark:text-zinc-300 font-bold">
                    @ {exp.company}
                  </div>
                </div>

                <div className="flex flex-col md:items-end font-mono text-xs space-y-1 text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5 font-bold text-[#111111] dark:text-white">
                    <Calendar size={13} className="text-emerald-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="text-[10px] uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                    {exp.type}
                  </div>
                </div>
              </div>

              {/* Narrative Summary */}
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements Bullet Points */}
              <div className="space-y-3 mb-6">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Key Responsibilities & Deliverables:
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((item, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-[#111111]/20 dark:border-zinc-800 flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider mr-2">
                  TECHNOLOGY MANIFEST:
                </span>
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 border border-[#111111]/30 dark:border-zinc-700 font-mono text-xs font-bold text-[#111111] dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
