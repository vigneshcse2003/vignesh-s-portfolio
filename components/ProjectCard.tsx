import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index = 0 }) => {
  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="group relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(45,0,247,0.2)] transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-48 sm:h-60 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Top Right Action Buttons - Enlarged */}
        <div className="absolute top-4 right-4 flex gap-3 z-20">
            <a 
                href={project.githubUrl}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-neon-purple hover:border-neon-purple transition-all transform hover:scale-110 shadow-lg"
                title="View Source"
            >
                <Github className="w-5 h-5" />
            </a>
            <a 
                href={project.liveUrl}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-neon-cyan hover:border-neon-cyan hover:text-black transition-all transform hover:scale-110 shadow-lg"
                title="Live Demo"
            >
                <ExternalLink className="w-5 h-5" />
            </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-neon-purple flex items-center gap-1"
            >
              <Code2 className="w-3 h-3" />
              {tech}
            </span>
          ))}
           {project.techStack.length > 3 && (
                <span className="px-2 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-gray-400">
                    +{project.techStack.length - 3}
                </span>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;