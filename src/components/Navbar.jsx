import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import logo from "../assets/VaishnaviTours.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Rates", to: "/rates" },
  { label: "Service Network", to: "/service-network" },
  { label: "Vehicle Info", to: "/vehicles" },
  { label: "Feedback", to: "/feedback" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
  { label: "Enquire Now", to: "/enquiry", isPrimary: true },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );
        const { latitude, longitude } = position.coords;

        const geoRes = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=13ab580bfb8d5e82947f4c6e4358a614`
        );
        const geoData = await geoRes.json();
        const city = geoData?.[0]?.name || "Unknown";

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

  const handleNavigation = (to) => {
    navigate(to);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-black/95 py-1 shadow-md backdrop-blur-sm border-b border-amber-500/20"
          : "bg-black py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 sm:h-12" : "h-16 sm:h-14"
          }`}
        >
          {/* Logo and Title */}
          <Link
            to="/"
            className={`flex items-center gap-2 transition-all duration-300 pr-2 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          >
            <div
              className={`flex items-center justify-center rounded-full border border-yellow-400 shadow-[0_4px_20px_0_rgba(255,228,97,0.15)] transition-all ${
                scrolled ? "w-8 h-8" : "w-10 h-10"
              }`}
            >
              <img
                src={logo}
                alt="Vaishnavi Tours Logo"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? "w-12 h-12" : "w-16 h-16"
                }`}
              />
            </div>
            <span
              className={`font-semibold font-mono tracking-tight text-white transition-all ${
                scrolled ? "text-xs" : "text-sm"
              }`}
            >
              Vaishnavi Tours
            </span>
          </Link>

          {/* Weather */}
          <div className="hidden md:flex items-center space-x-2 bg-black/80 px-4 py-2 rounded-full border border-amber-500/40 shadow-lg shadow-amber-500/5">
            {loading ? (
              <div className="animate-pulse h-4 w-24 bg-gray-800 rounded" />
            ) : weather ? (
              <div className="flex items-center">
                {getWeatherIcon(weather.weather[0].main)}
                <span className="ml-1 text-sm font-medium text-amber-300">
                  {weather.name}: {Math.round(weather.main.temp)}°C
                </span>
              </div>
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
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => handleNavigation(link.to)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      location.pathname === link.to
                        ? "text-amber-400 font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:rounded-full"
                        : "text-gray-300 hover:text-amber-300 hover:bg-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
            )}
            <Link
              to="/enquiry"
              onClick={() => handleNavigation("/enquiry")}
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-2 rounded-md ml-4 shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile menu */}
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
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 xs:w-[180px] max-w-xs bg-black shadow-2xl z-50 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } border-l border-amber-500/30`}
      >
        <div className="flex justify-between items-center p-3 border-b border-amber-500/30">
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
            <Link
              key={link.label}
              to={link.to}
              onClick={() => handleNavigation(link.to)}
              className={`block mx-3 my-1 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                link.isPrimary
                  ? "bg-amber-500 text-black text-center my-4 shadow-lg hover:bg-amber-400"
                  : `${
                      location.pathname === link.to
                        ? "text-amber-400 bg-gray-900/70 font-semibold border border-amber-500/30"
                        : "text-gray-300 hover:bg-gray-900 hover:text-amber-300"
                    }`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
