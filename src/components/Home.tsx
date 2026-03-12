import { motion } from 'motion/react';
import { Linkedin, Github, Instagram, MessageCircle, ArrowDown, Send } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex flex-col gap-6 absolute left-6 top-1/2 -translate-y-1/2 z-10"
        >
          <a href="https://www.linkedin.com/in/sunilkumar-yadav-2k4" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Sunil-Yadav-1912" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="http://discordapp.com/users/1202501567027216387" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <MessageCircle className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/sunil_yadav_1912" target="_blank" rel="noreferrer" className="text-text-muted hover:text-primary transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:pl-16 z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Hi, I'm <span className="text-gradient">Sunil</span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-text-muted mb-6">
            Software Engineer | AI & Backend
          </h3>
          <p className="text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
            3+ years of experience building scalable backend systems, AI-powered solutions, and cloud infrastructure.
          </p>
          
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-primary/25"
          >
            Contact Me
            <Send className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Image/Blob */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center z-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Blob Background */}
            <motion.div 
              animate={{ 
                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/30% 30% 70% 70%", "60% 40% 30% 70%/60% 30% 70% 40%"] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-purple-500/40 blur-xl"
            />
            
            <motion.div 
              animate={{ 
                borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/30% 30% 70% 70%", "60% 40% 30% 70%/60% 30% 70% 40%"] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-4 bg-bg-card border-2 border-primary/30 overflow-hidden flex items-center justify-center"
            >
              <img 
                src="/images/Sunil.png" 
                alt="Sunil Yadav" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-text-muted">Scroll down</span>
        <motion.a 
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary hover:text-white transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
