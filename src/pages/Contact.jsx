import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z"/>
  </svg>
);
import SalonInteriorImg from '../assets/home/salon_interior.webp';
import OfferModelImg from '../assets/home/offer_model.webp';
import AppointmentModal from '../components/ui/AppointmentModal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#3A3331] font-sans selection:bg-[#C87D65] selection:text-white pt-24 md:pt-32">
      
      {/* 1. Hero Section (Left-aligned text, no image as per user instructions) */}
      <section className="relative py-8 md:py-6 bg-[#FDFBF7] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-100 rounded-full blur-[100px] opacity-40 -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#C87D65] uppercase mb-6">
              <span className="text-[#C87D65] font-black">+</span>
              <span>CONTACT US</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2A2321] tracking-tight leading-tight mb-6">
              We'd Love To <br className="hidden md:block"/>
              <span className="font-script text-[#C87D65] italic font-normal text-6xl sm:text-7xl lg:text-8xl">Hear From You</span>
            </h1>
            
            <p className="text-[#6B5E59] text-sm sm:text-base mb-10 max-w-md mx-auto leading-relaxed">
              Have questions or ready to book your beauty experience? Get in touch with us. We're here to help you look and feel your best!
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content Split (Form & Parlour details) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left: Message Form */}
            <div className="bg-[#FDFBF7] rounded-[2rem] p-8 md:p-12 border border-terracotta-50 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl font-bold text-[#2A2321] mb-2">Send Us A Message</h3>
                <p className="text-[#6B5E59] text-xs">Fill out the form and our team will get back to you as soon as possible.</p>
              </div>

              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-white text-[#C87D65] rounded-full flex items-center justify-center mx-auto shadow-sm border border-terracotta-50">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2A2321]">Message Sent!</h3>
                  <p className="text-xs text-[#6B5E59]">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <input type="text" required placeholder="Your Name" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:outline-none transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Phone size={16} />
                    </div>
                    <input type="tel" required placeholder="Phone Number" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:outline-none transition-all" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail size={16} />
                    </div>
                    <input type="email" required placeholder="Email Address" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:outline-none transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <select required className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:outline-none transition-all appearance-none text-gray-500" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}>
                      <option value="" disabled>Select Service</option>
                      <option value="Hair">Hair Styling</option>
                      <option value="Skin">Skin Care</option>
                      <option value="Nails">Nails</option>
                      <option value="Bridal">Bridal</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </div>
                    <textarea required rows={4} placeholder="Your Message" className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:outline-none transition-all" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" className="w-full bg-[#C87D65] hover:bg-[#B6664F] text-white py-4 rounded-xl text-[11px] font-bold tracking-[0.15em] uppercase transition-all shadow-md flex items-center justify-center gap-2 mt-2">
                    <span>SEND MESSAGE</span>
                    <Send size={14} className="ml-1 -rotate-12" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Visit Our Parlour */}
            <div className="bg-[#FDFBF7] rounded-[2rem] p-8 md:p-12 border border-terracotta-50 shadow-sm flex flex-col">
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl font-bold text-[#2A2321] mb-2">Visit Our Parlour</h3>
                <p className="text-[#6B5E59] text-xs">Step into a world of beauty and relaxation. We can't wait to welcome you!</p>
              </div>
              
              <div className="rounded-[1.5rem] overflow-hidden mb-8 shadow-md">
                <img src={SalonInteriorImg} alt="Salon Interior" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6 flex-grow">
                <div className="text-[#C87D65] mt-1 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#2A2321] mb-1">Shyvora Beauty Parlour</h4>
                  <p className="text-xs text-[#6B5E59] leading-relaxed">
                    123 Beauty Street, Your City,<br/> State - 10001
                  </p>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl text-[11px] font-bold tracking-[0.15em] uppercase transition-all border border-[#C87D65] text-[#C87D65] hover:bg-[#C87D65] hover:text-white flex items-center justify-center gap-2">
                <span>GET DIRECTIONS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stay Connected Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
            <h3 className="font-serif text-2xl font-bold text-[#2A2321] px-6">Stay Connected</h3>
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
          </div>
          <p className="text-center text-[#6B5E59] text-xs sm:text-sm mb-12">
            Follow us on social media for the latest updates, beauty tips and exclusive offers!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-[#FDFBF7] p-5 rounded-2xl flex items-center gap-3 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C87D65] shadow-sm shrink-0">
                <InstagramIcon size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#2A2321] mb-0.5">Instagram</p>
                <p className="text-[10px] text-[#8C7B75] truncate">@shyvora.beauty</p>
              </div>
            </div>
            
            <div className="bg-[#FDFBF7] p-5 rounded-2xl flex items-center gap-3 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C87D65] shadow-sm shrink-0">
                <FacebookIcon size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#2A2321] mb-0.5">Facebook</p>
                <p className="text-[10px] text-[#8C7B75] truncate">@shyvora.beauty</p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-5 rounded-2xl flex items-center gap-3 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C87D65] shadow-sm shrink-0">
                <YoutubeIcon size={18} />
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#2A2321] mb-0.5">YouTube</p>
                <p className="text-[10px] text-[#8C7B75] truncate">@shyvora.beauty</p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-5 rounded-2xl flex items-center gap-3 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C87D65] shadow-sm shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#2A2321] mb-0.5">WhatsApp</p>
                <p className="text-[10px] text-[#8C7B75] truncate">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Custom CTA Banner */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-[2rem] sm:rounded-[3rem] overflow-hidden text-white shadow-xl flex flex-col lg:flex-row items-stretch">
            
            {/* Image Section */}
            <div className="w-full lg:w-2/5 relative min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
              <img
                src={OfferModelImg}
                alt="Beautiful glowing model"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-left hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient blend to seamlessly merge with the right copy on desktop, and bottom on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#C87D65] via-[#C87D65]/40 lg:via-[#C87D65]/10 to-transparent lg:to-transparent" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-3/5 p-8 sm:p-10 lg:p-16 space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 bg-[#C87D65]">
              <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/15 text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase backdrop-blur-sm shadow-sm">
                  <Sparkles size={14} />
                  <span>SPECIAL OFFER</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-sm lg:max-w-md">
                  Get 20% Off On Your First Visit!
                </h2>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-sm lg:max-w-md">
                  Pamper yourself with our premium services and enjoy an exclusive discount on your first appointment.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs font-bold tracking-[0.1em] px-8 py-3.5 rounded-lg shadow-md transition-transform hover:-translate-y-0.5 uppercase inline-flex items-center justify-center"
                >
                  <span>BOOK NOW</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
