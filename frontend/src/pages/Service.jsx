import React from 'react'
import { Link } from 'react-router-dom'
import banner from "../assets/banner.jpeg";
import mattressImg from "../assets/Mattress.jpg";
import curtainImg from "../assets/Curtain.jpg";
import blindsImg from "../assets/Blinds.jpg";
import sofaImg from "../assets/Sofa.jpg";
import wallpaperImg from "../assets/Wallpaper.jpg";
import flooringImg from "../assets/Flooring.jpg";
import profileImg from "../assets/Profile.jpg";
import bedImg from "../assets/Bed.jpg";
import stretchImg from "../assets/Stretch.jpg";
import {
  Wrench,
  Ruler,
  Building,
  Grid,
  Compass,
  Handshake,
  Palette,
  Package,
  Sofa,
} from "lucide-react";




const Service = () => {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">

      {/* ================= Banner Section ================= */}
      <div className="relative rounded-2xl overflow-hidden mb-16">

        <img
          src={banner}
          alt="Banner"
          className="w-full h-[350px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <div className="text-white max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold">
              Elevate Your Space with{" "}
              <span className="text-blue-500">
                Foram Furnishing
              </span>
            </h2>

            <p className="mt-4 text-gray-200">
              Sophisticated interior solutions tailored to your unique style
              and professional needs. Crafting spaces that inspire.
            </p>
          </div>
        </div>
      </div>

      {/* ================= Heading ================= */}
      <div className="flex flex-col md:flex-row justify-between mb-10">
        <div>
          <p className="text-blue-600 text-sm font-semibold uppercase">
            Premium Selection
          </p>

          <h2 className="text-3xl font-bold text-gray-800">
            Our Signature Solutions
          </h2>
        </div>

        <p className="text-gray-500 max-w-md mt-4 md:mt-0">
          Expertly curated aesthetic spaces designed for maximum comfort
          and professional impact.
        </p>
      </div>

      {/* ================= Cards ================= */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <Link to="/service/mattress-solutions" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={mattressImg}
              alt="Mattress Solutions"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-blue-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Package className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Mattress Solutions
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Premium quality mattresses designed for ultimate comfort and support.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-blue-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/service/curtain-designing" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={curtainImg}
              alt="Curtain Designing"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-purple-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Palette className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
              Curtain Designing
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Custom curtain designs tailored to your aesthetic preferences.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-purple-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                <span className="text-purple-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/service/blinds-solutions" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={blindsImg}
              alt="Blinds Solutions"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-indigo-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Grid className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
              Blinds Solutions
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Elegant blinds that combine functionality with modern design.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-indigo-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                <span className="text-indigo-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 4 */}
        <Link to="/service/sofa-upholstery" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={sofaImg}
              alt="Sofa & Upholstery"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-pink-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sofa className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
              Sofa & Upholstery
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Luxurious sofas and upholstery services for your dream space.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-pink-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-300">
                <span className="text-pink-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 5 */}
        <Link to="/service/wallpaper-services" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={wallpaperImg}
              alt="Wallpaper Services"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-amber-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Palette className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
              Wallpaper Services
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Transform your walls with premium wallpaper installations.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-amber-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-300">
                <span className="text-amber-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 6 */}
        <Link to="/service/flooring-solutions" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={flooringImg}
              alt="Flooring Solutions"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-teal-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Grid className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
              Flooring Solutions
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Durable and beautiful flooring options for every room.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-teal-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                <span className="text-teal-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 7 */}
        <Link to="/service/profile-shutters" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={profileImg}
              alt="Profile Shutters"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-orange-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Wrench className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              Profile Shutters
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Modern profile shutters for enhanced privacy and style.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-orange-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                <span className="text-orange-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 8 */}
        <Link to="/service/bed-linen-collection" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={bedImg}
              alt="Bed Linen Collection"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-rose-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Package className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
              Bed Linen Collection
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Premium bed linens for ultimate comfort and elegance.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-rose-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-300">
                <span className="text-rose-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Card 9 */}
        <Link to="/service/stretch-ceiling" className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer block">
          <div className="relative overflow-hidden h-56">
            <img
              src={stretchImg}
              alt="Stretch Ceiling"
              className="rounded-t-xl h-56 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-3 right-3 bg-cyan-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Building className="w-5 h-5" />
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
              Stretch Ceiling
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Innovative stretch ceiling solutions for modern interiors.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-cyan-600 text-sm font-semibold">Learn More</span>
              <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                <span className="text-cyan-600 group-hover:text-white transition-colors duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </section>
    <section className="bg-gray-100 py-20 px-6 md:px-16">

      {/* ===================== CATALOG SECTION ===================== */}
      <div className="bg-white rounded-2xl shadow-md p-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Comprehensive Furnishing Catalog
          </h2>

          <p className="text-gray-500 mt-3">
            Detailed professional services spanning from residential
            enhancements to large-scale commercial implementations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Ruler className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Specialized Rug & Carpet Installation
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Expert anchoring and precision seaming for wall-to-wall
                installations ensuring acoustic performance and durability.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Wrench className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Executive Furniture Assembly
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Certified technicians handle logistics, unpacking and
                precision leveling according to manufacturer standards.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Grid className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Global Textile Sourcing
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Worldwide sourcing network delivering premium fabrics
                with sustainability certification for commercial use.
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Building className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold">
                Strategic Corporate Staging
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Turnkey interior setups designed to enhance productivity
                and accelerate real estate presentation.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ===================== GROW WITH FORAM ===================== */}
      <div className="mt-24 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          Grow With Foram
        </h2>

        <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded"></div>

        <p className="text-gray-500 max-w-2xl mx-auto">
          We forge long-term strategic alliances with industry leaders to
          deliver unprecedented interior excellence and creative synergy.
        </p>

        {/* Partner Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {[
            {
              icon: <Compass />,
              title: "Architects",
              text: "Seamless technical integration into structural blueprints with CAD support.",
            },
            {
              icon: <Handshake />,
              title: "Developers",
              text: "Bulk procurement and luxury staging solutions increasing property value.",
            },
            {
              icon: <Palette />,
              title: "Designers",
              text: "Exclusive trade privileges and logistics support for creators.",
            },
            {
              icon: <Package />,
              title: "Suppliers",
              text: "Direct collaboration with global textile and fabrication partners.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="bg-blue-100 w-12 h-12 flex items-center justify-center mx-auto rounded-lg text-blue-600">
                {item.icon}
              </div>

              <h3 className="font-semibold mt-4">{item.title}</h3>

              <p className="text-gray-500 text-sm mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* BLUE CTA BOX */}
        <div className="bg-blue-700 text-white rounded-2xl mt-16 p-10 flex flex-col md:flex-row justify-between items-center text-left shadow-lg">

          <div>
            <h3 className="text-2xl font-semibold">
              Elite Professional Network
            </h3>

            <p className="text-blue-100 mt-3 max-w-xl">
              Our Trade Program offers priority scheduling,
              volume-based pricing and dedicated account management
              for professional partners.
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-center md:text-right">
            <p className="text-blue-200 text-sm uppercase">
              Connect With Us
            </p>

            <a
              href="mailto:partners@foram.com"
              className="text-xl font-semibold"
            >
              partners@foram.com
            </a>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Service