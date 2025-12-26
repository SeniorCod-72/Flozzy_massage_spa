// src/pages/Services.jsx
import React from "react";

function Services() {
  const services = [
    { name: "Swedish Massage", desc: "Relaxing full-body massage to relieve stress." },
    { name: "Deep Tissue Massage", desc: "Targets deeper layers of muscles to relieve tension." },
    { name: "Hot Stone Massage", desc: "Soothes sore muscles with warm stones." },
    { name: "Aromatherapy Massage", desc: "Enhances relaxation with essential oils." },
  ];

  return (
    <div className="min-h-screen p-8 bg-pink-50">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">{service.name}</h2>
            <p className="text-purple-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
