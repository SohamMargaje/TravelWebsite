import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroVideo from "./HeroVideo";
import FeaturedDestination from "./FeaturedDestination";
import Exclusiveoffers from "./Exclusiveoffers";
import Testimonial from "./Testimonial";
import NewsLetter from "./NewsLetter";

const Home = () => {
  const testimonialsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToTestimonials) {
      testimonialsRef.current?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <main className="flex flex-col w-full">
      <HeroVideo />
      <FeaturedDestination />
      <Exclusiveoffers />
      <Testimonial ref={testimonialsRef} id="testimonials-section" />
      <NewsLetter />
    </main>
  );
};

export default Home;

