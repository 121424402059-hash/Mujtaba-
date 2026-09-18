import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      {label && (
        <div className={`inline-flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono tracking-wider uppercase text-cyan-400 font-semibold">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
