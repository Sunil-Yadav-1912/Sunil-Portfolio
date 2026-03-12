import { Linkedin, Github, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-dark py-12 relative border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">Sunilkumar Yadav</h1>
            <span className="text-text-muted">Software Engineer</span>
          </div>

          <ul className="flex justify-center gap-8">
            <li><a href="#services" className="text-text-muted hover:text-primary transition-colors">Services</a></li>
            <li><a href="#portfolio" className="text-text-muted hover:text-primary transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="text-text-muted hover:text-primary transition-colors">Contact Me</a></li>
          </ul>

          <div className="flex justify-center md:justify-end gap-6">
            <a href="https://www.linkedin.com/in/sunilkumar-yadav-2k4" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Sunil-Yadav-1912" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="http://discordapp.com/users/1202501567027216387" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/sunil_yadav_1912" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="text-center text-text-muted text-sm border-t border-white/10 pt-8">
          <p>&#169; Sunilkumar Yadav. All right reserved</p>
        </div>

      </div>

      <motion.button 
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px" }}
        className="absolute bottom-12 right-6 w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}
