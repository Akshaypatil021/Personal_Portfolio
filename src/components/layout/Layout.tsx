import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden relative">
      {/* Global 3D Purple Floor Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply dark:mix-blend-normal">
        <div className="absolute bottom-[-20vh] w-[200vw] h-[80vh] left-[-50vw] argus-floor-grid opacity-60 dark:opacity-40"></div>
        {/* Fade grid out deeply into the background */}
        <div className="absolute bottom-0 w-full h-[80vh] bg-gradient-to-t from-transparent via-slate-50/80 to-slate-50 dark:via-bg-dark/80 dark:to-bg-dark"></div>
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;