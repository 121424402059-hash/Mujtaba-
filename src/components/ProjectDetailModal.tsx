import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Layers, Code2, Sparkles, CheckCircle } from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#080d15] border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="font-mono text-cyan-400 text-xs font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-slate-400">{project.category}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            <div>
              <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                "{project.description}"
              </p>
            </div>

            {/* Visual preview representation */}
            <div className="h-64 sm:h-72 w-full">
              <ProjectMockup type={project.mockupType} />
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-cyan-500/30 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Project Architecture & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Realistic Transparency Notice */}
            <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Concept project implementation built for practice and academic exploration.</span>
              </span>
              <span className="font-mono text-slate-500 text-[11px] shrink-0">Design Preview</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
