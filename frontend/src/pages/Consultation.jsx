import React, { useState } from 'react';
import axios from 'axios';

const SERVICE_OPTIONS = [
  'Mattresses',
  'Curtains',
  'Blinds',
  'Sofa Fabrics',
  'Wallpapers',
  'Wooden Flooring',
  'Designer Sofa Fabrics',
  'Bed Linen',
  'Stretch Ceiling',
  'Home Furnishing',
];

const SUBSERVICE_MAP = {
  Mattresses: [
    'Foam Mattress',
    'Spring Mattress',
    'Ortho Mattress',
    'Kids Mattress',
    'Couple Mattress',
    'Backup Mattress',
    'Rid Comfort Mattress',
    'Hospital / Hotel Mattress',
  ],
  Curtains: [
    'Arabian Curtains',
    '3 Pleats Curtains',
    '2 Pleats Curtains',
    'Box Pleats Curtains',
    'Double Curtains',
    'Customized Curtains',
  ],
  Blinds: [
    'Roller Blinds',
    'Zebra Blinds',
    'Wooden Blinds',
    'Honeycomb Blinds',
    '3 Zone Blinds',
    'Roman Fabric Blinds',
  ],
  'Sofa Fabrics': ['Jute', 'Velvet', 'Linen', 'Poly', 'Leather'],
  Wallpapers: ['Roll Wallpapers', 'Customized Wallpapers'],
  'Wooden Flooring': [
    'PVC / Vinyl Flooring',
    'Wooden Flooring',
    'Helinshore Flooring',
    'Carpet Roll Flooring',
    'Tile Base Flooring',
  ],
  'Designer Sofa Fabrics': ['Sofa', 'Dining Chair', 'Lounge Chair', 'Recliner Chair'],
  'Bed Linen': ['Bed Sheet', 'Cushion', 'Comforter', 'Pillows', 'Bolster'],
  'Stretch Ceiling': ['PVC Stretch Ceiling', 'Fabric Stretch Ceiling'],
  'Home Furnishing': ['1BHK', '2BHK', '3BHK', '4BHK', 'Duplex', 'Office'],
};

const BUDGET_OPTIONS = [
  'Under 10k',
  '10k-25k',
  '25k-50k',
  '50k-1Lakh',
  'Above 1Lakh',
];

const Consultation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    service: '',
    subservice: '',
    size: '',
    budget: '',
    consultationType: 'Call',
    siteVisit: 'Yes',
    photos: [],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const subserviceOptions = formData.service ? SUBSERVICE_MAP[formData.service] || [] : [];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        photos: files ? Array.from(files) : [],
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'service') {
      setFormData((prev) => ({
        ...prev,
        service: value,
        subservice: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'photos') {
          value.forEach((file) => payload.append('photos', file));
          return;
        }
        payload.append(key, value);
      });

      await axios.post('http://localhost:8000/api/v1/contact', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('Consultation request sent successfully. We will reach out within 24 hours.');
      setFormData({
        fullName: '',
        mobileNumber: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        service: '',
        subservice: '',
        size: '',
        budget: '',
        consultationType: 'Call',
        siteVisit: 'Yes',
        photos: [],
        message: '',
      });
    } catch (error) {
      console.error(error);
      setErrorMessage('Unable to submit right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Consultation Request</h1>
          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Fill out the form below and our team will contact you within 24 hours.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Why choose this consultation?</h2>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li>• Personalized service recommendation for your project.</li>
                <li>• Custom subservice options based on selected category.</li>
                <li>• Fast response within 24 hours by email or phone.</li>
                <li>• Upload photos so our team can understand your space immediately.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">What happens next?</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our expert team reviews your request and contacts you on the email you provide. We will confirm the next steps and book a call or office meeting if needed.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Mobile Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Street, building, society"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-slate-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Ahmedabad"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="380059"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Subservice</label>
                <select
                  name="subservice"
                  value={formData.subservice}
                  onChange={handleChange}
                  disabled={!formData.service}
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-100"
                >
                  <option value="">Select a subservice</option>
                  {subserviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Size / Dimensions</label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                  placeholder="e.g. 10x12 ft or 2 rooms"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select budget</option>
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="block text-sm font-medium text-slate-700 mb-2">Consultation Type</p>
                <div className="flex flex-wrap gap-4">
                  {['Call', 'Office Meeting'].map((type) => (
                    <label key={type} className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        name="consultationType"
                        value={type}
                        checked={formData.consultationType === type}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="block text-sm font-medium text-slate-700 mb-2">Site Visit</p>
                <div className="flex flex-wrap gap-4">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="radio"
                        name="siteVisit"
                        value={option}
                        checked={formData.siteVisit === option}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Upload Photos</label>
                <input
                  type="file"
                  name="photos"
                  onChange={handleChange}
                  multiple
                  accept="image/*"
                  className="mt-2 w-full text-sm text-slate-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Requirement Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="mt-2 w-full rounded-2xl border border-slate-300 p-4 text-sm focus:border-blue-500 focus:outline-none"
                placeholder="Tell us about your requirements, preferences, and any special conditions."
              />
            </div>

            {successMessage && (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-blue-600 px-6 py-4 text-white font-semibold shadow-md transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {isSubmitting ? 'Sending request...' : 'Submit Consultation Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
