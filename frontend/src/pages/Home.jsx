import React, { useEffect, useState } from "react";
import serviceImg from "../assets/service.jpeg";

import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import FeaturesProduct from "../components/ui/FeaturesProduct";

import { Link, useNavigate } from "react-router-dom";
import Footer from "@/components/ui/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Popup once
  useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 4500);

  return () => clearTimeout(timer);
}, []);

  const services = [
    {
      title: "Space Planning",
      desc: "Optimizing layout for maximum functionality and aesthetic flow.",
      icon: "📐",
    },
    {
      title: "Custom Furniture Design",
      desc: "Creating unique pieces tailored specifically to your space and taste.",
      icon: "🖌️",
    },
    {
      title: "Turnkey Execution",
      desc: "Hassle-free project management from start to finish.",
      icon: "💼",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "Discussing your vision, needs, and design ideas.",
    },
    {
      number: "02",
      title: "Design Concept",
      desc: "Tailored layouts, moodboards and 3D concepts.",
    },
    {
      number: "03",
      title: "Refinement",
      desc: "Materials, finishes and final detailing.",
    },
    {
      number: "04",
      title: "Execution",
      desc: "Smooth installation and final handover.",
    },
  ];

  const handleEstimate = () => {
    setShowPopup(false);
    navigate("/estimate");
  };

  return (
    <div>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 relative text-center animate-fadeIn">

            {/* Close */}
            <button
              onClick={() =>
                setShowPopup(false)
              }
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-black"
            >
              ×
            </button>

            <p className="text-cyan-600 font-semibold uppercase text-sm">
              Special Offer
            </p>

            <h2 className="text-3xl font-bold mt-3 text-gray-900">
              Get Free Estimate
            </h2>

            <p className="text-gray-500 mt-4">
              Get personalized pricing for your home interiors in just 2 minutes.
            </p>

            <button
              onClick={handleEstimate}
              className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold"
            >
              Start Estimate
            </button>

            <button
              onClick={() =>
                setShowPopup(false)
              }
              className="w-full mt-3 border py-3 rounded-xl"
            >
              Maybe Later
            </button>

          </div>

        </div>
      )}

      {/* HERO */}
      <Hero />

      <Features />

      <FeaturesProduct />

      {/* SERVICES */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            <h2 className="text-4xl font-bold text-gray-800">
              Expert Interior Services
            </h2>

            <p className="text-gray-500 mt-4 mb-8 max-w-lg">
              From concept to final installation, we handle every part of your interior journey.
            </p>

            {services.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white p-5 rounded-xl shadow-sm mb-4"
              >
                <div className="text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* RIGHT */}
          <div>
            <img
              src={serviceImg}
              alt="service"
              className="rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-blue-700 text-white text-center">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Our Seamless Process
          </h2>

          <p className="mt-3 text-blue-100">
            Experience a smooth journey to your dream home.
          </p>

          <div className="grid md:grid-cols-4 gap-10 mt-14">

            {steps.map((step, index) => (
              <div key={index}>

                <div className="w-16 h-16 mx-auto bg-white text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>

                <h3 className="mt-6 font-semibold text-lg">
                  {step.title}
                </h3>

                <p className="text-blue-100 text-sm mt-2">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-gray-800">
            Ready to Redefine Your Space?
          </h2>

          <p className="text-gray-500 mt-4">
            Contact our expert designers today for a complimentary consultation.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

            <Link
              to="/Contactus"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get Started Now
            </Link>

            <Link
              to="/estimate"
              className="bg-black text-white px-8 py-4 rounded-xl font-semibold"
            >
              Get Free Estimate
            </Link>

          </div>

        </div>

      </section>
 <Footer/>
    </div>
   
  );
};

export default Home;