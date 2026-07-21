import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Innovatex Soft delivered beyond our expectations. Their AI integration completely transformed our workflow.",
    author: "Jane Doe",
    role: "CTO, TechCorp"
  },
  {
    quote: "The design aesthetics and performance of the app they built for us are unmatched.",
    author: "John Smith",
    role: "Founder, StartupX"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative z-10 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Client Success Stories</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Don't just take our word for it. See what our partners say about our work.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10"
            >
              <div className="text-primary text-4xl mb-6">"</div>
              <p className="text-xl leading-relaxed mb-8">{test.quote}</p>
              <div>
                <h4 className="font-bold font-outfit text-lg">{test.author}</h4>
                <p className="text-text-secondary text-sm">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
