import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dubaiImg from "../assets/dubai.jpg";
import tokyoImg from "../assets/tokyo.webp";
import newyorkImg from "../assets/newyork.jpg";
import indiaImg from "../assets/india.jfif";

const locationsData = [
  {
    id: "dubai",
    name: "Dubai",
    img: dubaiImg,
    info: "Experience the magic of Dubai – from towering skyscrapers and luxury shopping to golden deserts and pristine beaches.",
    rating: 4.5,
    reviews: 200,
    hours: 8,
    days: 5,
    price: 10000,
  },
  {
    id: "tokyo",
    name: "Tokyo",
    img: tokyoImg,
    info: "Dive into the vibrant energy of Tokyo – a city where tradition meets the future.",
    rating: 5,
    reviews: 250,
    hours: 10,
    days: 6,
    price: 8000,
  },
  {
    id: "newyork",
    name: "New York",
    img: newyorkImg,
    info: "The city that never sleeps – explore iconic landmarks and endless energy.",
    rating: 4,
    reviews: 180,
    hours: 6,
    days: 4,
    price: 8000,
  },
  {
    id: "india",
    name: "India",
    img: indiaImg,
    info: "Explore diverse landscapes, vibrant culture, and historical wonders across India.",
    rating: 4.5,
    reviews: 220,
    hours: 12,
    days: 7,
    price: 7000,
  },
];

const PriceRanges = [
  { label: "Below ₹8,000", min: 0, max: 7999 },
  { label: "₹8,000 – ₹9,000", min: 8000, max: 9000 },
  { label: "Above ₹9,000", min: 9001, max: Infinity },
];

const Locations = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const filteredLocations = selectedPriceRange
    ? locationsData.filter(
        (loc) =>
          loc.price >= selectedPriceRange.min &&
          loc.price <= selectedPriceRange.max
      )
    : locationsData;

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i + 1 <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));

  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32 pt-28 pb-20 flex flex-col gap-14">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Locations
        </h1>
        <p className="mt-2 text-gray-500">
          Explore our top travel destinations.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-md mx-auto w-full">
        <div className="flex items-center justify-between px-5 py-3 bg-white border border-gray-200 rounded-lg">
          <p className="font-semibold">FILTERS</p>

          <span
            onClick={() => setOpenFilters(!openFilters)}
            className="lg:hidden cursor-pointer text-sm text-blue-600"
          >
            {openFilters ? "HIDE" : "SHOW"}
          </span>

          <span
            onClick={() => setSelectedPriceRange(null)}
            className="cursor-pointer text-sm text-blue-600"
          >
            CLEAR
          </span>
        </div>

        {/* Filter body */}
        <div
          className={`
            bg-white border border-t-0 border-gray-200 rounded-b-lg
            overflow-hidden transition-all duration-500
            ${openFilters ? "max-h-96" : "max-h-0"}
            lg:max-h-96
          `}
        >
          <div className="px-5 py-4">
            <p className="font-medium mb-3">Price Range</p>

            <div className="flex flex-col gap-3">
              {PriceRanges.map((range) => (
                <label
                  key={range.label}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPriceRange?.label === range.label}
                    onChange={() => setSelectedPriceRange(range)}
                    className="accent-blue-600"
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="flex flex-col gap-12">
        {filteredLocations.map((loc, index) => (
          <React.Fragment key={loc.id}>
            <div
              onClick={() => navigate(`/locations/${loc.id}`)}
              className="flex flex-col md:flex-row gap-6 cursor-pointer"
            >
              <img
                src={loc.img}
                alt={loc.name}
                className="w-full md:w-1/3 h-56 object-cover rounded-xl shadow"
              />

              <div>
                <h2 className="text-2xl font-semibold">{loc.name}</h2>
                <p className="text-gray-500 mt-2">{loc.info}</p>

                <div className="flex items-center gap-2 mt-2">
                  {renderStars(loc.rating)}
                  <span className="text-sm text-gray-500">
                    {loc.reviews}+ reviews
                  </span>
                </div>

                <div className="text-xs text-gray-400 mt-1">
                  {loc.hours} hours • {loc.days} days
                </div>

                <div className="mt-2 text-lg font-semibold">
                  ₹{loc.price.toLocaleString()}
                </div>
              </div>
            </div>

            {index !== filteredLocations.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Locations;
