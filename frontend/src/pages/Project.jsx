import React, { useState } from "react";
import item1 from "../assets/item1.jpeg";
import item2 from "../assets/item2.jpeg";
import item3 from "../assets/item3.jpeg";
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
const beforeImages = Object.values(
  import.meta.glob('../assets/Before1/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
);

const afterImages = [
  ...Object.values(
    import.meta.glob('../assets/beforeafter2/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
  ),
  ...Object.values(
    import.meta.glob('../assets/beforeafter3/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
  ),
  ...Object.values(
    import.meta.glob('../assets/beforeafter4/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })
  ),
];

const Project = () => {
  const [showAfter, setShowAfter] = useState(false);

  const twoBhkImages = [...bhk2Images, ...bhk2_2Images];
  const threeBhkImages = bhk3Images;
  const fourBhkImages = bhk4Images;

  const bhkSections = [
    {
      type: '2BHK',
      title: '2 Bedroom Living Experience',
      description:
        'Smart layouts, seamless storage and elegant finishes for modern 2BHK homes. Every corner is designed to feel spacious while maximizing functionality.',
      highlights: ['Custom wardrobes', 'Open-plan living', 'Premium kitchen finishes'],
      images: twoBhkImages,
    },
    {
      type: '3BHK',
      title: '3 Bedroom Family Home',
      description:
        'Balanced living spaces for family comfort with ample room for conversation, rest and entertainment. Our designs focus on flow, light and long-lasting materials.',
      highlights: ['Spacious master suites', 'Optimized circulation', 'Warm interior palette'],
      images: threeBhkImages,
    },
    {
      type: '4BHK',
      title: '4 Bedroom Luxury Residence',
      description:
        'Expansive luxury homes with premium finishes, multiple living areas and sophisticated design elements. Perfect for families seeking the ultimate in comfort and style.',
      highlights: ['Luxury master suites', 'Multiple living zones', 'Premium materials'],
      images: fourBhkImages,
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
        {bhkSections.map((section) => (
          <div key={section.type} className="mb-20">
            <div className="text-center mb-12">
              <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">
                {section.type} Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                {section.description}
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3">
                {section.highlights.map((highlight, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-xs font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, imgIndex) => (
                <div key={imgIndex} className="overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition duration-300">
                  <img
                    src={image}
                    alt={`${section.type} project ${imgIndex + 1}`}
                    className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Before / After Section */}
        <div className="mb-20 bg-white rounded-3xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2">Before & After</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">See the Transformation</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Compare the original interiors with the finished project styling. Click the buttons to switch between before and after views and explore the full transformation story.
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setShowAfter(false)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${showAfter ? 'border-slate-300 text-slate-600 bg-white' : 'border-blue-600 bg-blue-600 text-white'}`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${showAfter ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white text-slate-600'}`}
            >
              After
            </button>
          </div>

          <p className="text-center text-slate-500 mb-10">
            {showAfter
              ? 'After images show the completed styling, refined finishes and the final mood of the space.'
              : 'Before images show the starting condition, which our team transforms with careful planning and premium execution.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(showAfter ? afterImages : beforeImages).map((image, imgIndex) => (
              <div key={imgIndex} className="overflow-hidden rounded-3xl shadow-sm">
                <img
                  src={image}
                  alt={`${showAfter ? 'after' : 'before'} project ${imgIndex + 1}`}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>

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