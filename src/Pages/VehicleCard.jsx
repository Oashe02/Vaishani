import React from 'react';


//  hatana mat theres no error i dont know wheres the glitch 
// glitch in the code
import { motion } from 'framer-motion';
import balenoImg from '../assets/baleno.png';
import swiftImg from '../assets/swift.png';
import altoImg from '../assets/alto.png';
import zestImg from '../assets/zest.png';
import amazeImg from '../assets/amaze.png';
import dzireImg from '../assets/dzire.png';
import innovaImg from '../assets/innova.png';
import crystaImg from '../assets/crysta.png';
import ertigaImg from '../assets/ertiga.png';
import triberImg from '../assets/triber.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
};

const CarCategoriesPage = () => {
  const hatchbackCars = [
    { id: "car6", name: "MARUTI BALENO", image: balenoImg, features: ["Air Conditioner", "4 Seats"], category: "Premium Hatchback" },
    { id: "car5", name: "MARUTI SWIFT", image: swiftImg, features: ["Air Conditioner", "4 Seats"], category: "Sporty Hatchback" },
    { id: "car7", name: "MARUTI ALTO", image: altoImg, features: ["Air Conditioner", "4 Seats"], category: "Economy Hatchback" }
  ];

  const sedanCars = [
    { id: "car1", name: "TATA ZEST", image: zestImg, features: ["Air Conditioner", "4 Seats"], category: "Comfort Sedan" },
    { id: "car2", name: "HONDA AMAZE", image: amazeImg, features: ["Air Conditioner", "4 Seats"], category: "Premium Sedan" },
    { id: "car3", name: "MARUTI DZIRE", image: dzireImg, features: ["Air Conditioner", "4 Seats"], category: "Family Sedan" }
  ];

  const suvCars = [
    { id: "car5", name: "TOYOTA INNOVA CRYSTA", image: crystaImg, features: ["Air Conditioner", "8 Seats"], category: "Luxury MPV " },
    { id: "car4", name: "TOYOTA INNOVA", image: innovaImg, features: ["Air Conditioner", "7 Seats"], category: "Premium MPV" },
    { id: "car6", name: "ERTIGA", image: ertigaImg, features: ["Air Conditioner", "7 Seats"], category: "Family MPV" },
    { id: "car7", name: "RENAULT TRIBER", image: triberImg, features: ["Air Conditioner", "7 Seats"], category: "Compact MPV" }
  ];

  const CategorySection = ({ title, cars }) => (
    <motion.section
      className="mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div variants={fadeInUp} className="mb-8">
        <h2 className="text-3xl md:text-3xl font-bold text-yellow-400 mb-4">{title}</h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-0.5 bg-yellow-400 mb-10 "
        />
        <br/>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {cars.map((car, idx) => (
          <CarCard key={car.id} car={car} custom={idx} />
        ))}
      </div>
    </motion.section>
  );

  const CarCard = ({ car, custom }) => (
    <motion.div
      custom={custom}
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-800 rounded-xl overflow-hidden transform transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-44 bg-zinc-900 flex items-center justify-center border border-white/40 rounded-t-xl xl:rounded-t-2xl">
        <motion.img
          src={car.image}
          alt={car.name}
          className="h-full object-contain p-4"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-yellow-300">{car.name}</h3>
          <p className="text-xs text-yellow-100/60 tracking-wide">{car.category}</p>
        </div>

        <div className="space-y-2 text-sm text-gray-300">
          {car.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-7 h-7 flex items-center justify-center text-lg bg-yellow-400/10 rounded-full">
                {feature.includes("Air") ? "❄️" : "👥"}
              </span>
              {feature}
            </div>
          ))}
        </div>

        <a href="tel:+919244784443">
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ backgroundColor: "#facc15" }}
            className="w-full mt-4 bg-yellow-400 text-black font-semibold py-2 rounded-md transition-all"
          >
            Book Now →
          </motion.button>
        </a>
      </div>
    </motion.div>
  );

  return (
    <main className="bg-black min-h-screen py-20 px-6 md:px-12 lg:px-20 text-gray-100">
      <motion.header
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">Our Fleet</h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.6 }}
          className="h-1 mt-3 bg-yellow-400 mx-auto rounded-full"
        />
      </motion.header>

      <CategorySection title="Hatchback" cars={hatchbackCars} />
      <CategorySection title="Sedan" cars={sedanCars} />
      <CategorySection title="SUV & MPV" cars={suvCars} />
    </main>
  );
};

export default CarCategoriesPage;
