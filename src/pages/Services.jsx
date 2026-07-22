import React, { useState } from "react";
import { 
  Sparkles, 
  ChevronRight, 
  Scissors, 
  Smile, 
  Crown, 
  Hand, 
  Flower2, 
  Brush, 
  UserCheck, 
  Gem, 
  ShieldCheck, 
  Heart,
  Droplet,
  Sun,
  Sparkle,
  Calendar
} from "lucide-react";
import AppointmentModal from "../components/ui/AppointmentModal";
import BottomCTA from "../components/layout/BottomCTA";

// Assets
import HairCutImg from "../assets/home/hair_cut_styling.png";
import FacialTreatmentImg from "../assets/home/facial_treatment.png";
import HairStylingImg from "../assets/home/hair-styling.webp";
import FaceCleansingImg from "../assets/home/face-cleansing.webp";
import BridalMakeupImg from "../assets/home/bridal-makeup.webp";
import BodyMassageImg from "../assets/home/body-massage.webp";
import GlowImg from "../assets/home/glow.webp";
import OfferModelImg from "../assets/home/offer_model.png";

// 1. CATEGORY TABS
const CATEGORIES = [
  { id: "hair", name: "Hair Care", icon: Scissors, count: "12 Services" },
  { id: "skin", name: "Skin Care", icon: Smile, count: "15 Services" },
  { id: "bridal", name: "Bridal Makeup", icon: Crown, count: "8 Packages" },
  { id: "nails", name: "Nail Art", icon: Hand, count: "10 Services" },
  { id: "spa", name: "Body Spa", icon: Flower2, count: "6 Therapies" },
  { id: "makeup", name: "Makeup", icon: Brush, count: "9 Services" },
];

// 2. SERVICES DATA BY CATEGORY
const CATEGORY_SERVICES = {
  hair: {
    title: "Hair Care Services",
    tagline: "Healthy hair is the crown you never take off.",
    items: [
      {
        id: 1,
        title: "Hair Cut & Styling",
        description: "Trendy haircuts and perfect styling for a stunning you.",
        price: "₹499",
        image: HairCutImg,
      },
      {
        id: 2,
        title: "Hair Spa",
        description: "Nourishing spa to repair, hydrate and add life to your hair.",
        price: "₹1,199",
        image: HairStylingImg,
      },
      {
        id: 3,
        title: "Hair Smoothing",
        description: "Smooth, frizz-free hair for a sleek and glossy finish.",
        price: "₹2,499",
        image: GlowImg,
      },
      {
        id: 4,
        title: "Hair Coloring",
        description: "Global highlights, balayage or ombre - claim your vibe.",
        price: "₹2,999",
        image: BridalMakeupImg,
      },
    ],
  },
  skin: {
    title: "Skin Care & Facials",
    tagline: "Radiant, glowing skin that feels refreshed and rejuvenated.",
    items: [
      {
        id: 1,
        title: "Organic Hydra Glow Facial",
        description: "Deep cleansing, exfoliation & hyaluronic hydration.",
        price: "₹1,499",
        image: FaceCleansingImg,
      },
      {
        id: 2,
        title: "Gold Radiance Facial",
        description: "Pure 24K gold dust infusion for instant bridal glow.",
        price: "₹2,199",
        image: FacialTreatmentImg,
      },
      {
        id: 3,
        title: "Deep Pore Clean-Up",
        description: "Removes blackheads, excess oil, and impurities.",
        price: "₹799",
        image: GlowImg,
      },
      {
        id: 4,
        title: "Anti-Aging Detox Treatment",
        description: "Collagen boosting treatment for firm, youth-restored skin.",
        price: "₹2,899",
        image: FaceCleansingImg,
      },
    ],
  },
  bridal: {
    title: "Bridal & HD Makeover Packages",
    tagline: "Bespoke bridal makeovers tailored for your dream wedding day.",
    items: [
      {
        id: 1,
        title: "Royal HD Bridal Makeup",
        description: "HD airbrush makeup, saree draping & hair styling.",
        price: "₹14,999",
        image: BridalMakeupImg,
      },
      {
        id: 2,
        title: "Engagement & Sangeet Glam",
        description: "Soft glam makeup with long-lasting matte finish.",
        price: "₹7,999",
        image: OfferModelImg,
      },
      {
        id: 3,
        title: "Pre-Bridal Luxury Package",
        description: "3-session skin glowing & hair spa pre-wedding care.",
        price: "₹9,999",
        image: FacialTreatmentImg,
      },
      {
        id: 4,
        title: "Party Makeup & Hair Draping",
        description: "Elegant evening makeup for bridesmaids and guests.",
        price: "₹3,499",
        image: HairCutImg,
      },
    ],
  },
  nails: {
    title: "Creative Nail Art & Pedicure",
    tagline: "Flawless manicures and pedicures that pamper your hands & feet.",
    items: [
      {
        id: 1,
        title: "Gel Polish & Nail Extensions",
        description: "Long-lasting chip-resistant gel polish with custom extensions.",
        price: "₹1,299",
        image: BodyMassageImg,
      },
      {
        id: 2,
        title: "Luxury Spa Pedicure",
        description: "Relaxing foot soak, scrub, nail shaping & massage.",
        price: "₹899",
        image: GlowImg,
      },
      {
        id: 3,
        title: "3D Nail Art & Chrome Finish",
        description: "Custom metallic chrome or crystal embellishment designs.",
        price: "₹1,599",
        image: BodyMassageImg,
      },
      {
        id: 4,
        title: "Classic Manicure & Polish",
        description: "Nail cuticle care, buffing & premium polish coat.",
        price: "₹499",
        image: BodyMassageImg,
      },
    ],
  },
  spa: {
    title: "Body Spa & Hot Stone Therapy",
    tagline: "Melt away stress and restore harmony with deep tissue relaxation.",
    items: [
      {
        id: 1,
        title: "Hot Stone Therapy Massage",
        description: "Warm volcanic stones relieve deep muscle tension.",
        price: "₹2,199",
        image: BodyMassageImg,
      },
      {
        id: 2,
        title: "Aromatherapy Full Body Spa",
        description: "Essential oil massaged into skin for ultimate calm.",
        price: "₹1,899",
        image: FacialTreatmentImg,
      },
      {
        id: 3,
        title: "Deep Tissue Muscle Relief",
        description: "Targeted firm pressure massage for chronic tightness.",
        price: "₹2,499",
        image: BodyMassageImg,
      },
      {
        id: 4,
        title: "Body Scrub & Polish",
        description: "Exfoliating scrub leaves skin silky smooth.",
        price: "₹1,699",
        image: GlowImg,
      },
    ],
  },
  makeup: {
    title: "Party & Event Makeup",
    tagline: "Stunning makeup looks crafted for any special occasion.",
    items: [
      {
        id: 1,
        title: "Signature Party Glam",
        description: "Luminous base, bold eye look & long-lasting lip color.",
        price: "₹2,499",
        image: OfferModelImg,
      },
      {
        id: 2,
        title: "Minimal Dewy No-Makeup Look",
        description: "Fresh, natural glow highlighting your best features.",
        price: "₹1,999",
        image: HairCutImg,
      },
      {
        id: 3,
        title: "Smokey Eye & Evening Glam",
        description: "Dramatic smokey eyes with contoured cheekbones.",
        price: "₹2,999",
        image: BridalMakeupImg,
      },
      {
        id: 4,
        title: "Saree & Dupatta Draping",
        description: "Precision draping in classic or modern Indo-western styles.",
        price: "₹699",
        image: BridalMakeupImg,
      },
    ],
  },
};

// 3. ADD-ONS DATA
const ADD_ONS = [
  { id: 1, name: "Threading", price: "₹99", icon: Gem },
  { id: 2, name: "Facial", price: "₹599", icon: Smile },
  { id: 3, name: "Hair Wash", price: "₹299", icon: Droplet },
  { id: 4, name: "D-Tan", price: "₹499", icon: Sun },
  { id: 5, name: "Clean Up", price: "₹699", icon: Sparkle },
  { id: 6, name: "Nail Polish", price: "₹199", icon: Hand },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("hair");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentCategoryData = CATEGORY_SERVICES[activeTab] || CATEGORY_SERVICES.hair;

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#3A3331] font-sans selection:bg-[#C87D65] selection:text-white pt-24 md:pt-28">
      
      {/* 0. Hero Section */}
      <section className="relative pt-8 pb-8 md:pt-6 md:pb-6 bg-[#FDFBF7] overflow-hidden text-center">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-terracotta-50 rounded-full blur-[120px] opacity-60 -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#C87D65] uppercase mb-6">
              <span className="text-terracotta-600 font-black">+</span>
              <span>OUR SERVICES</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2A2321] tracking-tight leading-tight mb-6">
              Beauty Services <br className="hidden md:block"/> <span className="font-script text-[#C87D65] font-normal italic text-6xl sm:text-7xl lg:text-8xl">Designed For You</span>
            </h1>
            
            <p className="text-[#6B5E59] text-base sm:text-lg mt-6 font-medium leading-relaxed max-w-xl mx-auto">
              From head to toe, we offer a wide range of premium beauty services tailored to bring out your best.
            </p>

            <div className="mt-10 flex justify-center">
              <button onClick={() => setIsModalOpen(true)} className="bg-[#B6664F] hover:bg-[#9A503C] text-white py-4 px-8 rounded-md text-xs font-bold tracking-[0.15em] uppercase transition-all shadow-md inline-flex items-center gap-2">
                <span>BOOK YOUR APPOINTMENT</span>
                <Calendar size={14} className="opacity-90" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. TOP HEADER & CATEGORY SELECTOR TABS                                   */}
      {/* ========================================================================= */}
      <section className="pt-12 md:pt-16 pb-8 bg-[#FDFBF7] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7B4A3] bg-[#FDF8F6] text-[#C87D65] text-xs font-semibold tracking-widest uppercase mb-3">
            <Sparkles size={13} />
            <span>OUR SERVICE CATEGORIES</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2321] tracking-tight">
            Explore Our Beauty Services
          </h1>

          <div className="text-[#C87D65] text-sm my-2">✦</div>

          {/* 6 Category Tabs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8">
            {CATEGORIES.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border ${
                    isActive
                      ? "bg-[#F9ECE7] border-[#C87D65] text-[#C87D65] shadow-md scale-105"
                      : "bg-white border-gray-200/80 text-[#5C524E] hover:bg-[#FDF8F6] hover:border-[#E7B4A3]"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive ? "bg-[#C87D65] text-white" : "bg-[#F9ECE7] text-[#C87D65]"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className="font-serif text-sm font-bold block">{tab.name}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DYNAMIC SERVICE SHOWCASE BY CATEGORY                                   */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C87D65] text-xs font-semibold uppercase tracking-widest block mb-1">
              ✦ {activeTab.toUpperCase()} CARE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2321]">
              {currentCategoryData.title}
            </h2>
            <p className="text-[#6B5E59] text-xs sm:text-sm mt-2 font-normal italic">
              "{currentCategoryData.tagline}"
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCategoryData.items.map((item) => (
              <div 
                key={item.id}
                className="bg-[#FDFBF7] rounded-2xl overflow-hidden border border-gray-100 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#2A2321] group-hover:text-[#C87D65] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[#6B5E59] text-xs mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-[#2A2321]">{item.price}</span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs font-bold text-[#C87D65] hover:text-[#B6664F] flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>BOOK NOW</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Pill Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C87D65] hover:bg-[#B6664F] text-white text-xs sm:text-sm font-semibold tracking-wider px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 uppercase"
            >
              <span>VIEW ALL {activeTab.toUpperCase()} SERVICES</span>
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. EXPERIENCE THE SHYVORA DIFFERENCE SECTION                            */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#F9ECE7] border-t border-b border-[#E7B4A3]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative z-10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={FacialTreatmentImg} 
                  alt="Experience The Shyvora Difference" 
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7B4A3] bg-white text-[#C87D65] text-xs font-semibold tracking-widest uppercase">
                <Sparkles size={13} />
                <span>WHY CHOOSE US</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2321] tracking-tight leading-tight">
                Experience The <br /> Shyvora Difference
              </h2>

              <p className="text-[#6B5E59] text-sm sm:text-base leading-relaxed font-normal">
                We combine expertise, luxury, and care to deliver an experience that makes you look and feel absolutely beautiful.
              </p>

              {/* 4 Feature Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#E7B4A3]/50">
                  <div className="w-9 h-9 rounded-full bg-[#F9ECE7] text-[#C87D65] flex items-center justify-center shrink-0">
                    <UserCheck size={18} />
                  </div>
                  <span className="text-xs font-bold text-[#2A2321]">Expert & Certified Beauticians</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#E7B4A3]/50">
                  <div className="w-9 h-9 rounded-full bg-[#F9ECE7] text-[#C87D65] flex items-center justify-center shrink-0">
                    <Gem size={18} />
                  </div>
                  <span className="text-xs font-bold text-[#2A2321]">Premium Quality Products</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#E7B4A3]/50">
                  <div className="w-9 h-9 rounded-full bg-[#F9ECE7] text-[#C87D65] flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-xs font-bold text-[#2A2321]">Hygienic & Safe Environment</span>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#E7B4A3]/50">
                  <div className="w-9 h-9 rounded-full bg-[#F9ECE7] text-[#C87D65] flex items-center justify-center shrink-0">
                    <Heart size={18} />
                  </div>
                  <span className="text-xs font-bold text-[#2A2321]">Personalized Care & Attention</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ENHANCE YOUR EXPERIENCE (ADD-ONS SECTION)                             */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C87D65] text-xs font-semibold uppercase tracking-widest block mb-1">
              ✦ ADD-ONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2321]">
              Enhance Your Experience
            </h2>
            <p className="text-[#6B5E59] text-xs sm:text-sm mt-2">
              Add-on treatments for that extra glow & quick skin care.
            </p>
          </div>

          {/* 6 Circular Add-On Items Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {ADD_ONS.map((addon) => {
              const Icon = addon.icon;
              return (
                <div 
                  key={addon.id}
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#FDFBF7] p-6 rounded-2xl border border-gray-100 text-center hover:shadow-md hover:border-[#E7B4A3] transition-all cursor-pointer group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#F9ECE7] text-[#C87D65] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#2A2321]">{addon.name}</h4>
                  <span className="text-xs font-semibold text-[#C87D65] mt-1 block">{addon.price}</span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SPECIAL OFFER BANNER SECTION                                           */}
      {/* ========================================================================= */}
      <section className="pb-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-white/80 shadow-lg">
                <img src={OfferModelImg} alt="Special Offer" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-widest uppercase">
                <Sparkles size={13} />
                <span>SPECIAL OFFER</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
                Get 20% Off On Your First Visit!
              </h2>
              <p className="text-white/90 text-xs sm:text-sm max-w-lg leading-relaxed">
                Pamper yourself with our premium services and enjoy an exclusive discount on your first appointment.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs sm:text-sm font-bold tracking-wider px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all uppercase inline-flex items-center gap-2"
                >
                  <span>BOOK NOW & SAVE</span>
                  <Calendar size={16} />
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
