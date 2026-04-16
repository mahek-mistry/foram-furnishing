import React from 'react'
import { Link } from 'react-router-dom'
import sofaImg from "../assets/Sofa.jpg";

const SofaUpholstery = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={sofaImg}
            alt="Premium Sofa & Upholstery"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Sofa & <span className="text-pink-500">Upholstery</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Transform Your Furniture with Premium Fabrics and Expert Craftsmanship
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Luxury Comfort Redefined
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide high-quality sofa fabrics and upholstery services to give your furniture a fresh, luxurious look. Whether you're looking to reupholster an existing piece or seeking premium fabrics for new furniture, our expert craftsmen deliver exceptional results that combine style with durability.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Fabric Options & Collections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Jute Fabrics</h4>
                <p className="text-gray-600 text-sm">Natural, durable, and eco-friendly with a rustic aesthetic perfect for bohemian designs.</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Velvet</h4>
                <p className="text-gray-600 text-sm">Luxurious soft texture with premium feel, perfect for elegant and sophisticated spaces.</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Linen</h4>
                <p className="text-gray-600 text-sm">Breathable and comfortable natural fiber ideal for contemporary and minimalist interiors.</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Polyester</h4>
                <p className="text-gray-600 text-sm">Durable, stain-resistant, and easy to maintain for high-traffic family spaces.</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Leather</h4>
                <p className="text-gray-600 text-sm">Timeless elegance with superior durability, perfect for premium and executive furniture.</p>
              </div>
              <div className="bg-pink-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Blended Fabrics</h4>
                <p className="text-gray-600 text-sm">Custom blends combining the best properties for performance and aesthetics.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">✓</span>
                  <span>Durable and long-lasting fabric quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">✓</span>
                  <span>Wide range of colors and textures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">✓</span>
                  <span>Suitable for all interior styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">✓</span>
                  <span>Expert reupholstery and installation services</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">→</span>
                  <span>Extend furniture lifespan with quality reupholstery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">→</span>
                  <span>Refresh your space with new fabric aesthetics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">→</span>
                  <span>Cost-effective furniture renewal solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 font-bold">→</span>
                  <span>Personalized designs matching your style perfectly</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-pink-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our expert upholsterers combine traditional craftsmanship with modern techniques to deliver furniture that looks and feels incredible. We work with premium fabrics sourced from trusted mills and provide personalized service for every project, ensuring your furniture becomes a focal point of your home.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">Master</div>
                <p className="text-sm text-gray-600">Craftsmanship</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">Premium</div>
                <p className="text-sm text-gray-600">Fabric Selection</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">Custom</div>
                <p className="text-sm text-gray-600">Personalization</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Revitalize Your Furniture</h3>
            <p className="mb-6">Explore our premium fabric collection and bring new life to your favorite pieces.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Fabrics
              </button>
              <Link to="/contactus" className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition inline-block">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Swatches of different fabric textures arranged beautifully</li>
            <li>• Before and after reupholstery transformations</li>
            <li>• Close-up details of premium fabrics showing quality</li>
            <li>• Artisans working on upholstery projects</li>
            <li>• Finished sofas and furniture in elegant room settings</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default SofaUpholstery
