import { useState } from "react";
import VaishnaviLogo from "../assets/VaishnaviTours.png"; // Adjust the path as per your project structure

const YatraBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsMinimized(false);
  };

  const toggleMinimize = (e) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const minimizeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  );

  return (
    <div className="font-sans">
      {/* Floating Chat Toggle Button */}
      <div className="fixed bottom-8 right-5 z-50 flex flex-col items-end">
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-gradient-to-r from-black to-gray-900 border border-yellow-400 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_25px_rgba(255,215,0,0.4)]"
          aria-label="Toggle Yatra Taxi Bot"
        >
          <img
            src={VaishnaviLogo}
            alt="Vaishnavi Tour Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-5 sm:w-96 w-80 z-40 overflow-hidden rounded-2xl backdrop-blur-xl border border-gray-200/10 shadow-2xl transition-all duration-500"
          style={{
            height: isMinimized ? "64px" : "600px",
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Header */}
          <div
            className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-4 flex justify-between items-center cursor-pointer"
            onClick={toggleMinimize}
            style={{
              borderBottom: isMinimized
                ? "none"
                : "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex items-center">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center mr-3 shadow-inner">
                <img
                  src={VaishnaviLogo}
                  alt="Vaishnavi Tour Logo"
                  className="w-7 h-7 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wide">
                  VAISHNAVI TOURS
                </h3>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  <span className="text-xs text-gray-300">
                    Premium Taxi Service
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!isMinimized && (
                <button
                  onClick={toggleMinimize}
                  className="text-gray-300 hover:text-white"
                >
                  {minimizeIcon}
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleChat();
                }}
                className="text-gray-300 hover:text-white"
              >
                {closeIcon}
              </button>
            </div>
          </div>

          {/* Iframe content */}
          {!isMinimized && (
            <div
              className="h-full w-full bg-gray-50"
              style={{ height: "calc(100% - 64px)" }}
            >
              <iframe
                src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/27/15/20241227155545-410W8O1T.json"
                className="w-full h-full border-none rounded-b-2xl"
                title="Yatra Taxi Bot"
                loading="lazy"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default YatraBot;
