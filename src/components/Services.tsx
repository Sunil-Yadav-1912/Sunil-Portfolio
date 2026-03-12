import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, CheckCircle2, Monitor, Server, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const servicesData = [
  {
    title: 'Backend & API Development',
    icon: Monitor,
    description: 'I design and implement scalable RESTful APIs using PHP (Laravel), Python (FastAPI, Flask), and Golang. My focus is on performance, security, and maintainability, having developed and deployed over 400+ APIs for high-traffic systems.',
  },
  {
    title: 'AI & Machine Learning Solutions',
    icon: Cpu,
    description: 'I build AI-powered data retrieval systems and virtual assistants using LangChain, ChromaDB, embeddings, and local LLM models. I have successfully deployed chatbots that improved usability and satisfaction by 200%.',
  },
  {
    title: 'Cloud & DevOps Infrastructure',
    icon: Server,
    description: 'I manage deployments and server configurations using AWS (EC2, Lambda, RDS, S3), Docker, Nginx, and Apache. I implement CI/CD pipelines for automated testing and production deployments, optimizing infrastructure to reduce costs significantly.',
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative bg-bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">Services</h2>
          <span className="text-text-muted text-sm uppercase tracking-widest">What I Offer</span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              
              <button 
                onClick={() => setActiveModal(index)}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors mt-4"
              >
                View More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeModal !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-bg-card border border-white/10 rounded-2xl p-8 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setActiveModal(null)}
                  className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <h3 className="text-2xl font-bold mb-6 pr-8">{servicesData[activeModal].title}</h3>
                
                <ul className="space-y-4">
                  {servicesData[activeModal].description.split('. ').map((sentence, i) => (
                    sentence && (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-text-muted leading-relaxed">{sentence}.</p>
                      </li>
                    )
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
