import {spawn} from "child_process";
import path from "path";

const SLITHER_BIN = process.env.SLITHER_BIN;

export function runSlither(filePath)
{
	return new Promise((resolve, reject) => {
		const venvBin = path.dirname(SLITHER_BIN);

		const childProcess = spawn(SLITHER_BIN, [filePath, "--json", "-"], {
			env: {
				...process.env,
				PATH: `${venvBin}:${process.env.PATH}`,
			},
		});

		let stdout = "";
		let stderr = "";

		childProcess.stdout.on("data", (data) => {
			stdout += data.toString();
		});

		childProcess.stderr.on("data", (data) => {
			stderr += data.toString();
		});

		childProcess.on("error", reject);

		childProcess.on("close", (code) => {
			try
			{
				const result = JSON.parse(stdout);

				resolve({
					success: code === 0,
					exitCode: code,
					data: result,
					error: stderr || null,
				});
			}
			catch
			{
				resolve({
					success: false,
					exitCode: code,
					error: stderr || stdout,
				});
			}
		});
	});
}