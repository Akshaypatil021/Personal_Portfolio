import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
  external = false,
  target,
  rel,
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-[12px] transition-all focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/50';
  
  const variantClasses = {
    primary: 'bg-[#3B82F6] text-white hover:bg-[#60A5FA] border border-[#3B82F6]',
    secondary: 'bg-[#111827] text-white hover:bg-[#1F2937] hover:text-[#3B82F6] border border-[#1F2937]',
    outline: 'bg-transparent border border-[#1F2937] text-[#C7CDD8] hover:text-white hover:border-[#3B82F6]',
    ghost: 'bg-transparent text-[#94A3B8] hover:text-white hover:bg-[#111827] border border-transparent',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-5 py-2.5',
    lg: 'text-base px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const isTargetBlank = target === '_blank' || external;
  const isRel = rel || (isTargetBlank ? 'noopener noreferrer' : undefined);

  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        target={isTargetBlank ? '_blank' : undefined}
        rel={isRel}
      >
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;