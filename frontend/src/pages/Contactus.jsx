import { useState } from "react";
import axios from "axios";




const Contactus = () => {
  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  inquiryType: "",
  projectStyle: "",
  spaceType: "",
  location: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:8000/api/v1/contact", formData);
    alert("Message sent successfully ✅");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "",
      projectStyle: "",
      spaceType: "",
      location: "",
      message: "",
    });
  } catch (error) {
    console.log(error);
    alert("Something went wrong ❌");
  }
};
  return (
    <section className="bg-gray-100 py-30 px-30">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Get in Touch
          </h1>
          <p className="text-gray-500 max-w-xl">
            We'd love to hear from you. Whether you have a question about our
            collections or need a bespoke interior solution, our team is here to
            help.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT FORM */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-6">📧 Send us a message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border rounded-lg p-3 mt-1"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Email Address</label>
                  <input
                    type="email"
                    placeholder="abc@example.com"
                    className="w-full border rounded-lg p-3 mt-1"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone + Inquiry Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+91 9876543210"
                    className="w-full border rounded-lg p-3 mt-1"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Inquiry Type</label>
                  <select 
                  className="w-full border rounded-lg p-3 mt-1"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="interior">Interior Design</option>
                    <option value="furniture">Furniture</option>
                  </select>
                </div>
              </div>

              {/* Project Style + Space Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Project Style</label>
                  <select 
                  className="w-full border rounded-lg p-3 mt-1"
                  name="projectStyle"
                  value={formData.projectStyle}
                  onChange={handleChange}
                  required
                  >
                    <option value="">Select Style</option>
                    <option value="modern">Modern</option>
                    <option value="traditional">Traditional</option>
                    <option value="minimal">Minimal</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Space Type</label>
                  <input
                    type="text"
                    placeholder="e.g. 2BHK, Kitchen, Office"
                    className="w-full border rounded-lg p-3 mt-1"
                    name="spaceType"
                    value={formData.spaceType}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="text-sm text-gray-600">
                  Project Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ahmedabad, Satellite"
                  className="w-full border rounded-lg p-3 mt-1"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your requirements..."
                  className="w-full border rounded-lg p-3 mt-1"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message ➤
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Connect with Us</h2>

            {/* Address */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-4">
              <div className="text-blue-600 text-xl">📍</div>
              <div>
                <p className="font-medium">Visit our Showroom</p>
                <p className="text-gray-500 text-sm">
                  202, Silver Radiance One Besides Pragati Grand Hotel, Nr Zydus
                  Hospital Hebatpur, Thaltej Rd, Thaltej, Ahmedabad, Gujarat
                  380059
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-4">
              <div className="text-blue-600 text-xl">📞</div>
              <div>
                <p className="font-medium">Call Us Directly</p>
                <p className="text-gray-500 text-sm">
                  +91 9898384604 <br />
                  +91 9876543210
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-5 rounded-xl shadow flex gap-4">
              <div className="text-blue-600 text-xl">🕒</div>
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-gray-500 text-sm">
                  Mon - Sat: 10:00 AM - 8:00 PM <br />
                  Sunday: 11:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <iframe
                title="Foram Furnishing Hebatpur Ahmedabad"
                src="https://maps.google.com/maps?q=Hebatpur%20Thaltej%20Ahmedabad%20Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;