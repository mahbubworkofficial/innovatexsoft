import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const teamMembers = [
  { id: 1, name: 'MD. Nazmul Huda', role: 'Managing Director', image: '🧑' },
  { id: 2, name: 'MD. Mir Mossaraf Hossain', role: 'CEO', image: '👨' },
  { id: 3, name: 'MD. Mahbubur Rahman', role: 'Chief of Technical Operations', image: '👨‍💻' },
  { id: 4, name: 'MD. Rawha Haolader', role: 'General Manager', image: '💼' },
];

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  return (
    <section className="py-24 relative z-10 overflow-hidden bg-[#070707]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#7815D0] font-semibold tracking-widest text-xs mb-3 uppercase">The Minds Behind Innovatex Soft</p>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white">Our Leadership & Engineering Core</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <button 
              onClick={prev} 
              aria-label="Previous Team Member"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next} 
              aria-label="Next Team Member"
              className="w-12 h-12 rounded-full border border-[#7815D0]/40 bg-[#7815D0]/20 text-white flex items-center justify-center hover:bg-[#7815D0] transition-colors shadow-[0_0_15px_rgba(120,21,208,0.3)]"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        <div className="relative h-[410px] overflow-hidden">
          <div 
            className="flex gap-6 absolute transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(calc(-${currentIndex * 320}px))` }}
          >
            {teamMembers.map((member, idx) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`w-[300px] h-[390px] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 border
                  ${currentIndex === idx 
                    ? 'bg-gradient-to-b from-[#7815D0]/15 to-[#0D46BA]/15 border-[#7815D0]/50 shadow-[0_10px_30px_rgba(120,21,208,0.2)]' 
                    : 'bg-[#0c0c0c] border-white/10 hover:border-white/20'}
                `}
              >
                <div className="w-full h-48 bg-white/5 rounded-2xl flex items-center justify-center text-6xl border border-white/5 shadow-inner">
                  {member.image}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit mb-1 text-white">{member.name}</h3>
                  <p className="text-xs text-[#7815D0] font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
