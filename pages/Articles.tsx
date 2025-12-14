import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { ARTICLES } from '../constants';

const Articles: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Recent <span className="text-neon-cyan">Writing</span>
        </h2>
        <p className="text-gray-400">Thoughts on engineering, design, and career growth.</p>
      </motion.div>

      <div className="space-y-6">
        {ARTICLES.map((article, index) => (
          <motion.a
            key={article.id}
            href={article.link}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="block group bg-dark-card border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/5 hover:border-neon-cyan/30 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-purple/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="flex-1">
                <div className="flex gap-3 text-xs md:text-sm text-gray-500 mb-3 items-center">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-400 mb-4 max-w-2xl">
                  {article.excerpt}
                </p>

                <div className="flex gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-neon-blue border border-white/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="self-end md:self-center">
                 <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neon-cyan group-hover:text-black transition-all transform group-hover:-rotate-45">
                   <ArrowUpRight className="w-5 h-5" />
                 </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Articles;