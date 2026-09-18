import React from 'react';
import { Sparkles, Info, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, PageId } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onSelectProject }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 space-y-16 sm:space-y-20">
      {/* Hero */}
      <section id="projects-hero" className="space-y-4">
        <SectionHeading
          label="Portfolio Works"
          title="Selected Work"
          subtitle="A collection of projects exploring frontend development, applications, and digital experiences."
        />

        {/* Realistic Note on Project Previews */}
        <div className="p-4 rounded-xl bg-[#0b101c] border border-cyan-500/20 text-xs text-slate-300 flex items-start gap-3 max-w-2xl">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Project cards display custom-designed UI mockups and architectural concepts created with pure CSS and code. Click any project to inspect its layout details, components, and technology stack.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section id="projects-list" className="space-y-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            alternate={index % 2 === 1}
            onSelect={onSelectProject}
          />
        ))}
      </section>

      {/* Bottom Navigation */}
      <div className="pt-12 border-t border-slate-800 flex items-center justify-between">
        <button
          onClick={() => onNavigate('about')}
          className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          ← About Aarav
        </button>
        <button
          onClick={() => onNavigate('experience')}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Experience & Internship →
        </button>
      </div>
    </div>
  );
};
