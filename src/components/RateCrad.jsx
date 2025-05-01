import React, { useEffect } from "react";
import { FaCarSide } from "react-icons/fa6";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fixing marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Auto-fit polyline bounds
const FitBounds = ({ from, to }) => {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLngBounds([from.coords, to.coords]);
    map.fitBounds(bounds, { padding: [30, 30] });
  }, [from, to, map]);
  return null;
};

const RateCard = ({ route }) => (
  <div
    className="relative bg-gradient-to-b from-zinc-800/90 to-zinc-900 rounded-3xl shadow-xl overflow-hidden border border-zinc-700/20 hover:border-yellow-500/30 transition-all duration-300 flex flex-col"
  >
    <div className="absolute top-0 right-0 w-24 h-24">
      <div className="absolute transform rotate-45 bg-yellow-400/10 w-32 h-32 -top-16 -right-16" />
    </div>

    <div className="p-5 sm:p-6 flex flex-col h-full">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
          <span className="text-lg">🗺️</span> {route.title}
        </h2>
        <div className="w-12 h-0.5 bg-yellow-400/50 mt-2" />
      </div>

      <div className="mb-5 rounded-2xl overflow-hidden border border-white/40 shadow-inner">
        <MapContainer
          style={{ height: "180px", width: "100%" }}
          scrollWheelZoom={false}
          center={route.from.coords}
          zoom={8}
          className="z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={route.from.coords}>
            <Popup>{route.from.name}</Popup>
          </Marker>
          <Marker position={route.to.coords}>
            <Popup>{route.to.name}</Popup>
          </Marker>
          <Polyline
            positions={[route.from.coords, route.to.coords]}
            pathOptions={{ color: route.color || "#FBBF24", weight: 5, opacity: 0.8 }}
          />
          <FitBounds from={route.from} to={route.to} />
        </MapContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="border border-white/40 bg-zinc-800/70 rounded-xl p-3 flex flex-col items-center">
          <span className="text-yellow-400 text-lg mb-1">🧭</span>
          <span className="text-gray-400 text-xs">Distance</span>
          <span className="text-yellow-400 text-sm font-medium">{route.distance}</span>
        </div>
        <div className="border border-white/40 bg-zinc-800/70 rounded-xl p-3 flex flex-col items-center">
          <span className="text-yellow-400 text-lg mb-1">⏱</span>
          <span className="text-gray-400 text-xs">Time</span>
          <span className="text-yellow-400 text-sm font-medium">{route.time}</span>
        </div>
        <div className="border border-white/40 bg-zinc-800/70 rounded-xl p-3 flex flex-col items-center">
          <span className="text-yellow-400 text-lg mb-1">₹</span>
          <span className="text-gray-400 text-xs">Extra</span>
          <span className="text-yellow-400 text-sm font-medium">{route.extraCharge}</span>
        </div>
      </div>

      <div className="space-y-2.5 mb-6 border border-white/40 p-4 rounded-xl">
        <h3 className="text-gray-300 text-sm font-medium mb-3 flex items-center">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
          Vehicle Options
        </h3>
        {[
          { label: 'Sedan & Hatchback', icon: <FaCarSide color="gold" /> , fare: route.fareSedan },
          { label: 'SUV', icon: '🚐', fare: route.fareSUV },
          { label: 'Innova Crysta', icon: '🚌', fare: route.fareInn }
        ].map((opt, i) => (
          <div key={i} className="flex items-center gap-2.5 bg-zinc-800/70 rounded-xl p-3 backdrop-blur-sm">
            <div className="w-8 h-6 bg-zinc-700/80 rounded-lg flex items-center justify-center">
              {opt.icon}
            </div>
            <span className="text-sm text-gray-300">{opt.label}</span>
            <span className="ml-auto text-yellow-400 font-semibold">{opt.fare}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-3">
        <div className="bg-yellow-400/10 rounded-xl p-3 text-gray-300 text-center flex items-center justify-center">
          <span className="text-yellow-400 mr-2">✓</span>
          <span className="text-sm">Toll charges included in price</span>
        </div>
        <a href="tel:+919244784443" >
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl py-3 px-4 flex items-center justify-center gap-2 transition-colors transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-yellow-400/10">
          
            <span className="text-lg">📞</span> Book This Route
        </button>
        </a>
        <p className="text-center text-xs text-gray-400 pt-2">
          Need a carrier vehicle or custom route? {' '}
          <a href="tel:+919244784443" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
            Contact Us
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default RateCard;
