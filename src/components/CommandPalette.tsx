"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Search,
  X,
  FileDown,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Sun,
  Moon,
  Laptop,
  ArrowRight,
  Terminal,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      label: "Jump to Projects Manifest",
      category: "Navigation",
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      label: "Jump to Technical Capabilities (Skills)",
      category: "Navigation",
      action: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      label: "Jump to Work Experience Log",
      category: "Navigation",
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      label: "Jump to Academic Credentials",
      category: "Navigation",
      action: () => {
        window.location.hash = "#education";
        onClose();
      },
    },
    {
      label: "Open Transmission (Contact)",
      category: "Navigation",
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    {
      label: "Download CV Specification (PDF)",
      category: "Actions",
      action: () => {
        const a = document.createElement("a");
        a.href = PORTFOLIO_DATA.personal.cvFilename;
        a.download = "Huzaifa_Sani_CV.pdf";
        a.click();
        onClose();
      },
    },
    {
      label: "Copy Email (huzaifa0133@gmail.com)",
      category: "Actions",
      action: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      label: "Toggle Dark / Light Visual Theme",
      category: "Preferences",
      action: () => {
        document.documentElement.classList.toggle("dark");
        onClose();
      },
    },
    {
      label: "Open GitHub Profile",
      category: "External",
      action: () => {
        window.open(PORTFOLIO_DATA.personal.github, "_blank");
        onClose();
      },
    },
    {
      label: "Open LinkedIn Profile",
      category: "External",
      action: () => {
        window.open(PORTFOLIO_DATA.personal.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-100"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl border-[2px] border-[#111111] dark:border-emerald-400 bg-[#f4f4f0] dark:bg-[#0e1017] shadow-[8px_8px_0px_0px_#111111] dark:shadow-[8px_8px_0px_0px_#22c55e] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b-[1.5px] border-[#111111] dark:border-zinc-800 bg-white dark:bg-[#141720]">
          <Terminal size={18} className="text-emerald-500 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type a command or jump destination..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent font-mono text-xs sm:text-sm text-[#111111] dark:text-white placeholder:text-zinc-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 border border-zinc-300 dark:border-zinc-700 hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-[#111111]/10 dark:divide-zinc-800 font-mono text-xs">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="w-full text-left p-3.5 flex items-center justify-between hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800/80 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] px-1.5 py-0.5 border border-[#111111]/30 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 group-hover:border-zinc-600 group-hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-200 uppercase">
                    {item.category}
                  </span>
                  <span className="font-bold text-[#111111] dark:text-zinc-200 group-hover:text-white">
                    {item.label}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform"
                />
              </button>
            ))
          ) : (
            <div className="p-8 text-center text-zinc-500 text-xs">
              No matching commands or destinations found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-zinc-100 dark:bg-[#111319] border-t border-[#111111]/20 dark:border-zinc-800 flex items-center justify-between font-mono text-[10px] text-zinc-500">
          <span>NAVIGATION: [ESC] TO CLOSE</span>
          {copied ? (
            <span className="text-emerald-500 font-bold">EMAIL COPIED!</span>
          ) : (
            <span>SHORTCUT: [CTRL + K]</span>
          )}
        </div>
      </div>
    </div>
  );
};
