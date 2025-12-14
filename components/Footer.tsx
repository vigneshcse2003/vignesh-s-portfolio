import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-sm border-t border-white/5 py-8 mt-auto z-40 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} DevPortfolio. Built with React & Three.js.
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors transform hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors transform hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;