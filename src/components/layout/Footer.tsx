import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A14] border-t border-white/10 py-10 transition-colors duration-300 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-slate-500 tracking-wider">
              © {new Date().getFullYear()} Akshay Patil. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Akshaypatil021"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-patil-305a23242/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/akshay_patil021/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LeetCode"
            >
              <Code size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;