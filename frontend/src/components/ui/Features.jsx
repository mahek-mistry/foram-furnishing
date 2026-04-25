import React from "react";
import { useNavigate } from "react-router-dom";

import modern from "../../assets/modern.jpeg";
import traditional from "../../assets/traditional.jpeg";
import minimal from "../../assets/minimal.jpeg";
import luxury from "../../assets/luxury.jpeg";

const Feature = () => {
  const navigate = useNavigate();
  const styles = [
    { name: "Modern", image: modern },
    { name: "Traditional", image: traditional },
    { name: "Minimal", image: minimal },
    { name: "Luxury", image: luxury },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Interior Design Styles
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our curated aesthetic directions, each crafted to harmonize
            with your unique lifestyle and preferences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/style/${item.name.toLowerCase()}`)}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Text */}
              <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Feature;