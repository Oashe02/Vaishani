import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: "🚗",
    title: ["Step 1: Choose Your", "Vehicle"],
    buttonText: "Visit Now",
    path: "/vehicles"
  },
  {
    icon: "📈",
    title: ["Step 2: Check Service", "Rates"],
    buttonText: "Visit Now",
    path: "/rates"
  },
  {
    icon: "☎️",
    title: ["Step 3: Contact and", "Confirm"],
    buttonText: "Contact Us",
    path: "/contact"
  }
];

export default function HowToBook() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-10 px-2 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-5xl md:text-7xl leading-tight text-center font-normal mb-12 select-none"
        style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
      >
        How To Book?
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-7 md:flex-row md:gap-8 justify-center items-center w-full max-w-6xl"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.25)' }}
            className="bg-[#fffd10] rounded-lg shadow-md flex flex-col items-center w-full max-w-[300px] min-h-[300px] px-4 py-8 md:px-8 md:py-8 cursor-pointer select-none"
            onClick={() => handleRedirect(step.path)}
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="text-[44px] mb-4 block drop-shadow-sm select-none scale-[1.07]"
            >
              {step.icon}
            </motion.span>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className="text-black text-xl md:text-2xl font-semibold text-center mb-9 leading-snug whitespace-pre-line"
            >
              {step.title.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </motion.div>
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRedirect(step.path);
              }}
              whileHover={{ scale: 1.05, backgroundColor: "black", color: "#fffd10" }}
              whileTap={{ scale: 0.95 }}
              className={`mt-auto rounded-full border-2 border-black px-8 py-3 text-black text-base md:text-lg flex items-center gap-2 min-w-[140px] md:min-w-[170px] text-center justify-center outline-none`}
              style={{ fontFamily: 'Montserrat, Arial, Helvetica, sans-serif' }}
            >
              {step.buttonText}
              <motion.span 
                initial={{ x: -5 }}
                whileHover={{ x: 5 }}
                className="text-xl ml-1"
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
