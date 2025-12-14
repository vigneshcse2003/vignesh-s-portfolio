import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye } from 'lucide-react';
import Scene3D from '../components/Scene3D';
import { RESUME_LINK } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      
      {/* 3D Scene Layer (Full Background) */}
      <Scene3D />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Text Content */}
          <div className="pointer-events-auto max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-neon-cyan font-semibold tracking-[0.2em] uppercase mb-6 text-sm md:text-base">
                Web Developer <br />AI & Automation Engineer
              </h2>
              
              <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-none tracking-tight">
                VIGNESH <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">KATHAVARAYAN</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Architecting intelligent systems with <span className="text-white font-semibold">Generative AI</span>, <span className="text-white font-semibold">Computer Vision</span>, and scalable <span className="text-white font-semibold">MLOps</span> pipelines.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-neon-cyan transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] min-w-[180px]"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Resume
                </a>
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm min-w-[180px]"
                >
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Projects
                </a>
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold rounded-full flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg min-w-[180px]"
                >
                  Contact
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;