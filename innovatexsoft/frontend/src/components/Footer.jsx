import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="pt-24 pb-10 border-t border-white/10 bg-[#050505] relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7815D0] to-transparent opacity-60"></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <img 
                  src="/logo.jpg" 
                  alt="Innovatex Soft Logo" 
                  className="w-full h-full object-contain absolute inset-0 z-10 rounded-md"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-tr from-[#0D46BA] to-[#7815D0] rounded-lg items-center justify-center text-white font-bold text-xl">
                  IS
                </div>
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight">
                INNOVATEX <span className="text-[#7815D0]">SOFT</span>
              </span>
            </Link>
            <p className="text-text-secondary mb-4 max-w-sm text-sm leading-relaxed">
              Professional Service - Affordable Pricing - Fast Support.
            </p>
            <p className="text-xs text-text-secondary mb-6">
              Empower your business with high-performance software, custom apps, graphic design, and digital marketing.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/innovatexsoft" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7815D0] hover:border-[#7815D0] transition-colors text-white"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="https://youtube.com/@innovatexsoft" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7815D0] hover:border-[#7815D0] transition-colors text-white"
              >
                <FaYoutube size={16} />
              </a>
              <a 
                href="https://instagram.com/innovatexsoft" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7815D0] hover:border-[#7815D0] transition-colors text-white"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-outfit text-lg mb-6 text-white">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-text-secondary hover:text-[#7815D0] transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-[#7815D0] transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-[#7815D0] transition-colors">Custom Software Solutions</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-[#7815D0] transition-colors">Website & App Maintenance</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-[#7815D0] transition-colors">Graphic Design & Branding</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-[#7815D0] transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-[#7815D0] transition-colors">Video Editing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-outfit text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-text-secondary hover:text-[#7815D0] transition-colors">About Us</Link></li>
              <li><Link to="/work" className="text-text-secondary hover:text-[#7815D0] transition-colors">Our Work</Link></li>
              <li><Link to="/blog" className="text-text-secondary hover:text-[#7815D0] transition-colors">Insider Blog</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-[#7815D0] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-outfit text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#7815D0] shrink-0 mt-0.5" />
                <span>Gulshan, Dhaka-1212</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#7815D0] shrink-0" />
                <a href="tel:01747200440" className="hover:text-white transition-colors">01747-200440</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#7815D0] shrink-0" />
                <a href="mailto:info@innovatexsoft.com" className="hover:text-white transition-colors">info@innovatexsoft.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-[#7815D0] shrink-0" />
                <a href="https://www.innovatexsoft.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.innovatexsoft.com</a>
              </li>
            </ul>
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
