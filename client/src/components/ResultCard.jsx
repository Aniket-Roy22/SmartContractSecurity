import "../styles/resultCard.css";

const ResultCard = ({results}) => {
	return (
		<div className="scs-right-column">
			{results && (
				<div className="scs-result-content">
					<div className="scs-result-header">
						<h3>Security Analysis Report</h3>
					</div>

					{/* Analysis results will be rendered here */}
				</div>
			)}
		</div>
	);
};

export default ResultCard;