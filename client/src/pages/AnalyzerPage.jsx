import React from "react";
import PdfUploader from "../components/PdfUploader";
import ResultCard from "../components/ResultCard";
import "../styles/analyzer.css";

const AnalyzerPage = () => {
  return (
    <main className="scs-page-container">
      <section className="scs-title-section">
        <h1>Smart Contract Security</h1>
        <p>
          Upload your smart contract document in PDF format to inspect potential
          vulnerabilities and security issues.
        </p>
      </section>

      <section className="scs-workspace">
        <PdfUploader />
        <ResultCard />
      </section>
    </main>
  );
};

export default AnalyzerPage;