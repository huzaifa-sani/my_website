"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Terminal, Sun, Moon, ArrowDown, Command } from "lucide-react";

interface HeaderProps {
  onOpenCommand?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommand }) => {
  const [time, setTime] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Live Clock for Dhaka (UTC+6)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setIsDark(false);
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setIsDark(true);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4f4f0] dark:bg-[#0b0c10] border-b-[1.5px] border-[#111111] dark:border-[#262a33] transition-colors font-mono">
      {/* Top Coordinate Bar matching Apu's website exactly */}
      <div className="grid grid-cols-2 md:grid-cols-12 divide-x-[1.5px] divide-[#111111] dark:divide-[#262a33] text-xs">
        {/* Cell 1: Project */}
        <div className="col-span-1 md:col-span-2 px-3 py-2 flex flex-col justify-center">
          <span className="text-[9px] uppercase tracking-wider text-[#111111]/60 dark:text-zinc-500">
            PROJECT
          </span>
          <span className="font-bold text-[#111111] dark:text-[#f4f4f0] uppercase text-[11px] truncate">
            PORTFOLIO SITE
          </span>
        </div>

        {/* Cell 2: Subject */}
        <div className="hidden sm:flex col-span-2 px-3 py-2 flex-col justify-center">
          <span className="text-[9px] uppercase tracking-wider text-[#111111]/60 dark:text-zinc-500">
            SUBJECT
          </span>
          <span className="font-bold text-[#111111] dark:text-[#f4f4f0] uppercase text-[11px] truncate">
            HUZAIFA SANI
          </span>
        </div>

        {/* Cell 3: Discipline */}
        <div className="hidden md:flex col-span-2 px-3 py-2 flex-col justify-center">
          <span className="text-[9px] uppercase tracking-wider text-[#111111]/60 dark:text-zinc-500">
            DISCIPLINE
          </span>
          <span className="font-bold text-[#111111] dark:text-[#f4f4f0] uppercase text-[11px] truncate">
            FLUTTER DEV
          </span>
        </div>

        {/* Cell 4: Live Time */}
        <div className="hidden lg:flex col-span-2 px-3 py-2 flex-col justify-center">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-[#111111]/60 dark:text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>DHAKA (UTC+6)</span>
          </div>
          <span className="font-bold text-[#111111] dark:text-[#f4f4f0] text-[11px]">
            {time || "14:10:34"}
          </span>
        </div>

        {/* Right Section: CLI, REV, Download Spec */}
        <div className="col-span-1 md:col-span-6 lg:col-span-4 flex items-center justify-end divide-x-[1.5px] divide-[#111111] dark:divide-[#262a33]">
          {/* CLI Trigger */}
          {onOpenCommand && (
            <button
              onClick={onOpenCommand}
              className="px-3 py-2.5 flex items-center gap-1.5 text-[11px] font-bold text-[#111111] dark:text-[#f4f4f0] hover:bg-[#111111] hover:text-[#f4f4f0] dark:hover:bg-zinc-800 transition-colors"
              title="Open Command Palette (Ctrl+K)"
            >
              <span>&gt;_ CLI</span>
              <kbd className="hidden sm:inline text-[9px] px-1 py-0.2 border border-current opacity-70">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 text-[#111111] dark:text-[#f4f4f0] hover:bg-[#111111] hover:text-[#f4f4f0] dark:hover:bg-zinc-800 transition-colors"
            title="Toggle theme"
          >
            {isDark ? <Sun size={13} className="text-amber-400" /> : <Moon size={13} />}
          </button>

          {/* Revision */}
          <div className="hidden sm:flex px-3 py-2 flex-col justify-center">
            <span className="text-[9px] uppercase tracking-wider text-[#111111]/60 dark:text-zinc-500">
              REV.
            </span>
            <span className="font-bold text-[#111111] dark:text-[#f4f4f0] text-[11px]">
              2026.10
            </span>
          </div>

          {/* Download Spec */}
          <a
            href={PORTFOLIO_DATA.personal.cvFilename}
            download="Huzaifa_Sani_CV.pdf"
            className="px-4 py-2.5 bg-[#111111] text-[#f4f4f0] dark:bg-emerald-400 dark:text-black font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 hover:bg-emerald-500 hover:text-black transition-colors"
          >
            <span>DOWNLOAD SPEC</span>
            <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </header>
  );
};
