import React from 'react'
import { Link } from 'react-router-dom'
import stretchImg from "../assets/Stretch.jpg";

const StretchCeiling = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={stretchImg}
            alt="Modern Stretch Ceiling"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Stretch <span className="text-cyan-500">Ceiling</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Modern Elegance Above - Seamless Ceilings for Contemporary Living
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Look Up to Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Stretch ceilings bring a modern and luxurious finish to your interiors, transforming ordinary spaces into sophisticated environments. Whether you're looking for sleek minimalism or artistic designs, our stretch ceilings combine aesthetics with superior functionality, creating the perfect finishing touch for any interior.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Stretch Ceiling Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">PVC Stretch Ceilings</h4>
                <p className="text-gray-600 text-sm">Glossy finish with superior moisture resistance, perfect for kitchens and bathrooms.</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Fabric Stretch Ceilings</h4>
                <p className="text-gray-600 text-sm">Matte finish with breathable properties, ideal for bedrooms and living spaces.</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Printed Design Ceilings</h4>
                <p className="text-gray-600 text-sm">Custom printed designs transforming ceilings into artistic focal points.</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">LED Integrated Ceilings</h4>
                <p className="text-gray-600 text-sm">Smart lighting integrated seamlessly creating ambient atmosphere and visual drama.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">✓</span>
                  <span>Smooth and seamless look without joints</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">✓</span>
                  <span>Moisture resistant protecting from water damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">✓</span>
                  <span>Modern aesthetic appeal elevating interior design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">✓</span>
                  <span>Hides imperfections and provides space flexibility</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Stretch Ceilings?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">→</span>
                  <span>Professional installation by certified experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">→</span>
                  <span>Customizable designs matching your vision perfectly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">→</span>
                  <span>Long-lasting quality ensuring years of performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-3 font-bold">→</span>
                  <span>Acoustic benefits reducing noise levels effectively</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-cyan-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our expert team specializes in stretch ceiling installations that combine form and function. From design consultation to flawless installation, we ensure your ceilings become a statement piece that complements your interior beautifully while providing practical benefits like moisture resistance and acoustic improvement.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">Custom</div>
                <p className="text-sm text-gray-600">Designs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">Expert</div>
                <p className="text-sm text-gray-600">Installation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">Premium</div>
                <p className="text-sm text-gray-600">Quality</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Elevate Your Space from Above</h3>
            <p className="mb-6">Discover the transformative power of stretch ceilings for your home.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Gallery
              </button>
              <Link to="/contactus" className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition inline-block">
                Request Design Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Complete room installations showcasing stretch ceiling aesthetics</li>
            <li>• Close-up details showing seamless edges and glossy/matte finishes</li>
            <li>• Rooms with LED integrated ceilings showing lighting effects</li>
            <li>• Different color options and finishes displayed</li>
            <li>• Installation process showing professional craftsmanship</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default StretchCeiling
