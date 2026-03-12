import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const portfolioData = [
  {
    title: 'AI-Powered Data Retrieval System',
    description: 'Built a real-time data retrieval system using LangChain, AI embeddings, and ChromaDB, enabling 4X faster reporting from databases.',
    image: '/images/work2.webp',
    link: 'https://github.com/Sunil-Yadav-1912/Database_AI',
  },
  {
    title: 'CreditFair Chatbot – AI Virtual Assistant',
    description: 'Developed an AI virtual assistant for admins and merchants, improving usability and satisfaction by 200%.',
    image: '/images/work5.webp',
    link: 'https://github.com/Sunil-Yadav-1912/Automated-Chabot',
  },
  {
    title: 'FurnishHomes',
    description: 'Developed an e-commerce platform using Python (Flask) with authentication, catalog, cart, order processing, and transactions. Integrated Mailtrap for email services and Firebase NoSQL database for real-time features.',
    image: '/images/work1.webp',
    link: 'https://github.com/Sunil-Yadav-1912/Interiors-design-Ecommerce',
  },
  {
    title: 'Sentiment Analyzer',
    description: 'Developed a sentiment analysis tool to understand and classify text emotions and opinions effectively.',
    image: '/images/sentiment.jpg',
    link: 'https://github.com/Sunil-Yadav-1912/Sentiment-Analyzer',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
          <span className="text-text-muted text-sm uppercase tracking-widest">My Personal Works</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80" />
              </div>

              <div className="p-8 relative z-10 -mt-16">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors"
                >
                  Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
