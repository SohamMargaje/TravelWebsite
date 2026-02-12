import React, { forwardRef } from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Solo Traveller",
    review:
      "An amazing travel experience from start to finish! Everything was perfectly planned and stress-free. I’ll definitely book again.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Emily Carter",
    role: "Backpacker",
    review:
      "This was one of the best trips of my life. Great destinations, smooth planning, and amazing support throughout the journey.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Daniel Lee",
    role: "Family Traveller",
    review:
      "Super professional service! The trip was comfortable, well-organized, and truly memorable for my entire family. Loved it!!!",
    image: "https://i.pravatar.cc/150?img=56",
  },
];

const Testimonial = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id || "testimonials-section"}
      className="bg-slate-50 py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          What Our Travellers Say
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-center text-gray-600">
          Real experiences from real travellers who trusted us with their journeys.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-6">“{item.review}”</p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Testimonial;
