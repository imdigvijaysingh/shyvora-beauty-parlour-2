import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  ChevronRight,
  Gem,
  UserCheck,
  ShieldCheck,
  Sparkles,
  Heart,
  Smile,
  CheckCircle2,
  Award,
  Clock,
  Star,
} from "lucide-react";
import AppointmentModal from "../components/ui/AppointmentModal";

// Assets
import HeroModelImg from "../assets/hero_model.webp";
import HeroModelMobileImg from "../assets/hero_model-mobile.webp";
import OfferModelImg from "../assets/home/offer_model.webp";
import SalonInteriorImg from "../assets/home/salon_interior.webp";
import BridalMakeupImage from "../assets/home/bridal-makeup.webp";
import FaceCleansingImage from "../assets/home/face-cleansing.webp";
import BodyMassageImage from "../assets/home/body-massage.webp";
import HairStylingImage from "../assets/home/hair-styling.webp";

// 1. SERVICES DATA
const SERVICES = [
  {
    id: 1,
    title: "Hair Care",
    description:
      "Haircuts, styling, coloring, and treatments for healthy, beautiful hair.",
    image: HairStylingImage,
    link: "/#services",
  },
  {
    id: 2,
    title: "Skin Care",
    description:
      "Facials, clean-ups, and advanced skin treatments for glowing skin.",
    image: FaceCleansingImage,
    link: "/#services",
  },
  {
    id: 3,
    title: "Bridal Makeup",
    description: "Make your big day even more special with our bridal makeup.",
    image: BridalMakeupImage,
    link: "/#services",
  },
  {
    id: 4,
    title: "Nail Art",
    description: "Manicures, pedicures, and creative nail art designs.",
    image: BodyMassageImage,
    link: "/#services",
  },
];

// 2. WHY CHOOSE US FEATURES
const WHY_CHOOSE_US = [
  {
    id: 1,
    title: "Experienced Professionals",
    description:
      "Our team of certified beauticians ensures you get the best care.",
    icon: UserCheck,
  },
  {
    id: 2,
    title: "Premium Quality Products",
    description: "We use only top-quality, skin-friendly products.",
    icon: Gem,
  },
  {
    id: 3,
    title: "Hygiene & Safety",
    description: "We follow strict hygiene protocols for your safety.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "Your satisfaction is our top priority.",
    icon: Smile,
  },
];

// 3. GALLERY DATA & CATEGORIES
const GALLERY_CATEGORIES = ["ALL", "HAIR", "SKIN", "BODY", "MAKEUP", "NAILS"];

const GALLERY_IMAGES = [
  { id: 1, category: "HAIR", image: HairStylingImage, title: "Hair Styling" },
  {
    id: 2,
    category: "MAKEUP",
    image: BridalMakeupImage,
    title: "Bridal Glamour",
  },
  { id: 3, category: "SKIN", image: FaceCleansingImage, title: "Hydra Facial" },
  { id: 4, category: "MAKEUP", image: OfferModelImg, title: "Evening Makeup" },
  { id: 5, category: "NAILS", image: BodyMassageImage, title: "Spa & Nails" },
  { id: 6, category: "BODY", image: HeroModelImg, title: "Aesthetic Care" },
];

// 4. TESTIMONIALS DATA
const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The best parlour experience I've ever had! The staff is so friendly and professional.",
  },
  {
    id: 2,
    name: "Anjali Mehta",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I loved my haircut and the skin treatment. Highly recommended!",
  },
  {
    id: 3,
    name: "Neha Verma",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Amazing bridal makeup! They made my special day even more perfect.",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState("ALL");

  const filteredGallery =
    activeGalleryTab === "ALL"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeGalleryTab);

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#3A3331] font-sans selection:bg-[#C87D65] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[65vh] min-h-[480px] sm:min-h-0 sm:h-auto pt-24 sm:pt-36 pb-6 sm:pb-24 overflow-hidden bg-[#FDFBF7] flex items-center sm:block">
        {/* Mobile Background Image */}
        <div className="absolute inset-0 z-0 lg:hidden">
          <img
            src={HeroModelMobileImg}
            alt="Background Model"
            className="w-full h-full object-cover object-[75%_20%] opacity-90"
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] from-[10%] via-[#FDFBF7]/20 via-[60%] to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-[#FDFBF7]/30"></div>
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5E6DF]/40 rounded-full blur-3xl pointer-events-none -z-10 hidden lg:block" />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 z-10 space-y-3 sm:space-y-4 text-left w-full sm:w-[75%] lg:w-full">
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#E7B4A3] bg-[#FDF8F6] text-[#C87D65] text-xs font-semibold tracking-widest uppercase">
                <Sparkles size={13} />
                <span>BEAUTY & CONFIDENCE</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-6xl lg:text-[4.75rem] leading-[1.08] text-[#2A2321] font-medium tracking-tight">
                Reveal Your <br />
                <span className="font-serif">Natural </span>
                <span className="font-script text-[#7C4E3F] text-4xl sm:text-7xl lg:text-[6.25rem] font-normal inline-block ml-1 hover:scale-105 transition-transform duration-300">
                  Beauty
                </span>
              </h1>

              <p className="text-[#6B5E59] text-[11px] sm:text-lg max-w-[65%] sm:max-w-md leading-relaxed font-normal mt-1 sm:mt-0">
                Experience premium beauty services designed to bring out the
                most confident version of you.
              </p>

              <div className="pt-14 sm:pt-4 flex flex-row items-center gap-2 sm:gap-3 w-full">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 sm:flex-none justify-center bg-[#C87D65] hover:bg-[#B6664F] text-white text-[9px] sm:text-sm font-bold tracking-wider px-2 py-3 sm:px-6 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-1 sm:gap-2.5 uppercase text-center"
                >
                  <span>BOOK APPOINTMENT</span>
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>

                <a
                  href="#services"
                  className="flex-1 sm:flex-none justify-center border border-[#C87D65] text-[#C87D65] hover:bg-[#C87D65]/10 text-[9px] sm:text-sm font-bold tracking-wider px-2 py-3 sm:px-6 sm:py-3.5 rounded-lg transition-all flex items-center gap-1 sm:gap-2 uppercase text-center"
                >
                  <span>EXPLORE SERVICES</span>
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </div>
              {/* 3 Badges */}
              <div className="pt-4 sm:pt-8 border-t border-[#E7B4A3]/30 grid grid-cols-3 gap-2 sm:gap-6 w-full mt-4 sm:mt-0">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 text-center sm:text-left">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#F9ECE7] border border-[#E7B4A3]/60 flex items-center justify-center text-[#C87D65] shrink-0">
                    <Gem className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] sm:text-xs font-bold text-[#2A2321] uppercase tracking-wider leading-tight">
                      PREMIUM <br className="sm:hidden" /> PRODUCTS
                    </h4>
                    <p className="hidden sm:block text-[10px] sm:text-xs text-[#8C7B75] mt-0.5 leading-tight">
                      Top quality products
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 text-center sm:text-left">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#F9ECE7] border border-[#E7B4A3]/60 flex items-center justify-center text-[#C87D65] shrink-0">
                    <UserCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] sm:text-xs font-bold text-[#2A2321] uppercase tracking-wider leading-tight">
                      EXPERT <br className="sm:hidden" /> STAFF
                    </h4>
                    <p className="hidden sm:block text-[10px] sm:text-xs text-[#8C7B75] mt-0.5 leading-tight">
                      Trained professionals
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 text-center sm:text-left">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#F9ECE7] border border-[#E7B4A3]/60 flex items-center justify-center text-[#C87D65] shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] sm:text-xs font-bold text-[#2A2321] uppercase tracking-wider leading-tight">
                      100% <br className="sm:hidden" /> HYGIENE
                    </h4>
                    <p className="hidden sm:block text-[10px] sm:text-xs text-[#8C7B75] mt-0.5 leading-tight">
                      Clean & safe environment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="hidden lg:flex lg:col-span-6 relative justify-center items-center">
              <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border-[12px] border-[#C87D65]/25 pointer-events-none -right-4 top-1/2 -translate-y-1/2 rotate-[25deg]" />
              <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#F9ECE7] blur-2xl pointer-events-none" />

              <svg
                className="absolute left-0 top-1/4 w-32 h-48 sm:w-44 sm:h-64 text-[#C87D65]/40 pointer-events-none z-20"
                viewBox="0 0 100 150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M 30 140 C 35 100, 45 60, 75 20" />
                <path d="M 45 100 C 30 95, 20 85, 25 75 C 32 68, 42 78, 47 90" />
                <path d="M 52 75 C 65 65, 75 55, 68 45 C 60 40, 52 52, 53 68" />
              </svg>

              <div className="relative z-10 w-full max-w-[460px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80">
                <img
                  src={HeroModelImg}
                  alt="Reveal Your Natural Beauty"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR PREMIUM SERVICES SECTION                                          */}
      {/* ========================================================================= */}
      <section
        id="services"
        className="pt-6 pb-12 sm:py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2321] tracking-tight mt-1">
              Our Premium Services
            </h2>
            <p className="text-[#6B5E59] text-sm sm:text-base mt-2 font-normal">
              Discover our wide range of beauty services tailored just for you
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer bg-[#FDFBF7] rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 p-2.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-28 sm:h-56 overflow-hidden rounded-lg sm:rounded-xl mb-2 sm:mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-sm sm:text-xl font-bold text-[#2A2321] group-hover:text-[#C87D65] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#6B5E59] text-[9px] sm:text-xs mt-1 sm:mt-2 leading-tight sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
                    {service.description}
                  </p>
                </div>

                <div className="mt-2 sm:mt-4 pt-2 sm:pt-3 flex items-center gap-1 text-[9px] sm:text-xs font-semibold text-[#C87D65] uppercase tracking-wider">
                  <span>EXPLORE</span>
                  <ChevronRight className="transform group-hover:translate-x-1 transition-transform w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SPECIAL OFFER BANNER (20% OFF)                                         */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-2xl sm:rounded-3xl overflow-hidden text-white shadow-xl flex flex-col lg:flex-row items-stretch">
            {/* Image Section */}
            <div className="w-full lg:w-2/5 relative min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
              <img
                src={OfferModelImg}
                alt="Special Offer - 20% Off"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-top hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient blend to seamlessly merge with the right copy on desktop, and bottom on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#C87D65] via-[#C87D65]/40 lg:via-[#C87D65]/10 to-transparent lg:to-transparent" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-3/5 p-6 sm:p-10 lg:p-16 space-y-4 lg:space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 bg-[#C87D65]">
              <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/15 text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                <Sparkles size={14} />
                <span>SPECIAL OFFER</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                Get 20% Off <br className="hidden lg:block" /> On Your First Visit!
              </h2>

              <p className="text-white/90 text-sm lg:text-base max-w-md leading-relaxed">
                Pamper yourself with our premium services and enjoy an exclusive
                discount on your first appointment.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs sm:text-sm font-bold tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all uppercase"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE US SECTION                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7B4A3] bg-[#FDF8F6] text-[#C87D65] text-xs font-semibold tracking-widest uppercase">
              <Sparkles size={13} />
              <span>WHY CHOOSE US</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2A2321] tracking-tight leading-tight">
              Beauty That <br className="sm:hidden" />
              <span className="font-script text-[#C87D65] text-5xl sm:text-6xl font-normal">
                Speaks For Itself
              </span>
            </h2>

            <p className="text-[#6B5E59] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              We are dedicated to providing exceptional beauty services with a
              focus on quality, hygiene, and customer satisfaction.
            </p>

            {/* 4 Features List */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-4 sm:pt-8 w-full">
              {WHY_CHOOSE_US.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-[#FDFBF7] border border-gray-100 aspect-square hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#F9ECE7] text-[#C87D65] flex items-center justify-center shrink-0 mb-1 sm:mb-2">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm lg:text-base font-bold text-[#2A2321] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#8C7B75] mt-1.5 sm:mt-2 leading-tight line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 sm:pt-10 w-full flex justify-center">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#C87D65] text-white hover:bg-[#B6664F] shadow-md hover:shadow-lg text-xs sm:text-sm font-semibold tracking-wider px-8 py-3.5 rounded-lg transition-all uppercase"
              >
                <span>ABOUT US</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GALLERY SECTION ("Look Beautiful, Feel Beautiful")                    */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#C87D65] text-xs font-semibold uppercase tracking-widest block mb-1">
              GALLERY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2321] tracking-tight">
              Look Beautiful, Feel Beautiful
            </h2>
          </div>

          {/* 2 Image Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {GALLERY_IMAGES.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="group relative h-40 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-[#C87D65] hover:bg-[#B6664F] text-white text-[10px] sm:text-sm font-semibold tracking-wider px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg shadow-md transition-all uppercase"
            >
              <span>SEE ALL GALLERY IMAGES</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TESTIMONIALS SECTION ("Trusted By Hundreds Of Happy Clients")          */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C87D65] text-xs font-semibold uppercase tracking-widest block mb-1">
              WHAT OUR CLIENTS SAY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2A2321] tracking-tight">
              Trusted By Hundreds Of Happy Clients
            </h2>
            <div className="text-[#C87D65] text-4xl font-serif mt-2 text-left">
              “
            </div>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-[#f7ebd2] p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-[#C87D65] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-[#5C524E] text-xs sm:text-sm leading-relaxed font-normal italic">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-2 pt-4 border-t border-gray-200/60">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-md font-bold text-[#2A2321]">
                      {review.name}
                    </h4>
                    <span className="text-xs text-[#C87D65] font-medium">
                      Verified Client
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C87D65]" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
            <span className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM CTA BANNER ("Ready To Pamper Yourself?")                       */}
      {/* ========================================================================= */}
      <section className="py-8 md:py-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-2xl sm:rounded-3xl overflow-hidden text-white shadow-xl flex flex-col lg:flex-row items-stretch">
            
            {/* Image Section */}
            <div className="w-full lg:w-2/5 relative min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
              <img
                src={SalonInteriorImg}
                alt="Pamper Yourself"
                className="absolute inset-0 w-full h-full object-cover object-center lg:object-left hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient blend to seamlessly merge with the right copy on desktop, and bottom on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#C87D65] via-[#C87D65]/40 lg:via-[#C87D65]/10 to-transparent lg:to-transparent" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-3/5 p-6 sm:p-10 lg:p-16 space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 bg-[#C87D65]">
              <div className="space-y-4 w-full">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Ready To Pamper Yourself?
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Book your appointment today and let us bring out the best in you.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs sm:text-sm font-bold tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-md transition-all uppercase inline-flex items-center justify-center gap-2"
                >
                  <span>BOOK APPOINTMENT</span>
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

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
