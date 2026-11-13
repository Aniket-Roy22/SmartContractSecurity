import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
	destination: "uploads/",

	filename: (req, file, cb) => {
		const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;

		cb(null, uniqueName);
	},
});

export const multerConfig = {
	storage,

	limits: {
		fileSize: 1024 * 1024,
	},

	fileFilter: (req, file, cb) => {
		if (path.extname(file.originalname).toLowerCase() !== ".sol") {
			return cb(new Error("Only Solidity files are allowed"));
		}

		cb(null, true);
	},
};