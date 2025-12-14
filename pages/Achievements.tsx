import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Mic, Calendar } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Star': return <Star className="w-6 h-6" />;
      case 'Mic': return <Mic className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

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
          Honors & <span className="text-neon-purple">Achievements</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recognition for technical excellence and community contributions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-dark-card border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity group-hover:opacity-100" />
            
            <div className="relative z-10 flex items-start gap-6">
                {/* Icon Box */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-neon-cyan shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon)}
                </div>

                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors">
                            {item.title}
                        </h3>
                        <span className="flex items-center text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.date}
                        </span>
                    </div>
                    
                    <div className="text-sm font-semibold text-neon-blue mb-3 uppercase tracking-wider">
                        {item.organization}
                    </div>

                    <p className="text-gray-400 leading-relaxed text-sm">
                        {item.description}
                    </p>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;