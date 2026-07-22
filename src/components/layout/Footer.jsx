import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#E5E0DC] pt-16 pb-8 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 sm:gap-x-12 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <Link to="/" className="flex flex-col items-center lg:items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C87D65]/40 flex items-center justify-center p-1 bg-[#2A2321]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C87D65]" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="50" cy="50" r="46" stroke="#C87D65" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="42" stroke="#C87D65" strokeWidth="1" />
                  <path d="M 32 72 C 32 58, 42 46, 50 46 C 58 46, 64 54, 64 64 C 64 72, 60 76, 56 80" stroke="#C87D65" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 48 24 C 42 24, 38 28, 38 34 C 38 42, 48 48, 50 54 C 52 48, 62 42, 62 34 C 62 28, 58 24, 52 24 C 48 24, 48 28, 48 28" stroke="#C87D65" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-[0.2em] text-white leading-none">
                  SHYVORA
                </span>
                <span className="text-[9px] font-sans tracking-[0.25em] text-[#C87D65] uppercase mt-1 leading-none font-medium">
                  BEAUTY PARLOUR
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Shyvora Beauty Parlour is your go-to destination for all your beauty and grooming needs. We bring out your most radiant, confident self.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 w-full">
              <a href="#" className="w-8 h-8 rounded-full bg-[#2A2321] border border-gray-800 flex items-center justify-center text-[#C87D65] hover:bg-[#C87D65] hover:text-white transition-all" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2A2321] border border-gray-800 flex items-center justify-center text-[#C87D65] hover:bg-[#C87D65] hover:text-white transition-all" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2A2321] border border-gray-800 flex items-center justify-center text-[#C87D65] hover:bg-[#C87D65] hover:text-white transition-all" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#2A2321] border border-gray-800 flex items-center justify-center text-[#C87D65] hover:bg-[#C87D65] hover:text-white transition-all" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="font-serif text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#C87D65] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C87D65] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#C87D65] transition-colors">Services</Link></li>
              <li><Link to="/clients" className="hover:text-[#C87D65] transition-colors">Gallery</Link></li>
              <li><Link to="/membership" className="hover:text-[#C87D65] transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-[#C87D65] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="font-serif text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              OUR SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
              <li><Link to="/services" className="hover:text-[#C87D65] transition-colors">Hair Care & Styling</Link></li>
              <li><Link to="/services" className="hover:text-[#C87D65] transition-colors">Skin Care & Facials</Link></li>
              <li><Link to="/services" className="hover:text-[#C87D65] transition-colors">Bridal Makeup</Link></li>
              <li><Link to="/services" className="hover:text-[#C87D65] transition-colors">Creative Nail Art</Link></li>
              <li><Link to="/services" className="hover:text-[#C87D65] transition-colors">Relaxing Body Spa</Link></li>
              <li><Link to="/services" className="hover:text-[#C87D65] transition-colors">Party & Event Makeup</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="font-serif text-lg font-semibold text-white mb-4 uppercase tracking-wider">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400 flex flex-col items-center lg:items-start">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#C87D65] shrink-0" />
                <span>123 Beauty Street, Your City, State - 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#C87D65] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#C87D65] shrink-0" />
                <span>info@shyvora.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-[#C87D65] shrink-0" />
                <span>Mon - Sun: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} SHYVORA Beauty Parlour. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C87D65] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C87D65] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
