"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import {
  ExternalLink,
  Smartphone,
  Eye,
  Table,
  LayoutGrid,
  Filter,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterType, setFilterType] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const filteredProjects =
    filterType === "ALL"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.type === filterType);

  return (
    <section
      id="projects"
      className="w-full border-b-[1.5px] border-[#111111] dark:border-[#262a33] px-4 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 pb-6 border-b-[1.5px] border-[#111111] dark:border-[#262a33] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-zinc-400 mb-2">
              Section 05 // Project Manifest & Store Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0]">
              Data Table
            </h2>
          </div>

          {/* View Mode Toggle & Stats */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border-[1.5px] border-[#111111] dark:border-[#272c35] bg-white dark:bg-[#12141a] p-0.5">
              <button
                onClick={() => setViewMode("table")}
                className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                  viewMode === "table"
                    ? "bg-[#111111] text-white dark:bg-emerald-400 dark:text-black"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Table size={13} />
                <span>Table</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold uppercase transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#111111] text-white dark:bg-emerald-400 dark:text-black"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <LayoutGrid size={13} />
                <span>Cards</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs">
          {["ALL", "MARKETPLACE", "E-COMMERCE", "UTILITY", "OPEN SOURCE"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterType(cat)}
              className={`px-3 py-1.5 border font-bold uppercase tracking-wider transition-colors ${
                filterType === cat
                  ? "border-[#111111] bg-[#111111] text-[#f4f4f0] dark:border-emerald-400 dark:bg-emerald-400 dark:text-black"
                  : "border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#111319] text-zinc-600 dark:text-zinc-400 hover:border-[#111111] dark:hover:border-zinc-600"
              }`}
            >
              [{cat}]
            </button>
          ))}
          <span className="ml-auto hidden sm:inline text-zinc-400 dark:text-zinc-500 text-[11px]">
            SHOWING {filteredProjects.length} OF {PORTFOLIO_DATA.projects.length} SPECIFICATIONS
          </span>
        </div>

        {/* VIEW 1: Interactive Data Table (Reference Website Signature Style) */}
        {viewMode === "table" ? (
          <div className="w-full border-[1.5px] border-[#111111] dark:border-[#262a33] overflow-hidden bg-white dark:bg-[#111319]">
            {/* Table Header Row */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b-[1.5px] border-[#111111] dark:border-[#262a33] bg-[#111111] text-[#f4f4f0] font-mono text-[10px] uppercase tracking-widest font-bold">
              <div className="col-span-2">ID / Year</div>
              <div className="col-span-3">Designation / Type</div>
              <div className="col-span-4">Stack Specs</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1 text-right">Links</div>
            </div>

            {/* Table Body Rows */}
            <div className="flex flex-col divide-y divide-[#111111]/15 dark:divide-[#262a33]">
              {filteredProjects.map((proj, idx) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 p-4 md:p-6 transition-colors duration-100 hover:bg-[#111111] hover:text-[#f4f4f0] cursor-pointer"
                >
                  {/* Col 1: ID / Year */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:flex-col md:justify-center font-mono text-xs">
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-400">
                      {proj.id}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-300">
                      {proj.year}
                    </span>
                  </div>

                  {/* Col 2: Title & Type */}
                  <div className="col-span-1 md:col-span-3 flex flex-col justify-center">
                    <div className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-[#111111] dark:text-white group-hover:text-white">
                      {proj.title}
                    </div>
                    <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-300">
                      {proj.subtitle}
                    </div>
                  </div>

                  {/* Col 3: Stack Tags */}
                  <div className="col-span-1 md:col-span-4 flex items-center flex-wrap gap-1.5 py-1">
                    {proj.tags.slice(0, 4).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 border border-[#111111]/20 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono group-hover:border-zinc-600 group-hover:bg-zinc-800 group-hover:text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 4 && (
                      <span className="text-[10px] font-mono text-zinc-400">
                        +{proj.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Col 4: Status */}
                  <div className="col-span-1 md:col-span-2 flex items-center gap-2 font-mono text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:bg-emerald-400"></span>
                    <span className="text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-400 uppercase">
                      {proj.status}
                    </span>
                    <span className="text-[10px] text-zinc-400 group-hover:text-zinc-400">
                      ({proj.platforms.join("/")})
                    </span>
                  </div>

                  {/* Col 5: Actions */}
                  <div className="col-span-1 md:col-span-1 flex items-center justify-end gap-2 font-mono text-xs">
                    <span className="p-1 border border-transparent group-hover:border-white text-zinc-400 group-hover:text-white transition-colors">
                      <Eye size={15} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* VIEW 2: Blueprint Card Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="relative border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-6 shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#22c55e] cursor-pointer transition-all duration-150 hover:translate-x-1 flex flex-col justify-between"
              >

                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#111111]/20 dark:border-zinc-800 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        {proj.id}
                      </span>
                      <span className="text-zinc-400">// {proj.type}</span>
                    </div>
                    <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold uppercase text-[10px]">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-[#111111] dark:text-white mb-1">
                    {proj.title}
                  </h3>
                  <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    {proj.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono text-zinc-700 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#111111]/15 dark:border-zinc-800 flex items-center justify-between font-mono text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                    <span>INSPECT FULL SPEC</span>
                    <Eye size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
