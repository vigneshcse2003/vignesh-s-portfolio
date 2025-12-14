import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate EmailJS call
    setTimeout(() => {
      // Success condition
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        
        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-neon-cyan">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities, creative ideas, or specialized visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-neon-purple/50 transition-colors">
              <div className="p-3 bg-neon-purple/20 rounded-full text-neon-purple">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email Me</p>
                <p className="text-white font-medium">vigneshcse2003@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-neon-cyan/50 transition-colors">
              <div className="p-3 bg-neon-cyan/20 rounded-full text-neon-cyan">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Chennai, TamilNadu, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-dark-card border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
        >
           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="john"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                  placeholder="sample@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 text-white shadow-lg hover:shadow-neon-purple/30'
                }`}
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
           </form>

           {/* Background glow for form */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] -z-0 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;