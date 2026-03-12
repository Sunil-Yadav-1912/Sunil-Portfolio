import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Code, Server, Database, Layers, Cloud } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillsData = [
  {
    title: 'Languages',
    subtitle: 'PHP, Python, GoLang, JavaScript',
    icon: Code,
    skills: [
      { name: 'PHP', percentage: 90 },
      { name: 'Python', percentage: 85 },
      { name: 'GoLang', percentage: 70 },
      { name: 'JavaScript', percentage: 80 },
    ],
  },
  {
    title: 'Frameworks',
    subtitle: 'Laravel, FastAPI, Flask',
    icon: Layers,
    skills: [
      { name: 'Laravel', percentage: 95 },
      { name: 'FastAPI', percentage: 85 },
      { name: 'Flask', percentage: 80 },
    ],
  },
  {
    title: 'AI / ML',
    subtitle: 'LangChain, ChromaDB, Embeddings, RAG',
    icon: Server,
    skills: [
      { name: 'LangChain', percentage: 80 },
      { name: 'ChromaDB', percentage: 75 },
      { name: 'Embeddings / RAG', percentage: 85 },
    ],
  },
  {
    title: 'Databases',
    subtitle: 'MySQL, Postgres SQL, MongoDB',
    icon: Database,
    skills: [
      { name: 'MySQL', percentage: 95 },
      { name: 'PostgreSQL', percentage: 85 },
      { name: 'MongoDB', percentage: 70 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'AWS, Docker, CI/CD, Nginx',
    icon: Cloud,
    skills: [
      { name: 'AWS (EC2, S3, Lambda, RDS)', percentage: 85 },
      { name: 'Docker', percentage: 80 },
      { name: 'CI/CD Pipelines', percentage: 75 },
      { name: 'Nginx / Apache', percentage: 70 },
    ],
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-24 relative bg-bg-card/50">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">Skills</h2>
          <span className="text-text-muted text-sm uppercase tracking-widest">My Technical Skills</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <category.icon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <span className="text-sm text-text-muted">{category.subtitle}</span>
                  </div>
                </div>
                <ChevronDown className={cn(
                  "w-6 h-6 text-primary transition-transform duration-300",
                  openIndex === index ? "rotate-180" : ""
                )} />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-text-muted">{skill.percentage}%</span>
                          </div>
                          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.percentage}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
