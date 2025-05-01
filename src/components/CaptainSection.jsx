import React, { useEffect, useRef } from "react";
import { CaptainCard } from "./CaptainCard";
import { captainsData } from "../assets/captains/captainsData";

export const CaptainsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("opacity-100", "translate-y-0");

          const cards = document.querySelectorAll(".captain-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("opacity-100", "translate-y-0");
            }, 100 * index);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-20 opacity-0 translate-y-12 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-4xl text-white md:text-5xl font-bold text-center mb-4 relative">
            Meet The <span className="text-yellow-400">Captains</span>
            <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {captainsData.map((captain, index) => (
            <div
              key={captain.id}
              className="captain-card opacity-0 translate-y-12 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CaptainCard captain={captain} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
