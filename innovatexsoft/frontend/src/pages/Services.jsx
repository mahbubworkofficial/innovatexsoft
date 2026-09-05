import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Code2, Wrench, Palette, TrendingUp, Video, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import apiClient from '../api/client';

const iconMap = {
  'Globe': <Globe size={40} className="text-[#7815D0]" />,
  'Smartphone': <Smartphone size={40} className="text-[#7815D0]" />,
  'Code2': <Code2 size={40} className="text-[#7815D0]" />,
  'Wrench': <Wrench size={40} className="text-[#7815D0]" />,
  'Palette': <Palette size={40} className="text-[#7815D0]" />,
  'TrendingUp': <TrendingUp size={40} className="text-[#7815D0]" />,
  'Video': <Video size={40} className="text-[#7815D0]" />,
  'Bot': <Bot size={40} className="text-[#7815D0]" />,
};

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    apiClient.get('/services/')
      .then(response => setServices(response.data))
      .catch(error => console.error("Error fetching services", error));
  }, []);

  return (
    <div className="pt-32 pb-24 relative min-h-screen overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-glow-purple pointer-events-none opacity-40"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7815D0] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-white uppercase">Our End-to-End Offerings</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            Comprehensive <span className="text-gradient">Digital Solutions</span>
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed">
            Professional Service • Affordable Pricing • Fast Support. We empower brands with custom software engineering, modern mobile apps, graphic design, and video production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card flex flex-col justify-between group hover:border-[#7815D0]/50 transition-all duration-300"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7815D0]/10 transition-all">
                  {iconMap[service.icon] || <Code2 size={40} className="text-[#7815D0]" />}
                </div>
                
                <h3 className="text-xl font-bold font-outfit mb-3 text-white group-hover:text-[#7815D0] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#7815D0] group-hover:translate-x-1 transition-transform uppercase tracking-wider"
              >
                Inquire Service <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card bg-gradient-to-r from-[#0D46BA]/20 via-[#7815D0]/20 to-[#0D46BA]/20 border border-[#7815D0]/30 p-12 text-center rounded-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">Have a Custom Project in Mind?</h2>
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            Whether you need a full enterprise software build, a mobile app, or video post-production, our team is ready to deliver fast support and quality results.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#7815D0] hover:bg-[#5b0fa4] text-white font-semibold shadow-[0_0_25px_rgba(120,21,208,0.5)] transition-all hover:-translate-y-0.5"
          >
            Get a Free Quote Now <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
