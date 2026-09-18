import React from 'react';
import { Mail, Linkedin, Github, ArrowUpRight, Heart, Terminal } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="border-t border-slate-800/80 bg-[#070a10] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Slogan */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#0f172a] border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                A
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>

            <p className="text-slate-300 font-mono text-sm max-w-sm">
              "{PERSONAL_INFO.introStatement}"
            </p>

            <p className="text-slate-500 text-xs leading-relaxed max-w-md">
              Computer Science student at Example Institute of Technology, exploring modern frontend architectures, clean code standards, and thoughtful interface designs.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-cyan-400 transition-colors py-0.5 inline-block text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">Connect</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors group"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright sub-bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © 2026 Aarav Sharma. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <Terminal className="w-3 h-3 text-cyan-400" />
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
