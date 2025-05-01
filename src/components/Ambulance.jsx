import React from "react";
import { motion } from "framer-motion";
import { FaAmbulance } from "react-icons/fa";

export default function EmergencyContact() {
  const phoneNumber = "+91 9244784443";

  return (
    <div className="bg-black flex flex-col items-center py-10 px-2 font-sans">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-5xl md:text-7xl leading-tight text-center font-normal mb-24 select-none"
        style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
      >
        Emergency Contact
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center w-full"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#fffd10] rounded-lg flex flex-col items-center min-h-[120px] min-w-[340px] py-8 px-4 md:px-8 shadow-md cursor-pointer border-0 select-none outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
          style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
          onClick={() => { window.location.href = `tel:${phoneNumber}`; }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-black font-medium text-2xl md:text-2xl text-center leading-snug mb-1"
          >
            Ambulance Service
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl md:text-2xl font-medium text-center leading-snug flex items-center gap-2"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 0, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <FaAmbulance className="text-4xl" color='red' />
            </motion.div>
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
}
