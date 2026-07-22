import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar } from "lucide-react";

const InstagramIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import AppointmentModal from "../ui/AppointmentModal";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setProgress(15);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 100);

    const completeLoading = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setProgress(0), 300);
      }, 300);
    };

    if (document.readyState === "complete") {
      const timeout = setTimeout(completeLoading, 400); // 0.4s to match delay + visual completion
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    } else {
      window.addEventListener("load", completeLoading);
      return () => {
        clearInterval(interval);
        window.removeEventListener("load", completeLoading);
      };
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "GALLERY", path: "/clients" },
    { name: "PRICING", path: "/membership" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        {/* Top Announcement Bar / Special Offer */}
        <div className="bg-[#C87D65] text-white py-1.5 px-4 md:px-8 text-xs md:text-sm font-medium tracking-wide">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-0">
            {/* Social Media Icons */}
            <div className="hidden md:flex items-center gap-4 text-white/90">
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={14} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={14} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>

            {/* Offer Message */}
            <div className="flex items-center gap-1.5 text-[11px] md:text-xs">
              <span className="text-white/90">✨</span>
              <span>Special Offer: Get 20% Off On Your First Appointment!</span>
            </div>

            {/* Action Link */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex items-center gap-1 text-[11px] md:text-xs font-semibold hover:underline opacity-95 hover:opacity-100 transition-opacity"
            >
              Book Now &rarr;
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100 ${
            isScrolled ? "shadow-md py-2.5" : "py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full border border-[#C87D65]/40 flex items-center justify-center p-1 bg-[#FDF8F6]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-[#C87D65]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  {/* Decorative circle outline */}
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#C87D65"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#C87D65"
                    strokeWidth="1"
                  />
                  {/* Woman profile & Stylized N line art */}
                  <path
                    d="M 32 72 C 32 58, 42 46, 50 46 C 58 46, 64 54, 64 64 C 64 72, 60 76, 56 80"
                    stroke="#C87D65"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 48 24 C 42 24, 38 28, 38 34 C 38 42, 48 48, 50 54 C 52 48, 62 42, 62 34 C 62 28, 58 24, 52 24 C 48 24, 48 28, 48 28"
                    stroke="#C87D65"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 34 32 L 34 68 M 34 32 L 66 68 M 66 32 L 66 68"
                    stroke="#C87D65"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-[0.2em] text-[#2A2321] leading-none">
                  SHYVORA
                </span>
                <span className="text-[9px] md:text-[10px] font-sans tracking-[0.25em] text-[#8C7B75] uppercase mt-1 leading-none font-medium">
                  BEAUTY PARLOUR
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  location.pathname === link.path ||
                  (link.path === "/" && location.pathname === "/");
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-[#C87D65]"
                        : "text-[#3A3331] hover:text-[#C87D65]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C87D65] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Book Appointment CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#C87D65] hover:bg-[#B6664F] text-white text-xs md:text-[13px] font-semibold tracking-wider px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 uppercase"
              >
                <span>BOOK APPOINTMENT</span>
                <Calendar size={15} className="opacity-90" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-[#2A2321] hover:text-[#C87D65] focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 animate-fadeIn">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`text-sm font-semibold tracking-[0.15em] uppercase py-2 border-b border-gray-100 ${
                        isActive ? "text-[#C87D65]" : "text-[#3A3331]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#C87D65] text-white py-3 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md"
                >
                  <span>BOOK APPOINTMENT</span>
                  <Calendar size={16} />
                </button>
              </div>
            </div>
          )}
        </nav>
        
        {/* Loading Indicator */}
        <div 
          className={`absolute bottom-0 left-0 h-[2px] bg-[#C87D65] shadow-[0_0_12px_2px_rgba(200,125,101,0.8)] z-50 transition-all ease-out ${
            isLoading ? 'opacity-100 duration-200' : 'opacity-0 duration-500'
          }`}
          style={{ width: `${progress}%` }}
        />
      </header>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
