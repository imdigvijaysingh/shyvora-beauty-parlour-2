import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';

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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! Welcome to Shyvora. How can I assist you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, currentTypingText, isOpen]);

  const handleQuestionClick = (question) => {
    if (isTyping) return;
    
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: question }]);
    setIsTyping(true);
    setCurrentTypingText('');

    const answer = ANSWERS[question] || "I'm sorry, I don't have information on that right now.";
    
    // Simulate typing effect
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
    }, 30); // Typing speed
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 md:left-6 bottom-[136px] md:bottom-[164px] w-12 h-12 md:w-14 md:h-14 bg-parlor-burgundy text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(128,0,32,0.5)] hover:shadow-[0_0_25px_rgba(128,0,32,0.8)] hover:scale-110 transition-all duration-300 z-30 group animate-[bounce_3s_infinite]"
        aria-label="Open Chat"
      >
        {isOpen ? <X size={28} className="w-6 h-6 md:w-7 md:h-7" /> : <MessageSquare size={28} className="group-hover:animate-pulse drop-shadow-md w-6 h-6 md:w-7 md:h-7" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-[190px] md:bottom-[230px] left-4 md:left-6 w-[320px] md:w-[350px] bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-gray-100 flex flex-col overflow-hidden z-50 slide-up max-h-[500px]">
          {/* Header */}
          <div className="bg-parlor-burgundy p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="text-parlor-gold w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-serif font-medium text-lg">Shyvora Assistant</h3>
              <p className="text-pink-100 text-xs">Usually replies instantly</p>
            </div>
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
