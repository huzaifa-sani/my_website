"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Send,
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Linkedin,
  Github,
  Radio,
  Sparkles,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Mobile App Development / Project Inquiry",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Direct mailto fallback or simulated transmission
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      `[Portfolio] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="w-full border-b-[1.5px] border-[#111111] dark:border-[#262a33] px-4 sm:px-8 md:px-14 lg:px-20 py-14 sm:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 pb-6 border-b-[1.5px] border-[#111111] dark:border-[#262a33] flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#111111]/70 dark:text-zinc-400 mb-2">
              Section 07 // Telemetry & Direct Transmission Console
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-[#111111] dark:text-[#f4f4f0]">
              Transmission
            </h2>
          </div>
          <div className="font-mono text-xs text-[#111111]/60 dark:text-zinc-400 uppercase tracking-widest">
            COMM PROTOCOL: ENCRYPTED // DIRECT RESPONSE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Channels & Telemetry Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-6 shadow-[4px_4px_0px_0px_#111111] dark:shadow-[4px_4px_0px_0px_#22c55e]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#111111]/20 dark:border-zinc-800">
                <span className="font-mono text-xs font-bold uppercase text-zinc-500">
                  DIRECT CHANNELS
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  READY
                </span>
              </div>

              {/* Email channel with copy */}
              <div className="mb-4 p-3.5 border border-[#111111]/20 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-zinc-400 uppercase">
                    PRIMARY ELECTRONIC MAIL
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#111111] dark:text-white">
                    {PORTFOLIO_DATA.personal.email}
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email)}
                  className="p-2 border border-[#111111]/30 dark:border-zinc-700 hover:bg-[#111111] hover:text-white dark:hover:bg-zinc-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check size={14} className="text-emerald-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="mb-6 p-3.5 border border-[#111111]/20 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0e12] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-zinc-400 uppercase">
                    DIRECT PHONE / WHATSAPP
                  </div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#111111] dark:text-white">
                    {PORTFOLIO_DATA.personal.phone}
                  </div>
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#111111]/30 dark:border-zinc-700 hover:bg-emerald-500 hover:text-black transition-colors"
                  title="Chat on WhatsApp"
                >
                  <MessageSquare size={14} />
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2 border-t border-[#111111]/20 dark:border-zinc-800 font-mono text-xs">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-[#111111] dark:hover:border-zinc-600 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin size={14} className="text-sky-500" />
                    <span>LinkedIn / huzaifa-sani</span>
                  </span>
                  <ExternalLink size={12} className="text-zinc-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-[#111111] dark:hover:border-zinc-600 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github size={14} />
                    <span>GitHub / huzaifa-sani</span>
                  </span>
                  <ExternalLink size={12} className="text-zinc-400" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-[#111111] dark:hover:border-zinc-600 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-amber-500">
                      <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zm7.5-6a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 1.5-1.5zm7.5 9a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5z" />
                    </svg>
                    <span>Codeforces / huzaifa-sani</span>
                  </span>
                  <ExternalLink size={12} className="text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-4 border-[1.5px] border-[#111111] dark:border-[#272c35] bg-emerald-50 dark:bg-emerald-950/20 font-mono text-xs text-emerald-800 dark:text-emerald-300">
              <div className="font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Radio size={13} className="text-emerald-500 animate-pulse" />
                <span>CONTRACT & FULL-TIME AVAILABILITY</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Currently open for senior/mid Flutter engineering roles, cross-platform consulting, and high-impact mobile development contracts.
              </p>
            </div>
          </div>

          {/* Right Column: Transmission Console Form */}
          <div className="lg:col-span-7">
            <div className="relative border-[1.5px] border-[#111111] dark:border-[#262a33] bg-white dark:bg-[#111319] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#111111] dark:shadow-[6px_6px_0px_0px_#22c55e]">

              <div className="flex items-center justify-between pb-3 mb-6 border-b-[1.5px] border-[#111111] dark:border-zinc-800 font-mono text-xs">
                <span className="font-bold text-[#111111] dark:text-white uppercase tracking-wider">
                  DISPATCH CONSOLE // PAYLOAD GENERATOR
                </span>
                <span className="text-[10px] text-zinc-400">TERM://HZ-MSG</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase text-[#111111] dark:text-white">
                    Transmission Dispatched
                  </h3>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto font-sans">
                    Your message client has been triggered. If your email client did not open automatically, reach out directly at <strong className="text-emerald-500">{PORTFOLIO_DATA.personal.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 border border-[#111111] dark:border-zinc-700 text-xs font-bold uppercase hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  {/* Name field */}
                  <div>
                    <label className="block text-zinc-500 uppercase tracking-wider mb-1 text-[10px] font-bold">
                      TRANSMITTER_NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Tech Recruiter / Startup Founder"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 border-[1.5px] border-[#111111] dark:border-zinc-700 bg-zinc-50 dark:bg-[#141720] text-[#111111] dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-zinc-500 uppercase tracking-wider mb-1 text-[10px] font-bold">
                      REPLY_ENDPOINT (EMAIL) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. contact@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 border-[1.5px] border-[#111111] dark:border-zinc-700 bg-zinc-50 dark:bg-[#141720] text-[#111111] dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-zinc-500 uppercase tracking-wider mb-1 text-[10px] font-bold">
                      SCOPE / DESIGNATION
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 border-[1.5px] border-[#111111] dark:border-zinc-700 bg-zinc-50 dark:bg-[#141720] text-[#111111] dark:text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-zinc-500 uppercase tracking-wider text-[10px] font-bold">
                        PAYLOAD (MESSAGE CONTENT) *
                      </label>
                      <span className="text-[10px] text-zinc-400">
                        {formData.message.length} CHARS
                      </span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your mobile project requirements, engineering role, or collaboration scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 border-[1.5px] border-[#111111] dark:border-zinc-700 bg-zinc-50 dark:bg-[#141720] text-[#111111] dark:text-white focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                    ></textarea>
                  </div>

                  {/* Send Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#111111] text-[#f4f4f0] dark:bg-emerald-400 dark:text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 hover:text-black dark:hover:bg-emerald-300 transition-all duration-150 shadow-[4px_4px_0px_0px_#22c55e] dark:shadow-[4px_4px_0px_0px_#ffffff]"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 dark:bg-black shadow-[0_0_6px_#22c55e]"></span>
                      <span>{isSubmitting ? "TRANSMITTING..." : "EXECUTE SEND"}</span>
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />

                      {/* Corner Accents */}
                      <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400 dark:border-black"></span>
                      <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400 dark:border-black"></span>
                    </button>

                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest text-center sm:text-right">
                      Avg Response Time: &lt; 4 Hours
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
