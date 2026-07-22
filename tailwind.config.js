/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#FDF8F6',
          100: '#F9ECE7',
          200: '#F3D5CA',
          300: '#E7B4A3',
          400: '#D78D76',
          500: '#C87D65', // Main terracotta shade matching image
          600: '#B6664F',
          700: '#9A503C',
          800: '#804233',
          900: '#69382C',
        },
        parlor: {
          blush: "#FBF7F4", // Warm cream background
          cream: "#FDFBF7", 
          gold: "#D4AF37",
          burgundy: "#C87D65", // Updated to matches terracotta accent
          offwhite: "#FFFFFF",
          dark: "#2A2321", // Deep warm charcoal
          accent: "#C87D65",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "sans-serif"],
        serif: ['"Cormorant Garamond"', '"Playfair Display"', "serif"],
        script: ['"Alex Brush"', '"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};

