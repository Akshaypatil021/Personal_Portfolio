import { useState, useEffect } from 'react';
import { 
  Home, 
  Mail, 
  Linkedin, 
  Github, 
  Code, 
  FileText, 
  Sun, 
  Moon, 
  Menu,
  X
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface TopHeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

const TopHeader = ({ onToggleSidebar, isSidebarOpen }: TopHeaderProps) => {
  const { theme, toggleTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-white/60 dark:bg-[#050505]/65 backdrop-blur-2xl backdrop-saturate-150 border-b border-slate-200/80 dark:border-[#1F2937]/80 flex items-center justify-between transition-all duration-300 shadow-sm">
      
      {/* Left: Mobile Toggle & Developer Logo - Fixed to match sidebar width 280px */}
      <div className="flex items-center gap-4 px-5 md:w-[250px] shrink-0 border-r-0 md:border-r border-slate-200/50 dark:border-[#1F2937]/50 h-full">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-[10px] bg-slate-100 dark:bg-[#111827] text-slate-700 dark:text-[#C7CDD8] hover:text-[#3B82F6] transition-colors border border-slate-200 dark:border-[#1F2937]"
            aria-label="Toggle Navigation Sidebar"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}

        <a 
          href="#hero" 
          className="text-lg sm:text-xl font-bold font-sans tracking-tight text-slate-900 dark:text-white flex items-center gap-2 hover:text-[#3B82F6] transition-colors"
        >
          <span>Akshay Patil</span>
        </a>
      </div>

      {/* Center & Right Container with exactly 20px padding from sidebar edge */}
      <div className="flex-grow flex items-center justify-between pl-[20px] pr-6">
        {/* Nav Links starting 20px from sidebar edge */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700 dark:text-[#C7CDD8]">
          <a href="#hero" className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors">
            <Home size={17} />
            <span>Home</span>
          </a>
          <a href="mailto:patils.akshaypatil21@gmail.com" className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors">
            <Mail size={17} />
            <span>Email</span>
          </a>
          <a href="https://www.linkedin.com/in/akshay-patil-305a23242/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors">
            <Linkedin size={17} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Akshaypatil021" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors">
            <Github size={17} />
            <span>GitHub</span>
          </a>
          <a href="https://leetcode.com/u/akshay_patil021/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors">
            <Code size={17} />
            <span>LeetCode</span>
          </a>
          <a 
            href={`${import.meta.env.BASE_URL}Akshay_Patil_MCA.pdf`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-[#3B82F6] transition-colors bg-slate-100/80 dark:bg-[#111827]/80 backdrop-blur-md px-3.5 py-1.5 rounded-[10px] border border-slate-200 dark:border-[#1F2937]"
          >
            <FileText size={17} />
            <span>Resume</span>
          </a>
        </nav>

        {/* Right Controls: Theme Toggle & Clock (HH:MM AM/PM) */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-[10px] bg-slate-100/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200 dark:border-[#1F2937] text-slate-700 dark:text-[#C7CDD8] hover:text-[#3B82F6] hover:border-[#3B82F6]/50 transition-all shadow-xs"
            title="Toggle Theme"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Digital Clock Widget (Hours & Minutes) */}
          <div className="flex items-center px-3.5 py-1.5 bg-slate-100/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200 dark:border-[#1F2937] rounded-[10px] text-xs font-mono font-medium text-slate-900 dark:text-white tracking-wider shadow-xs">
            {currentTime || '00:00 AM'}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
