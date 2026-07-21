import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import TeamSlider from '../components/TeamSlider';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const services = [
  {
    title: 'Website Development',
    description: 'Empower Your Business With Smarter Financial Tools or Corporate Identity.',
    tag: 'SERVICE EXCELLENCE',
    color: 'from-blue-500/20 to-blue-900/20'
  },
  {
    title: 'Game Development',
    description: 'Immersive gaming experiences built with modern engines.',
    tag: 'SERVICE EXCELLENCE',
    color: 'from-purple-500/20 to-purple-900/20'
  },
  {
    title: 'Mobile App Development',
    description: 'Seamless cross-platform mobile experiences.',
    tag: 'SERVICE EXCELLENCE',
    color: 'from-pink-500/20 to-pink-900/20'
  },
  {
    title: 'AI Chatbot',
    description: 'Intelligent conversational agents for your business.',
    tag: 'SERVICE EXCELLENCE',
    color: 'from-green-500/20 to-green-900/20'
  }
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden pb-32">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-glow-blue pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[800px] h-[800px] bg-glow-blue pointer-events-none opacity-40"></div>
      <div className="absolute bottom-[10%] left-[-20%] w-[800px] h-[800px] bg-glow-purple pointer-events-none opacity-30"></div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">INNOVATEX v2.0</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-outfit leading-[1.1] tracking-tight mb-8">
              Engineering the <span className="text-gradient">Future</span> of Intelligent <span className="text-[#3b82f6]">Digital</span> Experiences.
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl">
              At Innovatex Soft, we bridge the gap between complex technology and intuitive user experiences. We empower modern teams to build, scale, and innovate faster with high-performance digital solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(29,78,216,0.5)] hover:-translate-y-1">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-md hover:-translate-y-1">
                Explore Our Solutions
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs font-bold z-30">🧑</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-xs font-bold z-20">👩</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-xs font-bold z-10">👨</div>
              </div>
              <div>
                <div className="font-bold text-white text-lg">1200+ Happy Clients</div>
                <div className="text-sm text-text-secondary">Trust Innovatex for their projects.</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Torus Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center h-full"
          >
            <div className="w-[500px] h-[500px] rounded-full border-[60px] border-primary/20 relative animate-[spin_20s_linear_infinite] shadow-[inset_0_0_100px_rgba(29,78,216,0.5),0_0_100px_rgba(29,78,216,0.5)] flex items-center justify-center backdrop-blur-md">
                <div className="absolute inset-0 rounded-full border-[20px] border-t-primary border-r-purple-accent border-b-transparent border-l-transparent opacity-70 blur-md"></div>
                <div className="absolute inset-[-40px] rounded-full border-[2px] border-dashed border-primary/30 animate-[spin_30s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 border-t border-white/5 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-outfit mb-4"
          >
            TRUSTED BY <span className="text-[#3b82f6]">100+</span> GLOBAL
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary tracking-widest text-sm mb-16 uppercase"
          >
            Industry Leaders
          </motion.p>
          
          {/* Logo Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-16 bg-white/5 rounded-lg flex items-center justify-center font-bold text-white/30 hover:bg-white/10 transition-colors cursor-pointer"
              >
                LOGO {i}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-primary font-semibold tracking-widest text-sm mb-4 uppercase">Our Expertise</p>
            <h2 className="text-5xl md:text-7xl font-bold font-outfit mb-6">
              Crafting Digital<br/>Excellence.
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl">
              We are a boutique creative technology house dedicated to high-end design, immersive experiences, and strategic AI integration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] min-h-[400px] flex flex-col justify-end p-10 cursor-pointer"
              >
                {/* Background Gradient Image Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Image Placeholder (Joinventure uses big screenshots here) */}
                <div className="absolute top-10 left-10 right-10 bottom-40 bg-white/5 rounded-t-xl border-t border-l border-r border-white/10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
                    <span className="text-white/20 font-bold text-2xl">Preview</span>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">{service.tag}</span>
                  </div>
                  <h3 className="text-3xl font-bold font-outfit">{service.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
