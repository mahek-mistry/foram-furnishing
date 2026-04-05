import mongoose from "mongoose";

const promoSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  discount: {
    type: Number, // percentage
    required: true
  },
  expireDate: {
    type: Date,
    required: true
  },
  minAmount: {
    type: Number,
    default: 0
  }
});

const Promo = mongoose.model("Promo", promoSchema);

export default Promo;