import React, { useState } from "react";
import {
  Sparkles,
  Target,
  Heart,
  Play,
  ArrowRight,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Clock,
} from "lucide-react";
import BottomCTA from "../components/layout/BottomCTA";
import SalonInteriorImg from "../assets/home/salon_interior.png";
import OfferModelImg from "../assets/home/offer_model.png";
import AboutVideo from "../assets/videos/about-us.webm";
import Team1 from "../assets/about-us/team1.webp";
import Team2 from "../assets/about-us/team2.webp";
import Team3 from "../assets/about-us/team3.webp";

const TEAM = [
  {
    name: "Mahima Sharma",
    role: "Master Colorist & Stylist",
    img: Team1,
  },
  {
    name: "Ananya Chauhan",
    role: "Lead Bridal Specialist",
    img: Team2,
  },
  {
    name: "Shweta Roy",
    role: "Aesthetic Skin Specialist",
    img: Team3,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Personalized Consultation",
    desc: "Understanding your unique skin tone, hair texture, and style preferences.",
  },
  {
    step: "02",
    title: "Organic Preparation",
    desc: "Prepping your skin and hair with 100% cruelty-free, gentle formulations.",
  },
  {
    step: "03",
    title: "Skillful Execution",
    desc: "Artistically applied by our certified senior beauticians and stylists.",
  },
  {
    step: "04",
    title: "Radiant Results",
    desc: "The final beauty touch to ensure you feel confident and glowing.",
  },
];

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#3A3331] font-sans selection:bg-terracotta-500 selection:text-white pt-24 md:pt-32">
      {/* 1. Hero / Header Banner */}
      <section className="relative pt-6 pb-6 md:pt-4 md:pb-4 overflow-hidden bg-[#FDFBF7]">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-terracotta-50 rounded-l-[100px] -z-10 opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-parlor-gold/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute top-10 right-20 w-[300px] h-[300px] rounded-full border border-terracotta-100 opacity-20 -z-10 pointer-events-none"></div>
        <div className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full border border-terracotta-100 opacity-20 -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#C87D65] uppercase mb-6">
              <Sparkles size={12} />
              <span>About Shyvora</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2A2321] tracking-tight leading-tight mb-6">
              Where Beauty Meets <br className="hidden md:block" />{" "}
              <span className="font-script text-[#C87D65] font-normal italic text-6xl sm:text-7xl lg:text-8xl">
                Confidence
              </span>
            </h1>

            <p className="text-[#6B5E59] text-sm sm:text-lg mt-3 font-medium leading-relaxed mx-auto">
              At Shyvora Beauty Parlour, we believe beauty is more than just
              appearances — it's about how you feel from within. Our mission is
              to bring out your most confident, radiant self with personalized
              care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Origin Section */}
      <section className="py-8 md:py-8 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terracotta-200 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-terracotta-600 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
                  Our Origins
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2A2321] tracking-tight leading-tight">
                  Refining{" "}
                  <span className="font-script text-terracotta-600 italic font-normal text-5xl sm:text-6xl">
                    Beauty
                  </span>{" "}
                  <br />
                  with Passion and Precision
                </h2>
              </div>
              <p className="text-[#6B5E59] text-base leading-relaxed">
                Established in 2010, SHYVORA Beauty Parlour started with a
                single vision: to create a relaxing, luxurious space where
                clients can discover their true natural beauty. Over the years,
                we have grown into the region's premier destination for high-end
                hair care, skin rejuvenation, and bridal makeover rituals.
              </p>
              <p className="text-[#6B5E59] text-base leading-relaxed">
                We believe that true beauty stems from confidence and
                well-being. Our team of master beauticians combines time-tested
                treatments with cutting-edge techniques to ensure you leave
                feeling pampered and radiant every single time.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-terracotta-100">
                <div className="group">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-terracotta-50 flex items-center justify-center group-hover:bg-terracotta-600 transition-colors duration-300">
                      <Users
                        size={20}
                        className="text-terracotta-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-[#2A2321]">
                      15k+
                    </h4>
                  </div>
                  <p className="text-xs text-[#8C7B75] uppercase tracking-wider font-semibold">
                    Satisfied Clients
                  </p>
                </div>
                <div className="group">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-terracotta-50 flex items-center justify-center group-hover:bg-terracotta-600 transition-colors duration-300">
                      <Award
                        size={20}
                        className="text-terracotta-600 group-hover:text-white transition-colors"
                      />
                    </div>
                    <h4 className="font-serif text-3xl font-bold text-[#2A2321]">
                      14+
                    </h4>
                  </div>
                  <p className="text-xs text-[#8C7B75] uppercase tracking-wider font-semibold">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              {/* Image Composition */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-terracotta-100 rounded-[40px] rotate-3 scale-105 -z-10 transition-transform duration-500 hover:rotate-6"></div>
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white relative group bg-terracotta-50">
                  <video
                    src={AboutVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hidden md:block max-w-[280px] z-20 border border-terracotta-50 animate-float">
                <div className="flex gap-1 text-parlor-gold mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-lg font-medium text-[#2A2321] leading-snug">
                  "Elegance in every detail, perfection in every touch."
                </p>
                <p className="text-xs text-[#8C7B75] mt-3 uppercase tracking-wider font-semibold">
                  - Neha, Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="py-12 sm:py-20 bg-[#FDFBF7] relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-terracotta-50/50 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-white">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-black/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            <div className="grid grid-cols-2 gap-6 sm:gap-12 lg:gap-20 relative z-10">
              
              {/* Mission */}
              <div className="flex flex-col">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center mb-4 sm:mb-8 backdrop-blur-sm shadow-inner shrink-0">
                  <Target className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                  Our Mission
                </h3>
                <p className="text-white/90 text-[10px] sm:text-base leading-relaxed mb-4 sm:mb-8">
                  Empowering women through transformative beauty rituals,
                  delivering unparalleled results with certified organic products,
                  meticulous hygiene, and warm hospitality.
                </p>
                <ul className="space-y-2 sm:space-y-3 mt-auto">
                  {["Organic Products", "Meticulous Hygiene", "Expert Care"].map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-sm font-semibold tracking-wide"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white/80 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Vision */}
              <div className="flex flex-col">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center mb-4 sm:mb-8 backdrop-blur-sm shadow-inner shrink-0">
                  <Heart className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="font-serif text-xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                  Our Vision
                </h3>
                <p className="text-white/90 text-[10px] sm:text-base leading-relaxed mb-4 sm:mb-8">
                  Setting global benchmarks for luxury beauty and wellness,
                  consistently innovating while keeping personalized care and
                  genuine client satisfaction at the core.
                </p>
                <ul className="space-y-2 sm:space-y-3 mt-auto">
                  {[
                    "Global Standards",
                    "Continuous Innovation",
                    "Client First",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-sm font-semibold tracking-wide"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white/80 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet The Artisans */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-parlor-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-terracotta-600 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
              Our Experts
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A2321] tracking-tight mb-4">
              Meet our{" "}
              <span className="font-script text-terracotta-600 font-normal italic text-5xl sm:text-6xl">
                Artisans
              </span>
            </h2>
            <p className="text-[#6B5E59] text-base max-w-lg mx-auto">
              Skilled professionals dedicated to enhancing your look with years
              of specialized experience.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-8 lg:gap-12">
            {TEAM.map((staff, idx) => (
              <div key={idx} className="group">
                <div className="relative rounded-[12px] sm:rounded-[32px] overflow-hidden mb-2 sm:mb-6 aspect-[4/5] bg-terracotta-50">
                  <div className="absolute inset-0 bg-terracotta-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                  <img
                    src={staff.img}
                    alt={staff.name}
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = OfferModelImg; // Fallback image
                    }}
                  />
                </div>
                <div className="px-0 sm:px-2">
                  <h3 className="font-serif text-[10px] sm:text-2xl font-bold text-[#2A2321] mb-0.5 sm:mb-1 leading-tight">
                    {staff.name}
                  </h3>
                  <p className="text-[7px] sm:text-sm font-semibold text-terracotta-600 uppercase tracking-wider leading-tight">
                    {staff.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Process */}
      <section className="py-24 bg-[#69382C] text-white relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-terracotta-300 text-xs font-semibold uppercase tracking-[0.2em] block mb-4">
              The Shyvora Way
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Our 4-Step{" "}
              <span className="font-script text-terracotta-300 font-normal italic text-5xl sm:text-6xl">
                Experience
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#C87D65] to-transparent opacity-50"></div>

            {PROCESS.map((item, idx) => (
              <div
                key={idx}
                className="relative group text-center lg:text-left"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl bg-[#804233] border border-[#9A503C] flex items-center justify-center mb-4 sm:mb-6 group-hover:-translate-y-2 transition-transform duration-500 relative z-10 shadow-xl">
                  <span className="text-xl sm:text-3xl font-serif font-bold text-terracotta-300 group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                </div>
                <h4 className="font-serif text-sm sm:text-xl font-bold text-white mb-2 sm:mb-3 px-1 sm:px-0">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-sm text-terracotta-200 leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM CTA BANNER ("Experience Shyvora Luxury")                       */}
      {/* ========================================================================= */}
      <section className="py-8 md:py-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-[2rem] sm:rounded-[3rem] overflow-hidden text-white shadow-xl flex flex-col lg:flex-row items-stretch">
            
            {/* Image Section */}
            <div className="w-full lg:w-2/5 relative min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
              <img
                src={SalonInteriorImg}
                alt="Shyvora Luxury"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-left hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient blend to seamlessly merge with the right copy on desktop, and bottom on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#C87D65] via-[#C87D65]/40 lg:via-[#C87D65]/10 to-transparent lg:to-transparent" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-3/5 p-6 sm:p-10 lg:p-16 space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 bg-[#C87D65]">
              <div className="space-y-4 w-full">
                <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/15 text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase mx-auto lg:mx-0 backdrop-blur-sm">
                  <Sparkles size={14} />
                  <span>EXQUISITE PAMPERING</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Experience Shyvora Luxury
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Book your appointment with our senior beauticians and enjoy pampering designed exclusively for you.
                </p>
              </div>

              <div className="pt-2">
                <button
                  className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs sm:text-sm font-bold tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-md transition-all uppercase inline-flex items-center justify-center gap-2"
                >
                  <span>Book Your Session</span>
                  <Calendar size={15} />
                </button>
              </div>

              {/* Feature Badges in a Row */}
              <div className="flex flex-row justify-center lg:justify-start gap-4 sm:gap-8 pt-6 border-t border-white/20 w-full">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Clock size={16} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h5 className="font-bold text-white text-[10px] sm:text-sm leading-tight">Easy Booking</h5>
                    <p className="text-[9px] sm:text-xs text-white/80 hidden sm:block">
                      Quick & hassle-free
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Award size={16} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h5 className="font-bold text-white text-[10px] sm:text-sm leading-tight">Best Offers</h5>
                    <p className="text-[9px] sm:text-xs text-white/80 hidden sm:block">Exclusive deals</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                    <Heart size={16} />
                  </div>
                  <div className="text-center sm:text-left">
                    <h5 className="font-bold text-white text-[10px] sm:text-sm leading-tight">Expert Care</h5>
                    <p className="text-[9px] sm:text-xs text-white/80 hidden sm:block">
                      Professional touch
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
