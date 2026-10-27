"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  FileDown,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";

export const Hero: React.FC = () => {

  return (
    <section className="relative w-full border-b-[1.5px] border-[#111111] dark:border-[#262a33] px-4 sm:px-8 md:px-14 lg:px-20 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Spec Sheet & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Spec Tag */}
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-zinc-400 mb-4 sm:mb-6">
              SPEC SHEET — DEVELOPER PROFILE
            </div>

            {/* Reference Typography: HUZAIFA (Solid) + SANI (Outline) */}
            <div className="space-y-1 mb-6 sm:mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0] leading-[0.88]">
                Huzaifa
              </h1>
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-heading font-black uppercase tracking-wide blueprint-outline leading-[0.88]">
                Sani
              </div>
            </div>

            {/* Note 01 Profile Brief */}
            <div className="w-full max-w-xl mb-8">
              <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#111111]/60 dark:text-zinc-400 mb-1.5">
                NOTE 01 — PROFILE BRIEF
              </div>
              <div className="border-l-[2px] border-[#111111] dark:border-[#f4f4f0] pl-3.5 py-1 font-mono text-xs sm:text-sm text-[#111111] dark:text-zinc-200 leading-relaxed">
                Flutter Developer specializing in robust cross-platform mobile architectures, high-performance Android & iOS products, and scalable backends with Dart, GetX, Firebase, and RESTful APIs. Delivering 8+ mobile projects with 4 live applications on Apple App Store & Google Play Store.
              </div>
            </div>

            {/* Action Bar matching screenshot */}
            <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {/* Button 1: Execute Project (with corner frame brackets) */}
              <a
                href="#contact"
                className="corner-frame relative border-[1.5px] border-[#111111] dark:border-[#f4f4f0] px-4 py-2.5 bg-transparent hover:bg-[#111111] hover:text-[#f4f4f0] dark:hover:bg-[#f4f4f0] dark:hover:text-[#111111] transition-colors font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 group cursor-pointer shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <Mail size={13} />
                <span>EXECUTE PROJECT</span>
              </a>

              {/* Button 2: Download Spec */}
              <a
                href={PORTFOLIO_DATA.personal.cvFilename}
                download="Huzaifa_Sani_CV.pdf"
                className="border-[1.5px] border-[#111111] dark:border-[#f4f4f0] px-4 py-2.5 hover:bg-[#111111] hover:text-[#f4f4f0] dark:hover:bg-[#f4f4f0] dark:hover:text-[#111111] transition-colors font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
              >
                <FileDown size={13} />
                <span>DOWNLOAD SPEC</span>
              </a>

              {/* Link 3: Access Manifest */}
              <a
                href="#projects"
                className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#f4f4f0] hover:underline flex items-center gap-1 py-2 px-1"
              >
                <span>• ACCESS MANIFEST</span>
                <ArrowRight size={13} />
              </a>
            </div>

            {/* Network Protocol Social Bar */}
            <div className="w-full flex items-center gap-3 font-mono text-xs text-[#111111]/70 dark:text-zinc-400">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#111111] dark:text-[#f4f4f0]">
                NETWORK PROTOCOL
              </span>
              <span>|</span>
              <div className="flex items-center gap-3 text-[#111111] dark:text-[#f4f4f0]">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-600 transition-colors"
                  title="GitHub: huzaifa-sani"
                >
                  <Github size={15} />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-500 transition-colors"
                  title="Codeforces: huzaifa-sani"
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zm7.5-6a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 1.5-1.5zm7.5 9a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors"
                  title="WhatsApp"
                >
                  <MessageSquare size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: FIG. 2 AUTHOR PORTRAIT with subtle actions */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="group relative w-full max-w-[420px]">
              {/* Outer Corner Crop Brackets with subtle expand-on-hover reaction */}
              <span className="absolute -top-3.5 -left-3.5 font-mono text-xl text-[#111111] dark:text-[#f4f4f0] font-black select-none pointer-events-none transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                ┌
              </span>
              <span className="absolute -top-3.5 -right-3.5 font-mono text-xl text-[#111111] dark:text-[#f4f4f0] font-black select-none pointer-events-none transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                ┐
              </span>
              <span className="absolute -bottom-3.5 -left-3.5 font-mono text-xl text-[#111111] dark:text-[#f4f4f0] font-black select-none pointer-events-none transition-transform duration-500 ease-out group-hover:-translate-x-1 group-hover:translate-y-1">
                └
              </span>
              <span className="absolute -bottom-3.5 -right-3.5 font-mono text-xl text-[#111111] dark:text-[#f4f4f0] font-black select-none pointer-events-none transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1">
                ┘
              </span>

              {/* Main White Frame Box */}
              <div className="border-[1.5px] border-[#111111] dark:border-[#f4f4f0] bg-white dark:bg-[#121319] p-3 sm:p-3.5 transition-shadow duration-300 group-hover:shadow-[4px_4px_0px_0px_#111111] dark:group-hover:shadow-[4px_4px_0px_0px_#f4f4f0]">
                {/* Author Portrait Image Frame */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#e8e8e4] dark:bg-zinc-900 border border-[#111111]/25 dark:border-zinc-800">
                  {/* Portrait Image in Permanent Clean Natural Color */}
                  <img
                    src="/huzaifa.png"
                    alt="Huzaifa Sani — Author Portrait"
                    className="w-full h-full object-cover object-[center_12%] contrast-[1.04] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Subtle Architectural Scan Hairline */}
                  <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#111111]/30 dark:via-emerald-400/50 to-transparent pointer-events-none animate-scanline-subtle"></div>

                  {/* Subtle Camera Focus Marks in Corners */}
                  <span className="absolute top-2 left-2 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 select-none pointer-events-none">
                    ⌜
                  </span>
                  <span className="absolute top-2 right-2 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 select-none pointer-events-none">
                    ⌝
                  </span>
                  <span className="absolute bottom-2 left-2 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 select-none pointer-events-none">
                    ⌞
                  </span>
                  <span className="absolute bottom-2 right-2 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 select-none pointer-events-none">
                    ⌟
                  </span>

                  {/* Status Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                    <div className="px-2 py-0.5 bg-[#111111]/85 dark:bg-black/85 backdrop-blur-sm text-[9px] font-mono text-[#f4f4f0] uppercase tracking-wider flex items-center gap-1.5 border border-white/20 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>HUZAIFA SANI // FLUTTER DEV</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Frame Caption with subtle live pulse dot */}
                <div className="mt-3 pt-2.5 border-t border-[#111111] dark:border-[#f4f4f0] flex items-center justify-between font-mono text-[11px] sm:text-xs text-[#111111] dark:text-[#f4f4f0] uppercase tracking-wider font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>FIG. 2 — AUTHOR PORTRAIT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-[#111111]/60 dark:text-zinc-400 font-normal">● LIVE</span>
                    <span>SCALE: 1:1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
