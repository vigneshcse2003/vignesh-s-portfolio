import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Hourglass, ArrowRight } from 'lucide-react';
import { ROADMAP_ITEMS } from '../constants';
import { RoadmapItem } from '../types';
import ProjectModal from '../components/ProjectModal';

const Roadmap: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<RoadmapItem | null>(null);

  const completed = ROADMAP_ITEMS.filter(item => item.status === 'completed');
  const pending = ROADMAP_ITEMS.filter(item => item.status === 'pending');
  const upcoming = ROADMAP_ITEMS.filter(item => item.status === 'upcoming');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const renderColumn = (title: string, icon: React.ReactNode, items: RoadmapItem[], colorClass: string) => (
    <div className="flex flex-col gap-6">
      <div className={`flex items-center gap-2 pb-4 border-b border-white/10 ${colorClass}`}>
        {icon}
        <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
        <span className="ml-auto text-sm opacity-50 bg-white/10 px-2 py-0.5 rounded-full">{items.length}</span>
      </div>
      
      <div className="space-y-4">
        {items.map(item => (
          <motion.div
            key={item.id}
            layoutId={`project-${item.id}`}
            variants={itemAnim}
            onClick={() => setSelectedProject(item)}
            className="group cursor-pointer bg-dark-card border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all hover:bg-white/5 relative overflow-hidden"
          >
             {/* Status indicator line */}
             <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                item.status === 'completed' ? 'bg-green-500' : 
                item.status === 'pending' ? 'bg-yellow-500' : 'bg-neon-purple'
             }`} />
             
             <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors text-gray-200">{item.title}</h4>
             <p className="text-sm text-gray-500 line-clamp-2 mb-4">{item.description}</p>
             
             <div className="flex justify-between items-center text-xs">
                <div className="flex gap-2 text-gray-400">
                    {item.techStack.slice(0, 2).map((t, i) => <span key={i} className="bg-black/30 px-2 py-1 rounded">{t}</span>)}
                    {item.techStack.length > 2 && <span className="bg-black/30 px-2 py-1 rounded">+{item.techStack.length - 2}</span>}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-neon-cyan transition-colors transform group-hover:translate-x-1" />
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Innovation <span className="text-neon-cyan">Lab</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A glimpse into what has been shipped, what's currently in the oven, and what's next.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
      >
        {renderColumn("Completed", <CheckCircle className="w-5 h-5" />, completed, "text-green-400")}
        {renderColumn("In Progress", <Clock className="w-5 h-5" />, pending, "text-yellow-400")}
        {renderColumn("Upcoming", <Hourglass className="w-5 h-5" />, upcoming, "text-neon-purple")}
      </motion.div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Roadmap;