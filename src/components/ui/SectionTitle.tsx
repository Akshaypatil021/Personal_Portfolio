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
    center: 'text-center items-center justify-center',
    right: 'text-right justify-end',
  };

  return (
    <div className={`mb-10 ${align === 'center' ? 'flex flex-col items-center text-center' : ''}`}>
      <div className={`flex items-center gap-3.5 ${alignmentClasses[align]}`}>
        <span className="w-3 h-9 sm:h-11 bg-[#3B82F6] rounded-full inline-block shrink-0" />
        <h2 className="text-3xl sm:text-4xl md:text-[36px] font-bold font-sans text-white tracking-tight leading-tight">
          {children}
        </h2>
      </div>
      {subtitle && (
        <p className="text-base sm:text-lg font-normal text-[#94A3B8] mt-3 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;