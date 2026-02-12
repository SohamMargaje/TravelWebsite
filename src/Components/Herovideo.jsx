import React from "react";
import heroVideo from "../assets/Videobg.mp4";

const HeroVideo = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="bg-[#49B9FF]/50 px-4 py-1 rounded-full mb-4 text-sm">
          The Ultimate Travel Experience
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover Your Perfect <br /> Travel Destination
        </h1>
      </div>
    </div>
  );
};

export default HeroVideo;
