import express from "express";
import multer from "multer";
import auth from "../middleware/auth.middleware.js";
import {
  addLead,
  getLeads,
  updateLeadStage,
  uploadLeadsFromExcel,
} from "../controllers/leads.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });


router.get("/", auth, getLeads);

router.post("/", auth, addLead);


router.patch("/:id", auth, updateLeadStage);


router.post(
  "/upload",
  auth,
  upload.single("file"),
  uploadLeadsFromExcel
);

export default router;
