import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
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
          Client <span className="text-neon-cyan">Testimonials</span>
        </h2>
        <p className="text-gray-400">
          Feedback from collaborators and industry leaders.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-dark-card border border-white/10 p-8 rounded-2xl relative group hover:border-neon-purple/30 transition-all flex flex-col h-full"
          >
            {/* Background Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-neon-purple/10 transition-colors" />

            <div className="relative z-10 flex flex-col h-full">
               <div className="mb-6">
                 <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-br from-neon-purple to-neon-cyan mb-4 shadow-lg">
                    <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover border-2 border-black" />
                 </div>
                 <div>
                    <h3 className="text-lg font-bold text-white">{t.name}</h3>
                    <p className="text-sm text-neon-cyan font-medium">{t.role} @ {t.company}</p>
                 </div>
               </div>

               <p className="text-gray-300 italic leading-relaxed flex-grow">
                 "{t.quote}"
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;