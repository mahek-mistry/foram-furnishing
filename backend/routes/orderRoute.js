import express from "express";

import {
  createOrder,
  verifyPayment,
  getMyOrder,
  cancelRequestOrder, // ✅ ADD THIS
} from "../controller/orderController.js";

const router = express.Router();

// Create order
router.post("/create", createOrder);

// Verify payment
router.post("/verify", verifyPayment);

// Get logged-in user orders
router.get("/my-orders", getMyOrder);

// Cancel request ✅ IMPORTANT
router.post("/cancel-request/:id", cancelRequestOrder);

export default router;