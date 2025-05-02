import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const locations = {
  Bilaspur: [22.0782, 82.1417],
  Raipur: [21.2514, 81.6296],
  Raigarh: [21.9034, 83.4015],
  Korba: [22.3563, 82.6781],
  Jharsuguda: [21.8554, 84.0062],
  Sambalpur: [21.4685, 83.9778],
  Bargarh: [21.3669, 83.6327],
};

const connections = Object.entries(locations).flatMap(([cityA, coordA], i, arr) =>
  arr.slice(i + 1).map(([cityB, coordB]) => ({
    cities: [cityA, cityB],
    coords: [coordA, coordB],
  }))
);

const ServiceNetworkMap = () => {
  const navigate = useNavigate();
  const [activeCity, setActiveCity] = useState(null);

  const handleFeedback = () => {
    navigate('/feedback');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-zinc-900/50 to-black"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-10">
            Our Service Network
          </h1>
          <a
            href="tel:+919244784443"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 px-8 rounded-xl transition-all hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-yellow-400/20"
          >
            <span className="text-xl">🚕</span>
            <span>Book Now</span>
          </a>
        </div>

        {/*  Map Section */}
        <div className="relative mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/50 backdrop-blur-sm bg-zinc-900/30">
            <MapContainer
              center={[21.8, 83]}
              zoom={7.45}
              scrollWheelZoom={true}
              touchZoom={true}
              className="h-[600px] w-full z-10"
              style={{ background: "#111111" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              {Object.entries(locations).map(([name, coords], index) => (
                <Marker
                  key={index}
                  position={coords}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => setActiveCity(name),
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="bg-zinc-900/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-zinc-800/50">
                      <h3 className="text-yellow-400 font-bold mb-3 text-lg">
                        {name}
                      </h3>
                      <a
                        href="tel:+919244784443"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg"
                      >
                        <span>📞</span> Book Now
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}

              {connections.map((conn, idx) => (
                <Polyline
                  key={idx}
                  positions={conn.coords}
                  pathOptions={{
                    color: "rgb(50, 50, 50)",
                    weight: 2,
                    opacity: 0.8,
                    lineCap: "round",
                    lineJoin: "round",
                    gradient: true,
                  }}
                />
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="text-center mb-16 max-w-2xl mx-auto bg-zinc-900/30 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800/50">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Your city not listed?
          </h3>
          <p className="text-gray-400 mb-6">
            Let us know, and we'll try to add it to our network!
          </p>

          <div className="flex justify-center gap-4">
            <button 
              onClick={handleFeedback}
              className="group flex items-center gap-3 bg-yellow-500 text-black font-semibold py-4 px-8 rounded-xl transition-all backdrop-blur-sm cursor-pointer hover:bg-yellow-600"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">
                💬
              </span>
              <span>Give Feedback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNetworkMap;
