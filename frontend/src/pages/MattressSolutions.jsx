import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../assets/banner.jpeg";
import mattressImg from "../assets/Mattress.jpg";

const MattressSolutions = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={mattressImg}
            alt="Premium Mattress Solutions"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Mattress <span className="text-blue-500">Solutions</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Sleep Better, Live Better - Premium Comfort Engineered for You
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Rest is Not a Luxury, It's Essential
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Foram Furnishing by AJ's Interior World, we believe that good sleep is the foundation of a healthy life. That's why we offer a wide range of high-quality mattresses designed for comfort, durability, and proper body support. Each mattress is carefully selected to meet the highest standards of quality and performance.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mattress Collections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Foam Mattresses</h4>
                <p className="text-gray-600 text-sm">Soft, lightweight, and ideal for daily comfort with excellent cushioning support.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Spring Mattresses</h4>
                <p className="text-gray-600 text-sm">Strong support with long-lasting durability, perfect for traditional comfort seekers.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Orthopedic Mattresses</h4>
                <p className="text-gray-600 text-sm">Designed for back pain relief and spine alignment with medical-grade support.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Kids' Mattresses</h4>
                <p className="text-gray-600 text-sm">Safe, soft, and comfortable for growing children with hypoallergenic materials.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Couple Mattresses</h4>
                <p className="text-gray-600 text-sm">Spacious with motion isolation technology for undisturbed sleep for two.</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Balanced Mattresses</h4>
                <p className="text-gray-600 text-sm">Perfectly balanced comfort - neither too hard nor too soft for universal appeal.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>Premium quality materials for lasting comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>Long-lasting durability with extended warranty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>Custom size options for any bedroom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span>Health-focused designs for better sleep</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Mattresses?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">→</span>
                  <span>Improve sleep quality and overall health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">→</span>
                  <span>Better posture support throughout the night</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">→</span>
                  <span>Expert guidance for choosing the perfect fit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">→</span>
                  <span>Trusted by families across the region</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Different age groups need different support levels. Choosing the right mattress improves sleep quality, posture, and overall health. Our expert team helps you select the perfect mattress tailored to your specific needs.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-sm text-gray-600">Quality Assured</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Expert</div>
                <p className="text-sm text-gray-600">Team Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Warranty</div>
                <p className="text-sm text-gray-600">Peace of Mind</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready for Better Sleep?</h3>
            <p className="mb-6">Visit our showroom or contact us today to find your perfect mattress.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Collection
              </button>
              <Link to="/contactus" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• High-quality close-ups of different mattress textures and materials</li>
            <li>• People sleeping peacefully on different mattress types</li>
            <li>• Cross-section view showing mattress layers and construction</li>
            <li>• Family members enjoying quality sleep</li>
            <li>• Bedroom settings with perfectly made beds</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default MattressSolutions
