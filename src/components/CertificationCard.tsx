import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { Certification } from '../types';

interface CertificationCardProps {
  certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <div className="group p-6 rounded-xl bg-[#0b0f19] border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-400">
            CERT {certification.number}
          </span>
        </div>

        <div>
          <h4 className="text-base font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
            {certification.title}
          </h4>
          <p className="text-xs font-mono text-cyan-400/90 mt-1">
            {certification.institution}
          </p>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
        <span>Course Completed</span>
      </div>
    </div>
  );
};
