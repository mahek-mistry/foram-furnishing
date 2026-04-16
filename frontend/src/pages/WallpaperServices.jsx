import React from 'react'
import { Link } from 'react-router-dom'
import wallpaperImg from "../assets/Wallpaper.jpg";

const WallpaperServices = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Banner Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={wallpaperImg}
            alt="Premium Wallpaper Services"
            className="w-full h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Wallpaper <span className="text-amber-500">Services</span>
              </h2>
              <p className="mt-4 text-gray-200">
                Transform Walls into Artistic Expressions with Premium Wallpapers
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-md p-10 max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Walls Deserve Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Transform your walls into statement pieces with our premium wallpaper collection. From ready-made stylish designs to completely customized patterns, we help you create spaces that reflect your personality and style. Our wallpapers combine aesthetic appeal with durability for long-lasting beauty.
            </p>
          </div>

          {/* Types Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Wallpaper Collections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Roll Wallpapers</h4>
                <p className="text-gray-600 text-sm">Ready-made stylish designs with consistent patterns and premium finishes instantly available.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Customized Wallpapers</h4>
                <p className="text-gray-600 text-sm">Designed exactly as per your choice with personalized patterns, colors, and dimensions.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Textured Wallpapers</h4>
                <p className="text-gray-600 text-sm">3D embossed designs that add depth and dimension to your interior spaces.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Designer Collections</h4>
                <p className="text-gray-600 text-sm">Curated collections from renowned designers bringing international trends to your home.</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">✓</span>
                  <span>Extremely easy installation by our professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">✓</span>
                  <span>Unique designs that stand out and impress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">✓</span>
                  <span>Long-lasting finish resistant to fading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">✓</span>
                  <span>Washable and durable for high-traffic areas</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Wallpapers?</h3>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">→</span>
                  <span>Instant room transformation with visual impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">→</span>
                  <span>Complete customization to match your vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">→</span>
                  <span>Professional installation ensuring perfect alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 font-bold">→</span>
                  <span>Access to exclusive designer collections</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mb-12 bg-amber-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Foram Furnishing?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team of experienced professionals ensures that every wallpaper installation is executed flawlessly. We offer design consultation, quality assurance, and premium installation services to transform your spaces into stunning showcases that reflect your unique style and personality.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">Design</div>
                <p className="text-sm text-gray-600">Expert Consultation</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">Premium</div>
                <p className="text-sm text-gray-600">Quality Materials</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">Professional</div>
                <p className="text-sm text-gray-600">Installation</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Transform Your Walls Today</h3>
            <p className="mb-6">Discover endless design possibilities with our premium wallpaper collection.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                View Designs
              </button>
              <Link to="/contactus" className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition inline-block">
                Schedule Installation
              </Link>
            </div>
          </div>
        </div>

        {/* Image Ideas Section */}
        <div className="mt-12 bg-gray-50 p-6 rounded-xl max-w-4xl mx-auto">
          <h4 className="font-semibold text-gray-700 mb-3">💡 Image Suggestions:</h4>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Close-up shots of wallpaper patterns and textures</li>
            <li>• Complete room settings showcasing wallpaper designs</li>
            <li>• Before and after wallpaper transformations</li>
            <li>• Installation process showing professional application</li>
            <li>• Detail shots showing wallpaper quality and finishing</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default WallpaperServices
