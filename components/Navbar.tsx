import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  //{ name: 'Achievements', path: '#achievements' },
  { name: 'Skills', path: '#skills' },
  { name: 'Experience', path: '#experience' },
  { name: 'Testimonials', path: '#testimonials' },
  //{ name: 'Articles', path: '#articles' },
  //{ name: 'Stats', path: '#profiles' },
  { name: 'Contact', path: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky header height + breathing room

      NAV_ITEMS.forEach((item) => {
        const sectionId = item.path.replace('#', '');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const sectionId = path.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      setActiveSection(sectionId); // Immediate feedback
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleClick(e, '#home')}
            className="flex-shrink-0 flex items-center gap-3 group"
          >
            {/* Custom V-AI Logo */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-10 h-10 text-neon-cyan group-hover:text-neon-purple transition-all duration-500 transform group-hover:scale-110 drop-shadow-[0_0_8px_rgba(76,201,240,0.5)]"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              {/* Main V Shape */}
              <path d="M4 4l8 16 8-16" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Neural Nodes */}
              <circle cx="4" cy="4" r="1.5" className="fill-neon-purple stroke-none group-hover:animate-pulse" />
              <circle cx="20" cy="4" r="1.5" className="fill-neon-purple stroke-none group-hover:animate-pulse" />
              <circle cx="12" cy="20" r="1.5" className="fill-neon-cyan stroke-none group-hover:animate-pulse" />
              
              {/* Center Connection */}
              <path d="M12 20v-7" strokeLinecap="round" className="opacity-50" strokeWidth="1.5" />
              <circle cx="12" cy="13" r="1.2" className="fill-white stroke-none" />
            </svg>

            <span className="font-bold text-xl tracking-wider text-white">
              VIGNESH<span className="text-neon-purple"> KATHAVARAYAN</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.path.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleClick(e, item.path)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      isActive ? 'text-neon-cyan bg-white/5 shadow-[0_0_10px_rgba(0,243,255,0.1)]' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan shadow-[0_0_8px_#00f3ff]"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.path.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleClick(e, item.path)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-neon-cyan bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;