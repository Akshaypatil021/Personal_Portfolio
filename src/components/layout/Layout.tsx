import { useState, ReactNode } from 'react';
import TopHeader from './TopHeader';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans antialiased relative selection:bg-[#3B82F6] selection:text-white">
      {/* Fixed Top Header (70px height) */}
      <TopHeader 
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Fixed Sidebar (250px width) */}
      <Sidebar 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Canvas (Offset for 70px navbar & 250px desktop sidebar) */}
      <div className="pt-[70px] md:pl-[250px] min-h-screen flex flex-col justify-between relative z-10 bg-[#050505]">
        <main className="flex-grow bg-[#050505]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;