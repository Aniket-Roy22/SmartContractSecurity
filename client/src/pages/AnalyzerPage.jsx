import SmartContractUploader from "../components/SolUploader";
import ResultCard from "../components/ResultCard";
import "../styles/analyzer.css";

const AnalyzerPage = () => {
	const result = "to be analyzed";

	return (
		<main className="scs-page-container">
			<section className="scs-title-section">
				<h1>AI Assisted Smart Contract Auditor</h1>
				<p>
					Upload your Solidity (.sol) smart contract source file for
					an AI-powered security analysis to identify potential
					vulnerabilities, security risks, and code weaknesses.
				</p>
			</section>

			<section className="scs-workspace">
				<SmartContractUploader />
				<ResultCard results={result}/>
			</section>
		</main>
	);
};

export default AnalyzerPage;