import React from 'react'

import RecatImg from "../assets/icons8-react-80.png";
import JSimage from "../assets/icons8-javascript-100.png";
import HTMLImg from "../assets/icons8-html-100.png";
import CSSImg from "../assets/icons8-css-100.png";
import BSImg from "../assets/icons8-bootstrap-100.png";
import ReduxImg from "../assets/icons8-redux-100.png";
import GitImg from "../assets/icons8-git-100.png";

function IconsCredits() {
  return (
    <div >
            <div className=" scaleDown">
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
      </div>
    </div>
  )
}

export default IconsCredits
