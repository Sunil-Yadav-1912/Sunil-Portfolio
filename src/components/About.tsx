import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">About Me</h2>
          <span className="text-text-muted text-sm uppercase tracking-widest">My Introduction</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative flex justify-center"
          >
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-10" />
              <img
                src="/images/wbg.png"
                alt="Workspace"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-semibold mb-4">I'm Sunilkumar Yadav</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              Software Engineer with 3+ years of experience in backend and fullstack development using PHP (Laravel) and Python (FastAPI, Flask).
              <br /><br />
              Experienced in system design, microservices architecture, DevOps practices, and AI-based solutions including data retrieval and chatbot automation. Strong background in AWS cloud infrastructure, Dockerized deployments, CI/CD pipelines, and scalable backend systems.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <span className="block text-2xl font-bold text-primary mb-1">03+</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Years<br />Experience</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <span className="block text-2xl font-bold text-primary mb-1">400+</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">APIs<br />Developed</span>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <span className="block text-2xl font-bold text-primary mb-1">07+</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Tech Stacks<br />Worked</span>
              </div>
            </div>

            <a
              href="/file/Sunilkumar Yadav Resume.pdf"
              download="Sunilkumar_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/10"
            >
              Download CV
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
