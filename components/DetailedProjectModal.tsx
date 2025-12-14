import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Code2, Cpu } from 'lucide-react';
import { Project } from '../types';

interface DetailedProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const DetailedProjectModal: React.FC<DetailedProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />
        
        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-dark-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]"
        >
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
            >
                <X className="w-5 h-5" />
            </button>

            {/* Left/Top: Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-3xl font-bold text-white mb-2 shadow-sm">{project.title}</h2>
                    <div className="h-1 w-20 bg-neon-cyan rounded-full" />
                </div>
            </div>

            {/* Right/Bottom: Details Section */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-dark-card">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" /> About the Project
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-3">
                            Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map(tech => (
                                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-200 flex items-center gap-1.5 hover:border-neon-cyan/50 transition-colors">
                                    <Code2 className="w-3 h-3 text-neon-cyan" />
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                        <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 bg-black border border-white/20 rounded-xl flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-all group"
                        >
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Source Code
                        </a>
                        <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center gap-2 text-white hover:opacity-90 transition-all shadow-lg hover:shadow-neon-purple/20 group"
                        >
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DetailedProjectModal;