import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';
import AIChatbot from './AIChatbot';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col text-white bg-dark-bg selection:bg-neon-purple selection:text-white">
      <ParticlesBackground />
      
      {/* Background gradients for ambiance */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/20 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-16 z-10 relative">
        {children}
      </main>
      
      <AIChatbot />
      <Footer />
    </div>
  );
};

export default Layout;