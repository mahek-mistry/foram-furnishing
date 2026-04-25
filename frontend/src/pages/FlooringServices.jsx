import React from 'react'
import { Link } from 'react-router-dom'
import flooringImg from "../assets/Flooring.jpg";

const FlooringServices = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={flooringImg}
            alt="Premium Flooring Solutions"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Flooring <span className="text-teal-500">Solutions</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Premium Floors That Define Your Space's Foundation and Style
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Build Your Foundation with Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Upgrade your space with elegant and durable flooring solutions that combine functionality with aesthetic appeal. From affordable PVC options to premium wooden finishes, we offer a comprehensive range of flooring solutions suited for every style and budget. Your floors are the foundation—make them exceptional.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Flooring Types & Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">PVC/Vinyl Flooring</h4>
                <p className="text-gray-600 text-sm">Affordable and water-resistant, perfect for kitchens and bathrooms with easy maintenance.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Wooden Flooring</h4>
                <p className="text-gray-600 text-sm">Natural and premium look that adds warmth and elegance to any interior space.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Herringbone Wooden</h4>
                <p className="text-gray-600 text-sm">Stylish patterned layout creating visual interest with sophisticated chevron design.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Carpet Flooring</h4>
                <p className="text-gray-600 text-sm">Available in roll-to-roll or tile-based options, perfect for comfort and acoustics.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Tile Flooring</h4>
                <p className="text-gray-600 text-sm">Durable, moisture-resistant and highly versatile for modern designs.</p>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Hybrid Flooring</h4>
                <p className="text-gray-600 text-sm">Combines the best of vinyl and laminate for superior durability and appeal.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Enhances interior appeal and home value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Comfortable underfoot with pleasant aesthetics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Easy maintenance and long-lasting durability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">✓</span>
                  <span>Wide range of colors, patterns and styles</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Flooring?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">→</span>
                  <span>Expert consultation for the perfect flooring choice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">→</span>
                  <span>Professional installation ensuring perfect finishing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">→</span>
                  <span>Competitive pricing with exceptional value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-3 font-bold">→</span>
                  <span>Warranty and after-sales support included</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-teal-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              From initial consultation to final installation, our expert team ensures every aspect of your flooring project meets the highest standards. We combine quality materials with skilled craftsmanship to deliver floors that are not only beautiful but built to last for decades.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Expert</div>
                <p className="text-sm text-gray-600">Professional Team</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Quality</div>
                <p className="text-sm text-gray-600">Premium Materials</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">Lasting</div>
                <p className="text-sm text-gray-600">Years of Durability</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Step Into Your Dream Space</h3>
            <p className="mb-6">Explore our premium flooring collection and find the perfect fit for your home.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Options
              </button>
              <Link to="/consultation" className="bg-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition inline-block">
                Schedule Design Consultation

              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Different flooring types displayed side by side</li>
            <li>• Close-up texture shots of wood, tile, and vinyl</li>
            <li>• Complete room installations showcasing flooring</li>
            <li>• Installation process showing professional craftsmanship</li>
            <li>• Before and after flooring transformations</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default FlooringServices
