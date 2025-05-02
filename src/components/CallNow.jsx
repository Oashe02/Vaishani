import React, { useState } from 'react';
import { Phone, X, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919244784443"; // Updated phone number
  
  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-black to-gray-900 border border-yellow-400 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_25px_rgba(255,215,0,0.4)]"
        style={{ boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.5)" }}
        aria-label="Contact Us"
      >
        <span className="absolute w-full h-full rounded-full animate-ping opacity-30 bg-amber-400 text-yellow-400"></span>
        <Phone className="text-yellow-400 w-6 h-6 z-10" />
      </button>

      {/* Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className="bg-white/95 rounded-2xl w-80 overflow-hidden shadow-xl">
            {/* Header */}
            <div className="relative px-5 py-4 flex justify-between items-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-400"></div>
              <h2 className="text-black font-bold text-lg">Get in touch</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-amber-500 transition-colors rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contact options */}
            <div className="p-5 space-y-3">
              {/* Call button */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-between p-4 rounded-xl bg-gray-200 hover:bg-gray-100 transition-all duration-200 group border border-black/40"
              >
                <div className="flex items-center">
                  <div className="bg-gradient-to-tr from-amber-500 to-yellow-400 p-3 rounded-full mr-3">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Call Now</p>
                    <p className="text-sm text-gray-600">{phoneNumber}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-amber-500" />
              </a>

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-gray-200 hover:bg-gray-100 transition-all duration-200 group border border-black/40"
              >
                <div className="flex items-center">
                  <div className="bg-green-500 p-3 rounded-full mr-3">
                    <FaWhatsapp className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-black">WhatsApp</p>
                    <p className="text-sm text-gray-600">{phoneNumber}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
              </a>

              <div className="pt-2 flex justify-center">
                <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}