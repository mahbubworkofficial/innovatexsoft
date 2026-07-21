import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-32 pb-10 border-t border-white/10 bg-[#050505] relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Innovatex Soft Logo" 
                  className="w-full h-full object-contain absolute inset-0 z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-tr from-primary to-accent rounded-lg items-center justify-center text-white font-bold text-xl">
                  IS
                </div>
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight">
                INNOVATEX <span className="text-white">SOFT</span>
              </span>
            </Link>
            <p className="text-text-secondary mb-6 max-w-sm">
              Engineering the Future of Intelligent Digital Experiences.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">𝕏</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">in</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-outfit text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-text-secondary hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-white transition-colors">Game Development</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-white transition-colors">AI Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-outfit text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-text-secondary hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/work" className="text-text-secondary hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/blog" className="text-text-secondary hover:text-white transition-colors">Insider</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-outfit text-lg mb-6">Newsletter</h4>
            <p className="text-text-secondary mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary text-white" />
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors">Go</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>© 2026 Innovatex Soft. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
