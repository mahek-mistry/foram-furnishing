import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/lo.png";

const Footer = () => {
  return (
    <footer className="bg-[#081a3a] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            
            <img
                        src={logo}
                        alt="Foram Furnishing"
                        className="w-7 h-7 object-contain"
                      />
                      FORAM <span className="text-blue-600">FURNISHING</span>
          </div>

          <p className="text-sm leading-6 mb-4">
            Transform your space with stylish, comfortable, and durable
            furniture.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.instagram.com/foram_furnishing_?igsh=MWlhb3g5cmNlaWdoMw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/service">Service</Link></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/product">Collections</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-right">
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4 text-sm">
            <p>📍 202, Silver Radiance One Besides Pragati Grand Hotel, Nr Zydus Hospital Hebatpur, Thaltej Rd, Thaltej, Ahmedabad, Gujarat 380059</p>
            <p>📞 9727516054</p>
            <p>✉ hello@foramfurnishing.com</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2026 Foram Furnishing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;