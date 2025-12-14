import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const AllProjectsModal: React.FC<AllProjectsModalProps> = ({ isOpen, onClose, projects, onProjectClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 pt-4 pb-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="relative w-full max-w-7xl h-full bg-dark-bg/50 rounded-2xl overflow-hidden z-10 flex flex-col border border-white/10 shadow-2xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-dark-card/90 backdrop-blur-md sticky top-0 z-30">
                    <h2 className="text-2xl md:text-3xl font-bold">All <span className="text-neon-cyan">Projects</span></h2>
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable Grid */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project} 
                                onClick={(p) => onProjectClick(p)} 
                                index={index} 
                            />
                        ))}
                     </div>
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AllProjectsModal;