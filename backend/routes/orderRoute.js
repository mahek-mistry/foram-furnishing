import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  createCODOrder,
  createOrder,
  downloadInvoice,
  getAllOrdersAdmin,
  getMyOrder,
  getSalesData,
  getUserOrders,
  updateOrderStatus,
  verifyPayment,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/create-order", isAuthenticated, createOrder);
router.post("/verify-payment", isAuthenticated, verifyPayment);
router.get("/myorder", isAuthenticated, getMyOrder);
router.get("/invoice/:id", isAuthenticated, downloadInvoice);
router.get("/all", isAuthenticated, isAdmin, getAllOrdersAdmin);
router.get("/user-order/:userId", isAuthenticated, isAdmin, getUserOrders);
router.get("/sales", isAuthenticated, isAdmin, getSalesData);
router.put(
"/update-order-status/:id",
isAuthenticated,
isAdmin,
updateOrderStatus
)
router.post("/create-cod-order", isAuthenticated, createCODOrder);


export default router;
