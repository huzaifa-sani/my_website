"use client";

import React from "react";
import { ProjectItem } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  Smartphone,
  CheckCircle2,
  Apple,
  Play,
  Github,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-3xl border-[2px] border-[#111111] dark:border-emerald-400 bg-[#f4f4f0] dark:bg-[#0f1117] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#111111] dark:shadow-[8px_8px_0px_0px_#22c55e] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 border border-[#111111] dark:border-zinc-700 hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b-[1.5px] border-[#111111] dark:border-zinc-800">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest mb-1">
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              {project.id} //
            </span>
            <span>{project.type}</span>
            <span>• {project.year}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-white">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 mb-6">
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Architecture Spec */}
        <div className="mb-6 p-4 border border-[#111111]/30 dark:border-zinc-800 bg-white dark:bg-[#141720]">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-zinc-400 mb-1">
            <Layers size={14} className="text-sky-500" />
            <span>ARCHITECTURAL PATTERN</span>
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold text-[#111111] dark:text-zinc-200">
            {project.architecture}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">
            Engineered Capabilities:
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat, fIdx) => (
              <li
                key={fIdx}
                className="flex items-start gap-2 p-2 border border-zinc-200 dark:border-zinc-800 text-xs font-sans text-zinc-700 dark:text-zinc-300 bg-white/70 dark:bg-[#111319]"
              >
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mb-8">
          <div className="font-mono text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
            STACK SPECIFICATION:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 text-[#111111] dark:text-zinc-200 font-mono text-[11px] font-bold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Direct Links */}
        <div className="pt-4 border-t-[1.5px] border-[#111111] dark:border-zinc-800 flex flex-wrap gap-3">
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-black dark:hover:bg-emerald-400 transition-colors"
            >
              <Smartphone size={14} />
              <span>Apple App Store</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors"
            >
              <Smartphone size={14} />
              <span>Google Play Store</span>
              <ExternalLink size={12} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border-[1.5px] border-[#111111] dark:border-zinc-700 bg-white dark:bg-zinc-800 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#111111] hover:text-white transition-colors"
            >
              <Github size={14} />
              <span>Source Repository</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
