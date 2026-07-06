import { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Code, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  Mail, 
  BarChart2 
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navItems = [
  { id: 'hero', label: 'Introduction', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills & Tools', icon: Cpu },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'resume-link', label: 'Resume', icon: FileText, isExternal: true, href: `${import.meta.env.BASE_URL}Akshay_Patil_MCA.pdf` },
  { id: 'accomplishments', label: 'Stats', icon: BarChart2 },
  { id: 'contact', label: 'Contact Me', icon: Mail },
  
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education','experience', 'skills', 'projects',  'accomplishments', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/75 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container: Sleek 250px width matching Prakhar reference */}
      <aside 
        className={`fixed top-[70px] left-0 bottom-0 z-40 w-[250px] bg-[#111827] border-r border-[#1F2937] transition-all duration-300 flex flex-col py-6 px-4 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="w-full">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const targetHref = item.href || `#${item.id}`;
              const isActive = activeSection === item.id;

              if (item.isExternal) {
                return (
                  <a
                    key={item.id}
                    href={targetHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-[12px] text-sm font-medium text-[#C7CDD8] hover:text-[#3B82F6] hover:bg-[#1F2937] transition-all group"
                  >
                    <Icon size={18} className="text-[#94A3B8] group-hover:text-[#3B82F6] transition-colors shrink-0" />
                    <span>{item.label}</span>
                  </a>
                );
              }

              return (
                <a
                  key={item.id}
                  href={targetHref}
                  onClick={() => {
                    setActiveSection(item.id);
                    if (onClose) onClose();
                  }}
                  className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-[12px] text-sm font-medium transition-all group relative ${
                    isActive 
                      ? 'bg-[#3B82F6]/10 text-[#3B82F6] font-semibold border border-[#3B82F6]/30' 
                      : 'text-[#C7CDD8] hover:text-white hover:bg-[#1F2937]'
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#3B82F6] rounded-r-full" />
                  )}
                  <Icon size={18} className={isActive ? 'text-[#3B82F6] shrink-0' : 'text-[#94A3B8] group-hover:text-[#3B82F6] shrink-0'} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
