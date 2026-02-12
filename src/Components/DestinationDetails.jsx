import React, { useState } from "react";
import { useParams } from "react-router-dom";

import dubaiImg from "../assets/dubai.jpg";
import tokyoImg from "../assets/tokyo.webp";
import newyorkImg from "../assets/newyork.jpg";
import indiaImg from "../assets/india.jfif";

const destinations = {
  dubai: {
    name: "Dubai",
    img: dubaiImg,
    description:"Explore the dazzling city of Dubai, where modern skyscrapers meet desert adventures. Experience luxury shopping, thrilling desert safaris, and vibrant culture all in one unforgettable journey.",
    map: "https://www.google.com/maps?q=Dubai&output=embed"
  },
  tokyo: {
    name: "Tokyo",
    img: tokyoImg,
    description: "Experience the perfect blend of tradition and modernity in Tokyo — from ancient temples and serene gardens to neon-lit streets and cutting-edge technology. A city full of surprises awaits!",
    map: "https://www.google.com/maps?q=Tokyo&output=embed"
  },
  newyork: {
    name: "New York",
    img: newyorkImg,
    description: "Discover the vibrant energy of New York City, from iconic landmarks like Times Square and the Statue of Liberty to world-class dining, arts, and nightlife. Experience the city that never sleeps!",
    map: "https://www.google.com/maps?q=New+York&output=embed"
  },
  india: {
    name: "India",
    img: indiaImg,
    description: "Dive into the rich culture and history of India — from majestic monuments and bustling markets to flavorful cuisine and vibrant traditions. Every moment is an unforgettable adventure!",
    map: "https://www.google.com/maps?q=India&output=embed"
  }
};

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations[id?.toLowerCase()];

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    days: "",
    members: ""
  });

  if (!destination) {
    return (
      <h1 className="pt-40 text-center text-2xl">
        Destination Not Found
      </h1>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setShowModal(true);

    setFormData({
      name: "",
      email: "",
      date: "",
      days: "",
      members: ""
    });
  };

  return (
    <div className="px-6 md:px-16 pt-28 pb-20">
      
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-96 text-center shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Booking Confirmed 🎉</h2>
            <p className="text-gray-600 mb-6">
              Thank you for choosing {destination.name}. We will contact you soon!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={destination.img}
          alt={destination.name}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{destination.name}</h1>
          <p className="text-gray-600 mt-4">{destination.description}</p>

          <form
            onSubmit={handleBooking}
            className="mt-8 bg-gray-100 p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Book This Destination
            </h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2 mb-4 border rounded-md"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-2 mb-4 border rounded-md"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border rounded-md"
            />

            <input
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              placeholder="Number of Days"
              required
              min="1"
              className="w-full p-2 mb-4 border rounded-md"
            />

            <input
              type="number"
              name="members"
              value={formData.members}
              onChange={handleChange}
              placeholder="Number of Members"
              required
              min="1"
              className="w-full p-2 mb-4 border rounded-md"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Google Maps</h2>
        <iframe
          src={destination.map}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          className="rounded-xl shadow-lg"
          title="destination-map"
        ></iframe>
      </div>
    </div>
  );
};

export default DestinationDetails;
