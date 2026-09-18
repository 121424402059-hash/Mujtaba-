import React from 'react';
import { Sparkles, Code2, Palette, Wrench, Award, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { CertificationCard } from '../components/CertificationCard';
import { PageId } from '../types';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('frontend')) {
      return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
    if (category.toLowerCase().includes('design')) {
      return <Palette className="w-4 h-4 text-cyan-400" />;
    }
    return <Wrench className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 space-y-20 sm:space-y-28">
      {/* Hero */}
      <section id="skills-hero">
        <SectionHeading
          label="Competencies & Workflow"
          title="Skills & Tools"
          subtitle="Applied technical capabilities, design workflow practices, and developer tooling."
        />
      </section>

      {/* Categorized Skills */}
      <section id="skills-categories" className="space-y-16">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.category} className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                {getCategoryIcon(category.category)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {category.category}
              </h3>
              <span className="text-xs font-mono text-slate-400 ml-auto">
                {category.items.length} {category.items.length === 1 ? 'Skill' : 'Skills'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.items.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  description={skill.description}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Certifications Section */}
      <section id="skills-certifications" className="space-y-8">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Certifications
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Verified coursework completed across web development and design.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.number} certification={cert} />
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="pt-12 border-t border-slate-800 flex items-center justify-between">
        <button
          onClick={() => onNavigate('experience')}
          className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          ← View Experience
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Let's Connect →
        </button>
      </div>
    </div>
  );
};
