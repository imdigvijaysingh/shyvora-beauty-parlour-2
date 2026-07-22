import React, { useState } from "react";
import { Check, ShieldCheck, Gem, UserCheck, ChevronRight, Calendar, Sparkles, X } from "lucide-react";
import AppointmentModal from "../components/ui/AppointmentModal";

const PACKAGES = [
  {
    name: "BASIC GLOW",
    subtitle: "Perfect for a quick refresh",
    price: "999",
    features: [
      "Clean Up",
      "Basic Facial",
      "Threading (Eyebrows)",
      "Hair Wash",
      "Blow Dry",
    ],
    popular: false,
  },
  {
    name: "RADIANT YOU",
    subtitle: "Our client's favorite",
    price: "2,499",
    features: [
      "Clean up",
      "Advanced Facial",
      "Hair Spa",
      "Hair Cut & Styling",
      "Hand & Foot Spa",
      "Threading (Full Face)",
    ],
    popular: true,
  },
  {
    name: "LUXE PAMPER",
    subtitle: "The ultimate indulgence",
    price: "4,999",
    features: [
      "Skin Polishing",
      "Luxury Facial",
      "Full Body Massage",
      "Hair Spa",
      "Hair Cut & Styling",
      "Manicure & Pedicure",
      "Threading (Full Face)",
    ],
    popular: false,
  },
];

const TABS = ["HAIR CARE", "SKIN CARE", "NAILS", "MAKEUP", "BODY SPA", "OTHERS"];

const SERVICES_DATA = {
  "HAIR CARE": [
    { name: "Hair Cut (Women)", price: "499" },
    { name: "Hair Cut (Men)", price: "249" },
    { name: "Blow Dry", price: "399" },
    { name: "Hair Spa", price: "899" },
    { name: "Hair Smoothening", price: "2,499" },
    { name: "Hair Coloring (Global)", price: "2,999" },
    { name: "Root Touch-Up", price: "799" },
    { name: "Highlights / Streaks", price: "1,599" },
    { name: "Keratin Treatment", price: "2,599" },
    { name: "Olaplex Treatment", price: "1,499" },
    { name: "Protein Treatment", price: "1,199" },
    { name: "Bridal Hair Do", price: "2,599" },
  ],
  "SKIN CARE": [
    { name: "Basic Clean Up", price: "499" },
    { name: "Fruit Facial", price: "799" },
    { name: "O3+ Advanced Facial", price: "1,499" },
    { name: "Hydra Facial", price: "2,999" },
    { name: "Anti-Tan Treatment", price: "899" },
    { name: "Skin Polishing", price: "1,999" },
  ],
  "NAILS": [
    { name: "Classic Manicure", price: "399" },
    { name: "Classic Pedicure", price: "499" },
    { name: "Gel Polish Hands", price: "599" },
    { name: "Nail Extension (Acrylic)", price: "1,499" },
    { name: "Nail Art (Per Finger)", price: "99" },
    { name: "Gel Polish Removal", price: "299" },
  ],
  "MAKEUP": [
    { name: "Party Makeup", price: "1,499" },
    { name: "Engagement Makeup", price: "3,499" },
    { name: "Bridal Makeup (HD)", price: "8,999" },
    { name: "Bridal Makeup (Airbrush)", price: "12,999" },
    { name: "Eye Makeup Only", price: "799" },
    { name: "Saree Draping", price: "499" },
  ],
  "BODY SPA": [
    { name: "Swedish Massage (60 Min)", price: "1,499" },
    { name: "Deep Tissue Massage", price: "1,999" },
    { name: "Aroma Therapy", price: "1,799" },
    { name: "Body Scrub & Polish", price: "2,499" },
    { name: "Foot Reflexology (30 Min)", price: "699" },
    { name: "Head & Shoulder Massage", price: "499" },
  ],
  "OTHERS": [
    { name: "Threading (Eyebrows)", price: "49" },
    { name: "Threading (Full Face)", price: "149" },
    { name: "Waxing (Full Arms)", price: "299" },
    { name: "Waxing (Full Legs)", price: "399" },
    { name: "Bikini Wax", price: "899" },
    { name: "Bleach (Face & Neck)", price: "249" },
  ],
};

export default function Membership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPriceListModalOpen, setIsPriceListModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("HAIR CARE");

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#3A3331] font-sans selection:bg-[#C87D65] selection:text-white pt-24 md:pt-32">
      
      {/* 1. Hero Section (No Image variant as requested) */}
      <section className="relative py-8 md:py-6 bg-[#FDFBF7] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-100 rounded-full blur-[100px] opacity-40 -z-10 pointer-events-none"></div>
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-parlor-gold/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#C87D65] uppercase mb-6">
            <Sparkles size={12} />
            <span>Our Pricing</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-[#2A2321] tracking-tight leading-tight mb-6">
            Beauty That Fits <br/> 
            <span className="font-script text-[#C87D65] italic font-normal text-5xl sm:text-7xl lg:text-8xl">Your Style & Budget</span>
          </h1>
          <p className="text-[#6B5E59] text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Premium beauty services crafted with care, transparency, and love. Choose what suits you best.
          </p>

        </div>
      </section>

      {/* 2. Best-Selling Packages */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C87D65] text-[10px] font-bold uppercase tracking-[0.2em] block mb-3">Choose Your Package</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2321]">
              Our Best-Selling Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-[2rem] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular 
                    ? "bg-[#C87D65] text-white shadow-2xl lg:-mt-4 lg:-mb-4 z-10" 
                    : "bg-[#FDFBF7] text-[#2A2321] border border-terracotta-100 shadow-sm"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#C87D65] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center border-b border-opacity-20 pb-8 mb-8 border-current">
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-[#C87D65]"}`}>{pkg.name}</h3>
                  <p className={`text-xs mb-4 ${pkg.popular ? "text-white/80" : "text-[#8C7B75]"}`}>{pkg.subtitle}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-sm font-semibold mr-1">₹</span>
                    <span className="font-serif text-4xl font-bold">{pkg.price}</span>
                    <span className={`text-xs ml-1 ${pkg.popular ? "text-white/80" : "text-[#8C7B75]"}`}>/Session</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-start text-sm ${pkg.popular ? "text-white/95" : "text-[#5C524E]"}`}>
                      <Check size={16} className={`shrink-0 mr-3 mt-0.5 ${pkg.popular ? "text-white" : "text-[#C87D65]"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-4 rounded-xl text-xs font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? "bg-white text-[#C87D65] hover:bg-[#FDFBF7]"
                      : "border border-[#C87D65] text-[#C87D65] hover:bg-[#C87D65] hover:text-white"
                  }`}
                >
                  <span>Book Now</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 flex items-center justify-center gap-2 text-xs font-medium text-[#6B5E59]">
            <span>All packages can be customized as per your needs.</span>
            <button onClick={() => setIsModalOpen(true)} className="text-[#C87D65] font-bold hover:underline uppercase tracking-wider ml-2 inline-flex items-center">
              Talk To Our Experts <ChevronRight size={12} className="ml-0.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Individual Services (Menu) */}
      <section className="py-20 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#C87D65] text-[10px] font-bold uppercase tracking-[0.2em] block mb-3">Service Price List</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2321]">
              Individual Services
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.15em] transition-all uppercase ${
                  activeTab === tab
                    ? "bg-[#C87D65] text-white shadow-md"
                    : "bg-white text-[#8C7B75] hover:bg-terracotta-50 border border-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Service List (2 columns) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-terracotta-50 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {SERVICES_DATA[activeTab].map((service, idx) => (
                <div key={idx} className="flex items-end justify-between border-b border-gray-100 pb-3 group">
                  <span className="text-sm font-semibold text-[#3A3331] group-hover:text-[#C87D65] transition-colors">{service.name}</span>
                  <div className="flex-grow border-b border-dotted border-gray-300 mx-4 mb-1 opacity-40"></div>
                  <span className="text-sm font-bold text-[#2A2321]">₹{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <button 
              onClick={() => setIsPriceListModalOpen(true)}
              className="text-[#C87D65] text-[11px] font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-1"
            >
              View Full Price List <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Membership / Loyalty Banner */}
      <section className="pb-24 pt-8 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-[2rem] overflow-hidden shadow-xl relative text-center px-6 py-16 md:py-20 flex flex-col items-center">
            
            {/* Subtle background graphics */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M400 0H0V400H400V0Z" fill="url(#paint0_linear)"/>
                <circle cx="350" cy="50" r="150" fill="white" opacity="0.3"/>
                <circle cx="50" cy="350" r="100" fill="white" opacity="0.2"/>
              </svg>
            </div>
            
            <div className="relative z-10 w-full max-w-3xl mx-auto">
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] block mb-4 flex justify-center items-center gap-2">
                <Sparkles size={12} /> MEMBERSHIP PLAN
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                More Beauty, More Benefits
              </h2>
              <p className="text-white/90 text-sm md:text-base font-medium max-w-xl mx-auto mb-10 leading-relaxed">
                Join our inner circle and enjoy exclusive discounts, priority booking, and special offers all year round.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                <div className="flex flex-col items-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <span className="font-bold text-sm">%</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Up to 30% Off<br/>on Services</span>
                </div>
                <div className="flex flex-col items-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Calendar size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Priority<br/>Appointments</span>
                </div>
                <div className="flex flex-col items-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Gem size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Exclusive Member<br/>Offers</span>
                </div>
                <div className="flex flex-col items-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Birthday<br/>Specials</span>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs font-bold tracking-[0.1em] px-10 py-4 rounded-lg shadow-md transition-all uppercase inline-flex items-center gap-2"
              >
                <span>Join Now & Save</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Price List Modal */}
      {isPriceListModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#2A2321]/80 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-gray-100 bg-[#FDFBF7]">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2321]">Full Price List</h3>
                <p className="text-xs sm:text-sm text-[#8C7B75] mt-1">Explore all our premium salon services</p>
              </div>
              <button 
                onClick={() => setIsPriceListModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#C87D65] hover:border-[#C87D65] transition-all shadow-sm"
              >
                <X size={18} />
              </button>
            </div>
            <div className="p-6 sm:p-10 overflow-y-auto bg-white custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
                {TABS.map((category, catIdx) => (
                  <div key={catIdx}>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#C87D65] mb-5 uppercase tracking-widest border-b border-terracotta-100 pb-2">{category}</h4>
                    <div className="space-y-4">
                      {SERVICES_DATA[category].map((service, idx) => (
                        <div key={idx} className="flex items-end justify-between group">
                          <span className="text-sm font-semibold text-[#3A3331] group-hover:text-[#C87D65] transition-colors">{service.name}</span>
                          <div className="flex-grow border-b border-dotted border-gray-300 mx-4 mb-1 opacity-50"></div>
                          <span className="text-sm font-bold text-[#2A2321]">₹{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
