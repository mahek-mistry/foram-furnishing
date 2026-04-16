import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from "../assets/Profile.jpg";

const ProfileShutters = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={profileImg}
            alt="Premium Profile Shutters"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Profile <span className="text-orange-500">Shutters</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Elegant Functionality - Style and Privacy Combined
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Beauty Meets Functionality
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Profile shutters add both functionality and style to your interiors, offering a modern solution for privacy and light control. Combining contemporary design with practical benefits, our shutters are the perfect choice for those seeking to elevate their interior aesthetic while enjoying premium performance.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Shutter Styles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Louvered Profile Shutters</h4>
                <p className="text-gray-600 text-sm">Elegant horizontal slats that provide excellent light control and visual appeal with modern aesthetics.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Wallpaper Profile Shutters</h4>
                <p className="text-gray-600 text-sm">Textured finish coordinating perfectly with wallpapers for a cohesive interior design statement.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Solid Panel Shutters</h4>
                <p className="text-gray-600 text-sm">Sleek solid panels offering complete privacy with clean, minimalist contemporary lines.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Hybrid Profile Shutters</h4>
                <p className="text-gray-600 text-sm">Combination design blending louvered and solid panels for versatile aesthetics and function.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span>Durable and stylish construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span>Easy maintenance and cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span>Customizable finishes in various colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">✓</span>
                  <span>Excellent light and privacy control</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Profile Shutters?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">→</span>
                  <span>Modern aesthetic that complements any interior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">→</span>
                  <span>Long-lasting performance with minimal upkeep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">→</span>
                  <span>Increases property value and curb appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 font-bold">→</span>
                  <span>Professional installation ensuring perfect fit</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our expert team helps you select and install profile shutters that perfectly match your interior design vision. From design consultation to expert installation, we ensure every detail meets your expectations and enhances your living spaces.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Custom</div>
                <p className="text-sm text-gray-600">Finishes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Premium</div>
                <p className="text-sm text-gray-600">Quality</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Expert</div>
                <p className="text-sm text-gray-600">Installation</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Elevate Your Interior Design</h3>
            <p className="mb-6">Discover the perfect profile shutters for your home or office.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Styles
              </button>
              <Link to="/contactus" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition inline-block">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Different shutter styles and finishes displayed</li>
            <li>• Close-ups of louvre mechanisms and construction</li>
            <li>• Complete interior installations showing shutters</li>
            <li>• Shutters in various open/closed positions</li>
            <li>• Detail shots showing quality and craftsmanship</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default ProfileShutters
