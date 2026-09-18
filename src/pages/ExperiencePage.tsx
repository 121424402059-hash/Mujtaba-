import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { PageId } from '../types';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 space-y-16 sm:space-y-20">
      {/* Hero */}
      <section id="experience-hero">
        <SectionHeading
          label="Professional Timeline"
          title="Experience"
          subtitle="Internship experience and hands-on frontend development practice."
        />
      </section>

      {/* Timeline Section */}
      <section id="experience-timeline" className="max-w-4xl space-y-8">
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <TimelineItem key={idx} experience={exp} />
          ))}

          {/* Academic milestone on the same timeline */}
          <div className="relative pl-6 sm:pl-8 border-l border-slate-800 group">
            <div className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#080b11] border-2 border-slate-600 group-hover:border-cyan-400 transition-colors" />

            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] border border-slate-800/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    ACADEMIC FOUNDATION
                  </span>
                  <h4 className="text-xl font-bold font-display text-white">
                    {EDUCATION_DATA.degree}
                  </h4>
                  <p className="text-xs font-mono text-slate-400">
                    {EDUCATION_DATA.institution}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end text-xs font-mono text-slate-400 gap-2 sm:gap-1">
                  <span className="text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {EDUCATION_DATA.duration}
                  </span>
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {EDUCATION_DATA.focus}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="pt-12 border-t border-slate-800 flex items-center justify-between">
        <button
          onClick={() => onNavigate('projects')}
          className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          ← Selected Projects
        </button>
        <button
          onClick={() => onNavigate('skills')}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          View Skills & Tools →
        </button>
      </div>
    </div>
  );
};
