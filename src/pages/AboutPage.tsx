import React from 'react';
import { MapPin, Target, Sparkles, UserCheck, GraduationCap, Calendar, BookOpen, Lightbulb, Hammer, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, APPROACH_CARDS, EDUCATION_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const infoCards = [
    {
      label: 'LOCATION',
      value: 'Hyderabad, India',
      detail: 'Telangana, India',
      icon: MapPin,
    },
    {
      label: 'FOCUS',
      value: 'Frontend Development',
      detail: 'Web & Component Interfaces',
      icon: Target,
    },
    {
      label: 'INTEREST',
      value: 'UI/UX & Digital Experiences',
      detail: 'Human-Centered Design',
      icon: Sparkles,
    },
    {
      label: 'STATUS',
      value: 'Open to Internships',
      detail: 'Active Candidate',
      icon: UserCheck,
    },
  ];

  const getApproachIcon = (title: string) => {
    switch (title) {
      case 'LEARN':
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
      case 'BUILD':
        return <Hammer className="w-5 h-5 text-cyan-400" />;
      case 'IMPROVE':
        return <RefreshCw className="w-5 h-5 text-cyan-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-24 space-y-20 sm:space-y-28">
      {/* ================= ABOUT HERO ================= */}
      <section id="about-hero" className="space-y-6">
        <SectionHeading
          label="Profile & Philosophy"
          title="About Aarav"
          subtitle="Learning, building, and turning ideas into digital experiences."
        />

        {/* Info Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="p-5 rounded-2xl bg-[#0b0f19] border border-slate-800 hover:border-cyan-500/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-semibold">
                    {card.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                  {card.value}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  {card.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= BIOGRAPHY SECTION ================= */}
      <section id="about-bio" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            BIOGRAPHY
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Transforming concepts into functional code.
          </h3>
          <p className="text-xs font-mono text-slate-400">
            Aarav Sharma • Hyderabad, India
          </p>
        </div>

        <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#0a0e18] border border-slate-800 space-y-6">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans">
            "I am a passionate computer science student interested in web development, creative design, and emerging technologies. I enjoy transforming ideas into interactive, user-friendly digital experiences."
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            "I am currently developing my skills in frontend development, JavaScript, and UI/UX design while working on personal projects."
          </p>
          <p className="text-base sm:text-lg text-cyan-300 font-medium leading-relaxed font-sans">
            "I am eager to learn, collaborate, and contribute to innovative projects."
          </p>

          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="text-slate-400 self-center">Primary Interests:</span>
            {PERSONAL_INFO.interests.map((interest) => (
              <span
                key={interest}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW I THINK SECTION ================= */}
      <section id="about-approach" className="space-y-8">
        <SectionHeading
          label="Personal Approach"
          title="How I Think"
          subtitle="Core working principles developed through continuous coding practice and academic study."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {APPROACH_CARDS.map((card) => (
            <div
              key={card.number}
              className="p-8 rounded-2xl bg-[#0b0f19] border border-slate-800 hover:border-cyan-500/30 transition-all space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-mono text-sm font-bold">
                  {card.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 flex items-center justify-center transition-colors">
                  {getApproachIcon(card.title)}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h4>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION SECTION ================= */}
      <section id="about-education" className="space-y-8">
        <SectionHeading
          label="Academic Background"
          title="Education"
          subtitle="Foundational computer science study and software engineering coursework."
        />

        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b0f19] border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-sm text-slate-300 font-medium">
                  {EDUCATION_DATA.institution}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col sm:items-end text-xs font-mono text-slate-400 gap-2 sm:gap-1">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-200">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {EDUCATION_DATA.duration}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5" />
                {EDUCATION_DATA.location}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-sans">
            Curriculum focusing on core computer science foundations including algorithms, data structures, web development, software engineering, and interactive human-computer interfaces.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            {['Computer Science', 'Frontend Development', 'Web Technologies', 'Software Foundations'].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Next Step */}
      <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          ← Return to Home
        </button>
        <button
          onClick={() => onNavigate('projects')}
          className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Explore Selected Work →
        </button>
      </div>
    </div>
  );
};
