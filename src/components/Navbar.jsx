import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind } from "lucide-react";
import logo from '../assets/VaishnaviTours.png';

const Navbar = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const city = "Raipur";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setTimeout(() => {
          setWeather({
            name: "Raipur",
            main: { temp: 32 },
            weather: [{ main: "Sunny" }]
          });
          setLoading(false);
        }, 800);
      } catch (err) {
        console.error("Weather fetch failed", err);
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition?.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return <Sun className="text-yellow-400" size={20} />;
      case 'clouds':
      case 'cloudy':
        return <Cloud className="text-gray-400" size={20} />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="text-blue-400" size={20} />;
      case 'snow':
        return <CloudSnow className="text-blue-200" size={20} />;
      case 'thunderstorm':
        return <CloudLightning className="text-purple-400" size={20} />;
      default:
        return <Wind className="text-gray-400" size={20} />;
    }
  };

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg py-2" 
          : "bg-gradient-to-r from-yellow-50 to-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/"
              className="flex items-center space-x-2"
            >
              <img 
                src={logo} 
                alt="Vaishnavi Tours Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-700">
                Vaishnavi Tours
              </span>
            </Link>
          </div>

          {/* Weather - Center for medium+ screens */}
          <div className="hidden md:flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
            {loading ? (
              <div className="text-gray-500 text-sm flex items-center">
                <div className="animate-pulse h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            ) : weather ? (
              <>
                <MapPin size={16} className="text-yellow-600" />
                <span className="text-sm font-medium text-gray-700">{weather.name}</span>
                <span className="text-gray-400">|</span>
                <div className="flex items-center">
                  {getWeatherIcon(weather.weather[0].main)}
                  <span className="ml-1 text-sm font-medium text-gray-700">
                    {Math.round(weather.main.temp)}°C
                  </span>
                </div>
              </>
            ) : (
              <span className="text-gray-500 text-sm">Weather unavailable</span>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`${
                  link.isPrimary
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md ml-2 shadow-md transform transition hover:-translate-y-0.5"
                    : `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
                        location.pathname === link.to
                          ? "text-yellow-600 font-semibold"
                          : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                      }`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            {!loading && weather && (
              <div className="mr-4 flex items-center text-sm text-gray-700">
                {getWeatherIcon(weather.weather[0].main)}
                <span className="ml-1">{Math.round(weather.main.temp)}°C</span>
              </div>
            )}
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-700 hover:bg-yellow-50"
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            {!loading && weather && (
              <div className="flex items-center justify-center py-2 border-b border-gray-100 mb-2">
                <MapPin size={16} className="text-yellow-600" />
                <span className="ml-1 text-sm font-medium">{weather.name}</span>
                <span className="mx-2 text-gray-300">|</span>
                {getWeatherIcon(weather.weather[0].main)}
                <span className="ml-1 text-sm font-medium">
                  {Math.round(weather.main.temp)}°C, {weather.weather[0].main}
                </span>
              </div>
            )}
            
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.isPrimary
                    ? "bg-yellow-600 text-white text-center my-2"
                    : `${
                        location.pathname === link.to
                          ? "text-yellow-600 bg-yellow-50 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;