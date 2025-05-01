import React from "react";
import RateCard from "./RateCrad";

const chhattisgarhRoutes = [
    {
      title: "Raipur ↔ Raigarh",
      fareSedan: "₹4,500",
      fareSUV: "₹6,800",
      fareInn: "₹9,500",
      distance: "260 km",
      time: "3 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Raipur", coords: [21.2514, 81.6296] },
      to: { name: "Raigarh", coords: [21.8982, 83.3966] },
      color: "#3498db",
    },
    {
      title: "Raipur ↔ Korba",
      fareSedan: "₹4,500",
      fareSUV: "₹6,800",
      fareInn: "₹8,800",
      distance: "230 km",
      time: "5 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Raipur", coords: [21.2514, 81.6296] },
      to: { name: "Korba", coords: [22.4435, 83.1033] },
      color: "#27ae60",
    },
    {
      title: "Bilaspur ↔ Korba",
      fareSedan: "₹2,200",
      fareSUV: "₹3,500",
      fareInn: "contact us",
      distance: "100 km",
      time: "3 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Bilaspur", coords: [22.0797, 82.1409] },
      to: { name: "Korba", coords: [22.4435, 83.1033] },
      color: "#8e44ad",
    },
    {
      title: "Bilaspur Airport ↔ Korba ",
      fareSedan: "₹2,500",
      fareSUV: "₹3,800",
      fareInn: "contact us",
      distance: "100 km",
      time: "3 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Bilaspur Airport", coords: [22.1167, 82.1892] },
      to: { name: "Korba ", coords: [22.4435, 83.1033] },
      color: "#f39c12",
    },
    {
      title: "Bilaspur ↔ Raipur",
      fareSedan: "₹2,500",
      fareSUV: "₹3,500",
      fareInn: "₹5,500",
      distance: "130 km",
      time: "3 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Bilaspur", coords: [22.0797, 82.1409] },
      to: { name: "Raipur", coords: [21.2514, 81.6296] },
      color: "#e74c3c",
    },
    {
      title: "Bilaspur ↔ Raigarh",
      fareSedan: "₹3,200",
      fareSUV: "₹3,200",
      fareInn: "₹5,500",
      distance: "160 km",
      time: "4 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Bilaspur", coords: [22.0797, 82.1409] },
      to: { name: "Raigarh", coords: [21.8982, 83.3966] },
      color: "#16a085",
    },
  ];

const ChhattisgarhRates = () => (
  <div className="bg-zinc-950 min-h-screen py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto mb-12 text-center">
      <h1 className="text-5xl font-bold text-yellow-400 mb-3 tracking-tight">
        Chattisgarh Rates
      </h1>
      <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-20" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
      {chhattisgarhRoutes.map((route, idx) => (
        <RateCard key={idx} route={route} />
      ))}
    </div>
  </div>
);

export default ChhattisgarhRates;
