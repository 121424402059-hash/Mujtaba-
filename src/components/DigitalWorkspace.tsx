import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Terminal, Code2, Layers, Cpu, Sparkles, CheckCircle2, ChevronRight, LayoutTemplate } from 'lucide-react';

export const DigitalWorkspace: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('preview');
  const [interactiveCounter, setInteractiveCounter] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Gentle parallax offset calculation
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div
      className="relative w-full max-w-xl mx-auto lg:max-w-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-transparent rounded-2xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Digital Workspace Window */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: mousePos.x,
                y: mousePos.y,
                rotateX: mousePos.y * -0.2,
                rotateY: mousePos.x * 0.2,
              }
        }
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="relative bg-[#0b0f19] border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm"
      >
        {/* Workspace Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080d16] border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 inline-block" />
            </div>
            <div className="h-4 w-[1px] bg-slate-800 mx-1.5" />
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              aarav-sharma-workspace
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center bg-[#0d1424] rounded-lg p-1 border border-slate-800/80 text-xs">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-2.5 py-1 rounded font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'preview'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutTemplate className="w-3 h-3" />
              <span>UI Component</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>Experience.tsx</span>
            </button>
          </div>
        </div>

        {/* Workspace Canvas */}
        <div className="p-5 sm:p-6 bg-grid-pattern min-h-[340px] flex flex-col justify-between">
          {activeTab === 'preview' ? (
            <div className="space-y-4">
              {/* Status Header inside UI Canvas */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f172a]/90 border border-slate-800 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono">
                    AS
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Frontend Workspace</h4>
                    <p className="text-[11px] text-slate-400 font-mono">Hyderabad • Student & Developer</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Ready
                </span>
              </div>

              {/* Interactive Component Card */}
              <div className="p-4 rounded-xl bg-[#0d1424]/95 border border-cyan-500/20 shadow-lg space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cyan-400 text-[11px] tracking-wide uppercase">Interactive Test Bench</span>
                  <span className="text-[10px] font-mono text-slate-400">Render state: v1.0.4</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Crafting accessible components with React, semantic HTML5, and responsive CSS architectures.
                </p>

                {/* Micro interaction */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-mono text-[11px]">Selected Works:</span>
                    <span className="font-mono text-cyan-300 font-semibold">{interactiveCounter} Projects</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setInteractiveCounter((c) => Math.max(1, c - 1))}
                      className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-mono font-bold transition-colors"
                      title="Decrease"
                    >
                      -
                    </button>
                    <button
                      onClick={() => setInteractiveCounter((c) => Math.min(6, c + 1))}
                      className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center font-mono font-bold transition-colors"
                      title="Increase"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Spec Badges */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0f172a]/70 border border-slate-800/80 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>React & JS ES6+</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#0f172a]/70 border border-slate-800/80 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tailwind & CSS3</span>
                </div>
              </div>
            </div>
          ) : (
            /* Code Fragment Tab */
            <div className="font-mono text-xs text-slate-300 space-y-1 bg-[#090d15] p-4 rounded-xl border border-slate-800/90 overflow-x-auto">
              <div className="text-slate-500">// aarav-sharma-profile.config.ts</div>
              <div>
                <span className="text-cyan-400">export const</span> <span className="text-amber-300">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Aarav Sharma"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">location:</span> <span className="text-emerald-300">"Hyderabad, India"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role:</span> <span className="text-emerald-300">"Frontend Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">education:</span> <span className="text-emerald-300">"B.Tech in CS (2024-2028)"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">status:</span> <span className="text-cyan-300">"Open to Internships"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">stack:</span> [
                <span className="text-amber-300">"React.js"</span>, <span className="text-amber-300">"JavaScript"</span>, <span className="text-amber-300">"HTML5"</span>, <span className="text-amber-300">"CSS3"</span>
                ],
              </div>
              <div>&#125;;</div>
            </div>
          )}

          {/* Footer Bar of Workspace */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              DemoTech Solutions Intern
            </span>
            <span className="text-slate-500">2024 — 2028</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Accent Capsule: Top Right */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -6, 0],
                x: mousePos.x * 0.4,
              }
        }
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl bg-[#0e1626]/95 border border-cyan-500/40 shadow-xl text-xs font-mono text-cyan-300 flex items-center gap-2 backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>UI / UX Design</span>
      </motion.div>

      {/* Floating Accent Capsule: Bottom Left */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, 6, 0],
                x: mousePos.x * -0.3,
              }
        }
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-4 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl bg-[#0e1626]/95 border border-slate-700/80 shadow-xl text-xs font-mono text-slate-300 flex items-center gap-2 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
        <span>Open to Internships</span>
      </motion.div>
    </div>
  );
};
