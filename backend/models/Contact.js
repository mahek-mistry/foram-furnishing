import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  inquiryType: String,
  projectStyle: String,
  spaceType: String,
  location: String,
  message: String,
  isRead: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);