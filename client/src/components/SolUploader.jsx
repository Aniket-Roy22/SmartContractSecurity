import {useRef, useState} from "react";
import "../styles/uploadArea.css";

const SolUploader = () => {
	const fileInputRef = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [isDragging, setIsDragging] = useState(false);
	const [isUploading, setIsUploading] = useState(false);

	const handleFile = (file) => {
		if (!file) return;

		if (!file.name.toLowerCase().endsWith(".sol")) {
			alert("Please upload a valid Solidity (.sol) file.");
			return;
		}

		setSelectedFile(file);
	};

	// const handleAnalyze = async () => {}

	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragging(false);
		handleFile(e.dataTransfer.files[0]);
	};

	const formatFileSize = (size) => {
		return size < 1024 * 1024
			? `${(size / 1024).toFixed(1)} KB`
			: `${(size / (1024 * 1024)).toFixed(2)} MB`;
	};

	return (
		<div className="scs-left-column">
			<div className="scs-upload-card">
				<div className="scs-upload-heading">
					<h3>Upload Smart Contract</h3>
					<p>
						Upload your Solidity source file to begin automated
						security analysis.
					</p>
				</div>

				{/* Upload Area */}
				<label
					className={`scs-upload-trigger ${
						isDragging ? "dragging" : ""
					}`}
					onDragOver={(e) => {
						e.preventDefault();
						setIsDragging(true);
					}}
					onDragLeave={() => setIsDragging(false)}
					onDrop={handleDrop}
				>
					<input
						ref={fileInputRef}
						type="file"
						accept=".sol"
						hidden
						onChange={(e) => handleFile(e.target.files[0])}
					/>

					<div className="scs-upload-icon">
						<svg
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M12 16V4" />
							<path d="m7 9 5-5 5 5" />
							<path d="M20 16.5v2A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-2" />
						</svg>
					</div>

					<span className="scs-upload-text">
						Click to browse or drag and drop
					</span>

					<span className="scs-upload-subtext">
						Solidity source files (.sol) only
					</span>
				</label>

				{/* Selected File */}
				{selectedFile && (
					<div className="scs-file-row">
						<div className="scs-file-info">
							<div className="scs-file-icon">SOL</div>

							<div className="scs-file-details">
								<span className="scs-file-name">
									{selectedFile.name}
								</span>
								<span className="scs-file-size">
									{formatFileSize(selectedFile.size)}
								</span>
							</div>
						</div>

						<button
							type="button"
							className="scs-change-btn"
							onClick={() => fileInputRef.current.click()}
						>
							Change
						</button>
					</div>
				)}
			</div>

			{/* Analyze Button */}
			<button
				type="button"
				className="scs-analyze-btn"
				disabled={!selectedFile || isUploading}
				// onClick={handleAnalyze}
			>
				Analyze Contract
			</button>
		</div>
	);
};

export default SolUploader;