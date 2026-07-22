import React from 'react';

const TICKER_ITEMS = [
  'Bridal Makeup', 'Hair Styling', 'Facials', 'Mehndi', 'Hot Stone Massage',
  'Skin Brightening', 'Draping', 'Manicure & Pedicure', 'Hair Spa',
];

export default function Ticker() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker-scroll 32s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
      `}</style>
      <div className="bg-parlor-burgundy overflow-hidden h-9 flex items-center shadow-md">
        <div className="flex whitespace-nowrap ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span key={idx} className="flex items-center text-pink-100/80 text-sm uppercase tracking-widest px-4">
              {item}
              <span className="ml-6 w-1 h-1 rounded-full bg-parlor-gold"></span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
