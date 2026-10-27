"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Smartphone, Mail, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#f4f4f0] dark:bg-[#07080b] border-t-[1.5px] border-[#111111] dark:border-[#262a33] text-[#111111] dark:text-[#f4f4f0] font-mono text-xs">
      {/* Top Footer Status Band */}
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x-[1.5px] divide-[#111111]/20 dark:divide-[#262a33] border-b-[1.5px] border-[#111111]/20 dark:border-[#262a33] text-[11px]">
        <div className="p-4 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">SYS IDENT:</span>
          <span className="font-bold">HZ-SANI-MOBILE</span>
        </div>
        <div className="p-4 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">LOCATION:</span>
          <span>DHAKA, BANGLADESH</span>
        </div>
        <div className="p-4 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">TELEMETRY:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            100% OPERATIONAL
          </span>
        </div>
        <div className="p-4 flex items-center justify-between">
          <span className="text-zinc-500 uppercase">DEPLOYMENT:</span>
          <span className="text-sky-600 dark:text-sky-400 font-bold">VERCEL EDGE READY</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#111111] dark:bg-emerald-400 text-white dark:text-black flex items-center justify-center font-black text-xs">
                HS
              </div>
              <span className="font-heading font-black text-base uppercase tracking-tight">
                Huzaifa Sani // Flutter Developer
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed max-w-sm">
              Cross-Platform Android & iOS Architect delivering production-ready mobile applications with Clean Architecture and GetX state management.
            </p>
            <div className="pt-2 text-[10px] text-zinc-400">
              COORDINATES: {PORTFOLIO_DATA.personal.coordinates}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] font-bold uppercase text-zinc-400 mb-2">
              QUICK MANIFEST JUMPS:
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Connect & Back to top */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 border border-[#111111] dark:border-zinc-700 bg-white dark:bg-[#12141a] hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800 transition-colors font-bold text-xs uppercase"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp size={14} />
            </button>

            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#111111]/30 dark:border-zinc-700 hover:bg-[#111111] hover:text-white transition-colors"
                title="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#111111]/30 dark:border-zinc-700 hover:bg-amber-500 hover:text-black transition-colors"
                title="Codeforces: huzaifa-sani"
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zm7.5-6a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 1.5-1.5zm7.5 9a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5z" />
                </svg>
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#111111]/30 dark:border-zinc-700 hover:bg-sky-600 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2 border border-[#111111]/30 dark:border-zinc-700 hover:bg-emerald-600 hover:text-white transition-colors"
                title="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright line */}
        <div className="mt-10 pt-6 border-t border-[#111111]/15 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} Huzaifa Sani. All systems operational.
          </div>
          <div>
            INSPIRED BY TECHNICAL BLUEPRINT ARCHITECTURE // PRODUCTION READY
          </div>
        </div>
      </div>
    </footer>
  );
};
