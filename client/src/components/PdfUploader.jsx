const PdfUploader = () => {
  return (
    <div className="scs-left-column">
      <div className="scs-upload-card">
        {/* Upload Pdf Box */}
        <label className="scs-upload-trigger">
          <input type="file" accept="application/pdf" hidden />
          <span className="scs-upload-icon">⬆</span>
          <span className="scs-upload-text">Upload Pdf</span>
        </label>

        {/* Dashed Box: pdf_name + Change File */}
        <div className="scs-file-row">
          <span className="scs-file-name">pdf_name</span>
          <button type="button" className="scs-change-btn">
            Change File
          </button>
        </div>
      </div>

      {/* Analyze Button */}
      <button type="button" className="scs-analyze-btn">
        Analyze
      </button>
    </div>
  );
};

export default PdfUploader;