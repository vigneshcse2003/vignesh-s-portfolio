import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2, Minimize2, Trash2 } from 'lucide-react';
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { getPortfolioContext } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Vignesh's Neural Assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Auto-open chatbot after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const initializeChat = useCallback(() => {
    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSessionRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are a helpful, professional, and enthusiastic AI assistant for Vignesh Kathavarayan's portfolio website. 
                You have access to Vignesh's resume data provided below. 
                Your goal is to answer visitors' questions about Vignesh's skills, projects, experience, and background based ONLY on this data.
                
                Tone: Friendly, tech-savvy, confident but humble.
                Formatting: Use Markdown for lists or emphasis where appropriate. Keep answers concise (under 100 words) unless asked for details.
                
                RESUME DATA:
                ${getPortfolioContext()}
                
                If you don't know the answer based on the data, strictly say "I don't have that information in my current dataset, but you can contact Vignesh directly!"
                Do not hallucinate facts not present in the data.`,
            },
        });
    } catch (error) {
        console.error("Failed to initialize AI:", error);
    }
  }, []);

  // Initialize Gemini Chat Session
  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
        initializeChat();
    }
  }, [isOpen, initializeChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    
    // Ensure chat is initialized if something went wrong
    if (!chatSessionRef.current) {
        initializeChat();
        if (!chatSessionRef.current) {
            setMessages(prev => [...prev, { role: 'model', text: "Connection error. Please check your API key." }]);
            return;
        }
    }

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of result) {
         const chunkText = (chunk as GenerateContentResponse).text;
         if (chunkText) {
             fullResponse += chunkText;
             setMessages(prev => {
                 const newArr = [...prev];
                 newArr[newArr.length - 1].text = fullResponse;
                 return newArr;
             });
         }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I encountered a neural glitch. Please try again later." }]);
      // Re-initialize session on error as context might be broken
      initializeChat();
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'model', text: "Chat memory cleared. How can I help you now?" }]);
    chatSessionRef.current = null;
    initializeChat();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(67,97,238,0.5)] border border-white/20 group"
          >
            <Bot className="w-7 h-7 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-[90vw] sm:w-[380px] h-[500px] max-h-[80vh] bg-dark-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-neon-purple/20 rounded-lg">
                    <Sparkles className="w-4 h-4 text-neon-cyan" />
                </div>
                <div>
                    <h3 className="font-bold text-white text-sm">Neural Assistant</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Online</span>
                    </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                 <button 
                    onClick={clearChat}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    title="Clear Chat"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0 mt-1 border border-neon-purple/30">
                      <Bot className="w-4 h-4 text-neon-cyan" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-neon-blue to-neon-purple text-white rounded-tr-sm shadow-lg' 
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm'
                    }`}
                  >
                    {msg.role === 'model' ? (
                        <div className="markdown-content">
                            <ReactMarkdown
                                components={{
                                    ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2" {...props} />,
                                    li: ({node, ...props}) => <li className="my-1" {...props} />,
                                    p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                    strong: ({node, ...props}) => <span className="font-bold text-neon-cyan" {...props} />
                                }}
                            >
                                {msg.text}
                            </ReactMarkdown>
                        </div>
                    ) : (
                        msg.text
                    )}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 justify-start">
                   <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center flex-shrink-0 border border-neon-purple/30">
                      <Bot className="w-4 h-4 text-neon-cyan" />
                   </div>
                   <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-bounce"></span>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 bg-black/20 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon-purple/50 focus:ring-1 focus:ring-neon-purple/50 transition-all placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2.5 bg-neon-purple text-white rounded-xl hover:bg-neon-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;