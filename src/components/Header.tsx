import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Home, User, FileText, Briefcase, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: FileText },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Portfolio', href: '#portfolio', icon: ImageIcon },
  { name: 'Contact', href: '#contact', icon: MessageSquare },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-bg-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          Sunilkumar <span className="text-primary">Yadav</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary flex items-center gap-2',
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-text-muted'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-main hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-bg-card border-b border-white/10 shadow-xl md:hidden"
        >
          <ul className="grid grid-cols-3 gap-4 p-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex flex-col items-center gap-2 text-sm font-medium transition-colors hover:text-primary p-2 rounded-lg hover:bg-white/5',
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-text-muted'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
