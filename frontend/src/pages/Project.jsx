import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import item1 from "../assets/item1.jpeg";
import item2 from "../assets/item2.jpeg";
import item3 from "../assets/item3.jpeg";
import item4 from "../assets/item4.jpeg";
import p1 from "../assets/p1.jpg";

const Project = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transforming <br />
            Spaces with <br />
            <span className="text-blue-600">Precision</span> <br />
            Furnishing
          </h1>

          <p className="mt-6 text-gray-500 max-w-lg">
            Discover our portfolio of high-end residential and commercial
            furnishing projects where craftsmanship meets modern design. From
            bespoke cabinetry to full interior fit-outs.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold">500+</h3>
              <p className="text-xs text-gray-500">Spaces Transformed</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold">15+</h3>
              <p className="text-xs text-gray-500">Years Experience</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm text-center">
              <h3 className="text-xl font-bold">99%</h3>
              <p className="text-xs text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="relative">
          <div className="bg-gray-300 h-[450px] rounded-2xl flex items-center justify-center">
            <img
              src={p1}
              alt="project image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Review Card */}
          <div className="absolute bottom-6 left-6 bg-white p-5 rounded-xl shadow-lg w-64">
            <p className="text-yellow-400 text-sm">★★★★★</p>
            <p className="text-sm text-gray-600 mt-2">
              “The precision in their woodworking is unlike anything we've seen
              in the market.”
            </p>
            <p className="text-xs text-gray-500 mt-2">- Architectural Digest</p>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase">
            Our Masterpieces
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src={project1}
              alt="Project"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                RESIDENTIAL • Completed 2025
              </span>

              <h3 className="text-xl font-semibold mt-3">The Palm Residence</h3>

              <p className="text-gray-600 mt-2">
                A coastal sanctuary blending modern minimalism with warm,
                organic textures and bespoke cabinetry.
              </p>

              <a
                href="/projects/palm-residence"
                className="text-blue-600 font-medium mt-4 inline-block"
              >
                View Full Case Study →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src={project2}
              alt="Project"
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
                COMMERCIAL • Completed 2024
              </span>

              <h3 className="text-xl font-semibold mt-3">
                Modern Office Suite
              </h3>

              <p className="text-gray-600 mt-2">
                Ergonomic design meets professional aesthetics for a
                high-productivity workspace.
              </p>

              <a
                href="/projects/modern-office"
                className="text-blue-600 font-medium mt-4 inline-block"
              >
                View Full Case Study →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Material Excellence</h2>

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-blue-600 font-semibold mb-2">
                Premium Wood Selection
              </h3>
              <p className="text-gray-600 text-sm">
                We source Grade-A Teak, Walnut, and Oak from sustainably managed
                forests. Each slab is hand-inspected for grain consistency and
                moisture content.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-blue-600 font-semibold mb-2">
                Precision Hardware
              </h3>
              <p className="text-gray-600 text-sm">
                Our fittings feature German-engineered hinges and sliders,
                tested for over 100,000 cycles to ensure smooth operation for
                decades.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-blue-600 font-semibold mb-2">
                Custom Finishes
              </h3>
              <p className="text-gray-600 text-sm">
                From low-VOC oils to high-gloss lacquers, our proprietary
                finishing techniques protect the wood while highlighting its
                natural character.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10">
            <div className="text-blue-600 text-4xl mb-6">✔</div>

            <h3 className="text-xl font-semibold italic text-gray-800 mb-4">
              "The quality of a piece is determined by the parts you never see."
            </h3>

            <p className="text-gray-600 mb-8">
              We pride ourselves on the internal joinery and structural
              integrity of our furniture. Our “Zero-Gap” standard ensures that
              every cabinet and drawer fits with surgical precision, preventing
              warp and wear over time.
            </p>

            <hr className="mb-6" />

            <h4 className="font-semibold text-gray-800">
              25 Year Structural Warranty
            </h4>
            <p className="text-sm text-gray-500">
              On all bespoke wood installations.
            </p>
          </div>
        </div>
      </section>
      import item1 from "../assets/item1.jpeg"; import item2 from
      "../assets/item2.jpeg"; import item3 from "../assets/item3.jpeg";
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Trust is built through quality and consistency. We are proud to
              have served hundreds of happy homeowners and businesses.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">★★★★★</div>

              <p className="text-gray-600 mb-6">
                "Foram Furnishing transformed our villa in Dubai Hills. The
                attention to detail in the wardrobe fittings was beyond our
                expectations."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item1}
                  alt="client"
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-sm">Marcus Sterling</h4>
                  <p className="text-xs text-gray-500">Villa Owner, Dubai</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">★★★★★</div>

              <p className="text-gray-600 mb-6">
                "As a real estate developer, timeline and finishing are
                everything. Foram delivered 40 units of custom cabinetry ahead
                of schedule."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item2}
                  alt="client"
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-sm">Sarah Jenkins</h4>
                  <p className="text-xs text-gray-500">
                    Director, Nexus Realty
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-blue-600 mb-4">★★★★☆</div>

              <p className="text-gray-600 mb-6">
                "Exceptional design consulting. They helped us choose the right
                materials that were both durable and incredibly stylish."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item3}
                  alt="client"
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-sm">David Chen</h4>
                  <p className="text-xs text-gray-500">Homeowner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We don't just manufacture furniture; we curate experiences. Our
              design philosophy is rooted in the balance of aesthetic longevity
              and ergonomic precision.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Every project begins with a deep dive into the user's journey
              within a space. We analyze light patterns, movement flow, and the
              subtle interactions between people and their environment to create
              pieces that feel inevitable rather than merely placed.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-2xl">⚙️</div>

              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Intentional Design
                </h3>

                <p className="text-gray-600 text-sm">
                  Form follows function, but we ensure beauty is never a
                  secondary consideration. Every curve and joint is intentional.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-2xl">🌿</div>

              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Sustainable Legacy
                </h3>

                <p className="text-gray-600 text-sm">
                  We build for generations, not seasons. Our commitment to
                  sustainability is reflected in our choice of durable, ethical
                  materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Project;
