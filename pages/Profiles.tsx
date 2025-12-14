import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Terminal, Award, ExternalLink } from 'lucide-react';
import { PROFILES } from '../constants';

// Helper to map icon string names to components
const IconMap: Record<string, React.FC<any>> = {
  Code: Code,
  Github: Github,
  Terminal: Terminal,
  Award: Award
};

const Profiles: React.FC = () => {
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
          Coding <span className="text-neon-purple">Stats</span>
        </h2>
        <p className="text-gray-400">Activity across various competitive programming platforms.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROFILES.map((profile, index) => {
          const IconComponent = IconMap[profile.icon] || Code;
          return (
            <motion.a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="group relative bg-dark-card/60 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex items-center justify-between overflow-hidden hover:bg-white/5 transition-all"
            >
              {/* Decorative Background Blob */}
              <div 
                className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-[60px] opacity-20 transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: profile.color }}
              />

              <div className="flex items-center gap-6 relative z-10">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: `${profile.color}20`, border: `1px solid ${profile.color}40` }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: profile.color }} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                    {profile.platform}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">@{profile.username}</p>
                  <div className="text-neon-blue font-mono text-sm bg-neon-blue/10 px-2 py-1 rounded inline-block">
                    {profile.stats}
                  </div>
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                <ExternalLink className="w-6 h-6 text-gray-400" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Profiles;