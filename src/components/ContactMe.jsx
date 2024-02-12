import React from "react";
import LinkedInLogo from "../assets/icons8-linkedin-100.png";
import GitImg from "../assets/icons8-git-100.png";

function ContactMe() {
  const linkedinProfileUrl =
    "https://www.linkedin.com/in/mario-mitic-0966357b/";
  const gitHibProfileUrl = "https://github.com/mariomitic";

  return (
    <div className="nameTitle">
      <h2>Contact me</h2>

      <div>
        <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={LinkedInLogo}
            alt="LinkedIn Image"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </a>
      </div>
      <a>mariomitic@yahoo.com</a>
      <a>(619) 564-2895</a>
    </div>
  );
}

export default ContactMe;
