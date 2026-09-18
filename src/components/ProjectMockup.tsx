import React from 'react';
import { Gamepad2, CheckCircle2, Clock, Calendar, Laptop, Sparkles, Trophy, Flame } from 'lucide-react';

interface ProjectMockupProps {
  type: 'gaming' | 'taskmanager' | 'portfolio';
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, className = '' }) => {
  if (type === 'gaming') {
    return (
      <div className={`relative w-full h-full bg-[#080d18] rounded-xl border border-cyan-500/20 overflow-hidden flex flex-col p-4 select-none ${className}`}>
        {/* Subtle background glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        
        {/* Mockup Browser Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-cyan-500/10 mb-3 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-slate-400 font-mono text-[11px] hidden sm:inline">levelup-gaming.zone</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              PS5 ARENA
            </span>
          </div>
        </div>

        {/* Mock Content */}
        <div className="flex-1 flex flex-col justify-between gap-3">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-[#0d1627] to-cyan-950/40 p-3 rounded-lg border border-slate-800/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-wider text-cyan-400">Next-Gen Gaming Experience</p>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                  <Gamepad2 className="w-4 h-4 text-cyan-400" />
                  LEVEL UP GAMING LOUNGE
                </h4>
              </div>
              <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                ₹199 / hr
              </span>
            </div>
          </div>

          {/* Cards Grid inside mockup */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            {/* Game 1 */}
            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-1.5">
                <span className="text-[10px] font-mono text-cyan-400/90">PS5 PRO ZONE</span>
                <Flame className="w-3 h-3 text-orange-400" />
              </div>
              <p className="text-xs font-semibold text-slate-100 line-clamp-1">Gran Turismo 7 & FIFA 25</p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2">
                <span>4K 120Hz Rig</span>
                <span className="text-emerald-400">4 Slots Open</span>
              </div>
            </div>

            {/* Tournament */}
            <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex flex-col justify-between">
              <div className="flex items-center justify-between text-cyan-400 mb-1.5">
                <span className="text-[10px] font-mono">WEEKEND CUP</span>
                <Trophy className="w-3 h-3 text-amber-400" />
              </div>
              <p className="text-xs font-semibold text-cyan-100">Tekken 8 Tournament</p>
              <div className="flex items-center justify-between text-[10px] text-slate-300 mt-2">
                <span>Sat, 6:00 PM</span>
                <span className="text-cyan-300 font-mono">Join Bracket</span>
              </div>
            </div>
          </div>

          {/* Booking Bar */}
          <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-2 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Select Time Slot: <strong className="text-white">Today 7:00 PM</strong></span>
            </div>
            <span className="px-2.5 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-[10px] transition-colors">
              Reserve Station
            </span>
          </div>
        </div>

        {/* UI Watermark */}
        <div className="mt-2 text-[9px] text-slate-500 font-mono flex items-center justify-between">
          <span>Design Preview Concept</span>
          <span>HTML • CSS • JavaScript</span>
        </div>
      </div>
    );
  }

  if (type === 'taskmanager') {
    return (
      <div className={`relative w-full h-full bg-[#0b101b] rounded-xl border border-blue-500/20 overflow-hidden flex flex-col p-4 select-none ${className}`}>
        {/* Subtle background glow */}
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Browser Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="ml-2 text-slate-400 font-mono text-[11px] hidden sm:inline">student-tasks.app</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-blue-400 font-mono text-[10px]">
            REACT + LOCAL STORAGE
          </span>
        </div>

        {/* App Workspace */}
        <div className="flex-1 flex flex-col justify-between gap-2.5">
          {/* Progress Header */}
          <div className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-mono">Current Semester Tasks</p>
              <h4 className="text-xs font-bold text-white">4 of 5 Completed (80%)</h4>
            </div>
            <div className="w-20 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-cyan-400 rounded-full" />
            </div>
          </div>

          {/* Task Items List */}
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between p-2 rounded-md bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-200 text-[11px]">CS204: Data Structures Lab 3</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                Submitted
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-md bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-slate-200 text-[11px]">Web Development: Responsive Grid UI</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                Complete
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-md bg-slate-800/40 border border-cyan-500/20">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full border border-cyan-400/60 shrink-0" />
                <span className="text-white text-[11px] font-medium">Discrete Math Assignment 02</span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/40 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5" /> Due Tomorrow
              </span>
            </div>
          </div>

          {/* Quick Add Bar */}
          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 bg-slate-900/90 border border-slate-700/60 rounded px-2 py-1 text-[11px] text-slate-500 font-mono">
              + New task item...
            </div>
            <span className="text-[10px] font-mono text-cyan-400 px-2 py-1 bg-cyan-950/40 border border-cyan-500/30 rounded">
              Local Stored
            </span>
          </div>
        </div>

        {/* UI Watermark */}
        <div className="mt-2 text-[9px] text-slate-500 font-mono flex items-center justify-between">
          <span>Design Preview Concept</span>
          <span>React • Local Storage</span>
        </div>
      </div>
    );
  }

  // Personal Portfolio Mockup
  return (
    <div className={`relative w-full h-full bg-[#0a0f19] rounded-xl border border-slate-700/40 overflow-hidden flex flex-col p-4 select-none ${className}`}>
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top Browser Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <span className="ml-2 text-slate-400 font-mono text-[11px] hidden sm:inline">aarav-sharma.dev</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-[10px]">
          MINIMAL & RESPONSIVE
        </span>
      </div>

      {/* Mock content */}
      <div className="flex-1 flex flex-col justify-between gap-3">
        {/* Hero Preview */}
        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-6 h-6 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold font-mono text-xs">
              A
            </span>
            <span className="text-[10px] font-mono text-slate-400">PORTFOLIO ARCHITECTURE</span>
          </div>
          <h4 className="text-xs font-semibold text-white">Curious mind. Creative builder.</h4>
          <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
            Showcasing personal skills, projects, education, and contact details with fluid typography and dark UI.
          </p>
        </div>

        {/* Section Matrix */}
        <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80 text-center">
            <span className="text-cyan-400 block text-xs font-bold">03</span>
            <span className="text-slate-400 text-[9px]">Projects</span>
          </div>
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80 text-center">
            <span className="text-cyan-400 block text-xs font-bold">03</span>
            <span className="text-slate-400 text-[9px]">Certifications</span>
          </div>
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80 text-center">
            <span className="text-emerald-400 block text-xs font-bold">2026</span>
            <span className="text-slate-400 text-[9px]">Internship</span>
          </div>
        </div>

        {/* Footer line */}
        <div className="p-2 rounded bg-slate-900/40 border border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Hyderabad, India
          </span>
          <span className="text-cyan-400 font-mono">Open to Internships</span>
        </div>
      </div>

      {/* UI Watermark */}
      <div className="mt-2 text-[9px] text-slate-500 font-mono flex items-center justify-between">
        <span>Design Preview Concept</span>
        <span>HTML • CSS • Responsive Design</span>
      </div>
    </div>
  );
};
