import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const phoneNumber = '254708482198'; // WhatsApp format with country code

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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-amber-900">Flozzy Massage</h1>
          <p className="text-amber-700 mt-1">Your wellness, our priority</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">0708 482 198</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Ruiru, Kiambu County</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-6 space-y-3">
              <h3 className="font-semibold text-gray-800 mb-3">Quick Messages</h3>
              <button
                onClick={() => handleQuickMessage('Hi, I would like to book a massage session.')}
                className="w-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-3 px-4 rounded-lg transition-colors text-left"
              >
                📅 Book a Session
              </button>
              <button
                onClick={() => handleQuickMessage('What are your massage service prices?')}
                className="w-full bg-orange-100 hover:bg-orange-200 text-orange-800 font-medium py-3 px-4 rounded-lg transition-colors text-left"
              >
                💰 Ask About Pricing
              </button>
              <button
                onClick={() => handleQuickMessage('What types of massage do you offer?')}
                className="w-full bg-rose-100 hover:bg-rose-200 text-rose-800 font-medium py-3 px-4 rounded-lg transition-colors text-left"
              >
                💆 Massage Types
              </button>
            </div>
          </div>

          {/* WhatsApp Message Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-500 p-3 rounded-full">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Send us a message on WhatsApp and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Open WhatsApp Chat</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                Click the button above to start chatting with us on WhatsApp
              </p>
            </div>

            {/* Services Preview */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">Our Services</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-amber-900">Swedish Massage</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-orange-900">Deep Tissue</p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-rose-900">Hot Stone</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-purple-900">Aromatherapy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Experience Pure Relaxation
            </h3>
            <p className="text-gray-600">
              At Flozzy Massage, we provide professional massage therapy services designed to rejuvenate your body and mind. Contact us today to book your session!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}