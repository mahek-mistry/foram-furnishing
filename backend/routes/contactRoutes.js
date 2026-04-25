import express from "express";
import {
  createContact,
  getAllContacts,
  markAsRead,
  deleteContact
} from "../controller/contactController.js";

const router = express.Router();

// ✅ CREATE CONTACT
router.post("/", createContact);

// ✅ GET ALL CONTACTS (ADMIN)
router.get("/", getAllContacts);

// ✅ MARK AS READ
router.put("/:id/read", markAsRead);

// ✅ DELETE CONTACT
router.delete("/:id", deleteContact);

export default router;