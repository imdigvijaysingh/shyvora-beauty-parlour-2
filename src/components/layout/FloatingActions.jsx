import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageSquare, X, User, Bot, Sparkles } from 'lucide-react';

const PREDEFINED_QUESTIONS = [
  "What are your opening hours?",
  "How do I book an appointment?",
  "Do you offer bridal packages?",
  "Where are you located?",
  "What is the cancellation policy?"
];

const ANSWERS = {
  "What are your opening hours?": "We are open Monday to Friday from 9 AM to 8 PM, and Saturday from 9 AM to 6 PM. We are closed on Sundays.",
  "How do I book an appointment?": "You can book an appointment by clicking the 'Book Appointment' button at the top of the page, or by calling us directly.",
  "Do you offer bridal packages?": "Yes, we offer comprehensive bridal packages that include hair, makeup, and pre-wedding spa treatments. Please contact us for a consultation.",
  "Where are you located?": "We are located at 123 Elegance Boulevard, Fashion District, NY 10001.",
  "What is the cancellation policy?": "We kindly request at least 24 hours notice for cancellations. Late cancellations may incur a 50% fee."
};

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! Welcome to Shyvora. How can I assist you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isChatOpen && chatRef.current && !chatRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, currentTypingText, isChatOpen]);

  const handleQuestionClick = (question) => {
    if (isTyping) return;
    
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    setIsTyping(true);
    setCurrentTypingText('');

    const answer = ANSWERS[question] || "I'm sorry, I don't have information on that right now.";
    
    let index = 0;
    const typingInterval = setInterval(() => {
      setCurrentTypingText(answer.slice(0, index + 1));
      index++;
      if (index === answer.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
        setMessages(prev => [...prev, { type: 'bot', text: answer }]);
        setCurrentTypingText('');
      }
    }, 30);
  };

  return (
    <>
      {/* Right side fixed contact icons - Unified Bouncing Container */}
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 flex flex-col gap-4 z-30 animate-[bounce_3s_infinite]">
        
        {/* Chatbot Button */}
        <button
          ref={buttonRef}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-12 h-12 md:w-14 md:h-14 bg-parlor-burgundy text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(128,0,32,0.5)] hover:shadow-[0_0_25px_rgba(128,0,32,0.8)] hover:scale-110 transition-all duration-300 group"
          aria-label="Open Chat"
        >
          {isChatOpen ? <X size={28} className="w-6 h-6 md:w-7 md:h-7" /> : <MessageSquare size={28} className="group-hover:animate-pulse drop-shadow-md w-6 h-6 md:w-7 md:h-7" />}
        </button>

        {/* Phone Icon */}
        <a 
          href="tel:+15551234567" 
          className="w-12 h-12 md:w-14 md:h-14 bg-white text-parlor-burgundy shadow-lg rounded-full flex items-center justify-center hover:shadow-[0_0_25px_rgba(128,0,32,0.4)] hover:scale-110 transition-all duration-300 group relative border border-gray-100"
          aria-label="Call Us"
        >
          <Phone size={24} className="drop-shadow-sm w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute right-14 md:right-16 bg-white text-gray-800 text-sm py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-medium border border-gray-100">
            +1 (555) 123-4567
          </span>
        </a>

        {/* WhatsApp Icon */}
        <a 
          href="https://wa.me/15551234567" 
          target="_blank" 
          rel="noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] hover:scale-110 transition-all duration-300 group relative"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-current drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          <span className="absolute right-14 md:right-16 bg-white text-gray-800 text-sm py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-medium border border-gray-100">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div ref={chatRef} className="fixed bottom-[200px] md:bottom-[230px] right-4 md:right-6 w-[320px] md:w-[350px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden z-50 slide-up max-h-[500px]">
          {/* Header */}
          <div className="bg-parlor-burgundy p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shrink-0">
              <Sparkles className="text-parlor-gold w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-serif font-medium text-lg leading-tight">Shyvora Assistant</h3>
              <p className="text-pink-100 text-xs">Usually replies instantly</p>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="ml-auto text-white hover:text-pink-200 p-1 transition-colors shrink-0"
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === 'user' ? 'bg-parlor-gold text-white' : 'bg-white shadow-sm text-parlor-burgundy'}`}>
                  {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.type === 'user' ? 'bg-parlor-burgundy text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm text-parlor-burgundy flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-3 rounded-2xl bg-white text-gray-800 rounded-tl-none shadow-sm text-sm">
                  {currentTypingText}<span className="animate-pulse ml-1 inline-block w-1 h-4 bg-parlor-gold align-middle"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div className="p-4 bg-white border-t border-gray-100">
            <p className="text-xs text-gray-400 mb-3 text-center uppercase tracking-wider font-medium">Frequently Asked</p>
            <div className="flex flex-col gap-2">
              {PREDEFINED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(q)}
                  disabled={isTyping}
                  className="text-left text-sm p-2.5 rounded-lg border border-gray-200 hover:border-parlor-burgundy hover:bg-parlor-blush text-gray-700 hover:text-parlor-burgundy transition-colors disabled:opacity-50 disabled:pointer-events-none"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
