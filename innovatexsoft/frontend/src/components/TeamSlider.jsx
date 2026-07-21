import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'Alex Rivera', role: 'Chief Executive Officer', image: '🧑' },
  { id: 2, name: 'Sarah Chen', role: 'Head of Engineering', image: '👩' },
  { id: 3, name: 'David Kim', role: 'Creative Director', image: '👨' },
  { id: 4, name: 'Elena Rossi', role: 'Lead AI Researcher', image: '👱‍♀️' },
];

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold tracking-widest text-sm mb-4 uppercase">The Minds Behind Innovatex</p>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit">Our Engineering Core</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button onClick={prev} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-white/20 bg-primary/10 text-primary flex items-center justify-center hover:bg-primary/20 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <div className="relative h-[400px]">
          <div className="flex gap-6 absolute transition-transform duration-500 ease-in-out" style={{ transform: `translateX(calc(-${currentIndex * 340}px))` }}>
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`w-[316px] h-[380px] rounded-3xl p-6 flex flex-col justify-between transition-colors duration-300 border border-white/10
                  ${currentIndex === idx ? 'bg-primary/10' : 'bg-[#0a0a0a] grayscale hover:grayscale-0'}
                `}
              >
                <div className="w-full h-48 bg-white/5 rounded-2xl flex items-center justify-center text-6xl">
                  {member.image}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-outfit mb-1">{member.name}</h3>
                  <p className="text-text-secondary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
