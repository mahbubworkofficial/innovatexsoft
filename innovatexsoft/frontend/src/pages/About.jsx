import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, ShieldCheck, Zap, Users, Briefcase, ChevronRight } from 'lucide-react';
import apiClient from '../api/client';

export default function About() {
  const [team, setTeam] = useState([]);
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    apiClient.get('/team/')
      .then(res => setTeam(res.data))
      .catch(err => console.error(err));
    apiClient.get('/careers/')
      .then(res => setCareers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-glow-blue pointer-events-none opacity-40"></div>
      <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] bg-glow-purple pointer-events-none opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7815D0] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-white uppercase">About Innovatex Soft</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-outfit leading-tight mb-6">
            Engineering Digital Excellence with <span className="text-gradient">Boutique Precision</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            At Innovatex Soft, we craft custom software, high-performance web applications, mobile platforms, boutique graphic designs, and data-driven marketing strategies for ambitious businesses worldwide.
          </p>

          {/* Tagline Badge */}
          <div className="mt-8 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0D46BA]/20 to-[#7815D0]/20 border border-[#7815D0]/30 shadow-[0_0_30px_rgba(120,21,208,0.2)]">
            <span className="text-sm md:text-base font-bold text-white tracking-wide">
              Professional Service • Affordable Pricing • Fast Support
            </span>
          </div>
        </motion.div>

        {/* Our Core Pillars */}
        <section className="mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-3">Why Partner With Innovatex Soft</h2>
            <p className="text-text-secondary max-w-xl mx-auto text-base">Built around speed, quality craftsmanship, and long-term client success.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code2 className="w-8 h-8 text-[#7815D0]" />,
                title: "Custom Engineering",
                desc: "High-traffic websites, mobile apps, and enterprise software built with modern scalable tech stacks."
              },
              {
                icon: <Palette className="w-8 h-8 text-[#7815D0]" />,
                title: "Boutique Branding",
                desc: "Eye-catching graphic design, UI/UX systems, and professional video editing tailored to your brand."
              },
              {
                icon: <Zap className="w-8 h-8 text-[#7815D0]" />,
                title: "Fast Support & Delivery",
                desc: "Rapid turnaround cycles backed by 24/7 maintenance and dedicated technical assistance."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#7815D0]" />,
                title: "Affordable Pricing",
                desc: "Enterprise-grade quality delivered with clear, predictable pricing models built for modern startups & SMEs."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold font-outfit mb-3 text-white">{pillar.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* The Team / Leadership Nodes */}
        <section className="mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
              <Users className="w-4 h-4 text-[#7815D0]" />
              <span className="text-xs font-semibold text-text-secondary uppercase">Leadership & Core Team</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit">The Innovatex Engineering Core</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={member.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card text-center relative overflow-hidden group"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#0D46BA]/40 to-[#7815D0]/40 border border-[#7815D0]/40 mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                  👤
                </div>
                <h3 className="text-xl font-bold font-outfit mb-1 text-white">{member.name}</h3>
                <p className="text-sm font-semibold text-[#7815D0] mb-3">{member.role}</p>
                <p className="text-xs text-text-secondary leading-relaxed mb-6">{member.description}</p>
                
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                  Node: {member.node}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Careers Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
              <Briefcase className="w-4 h-4 text-[#7815D0]" />
              <span className="text-xs font-semibold text-text-secondary uppercase">Careers at Innovatex</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit">Join Our Growing Network</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {careers.map((job, idx) => (
              <motion.div 
                key={job.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold font-outfit text-white">{job.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-[#7815D0]/20 text-[#7815D0] text-xs font-semibold border border-[#7815D0]/30 shrink-0">
                      {job.category}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mb-4 flex items-center gap-1.5">
                    <span>📍 {job.location}</span>
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">{job.description}</p>
                </div>

                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-[#7815D0] hover:text-white border border-white/10 transition-all text-sm font-semibold text-white/90 group"
                >
                  Apply Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
