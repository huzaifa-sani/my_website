"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GraduationCap, Award, Languages, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const EducationCertifications: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full border-b-[1.5px] border-[#111111] dark:border-[#262a33] px-4 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 pb-6 border-b-[1.5px] border-[#111111] dark:border-[#262a33] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-zinc-400 mb-2">
              Section 06 // Academic Background & Professional Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0]">
              Credentials
            </h2>
          </div>
          <div className="font-mono text-xs text-[#111111]/60 dark:text-zinc-400 uppercase tracking-widest">
            ACADEMIC DEGREE // INDUSTRY CERTIFICATIONS
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Academic Qualifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-zinc-500 pb-2 border-b border-[#111111]/20 dark:border-zinc-800">
              <GraduationCap size={15} className="text-[#111111] dark:text-emerald-400" />
              <span>ACADEMIC QUALIFICATION</span>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-5 sm:p-6 shadow-[3px_3px_0px_0px_#111111] dark:shadow-[3px_3px_0px_0px_#1c202a]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                      {edu.status === "CURRENT" ? "PURSUING DEGREE // ACTIVE" : "GRADUATED // COMPLETED"}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 flex items-center gap-1">
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-xl uppercase tracking-tight text-[#111111] dark:text-white mb-1">
                    {edu.degree}
                  </h3>

                  <div className="font-mono text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5 mb-3">
                    <span className="font-bold text-sky-600 dark:text-sky-400">
                      {edu.institution}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Certifications & Languages */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-zinc-500 pb-2 border-b border-[#111111]/20 dark:border-zinc-800">
              <Award size={15} className="text-emerald-500" />
              <span>INDUSTRY CERTIFICATIONS</span>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="border-[1.5px] border-[#111111] dark:border-[#272c35] bg-white dark:bg-[#111319] p-4 flex items-center justify-between"
                >
                  <div>
                    <div className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                      ISSUED BY {cert.issuer} • {cert.year}
                    </div>
                    <div className="font-heading font-black text-sm uppercase text-[#111111] dark:text-white mt-0.5">
                      {cert.name}
                    </div>
                  </div>
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 ml-3" />
                </div>
              ))}
            </div>

            {/* Language Matrix */}
            <div className="mt-8 pt-4 border-t border-[#111111]/20 dark:border-zinc-800">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-zinc-500 mb-3">
                <Languages size={15} className="text-sky-500" />
                <span>COMMUNICATION LANGUAGES</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {PORTFOLIO_DATA.languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-3 border border-[#111111]/30 dark:border-zinc-800 bg-white dark:bg-[#12141a]"
                  >
                    <div className="font-heading font-black text-sm text-[#111111] dark:text-white">
                      {lang.name}
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {lang.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
