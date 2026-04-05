import express from "express";
import { toggleWishlist, getWishlist } from "../controller/wishlistController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/toggle", isAuthenticated, toggleWishlist);
router.get("/", isAuthenticated, getWishlist);

export default router;