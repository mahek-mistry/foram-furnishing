import React from 'react'
import { Link } from 'react-router-dom'
import bedImg from "../assets/Bed.jpg";

const BedLinenCollection = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={bedImg}
            alt="Premium Bed Linen Collection"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Bed Linen <span className="text-rose-500">Collection</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Sleep in Luxury - Premium Comfort for Your Perfect Bedroom
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Complete Your Dream Bedroom
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Complete your bedroom with our soft and stylish bed linen collection. From luxurious bedsheets to elegant cushions and comfortable comforters, every item is carefully selected for premium quality, comfort, and aesthetic appeal. Transform your bedroom into a sanctuary of relaxation.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bed Linen Collection</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Premium Bedsheets</h4>
                <p className="text-gray-600 text-sm">High thread count cotton with smooth, luxurious feel perfect for restful sleep.</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Designer Cushions</h4>
                <p className="text-gray-600 text-sm">Decorative cushions in various sizes and patterns to complement your bedroom décor.</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Comforters</h4>
                <p className="text-gray-600 text-sm">Lightweight yet warm comforters filled with premium materials for ultimate coziness.</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Pillows</h4>
                <p className="text-gray-600 text-sm">Supportive and comfortable pillows available in different firmness levels.</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Bolsters</h4>
                <p className="text-gray-600 text-sm">Cylindrical pillows for support and aesthetic appeal in your bedroom.</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Bed Runners</h4>
                <p className="text-gray-600 text-sm">Elegant decorative runners adding a finishing touch to your bed.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">✓</span>
                  <span>Premium quality fabrics ensuring durability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">✓</span>
                  <span>Comfortable and skin-friendly materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">✓</span>
                  <span>Elegant designs in multiple color options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">✓</span>
                  <span>Easy care and machine washable</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Collection?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">→</span>
                  <span>Transform your bedroom into a luxurious retreat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">→</span>
                  <span>Improve sleep quality with premium comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">→</span>
                  <span>Hypoallergenic options for sensitive skin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rose-600 mr-3 font-bold">→</span>
                  <span>Complete bedroom styling with coordinated pieces</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-rose-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our bed linen collection combines luxury with practicality, featuring premium fabrics that feel incredible against your skin. From selecting the perfect bedsheet to coordinating cushions and comforters, we help you create a cohesive bedroom design that's both beautiful and supremely comfortable.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">Premium</div>
                <p className="text-sm text-gray-600">Quality Fabrics</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">Comfortable</div>
                <p className="text-sm text-gray-600">Luxurious Feel</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">Stylish</div>
                <p className="text-sm text-gray-600">Elegant Designs</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-rose-600 to-rose-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Create Your Perfect Bedroom</h3>
            <p className="mb-6">Explore our premium bed linen collection and enhance your sleep experience.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Shop Collection
              </button>
              <Link to="/consultation" className="bg-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition inline-block">
                Schedule Design Consultation

              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Beautifully styled bedroom with complete bed linen setup</li>
            <li>• Close-up shots of fabric textures showing quality</li>
            <li>• Flat lay of coordinated bedsheet, pillows, and cushions</li>
            <li>• Detailed views of fabric weave and pattern details</li>
            <li>• Styled bedroom scenes showing different linen combinations</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BedLinenCollection
