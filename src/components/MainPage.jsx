import React from "react";
import profilePicture from "../assets/profilePic.jpg";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import MyResume from "./MyResume";
import ContactMe from "./ContactMe";

import IconsCredits from "./IconsCredits";


function MainPage(props) {
  const mainPageText = (
    <div className="nameTitle">
      <h6>Hi, my name is </h6>
      <h2>Mario Mitic</h2>
      <h6>I am a Front End Web Developer. </h6>
    </div>
  );

  return (
    <div className="text-center mainPageStyle">
       <div className="d-flex justify-content-center vertical-center">
        <div className="picture-frame">
          <img src={profilePicture} className="profileImg"></img>
        </div>
        {props.mainText ? mainPageText : null}
        {props.aboutMeText ? <AboutMe /> : null}
        {props.myProjects ? <MyProjects /> : null}
        {props.myResume ? <MyResume /> : null}
        {props.contactMe ? <ContactMe /> : null}
      </div>

      <br></br>
<IconsCredits />
    </div>
  );
}

export default MainPage;
