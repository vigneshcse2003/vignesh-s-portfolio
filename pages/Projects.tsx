import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Grid, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';
import DetailedProjectModal from '../components/DetailedProjectModal';
import AllProjectsModal from '../components/AllProjectsModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Show only first 4 projects initially
  const visibleProjects = PROJECTS.slice(0, 4);

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
          Featured <span className="text-neon-cyan">Projects</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto rounded-full mb-6" />
        <p className="text-gray-400">Innovative solutions built with cutting-edge tech.</p>
      </motion.div>

      {/* Grid showing only 4 projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={(p) => setSelectedProject(p)}
            index={index}
          />
        ))}
      </div>

      {/* View All Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <button
            onClick={() => setShowAllProjects(true)}
            className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-neon-purple/50"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative flex items-center gap-2 font-semibold text-white">
                <Grid className="w-4 h-4" />
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </button>
      </motion.div>

      <DetailedProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <AllProjectsModal 
        isOpen={showAllProjects} 
        onClose={() => setShowAllProjects(false)} 
        projects={PROJECTS}
        onProjectClick={(p) => setSelectedProject(p)}
      />
    </div>
  );
};

export default Projects;