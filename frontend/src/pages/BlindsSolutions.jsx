import React from 'react'
import { Link } from 'react-router-dom'
import blindsImg from "../assets/Blinds.jpg";

const BlindsSolutions = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={blindsImg}
            alt="Modern Blinds Solutions"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Blinds <span className="text-indigo-500">Solutions</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Modern Light Control, Sleek Design - Perfect Privacy at Your Command
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Precision Control Meets Modern Aesthetics
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Blinds offer a sleek and modern alternative to curtains, giving you precise control over light and privacy. Our collection combines contemporary design with practical functionality, perfect for any interior style. Whether you prefer roller blinds, wooden blinds, or advanced smart blinds, we have the perfect solution for your space.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Blind Types & Collections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Roller Blinds</h4>
                <p className="text-gray-600 text-sm">Simple, functional, and elegant - perfect for minimalist and modern interiors.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Zebra Blinds</h4>
                <p className="text-gray-600 text-sm">Stylish zig-zag light control with alternating sheer and opaque stripes.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Wooden Blinds</h4>
                <p className="text-gray-600 text-sm">Premium natural look with warm aesthetics for traditional and classic spaces.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Honeycomb Blinds</h4>
                <p className="text-gray-600 text-sm">Energy-efficient insulation with superior thermal and acoustic properties.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">3-Zone Blinds</h4>
                <p className="text-gray-600 text-sm">Advanced light control with three independent sections for maximum flexibility.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Roman Fabric Blinds</h4>
                <p className="text-gray-600 text-sm">Soft and elegant folds that add a touch of sophistication to any room.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span>Space-saving design perfect for compact rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span>Easy maintenance with minimal cleaning required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span>Custom sizes available for any window</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">✓</span>
                  <span>Precise light and privacy control</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Blinds?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">→</span>
                  <span>Durable materials built to last for years</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">→</span>
                  <span>Modern designs that complement any décor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">→</span>
                  <span>Professional installation with perfect alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 font-bold">→</span>
                  <span>Energy-efficient options to reduce utilities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-indigo-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our extensive range of blind options ensures you'll find the perfect match for your interior style and functional needs. Whether you value minimalist aesthetics, premium materials, or smart technology, our expert team is here to guide your selection and ensure perfect installation.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Variety</div>
                <p className="text-sm text-gray-600">Wide Selection</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Quality</div>
                <p className="text-sm text-gray-600">Premium Materials</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">Service</div>
                <p className="text-sm text-gray-600">Expert Installation</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Control Your Light, Define Your Space</h3>
            <p className="mb-6">Discover the perfect blinds solution for your home or office.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Explore Collection
              </button>
              <Link to="/contactus" className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Different blind styles (roller, wooden, honeycomb) displayed side by side</li>
            <li>• Close-ups showing blind mechanisms and slat details</li>
            <li>• Rooms with blinds at various positions (open, half-open, closed)</li>
            <li>• Light control demonstration showing day/night settings</li>
            <li>• Installation in-progress showing professional craftsmanship</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BlindsSolutions
