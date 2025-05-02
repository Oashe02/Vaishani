import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useScrollToTop } from '../hooks/useScrollToTop';
import logo from '../assets/VaishnaviTours.png';

const menuLinks = [
  { name: "Home", to: "/" },
  { name: "Rates", to: "/rates" },
  { name: "Service Network", to: "/service-network" },
  { name: "Vehicle Info", to: "/vehicles" },
  { name: "Feedback", to: "/feedback" },
  { name: "About Us", to: "/about" },
  { name: "Contact Us", to: "/contact" },
  { name: "Privacy & Policy", to: "/privacy-policy" },
];

const socialLinks = [
  {
    icon: <FaFacebookF className="text-lg" />,
    href: "https://www.facebook.com/share/1Anpd6CaVt/",
    label: "Facebook",
  },
  {
    icon: <FaYoutube className="text-lg" />,
    href: "https://www.youtube.com/@vaishnavitours.cg10",
    label: "YouTube",
  },
  {
    icon: <FaInstagram className="text-lg" />,
    href: "https://www.instagram.com/vaishnavitours.bilaspur/?igsh=MTlqdzE0a3p0dzUxdw%3D%3D#",
    label: "Instagram",
  },
  {
    icon: <FaWhatsapp className="text-lg" />,
    href: "https://wa.me/9244784443",
    label: "WhatsApp",
  },
];

const FOOTER_ANIMATION = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const LINK_ANIMATION = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04 + 0.2, duration: 0.55 },
  }),
};

const SOCIAL_ANIMATION = {
  hover: { y: -3, boxShadow: "0 4px 32px 0 #94fbab30" },
};

const Footer = () => {
  const navigate = useNavigate();
  useScrollToTop();

  const handleNavigation = (to) => {
    navigate(to);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.footer
      className="bg-[#121315] w-full border-t border-white/10 pt-10 pb-4 px-2 relative z-10 items-center"
      initial="hidden"
      whileInView="visible"
      variants={FOOTER_ANIMATION}
      viewport={{ once: true }}
    >
      {/* Decorative wave SVG at top edge */}
      <div className="absolute -top-3 left-0 w-full pointer-events-none select-none opacity-50 items-center">
        <svg viewBox="0 0 1440 55" fill="none">
          <path
            d="M0 33L80 37C160 41 320 49 480 40C640 31 800 7 960 8C1120 9 1280 34 1360 46L1440 58V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V33Z"
            fill="#232427"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-[1320px] px-4">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 place-items-start">
          {/* Brand/Logo Section */}
          <motion.div
            className="w-full flex flex-col items-center gap-6 text-center"
            variants={FOOTER_ANIMATION}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-[120px] h-[120px] flex items-center justify-center rounded-full border border-yellow-400 shadow-[0_8px_40px_0_rgba(255,228,97,0.10)]">
                <img 
                  src={logo} 
                  alt="Vaishnavi Tours Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <span className="font-bold text-3xl text-white/80 leading-tight mt-1 font-mono tracking-tight">
                VaishnavI
                <br />
                Tours
              </span>
            </div>
            <div className="text-sm text-white/80 whitespace-pre-line leading-6 mb-2">
              B.N City Colony Jonki Road Mangla Chowk Bilaspur Chhattisgarh
              495001
            </div>
            <ul className="flex gap-2 mt-2">
              {socialLinks.map((s) => (
                <motion.li
                  key={s.label}
                  whileHover="hover"
                  variants={SOCIAL_ANIMATION}
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-white/40 bg-[#18191C] text-white shadow-lg hover:border-[#94fbab] hover:text-[#121315] hover:bg-[#94fbab] duration-200 focus:outline-none focus:ring-2 focus:ring-[#94fbab] focus:ring-offset-2"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          {/* Navigation + Paragraph */}
          <motion.div
            className="w-full max-w-[2000px] mx-auto flex flex-col items-center md:items-start gap-6 pt-8"
            variants={FOOTER_ANIMATION}
          >
            {/* Navigation Links: 2 Columns Grid Layout */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={LINK_ANIMATION}
                  viewport={{ once: true }}
                  className="flex items-center justify-center md:justify-start"
                >
                  <Link
                    to={link.to}
                    onClick={() => handleNavigation(link.to)}
                    className="relative font-semibold text-base md:text-lg text-white/90 transition-all duration-200 hover:text-[#FFD700] group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-[-2px] h-0.5 w-0 bg-[#FFD700] transition-all duration-300 group-hover:w-full rounded"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer Paragraph */}
            <motion.p
              className="text-base md:text-lg leading-relaxed text-center md:text-left text-white/80 max-w-2xl mt-6 md:mt-8"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              viewport={{ once: true }}
            >
              Thank you for visiting{" "}
              <span className="text-white font-semibold">Vaishnavi Tours</span>.
              We strive to provide the best services and unforgettable
              experiences for our travelers. If you have any questions or need
              support, don't hesitate to contact us. Your satisfaction is our
              top priority.
            </motion.p>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            className="w-full flex justify-center md:justify-end items-start pt-2"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <dotlottie-player
                src="https://lottie.host/84674a7c-3568-4998-9f88-536b335f1a46/9dTVBTUDGF.lottie"
                background="transparent"
                speed="1"
                style={{ width: "360px", height: "360px", display: "block" }}
                loop
                autoPlay
              ></dotlottie-player>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Bottom bar */}
      <motion.div
        className="w-full max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between md:items-center mt-12 px-4 pt-8 pb-5 border-t border-white/10 text-white/70 text-sm gap-1 md:gap-0"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.28 }}
        viewport={{ once: true }}
      >
        <div>© Vaishnavi Tours - All Rights Reserved</div>
        <div>
          © Website powered by
          <a
            href="https://byte-knightz.vercel.app/"
            className="font-bold text-sky-300 ml-1 hover:underline hover:text-sky-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Byte_Knightz
          </a>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
