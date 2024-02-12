import React from "react";
import YambProject from "../assets/Yamb_image.jpg";
import PlannerImg from "../assets/ForkKnife.jpg";
import HikersQuiz from "../assets/HikersQuiz.jpg";



function MyProjects() {
const yambGameLink = "https://mario-react-yamb-game.netlify.app/"
const yambReduxGameLink = "https://reduxyambmario.netlify.app/"
const yambGameGitLink = "https://github.com/mariomitic/React-Yamb-App.git"
const yambReduxGitLink = "https://github.com/mariomitic/React-Redux-Yamb.git"
const plannerLink = "https://personalplanner.netlify.app/"
const plannerGitLink = "https://github.com/mariomitic/Personal_planner_Vitest.git"
const hikersLink = "https://planinarske-akcije.com/quiz/quiz_page"

  return (
    <div className="nameTitle">
      <h2>My Projects</h2>
      <div >
      <div>
      <a href={plannerLink}  target="_blank" rel="noopener noreferrer" style={{ color: 'white'}}>Food Planner App
        <img src={PlannerImg} alt="Planner Picture" style={{ width: '50px', height: '50px', borderRadius: '20%', margin: '10px' }} /> </a>
        <a  href={plannerGitLink}  target="_blank" rel="noopener noreferrer" style={{ color: 'white'}}>Github link</a>
    </div>  
    <hr style={{margin: '0px'}}></hr>
    <div> 
      <a href={hikersLink}  target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '45px'}}>Hikers Quiz
        <img src={HikersQuiz} alt="Planner Picture" style={{ width: '50px', height: '50px', borderRadius: '20%', margin: '10px' }} /> </a>
        <a>Proprietary</a>
        <hr style={{margin: '0px'}}></hr>
    </div>  
    <div>
      <a href={yambGameLink}  target="_blank" rel="noopener noreferrer" style={{ color: "white"}}>Yamb (Game App)
        <img src={YambProject} alt="Yamb Picture" style={{ width: '50px', height: '50px', borderRadius: '20%', margin: '10px' }} />      </a>
        <a  href={yambGameGitLink}  target="_blank" rel="noopener noreferrer" style={{ color: 'white'}}>Github link</a>
    </div>
    <a  href={yambReduxGitLink}  target="_blank" rel="noopener noreferrer" style={{ color: 'white'}}>React Redux version Github link</a>
    

  
    </div> 
   
    </div>
  );
}

export default MyProjects;
