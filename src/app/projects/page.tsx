"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA, ArchiveProjectItem } from "@/data/portfolioData";
import {
  ArrowLeft,
  Search,
  Layers,
  Sparkles,
  ExternalLink,
  Smartphone,
  Cpu,
  CheckCircle2,
  Filter,
  X,
  ChevronRight,
  Sun,
  Moon,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeProjectModal, setActiveProjectModal] = useState<ArchiveProjectItem | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(PORTFOLIO_DATA.archiveProjects.map((p) => p.category))
    );
    return ["ALL", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.archiveProjects.filter((p) => {
      const matchesCategory =
        selectedCategory === "ALL" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.overview.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q)) ||
        p.keyFeatures.some((f) => f.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

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
    <div className="min-h-screen draft-grid text-[#111111] dark:text-[#f4f4f0] bg-[#fbfbf9] dark:bg-[#090a0d] selection:bg-emerald-400 selection:text-black font-sans">
      {/* Top Coordinate Header */}
      <header className="sticky top-0 z-40 w-full bg-[#f4f4f0] dark:bg-[#0b0c10] border-b-[1.5px] border-[#111111] dark:border-[#262a33] font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-[#111111] dark:text-[#f4f4f0] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>← RETURN TO PROFILE // HUZAIFA SANI</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-[11px] text-zinc-500 uppercase tracking-widest">
              PROJECT REPOSITORY // ARCHIVE
            </span>
            <button
              onClick={toggleTheme}
              className="p-1.5 border border-[#111111]/30 dark:border-zinc-700 hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800 transition-colors"
              title="Toggle theme"
            >
              {isDark ? <Sun size={13} className="text-amber-400" /> : <Moon size={13} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16">
        {/* Page Hero Banner */}
        <div className="border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-6 sm:p-10 mb-10 shadow-[6px_6px_0px_0px_#111111] dark:shadow-[6px_6px_0px_0px_#22c55e]">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>MOBILE ENGINEERING CATALOG // PRODUCTION & AGENCY WORK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0] mb-4">
            Project Solutions & Concepts
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed mb-6 font-sans">
            এখানে আমার ডেভেলপ করা ও কাজ করা বিভিন্ন ক্যাটাগরির মোবাইল অ্যাপ্লিকেশনের বিস্তারিত রয়েছে। প্রতিটি প্রজেক্টের মূল আইডিয়া, ইন্ডাস্ট্রি ক্যাটাগরি, টেকনোলজি স্ট্যাক এবং কোর ফিচারসমূহ নিচে সাজানো হলো।
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#111111]/15 dark:border-zinc-800 font-mono text-xs">
            <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12]">
              <div className="text-[10px] text-zinc-400 uppercase">TOTAL ARCHIVED</div>
              <div className="text-lg font-black text-[#111111] dark:text-white">
                {PORTFOLIO_DATA.archiveProjects.length} Projects
              </div>
            </div>
            <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12]">
              <div className="text-[10px] text-zinc-400 uppercase">PLATFORMS</div>
              <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                Android & iOS
              </div>
            </div>
            <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12]">
              <div className="text-[10px] text-zinc-400 uppercase">PRIMARY CORE</div>
              <div className="text-lg font-black text-sky-600 dark:text-sky-400">
                Flutter & Dart
              </div>
            </div>
            <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12]">
              <div className="text-[10px] text-zinc-400 uppercase">ARCHITECTURE</div>
              <div className="text-lg font-black text-[#111111] dark:text-white">
                Clean Architecture
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              placeholder="Search by project name, concept, tech stack (Flutter, Firebase, GetX), or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 border-[1.5px] border-[#111111] dark:border-zinc-700 bg-white dark:bg-[#111319] text-[#111111] dark:text-white font-mono text-xs focus:outline-none focus:border-emerald-500 shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black dark:hover:text-white"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 border font-bold uppercase tracking-wider transition-colors text-[11px] ${
                  selectedCategory === cat
                    ? "border-[#111111] bg-[#111111] text-[#f4f4f0] dark:border-emerald-400 dark:bg-emerald-400 dark:text-black shadow-sm"
                    : "border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#111319] text-zinc-600 dark:text-zinc-400 hover:border-[#111111] dark:hover:border-zinc-600"
                }`}
              >
                {cat === "ALL" ? `ALL (${PORTFOLIO_DATA.archiveProjects.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 font-mono text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
          <span>
            SHOWING {filteredProjects.length} OF {PORTFOLIO_DATA.archiveProjects.length} SOLUTIONS
          </span>
          {searchQuery && (
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
              Filter Active: &quot;{searchQuery}&quot;
            </span>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-6 shadow-[5px_5px_0px_0px_#111111] dark:shadow-[5px_5px_0px_0px_#22c55e] flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                {/* Header Band */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#111111]/15 dark:border-zinc-800 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#111111] text-[#f4f4f0] dark:bg-emerald-400 dark:text-black text-[10px] font-black uppercase">
                      {project.id}
                    </span>
                    <span className="px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-bold">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-emerald-600 dark:text-emerald-400 uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-[#111111] dark:text-white mb-1.5">
                  {project.title}
                </h3>
                <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 mb-4 font-bold">
                  {project.subtitle}
                </div>

                {/* Project Overview */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans mb-5">
                  {project.overview}
                </p>

                {/* Key Features Bullet List */}
                <div className="mb-5 space-y-2">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                    KEY CAPABILITIES & MODULES:
                  </div>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300"
                      >
                        <span className="text-emerald-500 font-bold shrink-0 mt-0.5">▸</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Note */}
                <div className="mb-5 p-2.5 bg-zinc-50 dark:bg-[#0d0f14] border border-zinc-200 dark:border-zinc-800 font-mono text-[11px]">
                  <span className="text-zinc-400 uppercase font-bold">ARCHITECTURE: </span>
                  <span className="text-[#111111] dark:text-zinc-200 font-semibold">
                    {project.architecture}
                  </span>
                </div>
              </div>

              {/* Card Footer: Tech Stack Tags & Actions */}
              <div className="pt-4 border-t border-[#111111]/15 dark:border-zinc-800">
                <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[10px]">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 font-mono text-xs">
                  <div className="text-[11px] text-zinc-400">
                    PLATFORMS: <strong className="text-[#111111] dark:text-white">{project.platforms.join(" / ")}</strong>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.storeUrl && (
                      <a
                        href={project.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider text-[11px] inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Store Link</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="px-3 py-1.5 border border-[#111111] dark:border-zinc-700 hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800 transition-colors font-bold uppercase tracking-wider text-[11px]"
                    >
                      Details Spec
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="border-[1.5px] border-[#111111] dark:border-zinc-800 bg-white dark:bg-[#111319] p-12 text-center font-mono space-y-3">
            <div className="text-zinc-400 text-base">NO MATCHING PROJECT SPECIFICATIONS FOUND</div>
            <p className="text-xs text-zinc-500 max-w-sm mx-auto font-sans">
              Try modifying your search query or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="mt-2 px-4 py-2 bg-[#111111] text-white dark:bg-emerald-400 dark:text-black text-xs font-bold uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA to Return Home or Contact */}
        <div className="mt-14 p-8 border-[1.5px] border-[#111111] dark:border-[#262a33] bg-[#111111] text-white dark:bg-[#121620] shadow-[6px_6px_0px_0px_#22c55e] flex flex-col md:flex-row items-center justify-between gap-6 font-mono">
          <div className="space-y-1">
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              NEXT STEP // INITIATE TRANSMISSION
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-white">
              Have a mobile project or engineering role in mind?
            </h3>
            <p className="text-xs text-zinc-300 font-sans max-w-xl">
              Let&apos;s collaborate on building high-performance, production-ready Flutter applications for Android and iOS.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="px-6 py-3 bg-emerald-400 text-black hover:bg-emerald-300 font-bold uppercase tracking-wider text-xs transition-colors"
            >
              Send Transmission
            </Link>
            <Link
              href="/"
              className="px-5 py-3 border border-zinc-600 hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>

      {/* Modal / Detailed Spec Drawer */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl border-[2px] border-[#111111] dark:border-emerald-500/80 bg-white dark:bg-[#111319] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#111111] dark:shadow-[8px_8px_0px_0px_#22c55e] max-h-[90vh] overflow-y-auto font-sans">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-4 right-4 p-2 border border-[#111111]/30 dark:border-zinc-700 hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800 transition-colors font-mono"
            >
              <X size={16} />
            </button>

            <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
              SPECIFICATION SHEET // {activeProjectModal.id}
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-white mb-1">
              {activeProjectModal.title}
            </h2>
            <div className="font-mono text-xs text-zinc-500 mb-6 font-bold">
              {activeProjectModal.subtitle} • {activeProjectModal.category}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-2">
                  PROJECT OVERVIEW & CORE CONCEPT
                </h4>
                <p className="text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed">
                  {activeProjectModal.overview}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-2">
                  KEY FEATURES & CAPABILITIES
                </h4>
                <div className="space-y-2">
                  {activeProjectModal.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12] flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-mono"
                    >
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12]">
                  <span className="text-[10px] text-zinc-400 uppercase block mb-1">
                    ENGINEERING ARCHITECTURE
                  </span>
                  <span className="font-bold text-[#111111] dark:text-white">
                    {activeProjectModal.architecture}
                  </span>
                </div>
                <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12]">
                  <span className="text-[10px] text-zinc-400 uppercase block mb-1">
                    ROLE & RESPONSIBILITY
                  </span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {activeProjectModal.role} ({activeProjectModal.year})
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase text-zinc-400 mb-2">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {activeProjectModal.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500 uppercase">
                  STATUS: <strong className="text-emerald-500">{activeProjectModal.status}</strong>
                </span>

                <div className="flex items-center gap-3">
                  {activeProjectModal.storeUrl && (
                    <a
                      href={activeProjectModal.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase flex items-center gap-1.5 transition-colors"
                    >
                      <span>Open Store Page</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 border border-[#111111] dark:border-zinc-700 text-xs font-bold uppercase hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Close Spec
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full border-t-[1.5px] border-[#111111] dark:border-[#262a33] bg-[#f4f4f0] dark:bg-[#07080b] py-8 text-center font-mono text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4">
          © {new Date().getFullYear()} Huzaifa Sani. Cross-Platform Mobile Engineer. All specifications documented.
        </div>
      </footer>
    </div>
  );
}