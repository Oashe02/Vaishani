import React, { useEffect, useRef, useState } from "react";
import tarun from "../assets/captains/tarun.jpg";
import { ChevronDown, Star, Clock, Award, MapPin } from "lucide-react";

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0 }
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
      className="relative bg-gradient-to-b from-black via-gray-900/95 to-black py-32 opacity-0 translate-y-12 transition-all duration-1000 ease-out overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl"></div>

        {/* Geometric accents */}
        <div className="absolute top-20 left-20 w-40 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        <div className="absolute bottom-40 right-20 w-40 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent"></div>
        <div className="absolute top-40 right-60 w-px h-40 bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent"></div>
        <div className="absolute bottom-60 left-40 w-px h-40 bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant heading with subtle animation */}
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block text-gray-400 uppercase tracking-widest text-sm font-light">
              Professional Service
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
            Meet <span className="font-semibold text-yellow-500">Tarun</span>
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-yellow-500/60"></div>
            <span className="text-yellow-500/80 text-sm uppercase tracking-widest">
              Owner
            </span>
            <div className="w-8 h-px bg-yellow-500/60"></div>
          </div>

          <div className="mt-12 animate-bounce-subtle">
            <ChevronDown className="text-yellow-500/60 w-6 h-6" />
          </div>
        </div>

        {/* Content area with glass effect */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20">
          {/* Image with refined styling */}
          <div className="w-full lg:w-2/5 flex justify-center perspective-element">
            <div className="relative rounded-sm w-full max-w-md transform transition-all duration-1000 hover:rotate-y-5 group">
              {/* Frame */}
              <div className="absolute inset-0 border border-yellow-500/20 transform translate-x-4 translate-y-4"></div>

              {/* Main image */}
              <div className="relative overflow-hidden border border-yellow-500/40">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img
                  src={tarun}
                  alt="Tarun Kumar Soni"
                  className="w-full h-[580px] object-cover transition-transform duration-1500 filter saturate-75 group-hover:saturate-100 group-hover:scale-105"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r border-b border-yellow-500/30"></div>
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l border-t border-yellow-500/30"></div>
            </div>
          </div>

          {/* Biography section with refined styling */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-block overflow-hidden relative">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-2 reveal-text">
                Tarun Kumar <span className="text-yellow-500">Soni</span>
              </h2>
              <div className="reveal-line"></div>
            </div>

            <div className="mt-2 mb-8 flex lg:justify-start justify-center gap-3 items-center text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-yellow-500/80" />
              <span>Bilaspur, Chhattisgarh</span>
            </div>

            <div className="space-y-6 mb-16 text-gray-300 text-lg font-light leading-relaxed max-w-2xl fade-in-element delay-300">
              <p>
                Tarun Kumar Soni stands as a hallmark of excellence in
                transportation services throughout Bilaspur. With an unwavering
                commitment to passenger comfort and safety, his reputation
                precedes him in the local transit ecosystem.
              </p>
              <p>
                His approach to service transcends mere transportation—creating
                experiences characterized by reliability, punctuality, and a
                sincere attention to detail. The fleet under his supervision
                maintains impeccable standards of cleanliness and mechanical
                integrity.
              </p>
              <p>
                Whether navigating city streets or traversing longer distances,
                clients consistently praise the refined experience his services
                provide—a testament to his decade-long dedication to elevating
                the standard of transit in the region.
              </p>
            </div>

            {/* Refined stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  value: "10+",
                  label: "Years of Experience",
                  icon: <Clock className="w-5 h-5" />,
                },
                {
                  value: "2000+",
                  label: "Journeys Completed",
                  icon: <Award className="w-5 h-5" />,
                },
                {
                  value: "4.9",
                  label: "Client Satisfaction",
                  icon: <Star className="w-5 h-5" />,
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`backdrop-blur-md bg-black/20 border-t border-l border-yellow-500/10 p-6
                             transform transition-all duration-700 hover:translate-y-0 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.2)]
                             ${isVisible ? "fade-in-element" : "opacity-0"}`}
                  style={{ animationDelay: `${800 + idx * 200}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-yellow-500/80">{stat.icon}</div>
                    <div className="h-px flex-grow bg-gradient-to-r from-yellow-500/30 to-transparent"></div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl font-light text-white">
                      {stat.value}
                    </div>
                    {idx === 2 && (
                      <div className="text-lg text-yellow-500/80">/5</div>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        .perspective-element {
          perspective: 1000px;
        }

        .hover\\:rotate-y-5:hover {
          transform: rotateY(3deg);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-element {
          animation: fadeIn 1s forwards;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        @keyframes revealText {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .reveal-text {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .reveal-text::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          transform: translateY(0);
          animation: revealTextSlide 1.2s 0.5s forwards;
        }

        @keyframes revealTextSlide {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

        .reveal-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(212, 175, 55, 0.5),
            transparent
          );
          transform: scaleX(0);
          animation: revealLine 1.2s 1.2s forwards;
        }

        @keyframes revealLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes bounceSubtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};
