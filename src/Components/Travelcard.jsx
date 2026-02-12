import React from "react";

const TravelCard = ({
  title,
  address,
  price,
  rating,
  badge,
  img,
  onNavigate
}) => {
  return (
    <div
      onClick={onNavigate}
      className="relative h-72 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

      {badge && (
        <span className="absolute top-3 left-3 bg-white text-black px-3 py-1 text-xs font-semibold rounded-full z-10">
          {badge}
        </span>
      )}

      <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{address}</p>

        <div className="flex items-center gap-1 mt-2">
          <span className="font-semibold">{rating}</span>
          <span>★</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold">${price}</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate();
            }}
            className="bg-white text-black px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-200 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
