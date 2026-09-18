import React from 'react';
import { 
  Code2, 
  Palette, 
  Cpu, 
  Atom, 
  Figma as FigmaIcon, 
  Layers, 
  Smartphone, 
  GitBranch,
  Check
} from 'lucide-react';

interface SkillCardProps {
  name: string;
  description: string;
  icon: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Figma':
        return <FigmaIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <div className="group relative p-5 sm:p-6 rounded-xl bg-[#0b0f19] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(6,182,212,0.12)]">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-lg bg-[#0f172a] border border-slate-800 group-hover:border-cyan-500/30 flex items-center justify-center transition-colors">
          {getIcon()}
        </div>
        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          Core Skill
        </span>
      </div>

      <div className="mt-4 space-y-1.5">
        <h4 className="text-base font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
          {name}
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed font-sans">
          {description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
        <Check className="w-3 h-3 text-cyan-400" />
        <span>Active Practice & Application</span>
      </div>
    </div>
  );
};
