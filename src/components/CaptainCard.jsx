import React, { useEffect, useRef } from "react";
import { Star, Award, Navigation, Shield, Coffee } from "lucide-react";

export const CaptainCard = ({ captain }) => {
  const { name, image, experience, rating, trips, speciality } = captain;
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 30;
      const moveY = (y - centerY) / 30;

      const elements = card.querySelectorAll(".parallax-element");
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth") || 1);
        el.style.transform = `translate(${moveX * depth}px, ${
          moveY * depth
        }px)`;
      });

      const highlight = card.querySelector(".highlight-effect");
      if (highlight) {
        highlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(234,179,8,0.15), transparent 50%)`; // yellow-500/15
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full h-[500px] overflow-hidden group rounded-2xl"
    >
      {/* Background and highlight */}
      <div className="absolute inset-0 bg-[#0a0a0a] border border-neutral-700 rounded-2xl" />
      <div className="highlight-effect absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl" />
      <div className="absolute inset-0 border border-yellow-500 opacity-0 group-hover:opacity-40 transition-all duration-700 scale-[0.98] group-hover:scale-100 rounded-2xl" />

      {/* Content container */}
      <div className="absolute inset-[1px] bg-gradient-to-b from-neutral-900 to-black backdrop-blur-sm flex flex-col rounded-[inherit]">
        {/* Image section */}
        <div className="relative h-60 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center transition-transform duration-[1500ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20 mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-400 opacity-30" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-200 to-transparent opacity-40" />

          {/* Rating */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border-l border-b border-yellow-500/25 px-3 py-1.5 flex items-center gap-1.5 rounded-md">
            <Star className="w-3 h-3 text-yellow-500" />
            <span className="text-yellow-500 text-sm font-light">{rating}</span>
          </div>

          {/* Captain info */}
          <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
            <div className="flex items-center mb-1">
              <h3
                className="text-white text-xl font-light tracking-wide parallax-element"
                data-depth="1.2"
              >
                {name}
              </h3>
              <Shield
                className="ml-2 w-4 h-4 text-yellow-500 opacity-70 parallax-element"
                data-depth="1.8"
              />
            </div>
            <div className="flex items-center">
              <div className="h-px w-4 bg-yellow-500 opacity-60 mr-2" />
              <p className="text-yellow-500 text-xs tracking-wider font-light">
                {speciality}
              </p>
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="flex-1 p-6 relative space-y-6">
          <div className="grid grid-cols-2 gap-5">
            {/* Experience */}
            <div className="bg-[#10100f] border border-yellow-500/20 p-4 relative overflow-hidden group/item rounded-lg">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-yellow-500/10" />
              <div className="flex items-center gap-2 mb-3">
                <Coffee className="w-4 h-4 text-yellow-500 opacity-80" />
                <span className="text-xs uppercase tracking-widest text-yellow-500/70 font-light">
                  Experience
                </span>
              </div>
              <div className="text-white text-lg font-light tracking-wider">
                {experience}
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 opacity-40 group-hover/item:w-full transition-all duration-1000 ease-out" />
            </div>

            {/* Trips */}
            <div className="bg-[#10100f] border border-yellow-500/20 p-4 relative overflow-hidden group/item rounded-lg">
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-yellow-500/10" />
              <div className="flex items-center gap-2 mb-3">
                <Navigation className="w-4 h-4 text-yellow-500 opacity-80" />
                <span className="text-xs uppercase tracking-widest text-yellow-500/70 font-light">
                  Journeys
                </span>
              </div>
              <div className="text-white text-lg font-light tracking-wider">
                {trips}
                <span className="text-sm text-yellow-500">+</span>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-yellow-500 opacity-40 group-hover/item:w-full transition-all duration-1000 ease-out" />
            </div>
          </div>

          {/* Award */}
          <div className="relative p-4 bg-[#0c0c0c] border border-yellow-500/15 rounded-lg">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-yellow-500/10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-yellow-500/10" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-500 opacity-80" />
              <div className="h-px flex-grow bg-gradient-to-r from-yellow-500/25 to-transparent" />
            </div>
            <div className="mt-3 text-yellow-500/50 text-xs tracking-wide">
              <span className="inline-block text-white mr-1">Premium</span>
              driver with extensive road knowledge
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-16 h-[1px]">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
        </div>
      </div>
    </div>
  );
};
