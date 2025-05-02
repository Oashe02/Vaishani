import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaMoneyCheckAlt } from "react-icons/fa";

const DesktopButtons = () => {
  return (
    <motion.div
      className="hidden lg:flex justify-center items-center gap-6 w-full max-w-4xl mx-auto py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Link to="/rates" className="w-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-[#fefe13] text-black rounded-full font-semibold text-xl
                   flex items-center justify-center gap-3 shadow-lg hover:shadow-xl
                   transition-all duration-300 hover:bg-[#e6e611]"
        >
          <FaMoneyCheckAlt className="text-2xl" />
          <span>Check Rates</span>
        </motion.button>
      </Link>

      <a href="tel:+919244784443" className="w-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-black text-[#fefe13] rounded-full font-semibold text-xl
                   flex items-center justify-center gap-3 border-2 border-[#fefe13]
                   shadow-lg hover:shadow-xl transition-all duration-300
                   hover:bg-[#fefe13] hover:text-black"
        >
          <FaPhoneAlt className="text-2xl" />
          <span>Call Now</span>
        </motion.button>
      </a>
    </motion.div>
  );
};

export default DesktopButtons;