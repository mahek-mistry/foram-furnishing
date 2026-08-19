import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import item1 from "../assets/item1.jpeg";
import item2 from "../assets/item2.jpeg";
import item3 from "../assets/item3.jpeg";
import item4 from "../assets/item4.jpeg";
import p1 from "../assets/p1.jpg";

// BHK Images
const bhk2Images = Object.values(
  import.meta.glob('../assets/2BHK/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const bhk2_2Images = Object.values(
  import.meta.glob('../assets/2BHK2/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const bhk3Images = Object.values(
  import.meta.glob('../assets/3BHK/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const bhk4Images = Object.values(
  import.meta.glob('../assets/4BHK/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

// Before/After Images
const beforeAfter1 = Object.values(
  import.meta.glob('../assets/Before1/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const beforeAfter2 = Object.values(
  import.meta.glob('../assets/beforeafter2/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const beforeAfter3 = Object.values(
  import.meta.glob('../assets/beforeafter3/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const beforeAfter4 = Object.values(
  import.meta.glob('../assets/beforeafter4/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const Project = () => {
  const bhkData = [
    {
      type: '2BHK',
      title: '2 Bedroom Apartment',
      description: 'Compact and efficient living spaces designed for modern urban dwellers.',
      images: bhk2Images,
      beforeAfter: beforeAfter1,
    },
    {
      type: '2BHK2',
      title: '2 Bedroom Premium',
      description: 'Enhanced 2BHK layouts with premium finishes and optimized space utilization.',
      images: bhk2_2Images,
      beforeAfter: beforeAfter2,
    },
    {
      type: '3BHK',
      title: '3 Bedroom Apartment',
      description: 'Spacious family homes with balanced room distribution and comfort.',
      images: bhk3Images,
      beforeAfter: beforeAfter3,
    },
    {
      type: '4BHK',
      title: '4 Bedroom Villa',
      description: 'Luxurious multi-bedroom residences with expansive living areas.',
      images: bhk4Images,
      beforeAfter: beforeAfter4,
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Transforming Spaces with <span className="text-blue-600">Precision</span> Furnishing
            </h1>
            <p className="mt-6 text-slate-600 max-w-lg">
              Discover our portfolio of high-end residential furnishing projects where craftsmanship meets modern design.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl shadow-sm text-center">
                <h3 className="text-xl font-bold text-slate-900">500+</h3>
                <p className="text-xs text-slate-500">Spaces Transformed</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm text-center">
                <h3 className="text-xl font-bold text-slate-900">15+</h3>
                <p className="text-xs text-slate-500">Years Experience</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm text-center">
                <h3 className="text-xl font-bold text-slate-900">99%</h3>
                <p className="text-xs text-slate-500">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-200 h-[450px] rounded-3xl overflow-hidden shadow-xl">
              <img src={p1} alt="project image" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-lg w-64">
              <p className="text-yellow-400 text-sm">★★★★★</p>
              <p className="text-sm text-slate-600 mt-2">
                "The precision in their woodworking is unlike anything we've seen in the market."
              </p>
              <p className="text-xs text-slate-500 mt-2">- Architectural Digest</p>
            </div>
          </div>
        </div>

        {/* BHK Sections */}
        {bhkData.map((bhk, index) => (
          <div key={bhk.type} className="mb-20">
            <div className="text-center mb-12">
              <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
                {bhk.type} Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {bhk.title}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {bhk.description}
              </p>
            </div>

            {/* Project Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {bhk.images.slice(0, 6).map((image, imgIndex) => (
                <div key={imgIndex} className="overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
                  <img
                    src={image}
                    alt={`${bhk.type} project ${imgIndex + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Before & After Section */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
                Before & After Transformation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {bhk.beforeAfter.slice(0, 4).map((image, imgIndex) => (
                  <div key={imgIndex} className="overflow-hidden rounded-2xl shadow-sm">
                    <img
                      src={image}
                      alt={`${bhk.type} before/after ${imgIndex + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Testimonials Section */}
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Trust is built through quality and consistency. We are proud to have served hundreds of happy homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="text-blue-600 mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6">
                "Foram Furnishing transformed our villa. The attention to detail was beyond expectations."
              </p>
              <div className="flex items-center gap-3">
                <img src={item1} alt="client" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Aarav Sharma</h4>
                  <p className="text-xs text-slate-500">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="text-blue-600 mb-4">★★★★★</div>
              <p className="text-slate-600 mb-6">
                "As a developer, timeline and finishing are everything. Foram delivered ahead of schedule."
              </p>
              <div className="flex items-center gap-3">
                <img src={item2} alt="client" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Aditya Verma</h4>
                  <p className="text-xs text-slate-500">Ahmedabad</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="text-blue-600 mb-4">★★★★☆</div>
              <p className="text-slate-600 mb-6">
                "Exceptional design consulting. They helped us choose the right materials."
              </p>
              <div className="flex items-center gap-3">
                <img src={item3} alt="client" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm text-slate-900">Kavya Nair</h4>
                  <p className="text-xs text-slate-500">Surat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;