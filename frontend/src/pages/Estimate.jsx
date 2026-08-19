import React, { useState } from "react";
import axios from "axios";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const API_BASE = "http://localhost:8000";

const Estimate = () => {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const saveFormData = (data) => {
    setFormData(data);
  };

  const submitEstimate = async () => {
    setIsSubmitting(true);
    setSubmissionMessage("");

    try {
      const payload = {
        fullName: formData.name,
        mobileNumber: formData.phone,
        email: formData.email,
        service: selectedServices[0]?.name || "Estimate",
        selectedPlan: selectedPlan || null,
        message: `Selected services: ${selectedServices
          .map((item) => `${item.name} x${item.qty}`)
          .join(", ")}`,
      };

      await axios.post(`${API_BASE}/api/v1/consultation`, payload);
      setSubmissionMessage("Your estimate request has been submitted successfully.");
      setStep(1);
      setSelectedServices([]);
      setSelectedPlan(null);
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyType: "",
        location: "",
      });
    } catch (error) {
      console.error("Estimate submission failed:", error);
      setSubmissionMessage("Failed to submit estimate request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {step === 1 && (
        <StepOne
          next={() => setStep(2)}
          saveFormData={saveFormData}
          initialFormData={formData}
        />
      )}

      {step === 2 && (
        <StepTwo
          next={() => setStep(3)}
          back={() => setStep(1)}
          setSelectedServices={setSelectedServices}
          selectedServices={selectedServices}
        />
      )}

      {step === 3 && (
        <StepThree
          back={() => setStep(2)}
          selectedServices={selectedServices}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          submitEstimate={submitEstimate}
          isSubmitting={isSubmitting}
          submissionMessage={submissionMessage}
        />
      )}
    </>
  );
};

export default Estimate;