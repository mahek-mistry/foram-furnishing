import React, { useState } from "react";
import banner from "../assets/service.jpeg";
import Footer from "@/components/ui/Footer";

const StepOne = ({ next, saveFormData, initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.propertyType) {
      newErrors.propertyType =
        "Select property type";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Enter location";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Next
  const handleNext = () => {
    if (validateForm()) {
      saveFormData(formData);
      next();
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">

        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

          {/* Left */}
          <div className="p-8 md:p-10">

            <p className="text-cyan-600 text-sm font-semibold uppercase">
              Step 1 of 3
            </p>

            <h2 className="text-3xl font-bold mt-2 text-gray-900">
              Quick Estimate
            </h2>

            <p className="text-gray-500 mt-2 mb-6">
              Fill your details to continue.
            </p>

            {/* Name */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <input
                type="text"
                name="phone"
                maxLength="10"
                placeholder="Contact Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Property */}
            <div className="mb-4">
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">
                  Property Type
                </option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4 BHK</option>
                <option>Duplex</option>
              </select>

              {errors.propertyType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.propertyType}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="mb-6">
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
              />

              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.location}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              onClick={handleNext}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Continue →
            </button>

          </div>

          {/* Right */}
          <div className="hidden md:block relative">

            <img
              src={banner}
              alt="Interior"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30 flex items-end p-6">

              <div className="text-white">
                <h3 className="text-2xl font-bold">
                  Smart Interior Solutions
                </h3>

                <p className="mt-2 text-sm text-white/90">
                  Elegant designs tailored for your home.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default StepOne;