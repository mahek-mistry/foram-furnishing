import React from "react";
import { PackageCheck, Truck, CheckCircle, Clock, XCircle } from "lucide-react";

const OrderTracking = ({ status }) => {

  const steps = [
    { name: "Order Placed", icon: <CheckCircle size={18} /> },
    { name: "Processing", icon: <Clock size={18} /> },
    { name: "Shipped", icon: <PackageCheck size={18} /> },
    { name: "Out for Delivery", icon: <Truck size={18} /> },
    { name: "Delivered", icon: <CheckCircle size={18} /> }
  ];

  // If cancelled
  if (status === "Cancelled") {
    return (
      <div className="mt-5 bg-red-100 border border-red-300 p-4 rounded-xl flex items-center gap-3 text-red-600 font-semibold">
        <XCircle size={20} />
        Order Cancelled
      </div>
    );
  }

  const currentStep = steps.findIndex(step => step.name === status);

  return (
    <div className="mt-6 bg-gray-50 p-5 rounded-xl border">

      <h3 className="font-semibold mb-4 text-lg">
        Order Tracking
      </h3>

      <div className="flex justify-between items-center relative">

        {steps.map((step, index) => (

          <div key={index} className="flex flex-col items-center flex-1 relative">

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-1
                ${index < currentStep ? "bg-green-500" : "bg-gray-300"}
                `}
              ></div>
            )}

            {/* Circle */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-white z-10
              ${index <= currentStep ? "bg-green-500" : "bg-gray-300"}
              `}
            >
              {step.icon}
            </div>

            {/* Label */}
            <p className="text-xs mt-2 text-center font-medium">
              {step.name}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default OrderTracking;