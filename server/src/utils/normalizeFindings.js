export function normalizeFindings(slither, mythril)
{
	const findings = [];

	if (slither.data.results.detectors)
	{
		for (const detector of slither.data.results.detectors)
		{
			findings.push({
				source: "slither",

				type: detector.check,
				severity: normalizeSeverity(detector.impact),

				confidence: normalizeConfidence(detector.confidence),

				description: detector.description,

				locations:
					detector.elements?.map((element) => ({
						name: element.name,
						type: element.type,
						sourceMapping: element.source_mapping,
					})) || [],
			});
		}
	}

	if (Array.isArray(mythril))
	{
		for (const issue of mythril)
		{
			findings.push({
				source: "mythril",

				type: issue["swc-id"] || "unknown",

				severity: normalizeMythrilSeverity(issue.severity),

				confidence: null,

				description: issue.description,

				locations: [
					{
						address: issue.address,
						function: issue.function,
						code: issue.code,
					},
				],
			});
		}
	}

	return findings;
}

function normalizeSeverity(value)
{
	if (!value)
	{
		return "unknown";
	}

	return value.toLowerCase();
}

function normalizeConfidence(value)
{
	if (!value)
	{
		return null;
	}

	return value.toLowerCase();
}

function normalizeMythrilSeverity(value)
{
	if (!value)
	{
		return "unknown";
	}

	return value.toLowerCase();
}