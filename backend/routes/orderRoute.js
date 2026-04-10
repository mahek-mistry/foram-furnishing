import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

import {
  createOrder,
  verifyPayment,
  getMyOrder,
  cancelRequestOrder,
  createCODOrder,
  getSalesData,
  getAllOrdersAdmin,
  updateOrderStatus,
  downloadInvoice,
  approveCancelOrder,
} from "../controller/orderController.js";
import { isAdmin } from "../middleware/isAuthenticated.js";

const router = express.Router();

// Get sales data for admin
router.get("/sales", isAuthenticated, isAdmin, getSalesData);

// Admin - get all orders
router.get("/all", isAuthenticated, isAdmin, getAllOrdersAdmin);

// Admin - update order status
router.put("/update-order-status/:id", isAuthenticated, isAdmin, updateOrderStatus);

// Admin - approve cancel
router.post("/approve-cancel/:id", isAuthenticated, isAdmin, approveCancelOrder);

// User/Admin - download invoice
router.get("/invoice/:id", isAuthenticated, downloadInvoice);

// Create Razorpay order
router.post("/create-order", isAuthenticated, createOrder);

// Create COD order
router.post("/create-cod-order", isAuthenticated, createCODOrder);

// Verify payment
router.post("/verify-payment", isAuthenticated, verifyPayment);

// Get logged-in user orders
router.get("/my-orders", isAuthenticated, getMyOrder);

// Cancel request
router.post("/cancel-request/:id", isAuthenticated, cancelRequestOrder);

export default router;