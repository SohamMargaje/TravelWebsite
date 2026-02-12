import React from "react";
import { useNavigate } from "react-router-dom";

const Exclusiveoffers = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/locations");
    window.scrollTo(0, 0); // scroll to top after navigation
  };

  return (
    <div className="bg-white shadow-sm w-full">
      <div className="px-8 py-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-semibold">
              Exclusive Offers
            </h2>
            <p className="mt-2 text-gray-500">
              Take advantage of our limited time offers
            </p>
          </div>

          {/* RIGHT */}
          <button
            onClick={handleNavigate}
            className="mt-6 md:mt-0 cursor-pointer font-medium hover:underline transition"
          >
            View All Offers
          </button>

        </div>
        
      </div>
    </div>
  );
};

export default Exclusiveoffers;
