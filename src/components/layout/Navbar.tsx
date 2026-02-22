import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#hero' },
  { title: 'Education', href: '#education' },
  { title: 'Experience', href: '#experience' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Accomplishments', href: '#accomplishments' },
  { title: 'Certifications', href: '#certifications' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isScrolled = scrollPosition > 50;

  return (
    <header
      className={`fixed top-4 left-4 right-4 lg:left-12 lg:right-12 z-50 transition-all duration-300 rounded-full border border-white/10 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] py-3 px-8'
          : 'bg-slate-900/40 backdrop-blur-sm shadow-lg py-4 px-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-lg font-display font-bold tracking-widest text-white flex items-center gap-2 mr-8 flex-shrink-0 whitespace-nowrap"
          >
            <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400"></span>
            Akshay Patil
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end flex-1 ml-4 overflow-hidden">
            <ul className="hidden lg:flex gap-4 lg:gap-8 justify-center w-full">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="relative text-xs font-bold text-slate-400 hover:text-primary-400 transition-all duration-300 uppercase tracking-widest hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 ml-4">
              <a 
                href={`${import.meta.env.BASE_URL}FinalResume2.pdf`} 
                className="flex items-center px-5 py-2 rounded-full bg-white text-black hover:bg-slate-200 transition-colors text-xs font-bold tracking-wider uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 dark:text-slate-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[80px] bg-slate-900/95 backdrop-blur-xl z-[100] rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.15)]">
          <div className="flex flex-col h-[calc(100vh-100px)] max-h-[400px] p-6 overflow-y-auto">
            <nav className="flex-1">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="block w-full text-center text-lg font-bold text-slate-300 hover:text-primary-400 transition-all duration-300 uppercase tracking-widest hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]"
                      onClick={closeMenu}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="pt-6 mt-auto">
              <a 
                href={`${import.meta.env.BASE_URL}FinalResume2.pdf`} 
                className="flex items-center justify-center w-full px-4 py-4 rounded-full bg-white text-black hover:bg-slate-200 transition-colors text-sm font-bold tracking-widest uppercase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;