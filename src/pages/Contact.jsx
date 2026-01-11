import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const phoneNumber = '254708482198';

  const handleWhatsAppClick = () => {
    const text = message || 'Hi, I would like to book a massage session.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleQuickMessage = (quickMsg) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(quickMsg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">

      {/* Hero */}
      <div
        className="h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874')" }}
      >
        <div className="bg-black/40 backdrop-blur-sm px-10 py-8 rounded-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Contact Flozzy Massage</h1>
          <p className="text-white/90 text-lg">Your wellness journey begins here</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Left Column */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Get in Touch</h2>

          <div className="space-y-5">
            <InfoItem icon={<Phone />} title="Phone" text="0708 482 198" />
            <InfoItem icon={<MapPin />} title="Location" text="Nairobi, Mfangano Street, Njugoin House" />
            <InfoItem icon={<Clock />} title="Working Hours" text="Mon - Sat: 9AM - 8PM | Sun: 10AM - 6PM" />
          </div>

          {/* Quick Messages */}
          <div className="pt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Quick Messages</h3>
            <div className="grid gap-3">
              <QuickBtn onClick={() => handleQuickMessage('Hi, I would like to book a massage session.')} text="📅 Book a Session" />
              <QuickBtn onClick={() => handleQuickMessage('What are your massage service prices?')} text="💰 Ask About Pricing" />
              <QuickBtn onClick={() => handleQuickMessage('What types of massage do you offer?')} text="💆 Massage Types" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-500 p-3 rounded-full">
              <MessageCircle className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="6"
            placeholder="Type your message here..."
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none resize-none"
          />

          <button
            onClick={handleWhatsAppClick}
            className="w-full mt-5 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
          >
            <MessageCircle />
            Open WhatsApp Chat
            <Send size={18} />
          </button>

          {/* Services Preview */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {['Swedish', 'Deep Tissue', 'Hot Stone', 'Aromatherapy'].map((s) => (
              <div key={s} className="bg-purple-50 rounded-xl p-3 text-center text-purple-800 font-medium">{s}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h3 className="text-3xl font-bold text-center text-purple-800 mb-10">What Our Clients Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Mark", text: "Absolutely relaxing experience. Best massage I've had in years!" },
            { name: "Michael", text: "Professional therapists and very calming environment." },
            { name: "John", text: "My go-to place for stress relief. Highly recommend Flozzy Massage." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-purple-700 text-right">— {t.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-purple-800 mb-2">Visit Us</h3>
            <p className="text-gray-600">We are located in Nirobi, Mfangano Street, Njoguin House</p>
          </div>
          <iframe
            title="Flozzy Massage Location"
            src="https://www.google.com/maps?q=Nairobi,+Mfangano+Street,+Njuguin+House&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
}

/* Helper Components */
function InfoItem({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-purple-100 p-3 rounded-full text-purple-700">{icon}</div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function QuickBtn({ text, onClick }) {
  return (
    <button onClick={onClick} className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 rounded-xl text-left px-4 transition">
      {text}
    </button>
  );
}
