import express from "express";
import multer from "multer";
import {multerConfig} from "../config/multerConfig.js";
import {analyzeContract} from "../controllers/analysisController.js";

const router = express.Router();
const upload = multer(multerConfig);

router.post("/slither", upload.single("contract"), analyzeContract);

export default router;