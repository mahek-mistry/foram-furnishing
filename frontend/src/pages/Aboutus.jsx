import React from "react";
import hero from "../assets/about-hero.jpeg";
import Crafting from "../assets/crafting.jpeg";
import Materials from "../assets/materials.jpeg";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="relative h-[400px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="max-w-xl mx-auto text-gray-200">
            Crafting comfort and elegance since 2022. Discover the heritage of
            meticulous craftsmanship and timeless design.
          </p>
        </div>
      </div>

      {/* MISSION VISION */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Driven by Purpose
          </h2>

          <p className="text-gray-500 mb-14">
            We don't just build furniture; we create the foundation for your
            most cherished memories.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                ✨
              </div>

              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>

              <p className="text-gray-500">
                To provide bespoke, high-quality furnishing solutions that
                harmonize comfort, elegance, and functionality. We strive to
                enhance the living spaces of our clients through sustainable
                practices and unmatched artistry.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                👁
              </div>

              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>

              <p className="text-gray-500">
                To be the global benchmark for excellence in the furnishing
                industry, recognized for our commitment to environmental
                stewardship and our ability to inspire beauty in every home
                across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
          <div>
            <h3 className="text-4xl font-bold">5+</h3>
            <p className="text-sm mt-2">YEARS EXPERIENCE</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">1k</h3>
            <p className="text-sm mt-2">HOMES FURNISHED</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-sm mt-2">MASTER ARTISANS</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">5</h3>
            <p className="text-sm mt-2">AWARDS WON</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Behind the Scenes
            </h2>

            <p className="text-gray-500 max-w-2xl">
              The secret to our quality lies in our process. From the selection
              of sustainably sourced timber to the final hand-polished finish.
            </p>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large Image */}
            <div className="md:col-span-2">
              <img
                src={Crafting}
                alt="Crafting process"
                className="rounded-xl shadow-md w-full h-full object-cover"
              />
            </div>

            {/* Small Image */}
            <div>
              <img
                src={Materials}
                alt="Materials"
                className="rounded-xl shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-blue-700 text-white rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Craftsmanship
            </h2>

            <p className="text-blue-100 max-w-xl mx-auto mb-8">
              Visit our showroom to feel the textures and see the detail of our
              latest collection in person.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/contact"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium"
              >
                <Link to={"/Contactus"}>Book a Consultation</Link>
              </a>

              {/* <a
                href="/showroom"
                className="border border-white px-6 py-3 rounded-lg"
              >
                Explore Showrooms
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
