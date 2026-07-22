import React from "react";
import { Quote, Sparkles, Gem, Heart, Flower2, HeartHandshake } from "lucide-react";
import BottomCTA from "../components/layout/BottomCTA";
import Director from "../assets/directors-message/director.webp";

const PRINCIPLES = [
  {
    icon: Flower2,
    title: "Authenticity",
    desc: "We celebrate your natural features and work to enhance what makes you uniquely you.",
  },
  {
    icon: Gem,
    title: "Excellence",
    desc: "We never compromise on the quality of our products or the continuous education of our staff.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    desc: "Every interaction is handled with kindness, patience, and complete discretion.",
  },
];

export default function DirectorMessage() {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] text-[#3A3331] font-sans selection:bg-[#C87D65] selection:text-white pt-24 md:pt-28">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 md:py-24 bg-[#F9ECE7] border-b border-gray-200/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E7B4A3] bg-white text-[#C87D65] text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles size={13} />
            <span>FOUNDER'S VISION</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A2321] tracking-tight">
            Director's Message
          </h1>
          <p className="text-[#6B5E59] text-base sm:text-lg max-w-xl mx-auto mt-3 font-normal">
            A personal note from our founder & creative director.
          </p>
        </div>
      </section>

      {/* 2. Director Portrait & Quote */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative z-10 w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={Director}
                  alt="Mayra Kapoor, Founder and Creative Director of SHYVORA"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#F9ECE7] rounded-full -z-0" />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Quote className="w-12 h-12 text-[#C87D65] opacity-60" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2A2321] font-bold leading-tight">
                "Beauty is an expression of self-love. It is our privilege to help you reveal it."
              </h2>
              <div>
                <p className="font-serif text-2xl text-[#C87D65] font-bold">Mayra Kapoor</p>
                <p className="text-xs text-[#8C7B75] uppercase tracking-widest mt-1 font-semibold">
                  Founder & Creative Director
                </p>
              </div>

              <div className="pt-4 text-[#6B5E59] text-sm sm:text-base leading-relaxed space-y-4 border-t border-gray-100">
                <p className="first-letter:font-serif first-letter:text-5xl first-letter:text-[#C87D65] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                  Welcome to SHYVORA Beauty Parlour. When I first opened our doors over a decade ago, my goal was entirely centered around a single concept: creating a sanctuary where the chaos of the outside world melted away the moment you stepped inside.
                </p>
                <p>
                  Having learned from master aestheticians worldwide, I realized that the best beauty treatments weren't just about the physical result — they were about how the client felt during and after the process. True luxury is feeling completely cared for.
                </p>
                <p>
                  Every detail of our parlour — from our organic product formulations to our serene ambient music — has been hand-selected to ensure your experience is nothing short of extraordinary.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Principles We Stand By */}
      <section className="py-16 md:py-24 bg-[#FDFBF7] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C87D65] text-xs font-semibold uppercase tracking-widest block mb-1">
            WHAT GUIDES US
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2321] tracking-tight mb-12">
            The Principles We Stand By
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRINCIPLES.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9ECE7] text-[#C87D65] flex items-center justify-center mx-auto">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2A2321]">{p.title}</h3>
                  <p className="text-xs text-[#6B5E59] leading-relaxed max-w-xs mx-auto">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Signature & Gratitude */}
      <section className="py-16 bg-white text-center border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-[#6B5E59] text-sm mb-4">With deepest gratitude,</p>
          <div className="font-script text-5xl text-[#C87D65] mb-2">Mayra Kapoor</div>
          <p className="text-xs text-[#8C7B75] uppercase tracking-widest">SHYVORA BEAUTY PARLOUR</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA 
        title="Schedule a Consultation" 
        subtitle="Let our team help you realize your personal beauty goals."
        buttonText="BOOK APPOINTMENT"
      />
    </div>
  );
}