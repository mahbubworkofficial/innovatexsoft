import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Code2, Wrench, Palette, TrendingUp, Video, Bot, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Timeline from '../components/Timeline';
import TeamSlider from '../components/TeamSlider';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const services = [
  {
    title: 'Website Development',
    description: 'High-traffic web applications, corporate portals, and responsive e-commerce systems.',
    icon: <Globe className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#0D46BA]/20 to-[#7815D0]/20'
  },
  {
    title: 'Mobile App Development',
    description: 'Native iOS/Android and cross-platform mobile apps with intuitive UX.',
    icon: <Smartphone className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#7815D0]/20 to-[#0D46BA]/20'
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailor-made software platforms, custom APIs, and backend architectures.',
    icon: <Code2 className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#0D46BA]/20 to-[#7815D0]/20'
  },
  {
    title: 'Website & App Maintenance',
    description: '24/7 technical support, security patches, performance optimization, and updates.',
    icon: <Wrench className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#7815D0]/20 to-[#0D46BA]/20'
  },
  {
    title: 'Graphic Design & Branding',
    description: 'Boutique UI/UX systems, brand identity, logo creation, and visual assets.',
    icon: <Palette className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#0D46BA]/20 to-[#7815D0]/20'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing, SEO scaling, social media management, and growth campaigns.',
    icon: <TrendingUp className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#7815D0]/20 to-[#0D46BA]/20'
  },
  {
    title: 'Video Editing',
    description: 'High-impact video post-production, motion graphics, and promo video creation.',
    icon: <Video className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#0D46BA]/20 to-[#7815D0]/20'
  },
  {
    title: 'AI & Chatbot Solutions',
    description: 'Agentic AI pipelines, customer service chatbots, and automated workflows.',
    icon: <Bot className="w-6 h-6 text-[#7815D0]" />,
    color: 'from-[#7815D0]/20 to-[#0D46BA]/20'
  }
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* Background Glows */}
      <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-glow-purple pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] bg-glow-blue pointer-events-none opacity-40"></div>
      <div className="absolute bottom-[10%] left-[-20%] w-[700px] h-[700px] bg-glow-purple pointer-events-none opacity-30"></div>

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
              <span className="w-2.5 h-2.5 rounded-full bg-[#7815D0] animate-pulse"></span>
              <span className="text-sm font-semibold text-white/90">INNOVATEX SOFT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-outfit leading-[1.1] tracking-tight mb-8">
              Engineering the <span className="text-gradient">Future</span> of Custom <span className="text-[#7815D0]">Digital</span> Solutions.
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-xl">
              We build scalable web applications, modern mobile platforms, custom software, boutique design, and AI-driven systems tailored for your growth.
            </p>

            <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/80">
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-[#7815D0]" /> Professional Service</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-[#7815D0]" /> Affordable Pricing</span>
              <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-[#7815D0]" /> Fast Support</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#7815D0] hover:bg-[#5b0fa4] rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(120,21,208,0.5)] hover:-translate-y-1 w-full sm:w-auto">
                Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-md hover:-translate-y-1 w-full sm:w-auto">
                Explore All Services
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gradient-to-br from-[#0D46BA] to-[#7815D0] flex items-center justify-center text-xs font-bold z-30 text-white">🧑</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gradient-to-br from-[#7815D0] to-purple-600 flex items-center justify-center text-xs font-bold z-20 text-white">👩</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-gradient-to-br from-indigo-500 to-[#0D46BA] flex items-center justify-center text-xs font-bold z-10 text-white">👨</div>
              </div>
              <div>
                <div className="font-bold text-white text-lg">100+ Delivered Projects</div>
                <div className="text-sm text-text-secondary">Trusted by global partners & enterprise clients.</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D Ring Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center h-full"
          >
            <div className="w-[480px] h-[480px] rounded-full border-[50px] border-[#7815D0]/20 relative animate-[spin_25s_linear_infinite] shadow-[inset_0_0_80px_rgba(120,21,208,0.5),0_0_80px_rgba(13,70,186,0.4)] flex items-center justify-center backdrop-blur-md">
                <div className="absolute inset-0 rounded-full border-[20px] border-t-[#7815D0] border-r-[#0D46BA] border-b-transparent border-l-transparent opacity-80 blur-md"></div>
                <div className="absolute inset-[-40px] rounded-full border-[2px] border-dashed border-[#7815D0]/40 animate-[spin_35s_linear_infinite_reverse]"></div>
                <img src="/logo.jpg" alt="Innovatex Soft Logo" className="w-32 h-32 object-contain rounded-2xl shadow-2xl relative z-20 border border-white/10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <p className="text-[#7815D0] font-semibold tracking-widest text-xs mb-3 uppercase">Core Competencies</p>
            <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-4">
              What We Build & Deliver
            </h2>
            <p className="text-base text-text-secondary">
              Professional Service • Affordable Pricing • Fast Support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="glass-card flex flex-col justify-between p-8 hover:border-[#7815D0]/50 transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7815D0]/20 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-outfit mb-3 text-white group-hover:text-[#7815D0] transition-colors">{service.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">{service.description}</p>
                </div>

                <Link to="/services" className="text-xs font-semibold text-[#7815D0] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <Timeline />
      <TeamSlider />
      <Testimonials />
      <FAQ />
    </div>
  );
}
