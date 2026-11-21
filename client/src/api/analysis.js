import api from "../config/axiosConfig.js";

export async function analyzeContract(formData)
{
	return api.post("/analyze/slither", formData);
}