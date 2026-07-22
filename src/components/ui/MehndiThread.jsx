import React, { useEffect, useRef, useState } from "react";

/* ---------------------------------------------------------------------
   Shyvora's signature motif: one continuous mehndi line, drawn in on
   scroll (stroke-dashoffset animating to 0 via IntersectionObserver),
   the way a henna cone lays down an unbroken line rather than stamping
   a finished pattern. Used sparingly as connective tissue between
   sections across pages — Home, Director's Message, About — so it
   reads as one thread running through the site, not a repeated sticker.

   variants:
     wave — the default horizontal divider
     coil — a tighter rhythm, good as a faint full-bleed background texture
     drop — a small closing flourish (paired with a signature, a card corner)
------------------------------------------------------------------------ */

function useDrawOnView(threshold = 0.35) {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, drawn];
}

const PATHS = {
  wave: "M4 40 C 60 4, 120 4, 160 40 C 190 68, 240 68, 270 38 C 292 16, 330 16, 356 40",
  coil: "M6 20 C 40 20, 40 60, 74 60 C 108 60, 108 20, 142 20 C 176 20, 176 60, 210 60 C 244 60, 244 20, 278 20",
  drop: "M4 8 C 30 8, 40 30, 30 46 C 20 62, -2 58, 4 40 C 8 30, 20 26, 28 34 M60 32 Q 160 4 260 32 T 356 32",
  /* vertical variant for column-splitting layouts (see About.jsx mission/vision) */
  stem: "M20 4 C 4 24, 36 34, 20 54 C 4 74, 36 84, 20 104 C 4 124, 36 134, 20 154",
};

export default function MehndiThread({
  variant = "wave",
  className = "",
  tone = "text-parlor-gold",
  delay = 0,
}) {
  const [ref, drawn] = useDrawOnView();
  const isVertical = variant === "stem";

  return (
    <svg
      ref={ref}
      viewBox={isVertical ? "0 0 40 160" : "0 0 360 80"}
      fill="none"
      className={`${className} ${tone}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={PATHS[variant]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        pathLength="1"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: drawn ? 0 : 1,
          transition: `stroke-dashoffset 1.4s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s`,
        }}
      />
      <circle
        cx={isVertical ? 20 : 356}
        cy={
          isVertical
            ? 154
            : variant === "coil"
              ? 20
              : variant === "drop"
                ? 32
                : 40
        }
        r="2.5"
        fill="currentColor"
        style={{
          opacity: drawn ? 1 : 0,
          transition: `opacity 0.3s ease ${delay + 1.2}s`,
        }}
      />
    </svg>
  );
}

export function SectionDivider({
  tone = "text-parlor-gold/40",
  variant = "wave",
}) {
  return (
    <div className="flex justify-center py-2 bg-inherit">
      <MehndiThread variant={variant} tone={tone} className="w-40 h-8" />
    </div>
  );
}
