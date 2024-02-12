import React from "react";
import resumeFile from "../assets/Mario Mitic - Resume.pdf"

function MyResume() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = "Mario Mitic - Resume.pdf";
        link.href = resumeFile;
        link.click();
     };

  return (
    <div className="nameTitle">
      <h5>Download my resume here</h5>
      <button className="btn btn-dark" onClick={handleDownload}>Mario Mitic - Resume.pdf</button>
    </div>
  );
}

export default MyResume;
