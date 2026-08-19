import React from "react";
import { useNavigate } from "react-router-dom";

const EstimatePopup = ({ close }) => {
  const navigate = useNavigate();

  const handleEstimate = () => {
    close();
    navigate("/estimate");
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl text-center relative">

        <button
          onClick={close}
          className="absolute top-3 right-4 text-2xl text-gray-400"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-gray-900">
          Get Free Estimate
        </h2>

        <p className="text-gray-500 mt-3">
          Planning your interiors? Get personalized pricing in just 2 minutes.
        </p>

        <button
          onClick={handleEstimate}
          className="w-full mt-6 bg-cyan-600 text-white py-3 rounded-xl font-semibold"
        >
          Start Estimate
        </button>

        <button
          onClick={close}
          className="w-full mt-3 border py-3 rounded-xl"
        >
          Maybe Later
        </button>

      </div>
    </div>
  );
};

export default EstimatePopup;