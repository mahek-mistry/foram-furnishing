import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import your images
import hero1 from "../../assets/about-hero.jpeg";
import hero2 from "../../assets/hero3.jpg";
import hero3 from "../../assets/hero2.png";

const Hero = () => {
  const slides = [
    {
      img: hero1,
      label: "PREMIUM INTERIOR SOLUTIONS",
      title: "Welcome to Foram Furnishing",
      desc: "Transform your space with stylish, comfortable, and durable furniture.",
    },
    {
      img: hero2,
      label: "MODERN DESIGNS ✨",
      title: "Stylish & Elegant Furniture",
      desc: "Discover furniture that reflects your lifestyle.",
    },
    {
      img: hero3,
      label: "LIMITED OFFER 🔥",
      title: "Upgrade Your Home Today",
      desc: "Best quality furniture at affordable prices.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Slider */}
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-screen shrink-0 relative"
          >
            {/* Image */}
            <img
              src={slide.img}
              alt="hero"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-6 md:px-16">
              <div className="max-w-xl text-white">

                {/* Label */}
                <span className="bg-blue-600 text-xs px-4 py-1 rounded-full">
                  {slide.label}
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="mt-4 text-gray-200">
                  {slide.desc}
                </p>

                {/* Button */}
                <div className="flex gap-4 mt-6">
                  <Link
                    to="/Contactus"
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
                  >
                    Click for Enquiry →
                  </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Hero;


