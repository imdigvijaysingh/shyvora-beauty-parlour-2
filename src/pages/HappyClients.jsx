import React, { useState } from 'react';
import { Star, Sparkles, HeartHandshake, ChevronRight, Video, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import BottomCTA from '../components/layout/BottomCTA';
import video1 from '../assets/videos/video1.webm';
import video2 from '../assets/videos/video2.webm';
import BridalMakeupImage from "../assets/home/bridal-makeup.webp";
import FaceCleansingImage from "../assets/home/face-cleansing.webp";
import BodyMassageImage from "../assets/home/body-massage.webp";
import HairStylingImage from "../assets/home/hair-styling.webp";
import GlowImage from "../assets/home/glow.webp";
import OfferModelImg from "../assets/home/offer_model.png";

const CATEGORIES = ["ALL", "HAIR", "SKIN", "BRIDAL", "SPA"];

const GALLERY = [
  { id: 1, category: "HAIR", title: "Hair Styling & Care", image: HairStylingImage },
  { id: 2, category: "SKIN", title: "Organic Hydra Facial", image: FaceCleansingImage },
  { id: 3, category: "BRIDAL", title: "Royal Bridal Makeover", image: BridalMakeupImage },
  { id: 4, category: "SPA", title: "Hot Stone Therapy", image: BodyMassageImage },
  { id: 5, category: "SKIN", title: "Signature Glow Treatment", image: GlowImage },
  { id: 6, category: "BRIDAL", title: "Evening Reception Glam", image: OfferModelImg },
];

const REVIEWS = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    text: "SHYVORA is my absolute favorite escape! The staff makes you feel like royalty, and the facials are pure magic.",
    service: "Signature Hydra Glow"
  },
  {
    name: "Roohi Rawat",
    role: "Bride",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    text: "I trusted them with my wedding hair and makeup, and they exceeded all expectations. Everyone complimented my look!",
    service: "Bridal Package"
  },
  {
    name: "Priyanka Singhal",
    role: "Verified Client",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    text: "My hair has never looked so healthy and vibrant. The organic treatments and master stylists are incredible.",
    service: "Hair Spa & Cut"
  }
];

export default function HappyClients() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems = activeCategory === "ALL" 
    ? GALLERY 
    : GALLERY.filter(item => item.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#3A3331] font-sans selection:bg-[#C87D65] selection:text-white pt-24 md:pt-28">
      
      {/* 1. Header Banner */}
      <section className="relative pt-8 pb-8 md:pt-6 md:pb-6 bg-[#FDFBF7] overflow-hidden text-center border-b border-gray-100">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-terracotta-50 rounded-full blur-[120px] opacity-60 -z-10 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#C87D65] uppercase mb-6">
              <span className="text-terracotta-600 font-black">+</span>
              <span>OUR GALLERY</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2A2321] tracking-tight leading-tight mb-6">
              Beauty In Every <br className="hidden md:block"/> <span className="font-script text-[#C87D65] font-normal italic text-6xl sm:text-7xl lg:text-8xl">Detail</span>
            </h1>
            
            <p className="text-[#6B5E59] text-base sm:text-lg mt-6 font-medium leading-relaxed max-w-xl mx-auto">
              A glimpse of the transformations, the moments, and the confidence we create every day.
            </p>

            <div className="mt-10 flex justify-center">
              <Link to="/contact" className="bg-[#B6664F] hover:bg-[#9A503C] text-white py-4 px-8 rounded-md text-xs font-bold tracking-[0.15em] uppercase transition-all shadow-md inline-flex items-center gap-2">
                <span>BOOK YOUR APPOINTMENT</span>
                <Sparkles size={14} className="opacity-90" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Video Spotlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#C87D65] text-xs font-semibold uppercase tracking-widest mb-1">
              <Video size={16} />
              <span>VIDEO SPOTLIGHT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2321]">
              Client Transformation Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { src: video1, title: "Royal Bridal Transformation" },
              { src: video2, title: "A Day of Ultimate Relaxation" }
            ].map((video, idx) => (
              <div key={idx} className="relative aspect-video rounded-3xl overflow-hidden group bg-[#2A2321] shadow-xl">
                <video 
                  src={video.src} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2321]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white pointer-events-none z-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C87D65] bg-white/90 px-3 py-1 rounded-full mb-2 inline-block">
                    Featured
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold drop-shadow-md text-white">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Filterable Photo Gallery */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-[#C87D65] text-xs font-semibold uppercase tracking-widest mb-1">
              <Camera size={16} />
              <span>OUR WORK</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2321]">
              Photo Gallery
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all uppercase ${
                  activeCategory === cat
                    ? "bg-[#C87D65] text-white shadow-sm"
                    : "bg-white text-[#6B5E59] hover:bg-[#F9ECE7] border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2321]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C87D65] bg-white px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white block">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Client Written Reviews */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C87D65] text-xs font-semibold uppercase tracking-widest block mb-1">
              TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2A2321]">
              Trusted By Hundreds Of Happy Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="bg-[#FDFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex text-[#C87D65] mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-[#6B5E59] text-xs sm:text-sm italic leading-relaxed">"{review.text}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-[#2A2321]">{review.name}</h4>
                    <span className="text-[10px] text-[#C87D65] font-semibold">{review.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Custom CTA Banner */}
      <section className="py-12 md:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row items-center min-h-[400px]">
            
            {/* Floral subtle overlay (right side) */}
            <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none -mr-10 -mb-10 w-96 h-96">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="none" stroke="#ffffff" strokeWidth="0.5" d="M100,100 Q150,50 180,100 T100,180 Q50,150 20,100 T100,20 Z" />
                <path fill="none" stroke="#ffffff" strokeWidth="0.5" d="M100,100 Q120,20 150,40 T180,100 Q160,180 130,160 T100,100 Z" />
                <path fill="none" stroke="#ffffff" strokeWidth="0.5" d="M100,100 Q180,120 160,150 T100,180 Q20,160 40,130 T100,100 Z" />
                <path fill="none" stroke="#ffffff" strokeWidth="0.5" d="M100,100 C150,150 180,150 200,100 C180,50 150,50 100,100 Z" />
                <path fill="none" stroke="#ffffff" strokeWidth="0.5" d="M100,100 C100,150 50,150 0,100 C50,50 100,50 100,100 Z" />
              </svg>
            </div>

            {/* Image Side */}
            <div className="w-full md:w-[45%] h-[300px] md:h-[450px]">
              <img 
                src={OfferModelImg} 
                alt="Beautiful glowing model" 
                className="w-full h-full object-cover object-top filter brightness-105" 
              />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-16 text-white relative z-10 flex flex-col justify-center items-start">
              
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 text-white/95">
                <Sparkles size={14} className="text-white" />
                <span>READY TO GLOW?</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-[1.15]">
                Your Best Look <br /> Is Just An Appointment Away!
              </h2>
              
              <p className="text-white/90 text-sm md:text-[15px] font-medium leading-relaxed mb-8 max-w-lg">
                Let our experts pamper you and bring out the most confident version of you.
              </p>

              <button className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs sm:text-sm font-bold tracking-[0.05em] px-8 py-3.5 rounded-md shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-0.5 uppercase inline-flex items-center gap-3">
                <span>BOOK YOUR APPOINTMENT</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
