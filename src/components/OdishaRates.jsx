import React from "react";
import RateCard from "./RateCrad";

const odishaRoutes = [
    {
      title: "Raigarh ↔ Jharsuguda",
      fareSedan: "₹2,600",
      fareSUV: "₹3,600",
      fareInn: "₹5,500",
      distance: "95 km",
      time: "3 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Raigarh", coords: [21.8982, 83.3966] },
      to: { name: "Jharsuguda", coords: [21.4826, 84.9979] },
      color: "#c0392b",
    },
    {
      title: "Sambalpur ↔ Raipur",
      fareSedan: "₹5,500",
      fareSUV: "₹8,500",
      fareInn: "₹10,500",
      distance: "260 km",
      time: "5 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Sambalpur", coords: [21.4668, 83.9823] },
      to: { name: "Raipur", coords: [21.2514, 81.6296] },
      color: "#27ae60",
    },
    {
      title: "Raipur ↔ Bargarh",
      fareSedan: "₹5,000",
      fareSUV: "₹8,000",
      fareInn: "₹10,500",
      distance: "230 km",
      time: "4 hrs",
      tollIncluded: true,
      extraCharge: "₹13 per km",
      from: { name: "Raipur", coords: [21.2514, 81.6296] },
      to: { name: "Bargarh", coords: [21.2962, 83.6102] },
      color: "#2980b9",
    },
  ];

const OdishaRates = () => (
  <div className="bg-zinc-950 min-h-screen py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto mb-12 text-center">
      <h1 className="text-5xl font-bold text-yellow-400 mb-3 tracking-tight">
        Odisha Rates
      </h1>
      <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-20" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
      {odishaRoutes.map((route, idx) => (
        <RateCard key={idx} route={route} />
      ))}
    </div>
  </div>
);

export default OdishaRates;
