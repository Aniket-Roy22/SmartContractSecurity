export async function uploadContract(req, res)
{
	console.log(process.cwd());
	
	try
	{
		if (!req.file)
		{
			return res.status(400).json({
				success: false,
				message: "CONTRACT_NOT_UPLOADED",
			});
		}

		console.log(req.file);

		return res.status(200).json({
			success: true,
			message: "CONTRACT_UPLOADED_SUCCESSFULLY",
			filename: req.file.originalname,
			path: req.file.path,
		});
	}
	catch (error)
	{
		console.error(error);

		return res.status(500).json({
			success: false,
			message: "CONTRACT_UPLOAD_FAILED",
		});
	}
};