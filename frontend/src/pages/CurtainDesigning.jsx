import React from 'react'
import { Link } from 'react-router-dom'
import curtainImg from "../assets/Curtain.jpg";

const CurtainDesigning = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={curtainImg}
            alt="Premium Curtain Designing"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Curtain <span className="text-purple-500">Designing</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Elegance Framed - Designer Curtains That Define Your Space
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              More Than Just Window Coverings
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Curtains are not just window coverings—they define the mood and elegance of your space. We provide designer curtains crafted with premium fabrics and modern styles that transform any room into a sophisticated sanctuary. Every detail matters, from the fabric selection to the pleat design.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Curtain Styles & Collections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Arabian Ripple Fold</h4>
                <p className="text-gray-600 text-sm">Smooth and luxurious wave design that creates an elegant continuous fold effect.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">3-Pleat Curtains</h4>
                <p className="text-gray-600 text-sm">Classic and elegant design with traditional triple pleats for timeless appeal.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">2-Pleat Curtains</h4>
                <p className="text-gray-600 text-sm">Minimal and modern design that offers simplicity with sophisticated style.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Box Pleat Curtains</h4>
                <p className="text-gray-600 text-sm">Structured and stylish with sharp angular folds for contemporary interiors.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Features</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>Double curtains (sheer + blackout/rain protection)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>Branded designer fabrics from renowned mills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>Fully customized designs for your exact vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">✓</span>
                  <span>Professional installation and fitting services</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">→</span>
                  <span>Enhances interior aesthetics and style quotient</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">→</span>
                  <span>Controls light and privacy with precision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">→</span>
                  <span>Improves room ambiance and mood</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 font-bold">→</span>
                  <span>Temperature control and energy efficiency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Curtain Designs?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our expert designers work with you to create custom curtain solutions that perfectly complement your interior. From fabric selection to pleat style, every aspect is tailored to your preferences and requirements. We combine aesthetics with functionality to deliver curtains that are as beautiful as they are practical.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Designer</div>
                <p className="text-sm text-gray-600">Curated Collection</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Custom</div>
                <p className="text-sm text-gray-600">Made to Order</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Premium</div>
                <p className="text-sm text-gray-600">Quality Fabrics</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Frame Your Dreams</h3>
            <p className="mb-6">Explore our designer curtain collection and transform your windows into statement pieces.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Fabrics
              </button>
              <Link to="/consultation" className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition inline-block">
                Schedule Design Consultation

              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Close-ups of premium fabric textures and patterns</li>
            <li>• Different curtain pleat styles displayed elegantly</li>
            <li>• Complete room settings with curtains creating ambiance</li>
            <li>• Detail shots showing fabric quality and craftsmanship</li>
            <li>• Before and after room transformations with curtains</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default CurtainDesigning
