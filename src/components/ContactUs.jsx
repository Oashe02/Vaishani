import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCard = ({ Icon, title, content, link }) => {
  const Wrapper = link ? "a" : "div";

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      className="transition duration-300"
    >
      <Wrapper
        href={link}
        target={link?.startsWith("http") ? "_blank" : undefined}
        rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block bg-gray-900/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-sm 
                   hover:shadow-yellow-400/10 transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-yellow-400/20 p-3 rounded-xl">
            <Icon className="text-white text-2xl sm:text-3xl" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">
            {title}
          </h3>
        </div>
        <p className="text-sm sm:text-base text-gray-200 whitespace-pre-line">
          {content}
        </p>
      </Wrapper>
    </motion.div>
  );
};

const ContactUs = () => {
  const contactDetails = [
    {
      Icon: FaEnvelope,
      title: "Email Us",
      content: "vaishnavitours.bilaspur@gmail.com",
      link: "mailto:vaishnavitours.bilaspur@gmail.com",
    },
    {
      Icon: FaPhoneAlt,
      title: "Call Us",
      content: "+91 92447 84443",
      link: "tel:+919244784443",
    },
    {
      Icon: FaMapMarkerAlt,
      title: "Visit Us",
      content: `B.N City Colony, Jonki Road\nMangla Chowk\nBilaspur, Chhattisgarh – 495001`,
      link: "https://maps.google.com/?q=Mangla+Chowk+Bilaspur+Chhattisgarh",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 relative">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute right-[10%] bottom-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-yellow-400/5 blur-2xl rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-4 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          We're happy to connect. Reach us through any of the options below.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {contactDetails.map((detail, index) => (
          <ContactCard key={index} {...detail} />
        ))}
      </div>

      {/* Embedded Map */}
      <div className="mt-16 sm:mt-20 overflow-hidden rounded-2xl border border-gray-700 shadow-xl">
        <div className="relative w-full pt-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            title="Vaishnavi Tours Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.576190780665!2d82.1397614759955!3d22.083333979999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjLCsDA1JzAwLjAiTiA4MsKwMDgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620123456789!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
