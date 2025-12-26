// src/pages/Contact.jsx
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}, we received your message!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 mb-4 border border-purple-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 mb-4 border border-purple-300 rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 mb-4 border border-purple-300 rounded"
          rows="5"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-700 text-white p-3 rounded hover:bg-pink-500 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
