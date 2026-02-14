import React from "react";
import TravelCard from "./TravelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

import dubaiImg from "../assets/dubai.jpg";
import indiaImg from "../assets/india.jfif";
import newyorkImg from "../assets/newyork.jpg";
import tokyoImg from "../assets/tokyo.webp";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  const data = [
    { id: "newyork", title: "NEW YORK", address: "USA", price: 8000, rating: 4.5, badge: "Best Seller", img: newyorkImg },
    { id: "tokyo", title: "TOKYO", address: "Japan", price: 8000, rating: 4.6, img: tokyoImg },
    { id: "india", title: "INDIA", address: "Delhi", price: 7000, rating: 4.3, img: indiaImg },
    { id: "dubai", title: "DUBAI", address: "UAE", price: 10000, rating: 4.7, img: dubaiImg },
  ];

  return (
    <section className="px-4 md:px-16 xl:px-24 my-20">
      <Title
        title="Featured Destination"
        subTitle="Discover your handpicked locations"
      />

      <div className="flex flex-wrap justify-center md:justify-between mt-12 gap-6">
        {data.map((d) => (
          <div
            key={d.id}
            className="w-[95%] sm:w-[45%] md:w-[30%] lg:w-[23%] bg-white rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            <TravelCard
              {...d}
              onNavigate={() => navigate(`/locations/${d.id}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestination;
