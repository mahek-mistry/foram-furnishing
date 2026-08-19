import express from "express";
import upload from "../middleware/upload.js";
import {
  createConsultation,
  getAllConsultations,
  getSingleConsultation,
  addRemark,
  deleteConsultation,
} from "../controller/consultationController.js";

const router = express.Router();

// FORM SUBMIT
router.post("/", upload.array("photos"), createConsultation);

// ADMIN
router.get("/", getAllConsultations);
router.get("/:id", getSingleConsultation);
router.put("/remark/:id", addRemark);
router.delete("/:id", deleteConsultation);

export default router;