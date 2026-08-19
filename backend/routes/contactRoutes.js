import express from "express";
import {
  createContact,
  getAllContacts,
  markAsRead,
  addRemark,
  deleteContact
} from "../controller/contactController.js";

const router = express.Router();

// ✅ CREATE CONTACT
router.post("/", createContact);

// ✅ GET ALL CONTACTS (ADMIN)
router.get("/", getAllContacts);

// ✅ MARK AS READ
router.put("/:id/read", markAsRead);

// ✅ ADD REMARK
router.put("/:id/remark", addRemark);

// ✅ DELETE CONTACT
router.delete("/:id", deleteContact);

export default router;