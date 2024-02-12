import React from "react";
import profilePicture from "../assets/profilePic.jpg";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import MyResume from "./MyResume";
import ContactMe from "./ContactMe";


function MainPage(props) {
  const mainPageText = (
    <div className="nameTitle">
      <h6>Hi, my name is </h6>
      <h2>Mario Mitic</h2>
      <h6>I am a front end web developer. </h6>
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
      {/* <div className="justify-content-center scaleDown">
        <img src={RecatImg} alt="React Picture" className="img-fluid"></img>
        <img src={JSimage} alt="JS Picture" className="img-fluid"></img>
        <img src={HTMLImg} alt="HTML Picture" className="img-fluid"></img>
        <img src={CSSImg} alt="CSS Picture" className="img-fluid"></img>
        <img src={BSImg} alt="BS Picture" className="img-fluid"></img>
        <img src={ReduxImg} alt="Redux Picture" className="img-fluid"></img>
        <img src={GitImg} alt="Git Picture" className="img-fluid"></img>
      </div>
      <div className="attribution">
        <a
          className="text-dark"
          target="_blank"
          href="https://icons8.com/icon/42769/javascript-logo"
        >
          All
        </a>{" "}
        icons by{" "}
        <a className="text-dark" target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div> */}
    </div>
  );
}

export default MainPage;
