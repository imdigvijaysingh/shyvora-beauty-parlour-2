import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, Clock, Edit2, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '' });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/60 transition-opacity animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in slide-in-from-bottom-8 duration-500 max-h-[95vh] md:max-h-[85vh]">
        
        {/* Close Button (Mobile & Desktop) */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50 border border-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Left Side: Branding / Info */}
        <div className="w-full md:w-[40%] bg-[#FDF8F6] p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden hidden sm:flex">
          
          {/* Decorative Floral Background (Bottom Left) */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-20 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 200C100 144.772 55.2285 100 0 100" stroke="#C87D65" strokeWidth="2"/>
              <path d="M140 200C140 122.68 77.3199 60 0 60" stroke="#C87D65" strokeWidth="2"/>
              <path d="M100 100C130 70 170 50 200 50" stroke="#C87D65" strokeWidth="2"/>
              <path d="M50 150C80 150 110 170 130 200" stroke="#C87D65" strokeWidth="2"/>
              <circle cx="100" cy="100" r="4" fill="#C87D65"/>
              <circle cx="140" cy="140" r="3" fill="#C87D65"/>
              <circle cx="40" cy="120" r="2" fill="#C87D65"/>
            </svg>
          </div>

          <div className="relative z-10 w-full">
            <div className="w-16 h-16 rounded-full bg-white border border-[#E7B4A3] text-[#C87D65] flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Calendar size={28} strokeWidth={1.5} />
            </div>
            
            <h4 className="text-[11px] font-bold text-[#C87D65] uppercase tracking-[0.2em] mb-2">Book Your</h4>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2A2321] mb-6">Appointment</h2>
            
            <div className="flex items-center justify-center gap-4 w-full max-w-[200px] mx-auto mb-6 opacity-40">
              <div className="h-px bg-[#C87D65] flex-grow"></div>
              <Sparkles size={14} className="text-[#C87D65]" />
              <div className="h-px bg-[#C87D65] flex-grow"></div>
            </div>

            <p className="text-sm text-[#6B5E59] leading-relaxed max-w-[240px] mx-auto">
              Fill in the details below and our team will confirm your appointment as soon as possible.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[60%] p-6 sm:p-8 md:p-10 lg:p-12 overflow-y-auto">
          
          <div className="sm:hidden mb-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-[#2A2321]">Book Appointment</h2>
            <p className="text-xs text-[#6B5E59] mt-2">Fill in your details below.</p>
          </div>

          {submitted ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center border border-green-100 shadow-sm">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2A2321]">Booking Requested!</h3>
              <p className="text-sm text-[#6B5E59] max-w-xs">
                Thank you! We've received your request and will be in touch shortly to confirm your slot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2321] mb-2 uppercase tracking-wide">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <User size={16} />
                    </div>
                    <input 
                      type="text" required placeholder="Enter your full name" 
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:ring-1 focus:ring-[#C87D65] outline-none transition-all placeholder:text-gray-400"
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2321] mb-2 uppercase tracking-wide">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Phone size={16} />
                    </div>
                    <input 
                      type="tel" required placeholder="Enter your phone number" 
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:ring-1 focus:ring-[#C87D65] outline-none transition-all placeholder:text-gray-400"
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2321] mb-2 uppercase tracking-wide">Email Address (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail size={16} />
                    </div>
                    <input 
                      type="email" placeholder="Enter your email address" 
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:ring-1 focus:ring-[#C87D65] outline-none transition-all placeholder:text-gray-400"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2321] mb-2 uppercase tracking-wide">Select Service</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                    <select 
                      required 
                      className="w-full pl-4 pr-11 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:ring-1 focus:ring-[#C87D65] outline-none transition-all appearance-none text-gray-600"
                      value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" disabled>Choose a service</option>
                      <option value="Hair Styling">Hair Styling & Care</option>
                      <option value="Skin Care">Skin Care & Facials</option>
                      <option value="Nails">Nail Art & Spa</option>
                      <option value="Bridal">Bridal Package</option>
                      <option value="Massage">Body Spa</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date */}
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2321] mb-2 uppercase tracking-wide">Preferred Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Calendar size={16} />
                    </div>
                    <input 
                      type="date" required 
                      className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:ring-1 focus:ring-[#C87D65] outline-none transition-all text-gray-600"
                      value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-[11px] font-bold text-[#2A2321] mb-2 uppercase tracking-wide">Preferred Time</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Clock size={16} />
                    </div>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                      <ChevronDown size={16} />
                    </div>
                    <select 
                      required 
                      className="w-full pl-11 pr-11 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:ring-1 focus:ring-[#C87D65] outline-none transition-all appearance-none text-gray-600"
                      value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="" disabled>Select time</option>
                      <option value="Morning">Morning (10AM - 1PM)</option>
                      <option value="Afternoon">Afternoon (1PM - 4PM)</option>
                      <option value="Evening">Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-bold text-[#2A2321] mb-2 uppercase tracking-wide">Additional Notes (Optional)</label>
                <div className="relative">
                  <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                    <Edit2 size={16} />
                  </div>
                  <textarea 
                    rows={3} placeholder="Tell us anything we should know..." 
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:border-[#C87D65] focus:ring-1 focus:ring-[#C87D65] outline-none transition-all placeholder:text-gray-400 resize-none"
                    value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  />
                </div>
              </div>

              {/* Submit & Trust Badge */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-[#B6664F] hover:bg-[#9A503C] text-white py-4 rounded-xl text-xs font-bold tracking-[0.1em] uppercase transition-all shadow-md flex items-center justify-center gap-2 mb-4"
                >
                  <span>BOOK APPOINTMENT</span>
                  <Calendar size={16} className="opacity-90" />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B5E59]">
                  <ShieldCheck size={14} className="text-[#C87D65]" />
                  <span>Your data is safe with us. We never share your information.</span>
                </div>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
