import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience }) => {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-cyan-500/30 group">
      {/* Timeline Node */}
      <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080b11] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

      {/* Card Content */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-2">
              <Briefcase className="w-3 h-3" />
              {experience.company}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              {experience.position}
            </h3>
          </div>

          <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
            <span className="flex items-center gap-1 text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {experience.duration}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Verbatim supplied description */}
        <div className="p-4 rounded-xl bg-[#090d16] border border-slate-800/80 text-sm text-slate-300 leading-relaxed font-sans italic">
          "{experience.description}"
        </div>

        {/* Focus bullets */}
        <div className="space-y-2 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Focus Areas
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {experience.coreResponsibilities.map((resp, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/50 border border-slate-800/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-mono text-slate-400 self-center mr-1">Technologies:</span>
          {['HTML', 'CSS', 'JavaScript', 'Responsive Web Design'].map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
