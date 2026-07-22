import React, { useState } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import AppointmentModal from '../ui/AppointmentModal';

export default function BottomCTA({ 
  title = "Ready To Pamper Yourself?", 
  subtitle = "Book your appointment today and let us bring out the best in you.", 
  buttonText = "BOOK APPOINTMENT" 
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-12 md:py-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#C87D65] rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-3xl mx-auto space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                <Sparkles size={13} />
                <span>EXQUISITE PAMPERING</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
                {subtitle}
              </p>
              <div className="pt-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#C87D65] hover:bg-[#FDFBF7] text-xs sm:text-sm font-bold tracking-wider px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all uppercase inline-flex items-center gap-2"
                >
                  <span>{buttonText}</span>
                  <Calendar size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
