import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const workJourney = [
  {
    title: 'Software Developer',
    subtitle: 'Nutriiya, Mumbai',
    date: 'Oct 2025 - Present',
  },
  {
    title: 'Software Engineer',
    subtitle: 'CreditFair Finance, Mumbai',
    date: 'Aug 2022 - Oct 2025',
  },
];

const educationJourney = [
  {
    title: 'Bachelor of Technology (B.Tech), Computer Engineering',
    subtitle: 'Shah & Anchor Kutchhi Engineering College, Mumbai',
    date: '2024 - Present',
  },
  {
    title: 'Diploma in Computer Technology',
    subtitle: 'Government Polytechnic College, Pen',
    date: '2019 - 2022',
  },
];

export default function Journey() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const journeyData = activeTab === 'work' ? workJourney : educationJourney;

  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">My Journey</h2>
          <span className="text-text-muted text-sm uppercase tracking-widest">Professional & Student Journey</span>
        </motion.div>

        <div className="flex justify-center gap-8 mb-12">
          <button 
            onClick={() => setActiveTab('work')}
            className={cn(
              "flex items-center gap-2 text-xl font-medium transition-colors pb-2 border-b-2",
              activeTab === 'work' ? "text-primary border-primary" : "text-text-muted border-transparent hover:text-white"
            )}
          >
            <Briefcase className="w-6 h-6" />
            Work
          </button>
          <button 
            onClick={() => setActiveTab('education')}
            className={cn(
              "flex items-center gap-2 text-xl font-medium transition-colors pb-2 border-b-2",
              activeTab === 'education' ? "text-primary border-primary" : "text-text-muted border-transparent hover:text-white"
            )}
          >
            <GraduationCap className="w-6 h-6" />
            Education
          </button>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2 }}
                className={cn(
                  "relative flex items-center justify-between w-full",
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                )}
              >
                {/* Empty space for the other side */}
                <div className="w-5/12" />

                {/* Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-bg-dark z-10" />

                {/* Content */}
                <div className={cn(
                  "w-5/12 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors",
                  index % 2 === 0 ? "text-left" : "text-right"
                )}>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <span className="text-text-muted block mb-4">{item.subtitle}</span>
                  <div className={cn(
                    "flex items-center gap-2 text-sm text-primary",
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  )}>
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
