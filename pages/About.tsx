import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap, Globe, Calendar, Rocket, Clock, Coffee, X, Info } from 'lucide-react';
import { ABOUT_STATS } from '../constants';
import { AboutStats } from '../types';

const About: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<AboutStats | null>(null);

  // Map string icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left: Bio & Terminal */}
        <div className="space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Behind the <span className="text-neon-cyan">Code</span>
            </h2>
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
              <p>
                I am an engineer driven by the curiosity of "what if?" My journey began with simple automation scripts and evolved into architecting complex AI systems.
              </p>
              <p>
                Currently, I focus on the intersection of <span className="text-white font-semibold">Generative AI</span> and <span className="text-white font-semibold">Real-world Application</span>. Whether it's optimizing inference for edge devices or building autonomous agents, I treat every line of code as a step towards a smarter future.
              </p>
            </div>
          </motion.div>

          {/* Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/80 border border-white/10 rounded-lg overflow-hidden font-mono text-sm shadow-2xl"
          >
            <div className="bg-white/10 px-4 py-2 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-400">Vignesh@neural:~/bio</span>
            </div>
            <div className="p-6 text-green-400 space-y-2">
              <p>
                <span className="text-neon-purple">➜</span> <span className="text-cyan-300">whoami</span>
              </p>
              <p className="text-gray-300">
                 AI Engineer. Researcher. Problem Solver.
              </p>
              <p>
                <span className="text-neon-purple">➜</span> <span className="text-cyan-300">current_mission</span>
              </p>
              <p className="text-gray-300">
                 Building the bridge between research papers and production-ready APIs.
              </p>
              <p className="animate-pulse">
                <span className="text-neon-purple">➜</span> <span className="w-2 h-4 bg-green-400 inline-block align-middle ml-1" />
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: ID Card / Holographic Effect */}
        <div className="order-1 lg:order-2 flex justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-md"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-cyan opacity-20 blur-[60px] rounded-full" />

            {/* Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Decorative circuit lines */}
                <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Cpu className="w-24 h-24 text-white rotate-45" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-neon-purple to-neon-cyan mb-6">
                        <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                             {/* Placeholder Avatar */}
                             <img src="../assets/avatar.jpg" alt="Profile" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1">Vignesh Kathavarayan</h3>
                    <p className="text-neon-cyan text-sm tracking-widest uppercase mb-8">Web Developer |
AI & Automation Engineer</p>

                    <div className="grid grid-cols-2 gap-4 w-full">
                        {ABOUT_STATS.map((stat, i) => (
                            <div 
                              key={i} 
                              onClick={() => setSelectedStat(stat)}
                              className="bg-black/40 rounded-xl p-4 flex flex-col items-center justify-center border border-white/5 hover:border-neon-purple/50 transition-all group cursor-pointer hover:bg-white/5 active:scale-95 relative overflow-hidden"
                            >
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                   <Info className="w-3 h-3 text-neon-cyan" />
                                </div>
                                <div className="text-neon-purple mb-2 group-hover:scale-110 transition-transform">
                                    {getIcon(stat.icon)}
                                </div>
                                <div className="text-xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wide text-center">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedStat && (
          <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedStat(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
             />
             <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl bg-dark-card border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(67,97,238,0.2)] overflow-hidden z-90 flex flex-col"
             >
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-neon-purple/10 to-transparent">
                   <div className="flex items-center gap-3">
                      <div className="text-neon-cyan">
                         {getIcon(selectedStat.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-white">{selectedStat.detailTitle || selectedStat.label}</h3>
                   </div>
                   <button 
                      onClick={() => setSelectedStat(null)}
                      className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                   >
                      <X className="w-5 h-5" />
                   </button>
                </div>
                
                <div className="p-6 overflow-x-auto">
                   {selectedStat.details ? (
                     <table className="w-full text-left text-sm">
                        <thead>
                           <tr className="border-b border-white/10">
                              {selectedStat.details.headers.map((header, idx) => (
                                 <th key={idx} className="pb-3 font-semibold text-neon-purple uppercase tracking-wider">{header}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                           {selectedStat.details.rows.map((row, rowIdx) => (
                              <tr key={rowIdx} className="group hover:bg-white/5 transition-colors">
                                 {row.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="py-3 text-gray-300 group-hover:text-white transition-colors">
                                        {cellIdx === 0 ? <span className="font-medium text-neon-cyan">{cell}</span> : cell}
                                    </td>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                     </table>
                   ) : (
                     <p className="text-gray-400 text-center py-4">No detailed data available for this metric.</p>
                   )}
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;