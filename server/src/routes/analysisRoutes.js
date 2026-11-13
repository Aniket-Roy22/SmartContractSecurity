import express from "express";
import multer from "multer";
import {multerConfig} from "../config/multerConfig.js";
// import {analyzeContract} from "../controllers/analysisController.js";
import {uploadContract} from "../controllers/uploadController.js";

const router = express.Router();
const upload = multer(multerConfig);

router.post("/", upload.single("contract"), uploadContract);

export default router;