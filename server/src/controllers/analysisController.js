import fs from "fs/promises";
import {runSlither} from "../services/slitherService.js";
// import {runMythril} from "../services/mythrilService.js";
import {normalizeFindings} from "../utils/normalizeFindings.js";

export async function analyzeContract(req, res)
{
	let filePath;

	try
	{
		if (!req.file)
		{
			return res.status(400).json({
				message: "CONTRACT_NOT_UPLOADED",
			});
		}

		filePath = req.file.path;

		console.log(`Analyzing ${req.file.originalname}`);

		const sourceCode = await fs.readFile(filePath, "utf8");

		const slitherResult = await runSlither(filePath);
		// const mythrilResult = await runMythril(filePath);
		const mythrilResult = null;

		const findings = normalizeFindings(slitherResult, mythrilResult);

		res.json({
			contract: {
				filename: req.file.originalname,
				sourceCode,
			},

			analysis: {
				slither: slitherResult,
				mythril: mythrilResult,
			},

			findings,
		});
	}
	catch (error)
	{
		console.error(error);

		res.status(500).json({
			message: "CONTRACT_ANALYSIS_FAILED",
			error: error.message,
		});
	}
	finally
	{
		if (filePath)
		{
			await fs.rm(filePath, {
				force: true,
			});
		}
	}
}