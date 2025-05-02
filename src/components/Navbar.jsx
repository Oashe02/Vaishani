import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
} from "lucide-react";

const Navbar = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Step 1: Get user's coordinates
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );
        const { latitude, longitude } = position.coords;

        // Step 2: Reverse geocode to get city name
        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=13ab580bfb8d5e82947f4c6e4358a614`
        );
        const geoData = await geoRes.json();
        const city = geoData?.[0]?.name || "Unknown";

        // Step 3: Get weather data for the city
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=13ab580bfb8d5e82947f4c6e4358a614&units=metric`
        );
        const weatherData = await weatherRes.json();

        setWeather(weatherData);
      } catch (err) {
        console.error("Weather fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition?.toLowerCase()) {
      case "clear":
      case "sunny":
        return <Sun className="text-gray-800" size={20} />;
      case "clouds":
      case "cloudy":
        return <Cloud className="text-gray-800" size={20} />;
      case "rain":
      case "drizzle":
        return <CloudRain className="text-gray-800" size={20} />;
      case "snow":
        return <CloudSnow className="text-gray-800" size={20} />;
      case "thunderstorm":
        return <CloudLightning className="text-gray-800" size={20} />;
      default:
        return <Wind className="text-gray-800" size={20} />;
    }
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Rates", href: "#rates" },
    { label: "Service Network", href: "#service-network" },
    { label: "Vehicle Info", href: "#vehicle-info" },
    { label: "Feedback", href: "#feedback" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "Enquire Now", href: "#enquire", isPrimary: true },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setActiveLink(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-0 top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-sm shadow-xl py-2 border-b border-amber-500/20"
          : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500"
            >
              Vaishnavi Tours
            </a>
          </div>

          {/* Weather */}
          <div className="hidden md:flex items-center space-x-2 bg-black/80 px-4 py-2 rounded-full border border-amber-500/40 shadow-lg shadow-amber-500/5">
            {loading ? (
              <div className="animate-pulse h-4 w-24 bg-gray-800 rounded" />
            ) : weather ? (
              <>
                <div className="flex items-center ">
                  {getWeatherIcon(weather.weather[0].main, "text-white")}
                  {!loading && weather && (
                    <span className="ml-1 text-sm font-medium text-amber-300">
                      {weather.name}: {Math.round(weather.main.temp)}°C
                    </span>
                  )}
                </div>
              </>
            ) : (
              <span className="text-amber-500/70 text-sm">
                Weather unavailable
              </span>
            )}
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(
              (link) =>
                !link.isPrimary && (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href.substring(1))}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeLink === link.href.substring(1)
                        ? "text-amber-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:rounded-full"
                        : "text-gray-300 hover:text-amber-300 hover:bg-gray-900"
                    }`}
                  >
                    {link.label}
                  </a>
                )
            )}
            <a
              href="#enquire"
              onClick={(e) => handleLinkClick(e, "enquire")}
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-2 rounded-md ml-4 shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            {!loading && weather && (
              <div className="mr-4 flex items-center text-sm text-amber-300">
                {getWeatherIcon(weather.weather[0].main)}
                <span className="ml-1">{Math.round(weather.main.temp)}°C</span>
              </div>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-amber-400 hover:bg-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-40 lg:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black shadow-2xl z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } border-l border-amber-500/30`}
      >
        <div className="flex justify-between items-center p-4 border-b border-amber-500/30">
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
            Vaishnavi Tours
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-900"
          >
            <X size={24} className="text-amber-400" />
          </button>
        </div>

        {/* Weather */}
        {!loading && weather && (
          <div className="flex items-center justify-center py-3 px-4 border-b border-amber-500/30 bg-black/40">
            <MapPin size={16} className="text-amber-400" />
            <span className="ml-1 text-sm font-medium text-amber-300">
              {weather.name}
            </span>
            <span className="mx-2 text-gray-600">|</span>
            {getWeatherIcon(weather.weather[0].main)}
            <span className="ml-1 text-sm font-medium text-amber-300">
              {Math.round(weather.main.temp)}°C, {weather.weather[0].main}
            </span>
          </div>
        )}

        {/* Links */}
        <div className="py-2 px-1 overflow-y-auto h-full bg-gradient-to-b from-black to-gray-900">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href.substring(1))}
              className={`block mx-3 my-1 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                link.isPrimary
                  ? "bg-amber-500 text-black text-center my-4 shadow-lg hover:bg-amber-400"
                  : `${
                      activeLink === link.href.substring(1)
                        ? "text-amber-400 bg-gray-900/70 font-semibold border border-amber-500/30"
                        : "text-gray-300 hover:bg-gray-900 hover:text-amber-300"
                    }`
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
