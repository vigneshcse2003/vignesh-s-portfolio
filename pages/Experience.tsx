import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, GraduationCap } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-neon-cyan">Journey</span>
        </h2>
        <p className="text-gray-400">
          Tracing the path from academic foundations to professional achievements.
        </p>
      </motion.div>

      {/* Tab Toggles */}
      <div className="flex justify-center mb-16">
        <div className="bg-white/5 p-1.5 rounded-full border border-white/10 flex relative shadow-inner">
           {/* Animated Background Pill */}
           <motion.div 
             className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-lg z-0"
             initial={false}
             animate={{
               left: activeTab === 'work' ? '6px' : '50%',
               width: activeTab === 'work' ? 'calc(50% - 9px)' : 'calc(50% - 9px)',
               x: activeTab === 'education' ? 3 : 0
             }}
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
           />

           <button
             onClick={() => setActiveTab('work')}
             className={`relative z-10 px-8 py-2 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
               activeTab === 'work' ? 'text-white' : 'text-gray-400 hover:text-white'
             }`}
           >
             <Briefcase className="w-4 h-4" />
             Work Experience
           </button>
           <button
             onClick={() => setActiveTab('education')}
             className={`relative z-10 px-8 py-2 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${
               activeTab === 'education' ? 'text-white' : 'text-gray-400 hover:text-white'
             }`}
           >
             <GraduationCap className="w-4 h-4" />
             Academic
           </button>
        </div>
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {activeTab === 'work' ? (
          <motion.div
            key="work"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
             <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">Professional <span className="text-neon-cyan">Experience</span></h3>
             </div>

             <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
                {EXPERIENCES.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-purple border-4 border-dark-bg shadow-[0_0_10px_#b026ff]" />

                    <div className="bg-dark-card border border-white/10 rounded-2xl p-6 hover:border-neon-cyan/30 transition-colors shadow-lg">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            {job.role}
                          </h3>
                          <div className="text-neon-cyan font-medium flex items-center gap-2 mt-1">
                            <Briefcase className="w-4 h-4" />
                            {job.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {job.description}
                      </p>

                      <div>
                        <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                              <CheckCircle2 className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        ) : (
          <motion.div
            key="education"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
             <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-2">Academic <span className="text-neon-purple">Background</span></h3>
             </div>

             <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                  >
                     {/* Timeline Dot */}
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neon-blue border-4 border-dark-bg shadow-[0_0_10px_#2d00f7]" />

                     <div className="bg-dark-card border border-white/10 rounded-2xl p-6 hover:border-neon-purple/30 transition-colors shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                    {edu.degree}
                                </h3>
                                <div className="text-neon-purple font-medium flex items-center gap-2 mt-1">
                                    <GraduationCap className="w-5 h-5" />
                                    {edu.institution}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                            </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            {edu.description}
                        </p>
                     </div>
                  </motion.div>
                ))}
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Experience;