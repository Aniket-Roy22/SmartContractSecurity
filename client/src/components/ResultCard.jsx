import "../styles/resultCard.css";

const ResultCard = ({results}) => {
	return (
		<div className="scs-right-column">
			{results && (
				<div className="scs-result-content">
					<div className="scs-result-header">
						<h3>Security Analysis Report</h3>
					</div>

					<div>
						<pre>{JSON.stringify(results, null, 2)}</pre>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResultCard;