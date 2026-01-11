import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const phoneNumber = "254708482198";

  const handleBooking = () => {
    const message = "Hello, I would like to book a massage session.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-extrabold text-purple-700 leading-tight mb-6">
            Welcome to <span className="text-purple-900">Flozzy Massage</span>
          </h1>

          <p className="text-lg text-purple-600 mb-8">
            Relax, refresh, and rejuvenate your body with our professional massage
            services designed to restore balance and calm your mind.
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleBooking}
              className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-xl shadow-lg transition"
            >
              Book Appointment
            </button>

            <button
              onClick={() => navigate("/services")}
              className="border border-purple-700 text-purple-700 hover:bg-purple-100 px-6 py-3 rounded-xl transition"
            >
              View Services
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35"
            alt="Massage therapy"
            className="rounded-2xl shadow-lg h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
            alt="Relaxing spa"
            className="rounded-2xl shadow-lg h-64 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6"
            alt="Massage oils"
            className="rounded-2xl shadow-lg h-64 object-cover col-span-2"
          />
        </div>

      </div>

      {/* Feature Section */}
      <div className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
          <div className="p-6 rounded-2xl bg-white shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Certified Therapists</h3>
            <p className="text-purple-600">Highly trained professionals you can trust.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Luxury Environment</h3>
            <p className="text-purple-600">A peaceful space designed for total relaxation.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Personalized Care</h3>
            <p className="text-purple-600">Treatments tailored to your body and needs.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
