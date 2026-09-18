import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCardProps {
  project: Project;
  alternate?: boolean;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, alternate = false, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl bg-[#0b0f19] border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-[0_8px_30px_rgba(6,182,212,0.1)]"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center ${alternate ? 'lg:direction-rtl' : ''}`}>
        {/* Visual Preview Side (takes 7 columns) */}
        <div className={`lg:col-span-7 h-64 sm:h-72 w-full transition-transform duration-500 group-hover:scale-[1.01] ${alternate ? 'lg:order-2' : 'lg:order-1'}`}>
          <ProjectMockup type={project.mockupType} />
        </div>

        {/* Content Side (takes 5 columns) */}
        <div className={`lg:col-span-5 flex flex-col justify-between space-y-4 ${alternate ? 'lg:order-1' : 'lg:order-2'}`}>
          <div>
            {/* Number and Category */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="text-cyan-400 font-bold text-sm tracking-widest">
                {project.number}
              </span>
              <span className="text-slate-400 text-[11px] uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-slate-400 text-sm leading-relaxed">
              "{project.description}"
            </p>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 border border-slate-800 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1 group-hover:underline">
              Inspect Project Details
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="text-[10px] font-mono text-slate-400">Preview UI</span>
          </div>
        </div>
      </div>
    </div>
  );
};
