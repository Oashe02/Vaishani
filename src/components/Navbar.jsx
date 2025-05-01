import React, { useEffect, useState } from "react";
import { Menu, X, MapPin, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind } from "lucide-react";

const Navbar = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const city = "Raipur";
  
  // This would be properly secured in a real application
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Mock weather data for demo purposes
        // In production, use a proper API call with secure key management
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
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(section.getAttribute("id"));
        }
      });
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
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

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
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, "home")}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-700">
                Vaishnavi Tours
              </span>
            </a>
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
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href.substring(1))}
                className={`${
                  link.isPrimary
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md ml-2 shadow-md transform transition hover:-translate-y-0.5"
                    : `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
                        activeLink === link.href.substring(1)
                          ? "text-yellow-600 font-semibold"
                          : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                      }`
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            {/* Weather - small display */}
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

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            {/* Weather - mobile */}
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
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href.substring(1))}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.isPrimary
                    ? "bg-yellow-600 text-white text-center my-2"
                    : `${
                        activeLink === link.href.substring(1)
                          ? "text-yellow-600 bg-yellow-50 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;