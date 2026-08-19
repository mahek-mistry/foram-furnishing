import React, { useState } from "react";
import Footer from "@/components/ui/Footer";

const allServices = [
  "Mattresses",
  "Curtains",
  "Blinds",
  "Sofa Fabrics",
  "Wallpapers",
  "Designer Sofa Fabrics",
  "Profile Shutters",
  "Bed Linen",
  "Stretch Ceiling",
];

const StepTwo = ({ next, back, setSelectedServices, selectedServices }) => {
  const [service, setService] = useState("");
  const [qty, setQty] = useState(0);
  const [selected, setSelected] = useState(selectedServices || []);

  const handleQtyChange = (e) => {
    let value = Number(e.target.value);

    if (value < 0) value = 0;
    if (value > 20) value = 20;

    setQty(value);
  };

  const addService = () => {
    if (!service) {
      alert("Please select service");
      return;
    }

    if (qty <= 0) {
      alert("Quantity must be greater than 0");
      return;
    }

    const alreadyAdded = selected.find(
      (item) => item.name === service
    );

    if (alreadyAdded) {
      alert("Service already added");
      return;
    }

    setSelected([
      ...selected,
      {
        name: service,
        qty: qty,
      },
    ]);

    setService("");
    setQty(0);
  };

  const removeService = (name) => {
    setSelected(
      selected.filter((item) => item.name !== name)
    );
  };

  const handleNext = () => {
    if (selected.length === 0) {
      alert("Please add at least one service");
      return;
    }

    setSelectedServices(selected);
    next();
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8">

        <p className="text-cyan-600 font-semibold">
          Step 2 of 3
        </p>

        <h2 className="text-3xl font-bold mt-2 mb-6">
          Select Required Services
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="">Choose Service</option>

            {allServices.map((item, i) => (
              <option key={i}>{item}</option>
            ))}
          </select>

          <input
            type="number"
            value={qty}
            min="0"
            max="20"
            onChange={handleQtyChange}
            className="border p-3 rounded-lg"
          />

          <button
            onClick={addService}
            className="bg-cyan-600 text-white rounded-lg"
          >
            + Add
          </button>

        </div>

        <div className="mt-8 space-y-4">

          {selected.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  Qty: {item.qty}
                </p>
              </div>

              <button
                onClick={() => removeService(item.name)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

        </div>

        <div className="flex gap-4 mt-10">

          <button
            onClick={back}
            className="w-full border py-3 rounded-lg"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="w-full bg-cyan-600 text-white py-3 rounded-lg"
          >
            Continue →
          </button>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default StepTwo;