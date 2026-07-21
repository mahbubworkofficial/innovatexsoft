import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2023',
    title: 'The Inception',
    description: 'Innovatex Soft was founded with a vision to redefine digital experiences through AI and creative technology.'
  },
  {
    year: '2024',
    title: 'Rapid Expansion',
    description: 'Expanded our team globally and partnered with Fortune 500 companies to deliver enterprise-grade solutions.'
  },
  {
    year: '2025',
    title: 'AI Integration Era',
    description: 'Launched our proprietary AI integration framework, speeding up development cycles by 40%.'
  },
  {
    year: '2026',
    title: 'Global Recognition',
    description: 'Awarded as one of the top emerging creative technology houses in the industry.'
  }
];

export default function Timeline() {
  return (
    <section className="py-32 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-primary font-semibold tracking-widest text-sm mb-4 uppercase">Our Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit">The Evolution of Innovatex</h2>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:mx-auto md:ml-auto md:border-l-0">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-9px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_0_15px_rgba(29,78,216,0.8)] border-2 border-black z-10"></div>
              
              <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className={`bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-4xl font-bold font-outfit text-white/10 block mb-2">{event.year}</span>
                  <h3 className="text-2xl font-bold font-outfit mb-3">{event.title}</h3>
                  <p className="text-text-secondary">{event.description}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
