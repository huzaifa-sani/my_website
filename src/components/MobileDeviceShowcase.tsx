"use client";

import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Star,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  ShoppingBag,
  Calculator,
  Utensils,
  Play,
  Pause,
} from "lucide-react";

export const MobileDeviceShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const apps = [
    {
      id: "privae",
      name: "Privae",
      category: "Chef Marketplace",
      platform: "Apple App Store",
      rating: "5.0",
      accent: "from-amber-500 to-orange-500",
      accentGlow: "rgba(245, 158, 11, 0.25)",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      url: "https://apps.apple.com/us/app/privae/id6756812318",
    },
    {
      id: "beautyrun",
      name: "BeautyRun",
      category: "E-Commerce & Delivery",
      platform: "Google Play Store",
      rating: "4.8",
      accent: "from-rose-500 to-pink-500",
      accentGlow: "rgba(244, 63, 94, 0.25)",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
      url: "https://play.google.com/store/apps/details?id=com.beauty.users",
    },
    {
      id: "sparky",
      name: "Sparky Tools",
      category: "Electrical Utility Suite",
      platform: "App Store & Play Store",
      rating: "4.9",
      accent: "from-emerald-500 to-cyan-500",
      accentGlow: "rgba(16, 185, 129, 0.25)",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      url: "https://apps.apple.com/us/app/sparky-toolbox/id6782320797",
    },
  ];

  // Auto-cycle between apps every 4.5 seconds
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % apps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoRotate, apps.length]);

  const currentApp = apps[activeTab];

  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      {/* Dynamic Ambient Background Glow that changes based on active app */}
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${currentApp.accentGlow} 0%, rgba(14, 165, 233, 0.1) 50%, transparent 70%)`,
        }}
      ></div>

      {/* Floating Badge 1 (Top Left): Clean Arch + GetX */}
      <div className="hidden sm:flex absolute -top-5 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#0f131c]/90 backdrop-blur-md shadow-xl text-[11px] font-mono text-emerald-400 animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-bold">Clean Arch + GetX</span>
      </div>

      {/* Floating Badge 2 (Top Right): 4 Live Store Apps */}
      <div className="hidden sm:flex absolute -top-4 -right-5 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#0f131c]/90 backdrop-blur-md shadow-xl text-[11px] font-mono text-amber-300 animate-float-reverse">
        <Star size={12} className="fill-amber-400 text-amber-400" />
        <span className="font-bold">4 Live Store Apps</span>
      </div>

      {/* Floating Badge 3 (Bottom Left): 120 FPS Engine */}
      <div className="hidden sm:flex absolute -bottom-5 -left-5 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#0f131c]/90 backdrop-blur-md shadow-xl text-[11px] font-mono text-sky-400 animate-float-reverse">
        <Zap size={12} className="text-sky-400 fill-sky-400" />
        <span className="font-bold">120 FPS Impeller Engine</span>
      </div>

      {/* Main Device Outer Housing */}
      <div className="relative rounded-[2.5rem] p-3 sm:p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 border-[2px] border-zinc-600/50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* Device Metallic Rim Reflection */}
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        {/* Screen Bezel */}
        <div className="relative rounded-[2rem] overflow-hidden bg-[#07090e] border border-zinc-800/80 flex flex-col aspect-[9/17.5] sm:aspect-[9/18]">
          {/* Dynamic Island & Speaker Notch */}
          <div className="relative z-30 pt-2 pb-1 px-4 flex items-center justify-between text-[10px] font-mono text-zinc-400 bg-black/40">
            <span>9:41</span>
            {/* Dynamic Island pill */}
            <div className="w-20 h-4 rounded-full bg-black flex items-center justify-end px-2 gap-1.5 border border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60"></span>
            </div>
            <div className="flex items-center gap-1">
              <span>5G</span>
              <span className="w-4 h-2 rounded-[2px] border border-zinc-400 relative">
                <span className="absolute inset-0.5 bg-emerald-400"></span>
              </span>
            </div>
          </div>

          {/* Top Interactive App Selector Pills inside Device */}
          <div className="z-20 px-2.5 py-1.5 bg-zinc-950/80 border-b border-zinc-800/60 flex items-center justify-between gap-1">
            {apps.map((app, idx) => (
              <button
                key={app.id}
                onClick={() => {
                  setActiveTab(idx);
                  setAutoRotate(false);
                }}
                className={`flex-1 py-1 px-1.5 rounded-md font-mono text-[9px] font-bold tracking-tight transition-all text-center truncate ${
                  activeTab === idx
                    ? "bg-zinc-800 text-white shadow-sm border border-zinc-700"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {app.name}
              </button>
            ))}

            {/* Pause/Play rotation */}
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              title={autoRotate ? "Pause auto-switch" : "Resume auto-switch"}
              className="p-1 rounded text-zinc-500 hover:text-zinc-300"
            >
              {autoRotate ? <Pause size={10} /> : <Play size={10} />}
            </button>
          </div>

          {/* Dynamic Screen Content Container */}
          <div className="relative flex-1 p-3.5 flex flex-col justify-between overflow-hidden">
            {/* SCREEN 1: PRIVAE (Chef Marketplace) */}
            {activeTab === 0 && (
              <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
                {/* App Brand Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md">
                      <Utensils size={12} />
                    </div>
                    <div>
                      <div className="font-heading font-black text-xs text-white tracking-tight">
                        Privae • Chef Booking
                      </div>
                      <div className="text-[9px] font-mono text-zinc-400">Apple App Store Live</div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    ★ 5.0 Rating
                  </span>
                </div>

                {/* Interactive Chef Profile Card */}
                <div className="p-3 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-bold text-xs text-amber-400">
                        MB
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Chef Marco Bianchi</div>
                        <div className="text-[10px] text-zinc-400">Italian Cuisine Specialist</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 font-mono">$120/hr</span>
                  </div>

                  <div className="flex items-center gap-1 text-[9px] text-amber-400 font-mono">
                    <span>★★★★★</span>
                    <span className="text-zinc-400">(48 verified culinary reviews)</span>
                  </div>

                  {/* Booking CTA Button inside screen */}
                  <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-center text-[11px] shadow-sm flex items-center justify-center gap-1">
                    <span>Instant Booking Confirmed</span>
                    <CheckCircle2 size={12} />
                  </div>
                </div>

                {/* Animated Floating Notification Pill */}
                <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 text-[10px] text-emerald-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="truncate">Live Telemetry: Order #PV-842 Active</span>
                </div>
              </div>
            )}

            {/* SCREEN 2: BEAUTYRUN (E-Commerce) */}
            {activeTab === 1 && (
              <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
                {/* Brand Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                      <ShoppingBag size={12} />
                    </div>
                    <div>
                      <div className="font-heading font-black text-xs text-white tracking-tight">
                        BeautyRun Store
                      </div>
                      <div className="text-[9px] font-mono text-zinc-400">Google Play Store Live</div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30">
                    ★ 4.8 Rating
                  </span>
                </div>

                {/* Product & Cart Card */}
                <div className="p-3 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Glow Radiance Serum</div>
                      <div className="text-[10px] text-zinc-400">Pure Hyaluronic Complex</div>
                    </div>
                    <span className="text-xs font-bold text-rose-400 font-mono">$42.00</span>
                  </div>

                  {/* Delivery Status Progress Bar */}
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[9px] font-mono text-zinc-400">
                      <span>Express Courier</span>
                      <span className="text-emerald-400">Dispatched 🛵</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-rose-500 to-emerald-400 w-3/4 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Feature chip */}
                <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-between text-[10px] text-zinc-300 font-mono">
                  <span>Fast Auth & Cart Sync</span>
                  <span className="text-emerald-400 font-bold">100% BUG FREE</span>
                </div>
              </div>
            )}

            {/* SCREEN 3: SPARKY TOOLS (Electrical Utility) */}
            {activeTab === 2 && (
              <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
                {/* Brand Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-black shadow-md">
                      <Calculator size={12} />
                    </div>
                    <div>
                      <div className="font-heading font-black text-xs text-white tracking-tight">
                        Sparky Tools Suite
                      </div>
                      <div className="text-[9px] font-mono text-zinc-400">Dual Store Deployment</div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    9 Calculators
                  </span>
                </div>

                {/* Real-Time Reactive Calculator Matrix */}
                <div className="p-3 rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 shadow-md space-y-2 font-mono">
                  <div className="text-[10px] text-zinc-400 uppercase">
                    Ohm's Law Reactive Engine
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-1.5 rounded bg-black/60 border border-zinc-800">
                      <div className="text-[9px] text-zinc-500">VOLTAGE (V)</div>
                      <div className="font-bold text-sky-400">240 V</div>
                    </div>
                    <div className="p-1.5 rounded bg-black/60 border border-zinc-800">
                      <div className="text-[9px] text-zinc-500">RESISTANCE (R)</div>
                      <div className="font-bold text-emerald-400">12 Ω</div>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs font-bold text-emerald-300">
                    <span className="text-[10px]">CURRENT (I = V/R):</span>
                    <span>20.0 AMPERES</span>
                  </div>
                </div>

                {/* Offline-First chip */}
                <div className="p-2 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-between text-[10px] text-zinc-300 font-mono">
                  <span>Offline First Engine</span>
                  <span className="text-cyan-400 font-bold">ZERO LATENCY</span>
                </div>
              </div>
            )}

            {/* Bottom Screen Live Action Bar */}
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between font-mono text-[10px]">
              <span className="text-zinc-500">ENGINE: FLUTTER 3.x</span>
              <a
                href={currentApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              >
                <span>Store Link</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="pb-1.5 pt-1 flex justify-center bg-black/40">
            <div className="w-24 h-1 rounded-full bg-zinc-600"></div>
          </div>
        </div>
      </div>

      {/* Under Device Interactive Label */}
      <div className="mt-3 flex items-center justify-between px-2 font-mono text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-zinc-300 font-bold">Interactive Flutter Demo</span>
        </span>
        <span className="text-zinc-500 text-[10px]">Click tabs to switch apps</span>
      </div>
    </div>
  );
};
