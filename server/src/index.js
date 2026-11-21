import "dotenv/config";
import express from "express";
import cors from "cors";
import analysisRoutes from "./routes/analysisRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
	cors({
		origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/analyze", analysisRoutes);

app.get("/api/health", (req, res) => {
	res.json({
		status: "ok",
	});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});