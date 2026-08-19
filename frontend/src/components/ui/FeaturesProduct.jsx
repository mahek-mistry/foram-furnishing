import React from "react";

import sofa from "../../assets/sofa.jpeg";
import table from "../../assets/table.jpeg";
import chair from "../../assets/chair.jpeg";
import lamp from "../../assets/lamp.jpeg";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const products = [
    {
      category: "LIVING ROOM",
      name: "Royal Velvet Sofa",
      price: "₹2,499",
      image: sofa ,
    },
    {
      category: "ACCENT PIECES",
      name: "Carrara Marble Table",
      price: "₹899",
      image: table,
    },
    {
      category: "DINING ROOM",
      name: "Nordic Dining Set",
      price: "₹1,200",
      image: chair,
    },
    {
      category: "LIGHTING",
      name: "Eclipse Floor Lamp",
      price: "₹450",
      image: lamp,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4" >
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
            <p className="text-gray-500 mt-1">
              Bespoke pieces selected for the modern home.
            </p>
          </div>

          {/* View All Link */}
          <a
            href="/products"
            className="text-blue-600 font-medium hover:underline"
          >
            <Link to="/Product">View All Collection →</Link>

            
          </a>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={item.image}  onClick={() => navigate("/product")}
                alt={item.name}
                className="w-full h-64 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-blue-600 font-semibold">
                  {item.category}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mt-1">
                  {item.name}
                </h3>

                <p className="text-blue-600 font-bold mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;