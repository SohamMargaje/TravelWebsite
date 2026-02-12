import React from "react";
import FeaturedDestination from "./FeaturedDestination";

const Hero = () => {
  return (
    <div className="w-full">
      {/* HERO VIDEO */}
      <div className="relative w-full h-[65vh] overflow-hidden">
        <video
          src="/video.mp4"   // put video in public folder
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />

        {/* TEXT OVER VIDEO */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-lg mb-2">
            The Ultimate Travel Experience
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Discover Your Perfect Travel Destination
          </h1>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="mt-16 px-6">
        <FeaturedDestination />
      </div>
    </div>
  );
};

export default Hero;
