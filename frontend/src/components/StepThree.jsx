import React from "react";
import Footer from "@/components/ui/Footer";

const prices = {
  Mattresses: 30000,
  Curtains: 10000,
  Blinds: 20000,
  "Sofa Fabrics": 22000,
  Wallpapers: 30000,
  "Designer Sofa Fabrics": 20000,
  "Profile Shutters": 10000,
  "Bed Linen": 25000,
  "Stretch Ceiling": 15000,
};

const StepThree = ({
  back,
  selectedServices,
  selectedPlan,
  setSelectedPlan,
  submitEstimate,
  isSubmitting,
  submissionMessage,
}) => {
  // Base Total
  let baseTotal = 0;

  selectedServices.forEach((item) => {
    baseTotal +=
      prices[item.name] * item.qty;
  });

  // Prices
  const essential = Math.round(baseTotal);
  const premium = Math.round(baseTotal * 1.25);
  const elite = Math.round(baseTotal * 1.5);

  // Choose Plan Function
  const choosePlan = (planName) => {
    setSelectedPlan(planName);
  };

  // Book Consultation
  const bookConsultation = () => {
    submitEstimate();
  };

  const plans = [
    {
      name: "Essential",
      price: essential,
      subtitle:
        "Affordable and elegant interior solution.",
      features: [
        "Standard Quality Materials",
        "Modern Finish",
        "Basic Customization",
        "Budget Friendly",
      ],
      bg: "bg-white",
      btn: "Choose Essential",
    },
    {
      name: "Premium ⭐",
      price: premium,
      subtitle:
        "Most popular package with premium finish.",
      features: [
        "Branded Materials",
        "Premium Finishing",
        "Custom Designs",
        "Priority Support",
      ],
      bg: "bg-cyan-600 text-white scale-105",
      btn: "Choose Premium",
      popular: true,
    },
    {
      name: "Elite",
      price: elite,
      subtitle:
        "Luxury interiors crafted for premium lifestyle.",
      features: [
        "Luxury Materials",
        "Designer Finish",
        "Full Customization",
        "VIP Support",
      ],
      bg: "bg-white",
      btn: "Choose Elite",
    },
  ];

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-12 px-6">

        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">

          <p className="text-cyan-600 font-semibold">
            Step 3 of 3
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Your Estimate Packages
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Final estimate based on selected services.
          </p>

          <p className="mt-4 text-sm text-gray-600">
            Selected plan: <strong>{selectedPlan || "None"}</strong>
          </p>

          {submissionMessage && (
            <p className="mt-4 text-sm text-green-600">
              {submissionMessage}
            </p>
          )}

        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bg} rounded-3xl shadow-xl border p-8 relative hover:-translate-y-2 transition-all`}
            >

              {/* Badge */}
              {plan.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              )}

              {/* Name */}
              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              {/* Price */}
              <p className="text-5xl font-bold mt-6">
                ₹{plan.price.toLocaleString()}
              </p>

              {/* Subtitle */}
              <p
                className={`mt-4 ${
                  plan.popular
                    ? "text-white/90"
                    : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">

                {plan.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-green-500">
                      ✔
                    </span>

                    <p>{item}</p>
                  </div>
                ))}

              </div>

              {/* Working Button */}
              <button
                onClick={() =>
                  choosePlan(
                    plan.name,
                    plan.price
                  )
                }
                className={`w-full mt-10 py-4 rounded-xl font-semibold text-lg cursor-pointer ${
                  plan.popular
                    ? "bg-white text-cyan-700"
                    : "bg-cyan-600 text-white"
                }`}
              >
                {plan.btn}
              </button>

            </div>
          ))}

        </div>

        {/* Consultation Box */}
        <div className="max-w-4xl mx-auto mt-14 bg-white rounded-3xl shadow-lg p-8 text-center">

          <h3 className="text-3xl font-bold">
            Need Expert Guidance?
          </h3>

          <p className="text-gray-500 mt-3 text-lg">
            Book a free consultation with our design
            expert and get personalized advice.
          </p>

          <button
            onClick={bookConsultation}
            disabled={isSubmitting}
            className={`mt-6 px-10 py-4 rounded-xl text-lg font-semibold cursor-pointer ${isSubmitting ? "bg-slate-400 text-white" : "bg-green-600 hover:bg-green-700 text-white"}`}
          >
            {isSubmitting ? "Submitting..." : "Book Free Consultation"}
          </button>

        </div>

        {/* Back */}
        <div className="text-center mt-10">

          <button
            onClick={back}
            className="px-8 py-3 border rounded-xl bg-white cursor-pointer"
          >
            Back
          </button>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default StepThree;