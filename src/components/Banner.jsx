import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaMoneyCheckAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import innova from "../assets/crysta.png";
import ertiga from "../assets/swift.png";
import baleno from "../assets/baleno.png";

const YELLOW = "#fefe13";
const BLACK = "black";

const CAR_IMAGES = [innova, baleno, ertiga];

const icons = [
  { label: "YouTube", href: "#", icon: <FaYoutube size={18} color={BLACK} /> },
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram size={18} color={BLACK} />,
  },
  {
    label: "Facebook",
    href: "#",
    icon: <FaFacebookF size={18} color={BLACK} />,
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: <FaWhatsapp size={18} color={BLACK} />,
  },
];

export default function Banner() {
  const [splitDone, setSplitDone] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [carIndex, setCarIndex] = useState(0);
  const [direction, setDirection] = useState(1); 

  useEffect(() => {
    if (splitDone) {
      const t = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(t);
    }
  }, [splitDone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCarIndex((prev) => (prev + 1) % CAR_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Split Background */}
      <motion.div
        className="absolute top-0 left-0 w-full"
        style={{ zIndex: 0 }}
        initial={{ height: "100%" }}
        animate={{ height: "45%" }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full h-full" style={{ background: YELLOW }} />
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        style={{ zIndex: 0 }}
        initial={{ height: "100%" }}
        animate={{ height: "55%" }}
        transition={{ duration: 0.7 }}
        onAnimationComplete={() => setSplitDone(true)}
      >
        <div className="w-full h-full" style={{ background: BLACK }} />
      </motion.div>

      {/* Static Left Sidebar with icons */}
      <div
        className="absolute top-[10%] left-4 flex flex-col items-center gap-4"
        style={{ height: "25vh", zIndex: 10 }}
      >
        <div className="w-[2px] bg-black h-full rounded-full" />
        <div className="flex flex-col gap-4 mt-4">
          {icons.map((icon) => (
            <a
              key={icon.label}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
              aria-label={icon.label}
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="absolute top-1/4 left-0 w-full flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-16 -translate-y-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ pointerEvents: "none", zIndex: 20 }}
          >
            {/* Text: Book + TAXI */}
            <motion.div
              className="flex flex-col items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ userSelect: "none" }}
            >
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  fontFamily: "'Merriweather', cursive",
                  color: BLACK,
                }}
              >
                Book
              </span>
              <span
                className="font-extrabold tracking-tight mt-4 text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[10rem]"
                style={{ lineHeight: 1, color: BLACK }}
              >
                TAXI
              </span>
            </motion.div>

            {/* Car image centered across yellow + black split */}
            {/* For medium and above */}
<div className="hidden md:flex absolute top-1/2 left-1/2 w-[100vw] max-w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center overflow-hidden">
  <AnimatePresence custom={direction}>
    <motion.img
      key={carIndex}
      src={CAR_IMAGES[carIndex]}
      alt="Taxi"
      className="absolute object-contain w-full max-h-full drop-shadow-xl"
      initial={{
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: direction > 0 ? -300 : 300,
        opacity: 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      draggable={false}
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        position: "absolute",
        height: "auto",
        maxHeight: "90%",
      }}
    />
  </AnimatePresence>
</div>

{/* For below medium */}
<div className="flex md:hidden absolute top-1/2 left-1/2 w-[100vw] max-w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center overflow-hidden">
  <AnimatePresence custom={direction}>
    <motion.img
      key={carIndex}
      src={CAR_IMAGES[carIndex]}
      alt="Taxi"
      className="absolute object-contain w-full max-h-full drop-shadow-xl"
      initial={{
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: direction > 0 ? -300 : 300,
        opacity: 0,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      draggable={false}
      style={{
        top: "55%",
        transform: "translateY(-50%)",
        position: "absolute",
        height: "auto",
        maxHeight: "100%",
      }}
    />
  </AnimatePresence>
</div>

          </motion.div>
        )}
      </AnimatePresence>


      <motion.div
  className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex flex-col sm:flex-row items-center gap-6"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
>
  {/* Check Rates Button */}

</motion.div>

    </div>
  );
}
