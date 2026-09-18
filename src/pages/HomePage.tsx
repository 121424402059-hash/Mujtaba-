import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Code2, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { PageId, Project } from '../types';
import { DigitalWorkspace } from '../components/DigitalWorkspace';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const previewSkills = [
    { name: 'HTML5', tag: 'Semantic Markup' },
    { name: 'CSS3', tag: 'Modern Styling' },
    { name: 'JavaScript', tag: 'ES6+ Logic' },
    { name: 'React.js', tag: 'Component UI' },
    { name: 'Figma', tag: 'Interface Design' },
    { name: 'Git & GitHub', tag: 'Version Control' },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ================= HERO SECTION ================= */}
      <section id="home-hero" className="relative pt-12 sm:pt-20 lg:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e1626] border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-semibold">{PERSONAL_INFO.status.toUpperCase()}</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400">Hyderabad, IN</span>
              </div>

              {/* Eyebrow Label */}
              <p className="text-xs sm:text-sm font-mono tracking-wider uppercase text-cyan-400 font-semibold">
                COMPUTER SCIENCE STUDENT • FRONTEND DEVELOPER
              </p>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.heroHeadline}
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-sans">
                {PERSONAL_INFO.heroSubheadline}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('projects')}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 active:scale-95 transition-all shadow-[0_0_25px_rgba(6,182,212,0.25)] focus:outline-none"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0f172a] hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all focus:outline-none"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              {/* Primary Interests tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 block mb-2">Core Focus Areas:</span>
                <div className="flex flex-wrap gap-2">
                  {['Frontend Development', 'React & JavaScript', 'UI/UX Design', 'Responsive Web'].map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Hero Column: Abstract Digital Workspace */}
            <div className="lg:col-span-6 flex justify-center">
              <DigitalWorkspace />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION SECTION ================= */}
      <section id="home-intro" className="relative border-y border-slate-800/80 bg-[#070b12] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              PHILOSOPHY & MINDSET
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
              "{PERSONAL_INFO.introStatement}"
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl mx-auto">
              I am a passionate computer science student interested in web development, creative design, and emerging technologies. I enjoy transforming ideas into interactive, user-friendly digital experiences while actively developing my skills in frontend development, JavaScript, and UI/UX design.
            </p>
            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Discover More About Aarav</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section id="home-projects" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SectionHeading
              label="Selected Work"
              title="Featured Projects"
              subtitle="Interactive concepts and responsive web applications demonstrating modern frontend practices."
            />
            <button
              onClick={() => onNavigate('projects')}
              className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 hover:text-cyan-300 self-start md:self-auto"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Large Project Cards */}
          <div className="space-y-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                alternate={index % 2 === 1}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS PREVIEW SECTION ================= */}
      <section id="home-skills" className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#090d16] border border-slate-800 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Technical Foundation
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                  Skills & Tools Preview
                </h3>
              </div>
              <button
                onClick={() => onNavigate('skills')}
                className="group inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
              >
                <span>View all skills & certifications</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Grid of 6 compact skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {previewSkills.map((s) => (
                <div
                  key={s.name}
                  className="p-4 rounded-xl bg-[#0d1424]/80 border border-slate-800 hover:border-cyan-500/30 transition-all text-center group"
                >
                  <span className="block text-sm font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {s.name}
                  </span>
                  <span className="block text-[10px] font-mono text-slate-400 mt-1">
                    {s.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section id="home-cta" className="relative pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0b1325] via-[#090e1a] to-[#070a12] border border-cyan-500/20 p-8 sm:p-14 overflow-hidden text-center space-y-6">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              OPPORTUNITIES & COLLABORATION
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white max-w-2xl mx-auto tracking-tight">
              Let's build something together.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-sans leading-relaxed">
              Have an idea, opportunity, or project in mind? I'd love to hear from you.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 active:scale-95 transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)] focus:outline-none"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
