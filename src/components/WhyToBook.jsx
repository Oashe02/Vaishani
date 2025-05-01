import React from "react";
import { motion } from "framer-motion";
import supportImg from '../assets/24-hours-support.png';
import bestPrice from '../assets/best-price.png';
import delivery from '../assets/delivery.png';
import userFriendly from '../assets/user-friendly.png';

const features = [
  {
    imgAlt: "Best Price Guaranteed",
    imgSrc: bestPrice,
    title: "Best Price Guaranteed",
  },
  {
    imgAlt: "24/7 Service Availability",
    imgSrc: supportImg,
    title: "24/7 Service Availability",
  },
  {
    imgAlt: "We Pick From Home",
    imgSrc: delivery,
    title: "We Pick From Home",
  },
  {
    imgAlt: "Easy Booking",
    imgSrc: userFriendly,
    title: "Easy Booking",
  },
];

export default function WhyBookUs() {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center py-10 px-4 font-sans">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-4xl md:text-6xl text-center font-medium mb-14 select-none"
        style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
      >
        Why to Book Us?
      </motion.h2>

      {/* Vertical Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "calc(100%-180px)" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-40 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 z-0"
      />

      <div className="relative w-full flex flex-col gap-16 max-w-4xl z-10">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          >
            {/* Dot */}
            {index !== 0 && (
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.7 }}
                className="absolute top-[-28px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full border-2 border-black z-20" 
              />
            )}

            {/* Feature Card */}
            <motion.div 
              className="bg-[#fffd10] rounded-lg shadow-md w-full max-w-md h-48 flex flex-col justify-center items-center text-center px-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.8 }}
                src={feature.imgSrc}
                alt={feature.imgAlt}
                className="w-12 h-12 mb-3 object-contain"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.9 }}
                className="text-black text-base md:text-lg font-medium leading-tight"
                style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
              >
                {feature.title}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
