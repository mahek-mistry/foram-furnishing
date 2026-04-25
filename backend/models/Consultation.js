import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },

    address: String,
    city: String,
    pincode: String,

    service: { type: String, required: true },
    subservice: String,

    size: String,
    budget: String,

    consultationType: {
      type: String,
      enum: ["Call", "Office Meeting"],
      default: "Call",
    },

    siteVisit: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },

    photos: [String], // store file paths

    message: String,

    // ADMIN
    followUp: { type: String, default: "" },
    status: {
      type: String,
      enum: ["new", "remarked"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Consultation", consultationSchema);