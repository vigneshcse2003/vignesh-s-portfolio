import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, CheckCircle, Code2, Clock, Hourglass } from 'lucide-react';
import { RoadmapItem } from '../types';

interface ProjectModalProps {
  project: RoadmapItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'pending': return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
      case 'upcoming': return 'text-neon-purple border-neon-purple/30 bg-neon-purple/10';
      default: return 'text-white border-white/30 bg-white/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'upcoming': return <Hourglass className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            layoutId={`project-${project.id}`}
            className="relative w-full max-w-2xl bg-dark-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header / Banner */}
            <div className={`h-24 bg-gradient-to-r ${project.status === 'completed' ? 'from-green-500/20 to-emerald-900/20' : project.status === 'pending' ? 'from-yellow-500/20 to-orange-900/20' : 'from-neon-purple/20 to-indigo-900/20'} flex items-center px-8 relative`}>
                <div className="absolute top-4 right-4 z-20">
                    <button 
                        onClick={onClose}
                        className="p-2 rounded-full bg-black/20 hover:bg-white/20 text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            </div>

            <div className="p-8">
                {/* Status Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    {project.status}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Description</h3>
                            <p className="text-gray-300 leading-relaxed">{project.description}</p>
                        </div>
                        
                        <div>
                             <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Features</h3>
                             <ul className="space-y-2">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'completed' ? 'bg-green-400' : project.status === 'pending' ? 'bg-yellow-400' : 'bg-neon-purple'}`} />
                                        {feature}
                                    </li>
                                ))}
                             </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Timeline</h3>
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <Calendar className="w-4 h-4 text-neon-cyan" />
                                {project.date}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300 flex items-center gap-1">
                                        <Code2 className="w-3 h-3" />
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;