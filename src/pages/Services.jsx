import React, { useState } from "react";

function Services() {
  const phoneNumber = "254708482198";
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: "Swedish Massage",
      price: "KSh 2,500",
      desc: "Relaxing full-body massage to relieve stress and improve circulation.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35",
    },
    {
      name: "Deep Tissue Massage",
      price: "KSh 3,000",
      desc: "Targets deeper muscle layers to relieve chronic pain and tension.",
      image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea",
    },
    {
      name: "Hot Stone Massage",
      price: "KSh 3,500",
      desc: "Soothes sore muscles using smooth, heated stones for deep relaxation.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
    },
    {
      name: "Aromatherapy Massage",
      price: "KSh 2,800",
      desc: "Enhances physical and emotional well-being with essential oils.",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    },
  ];

  const confirmBooking = () => {
    const message = `Hello, I would like to book a ${selectedService.name} (${selectedService.price}).`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-16 px-6">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Our Massage Services
        </h1>
        <p className="text-lg text-purple-600">
          Discover carefully crafted treatments designed to restore your body,
          mind, and spirit.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <img src={service.image} alt={service.name} className="h-56 w-full object-cover" />

            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-purple-700 mb-1">
                {service.name}
              </h2>

              <p className="text-purple-800 font-bold mb-2">{service.price}</p>
              <p className="text-purple-600 mb-4">{service.desc}</p>

              <button
                onClick={() => setSelectedService(service)}
                className="mt-2 bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-xl shadow transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Confirmation Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md text-center shadow-xl">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              Confirm Your Booking
            </h3>

            <p className="text-gray-700 mb-6">
              {selectedService.name} — {selectedService.price}
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2 rounded-lg border border-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={confirmBooking}
                className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white"
              >
                Confirm & Open WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition z-50"
      >
        💬 WhatsApp Us
      </a>

    </div>
  );
}

export default Services;
