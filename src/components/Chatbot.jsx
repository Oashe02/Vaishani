import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Chat Toggle Button */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="fixed bottom-5 right-5 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer z-50"
      >
        <i className="fas fa-robot" />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-5 w-80 h-[550px] bg-white border border-gray-200 rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            <iframe
              src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/27/15/20241227155545-410W8O1T.json"
              className="w-full h-full"
              title="Chat Window"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
