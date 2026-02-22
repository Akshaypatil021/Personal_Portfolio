import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ 
  children, 
  subtitle, 
  align = 'left' 
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-16 ${alignmentClasses[align]}`}>
      <h2 className="text-4xl sm:text-5xl font-display font-medium text-white tracking-[0.2em] uppercase mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
        {children}
      </h2>
      {subtitle && (
        <p className="text-sm font-light tracking-widest text-slate-400 uppercase max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-0.5 w-24 bg-gradient-to-r from-primary-500/50 via-primary-400 to-transparent mt-8 ${align === 'center' ? 'mx-auto from-transparent via-primary-500 to-transparent' : align === 'right' ? 'ml-auto from-transparent via-primary-400 to-primary-500/50' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;