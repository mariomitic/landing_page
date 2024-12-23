import './App.css'
import './App_mobile.css'
import React from "react";
import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import MainPage from './components/MainPage';
//import IconsCredits from './components/IconsCredits';




function App() {

  const [mainText, setmainText] = useState(true);
  const [aboutMeText, setaboutMeText] = useState(false);
  const [myProjects, setmyProjects] = useState(false);
  const [myResume, setmyResume] = useState(false);
  const [contactMe, setcontactMe] = useState(false);
  const [profPicOn, setProfPicON] = useState(true)



  return (
    <div className='container custom-container appStyle'>
      <Navbar bg="light" expand="lg navbar-expand-md" >
        <Container>
          <Navbar.Brand href="#home" onClick={() => {setmainText(true); setaboutMeText(false); setmyProjects(false); setmyResume(false); setcontactMe(false)}}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features" onClick={() => {setmainText(false); setaboutMeText(true); setmyProjects(false); setProfPicON(true); setmyResume(false); setcontactMe(false)}}>About me</Nav.Link>
              <Nav.Link href="#features" onClick={() => {setmainText(false); setaboutMeText(false); setmyProjects(true); setProfPicON(false); setmyResume(false); setcontactMe(false)}}>My projects</Nav.Link>
              <Nav.Link href="#features" onClick={() => {setmainText(false); setaboutMeText(false); setmyProjects(false); setProfPicON(true); setmyResume(true); setcontactMe(false)}}>My resume</Nav.Link>
              <Nav.Link href="#features" onClick={() => {setmainText(false); setaboutMeText(false); setmyProjects(false); setProfPicON(true); setmyResume(false); setcontactMe(true)}}>Contact</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <MainPage mainText={mainText} aboutMeText={aboutMeText} myProjects={myProjects} myResume={myResume} contactMe={contactMe} profPicOn={profPicOn}/>
     
{/* <IconsCredits /> */}
    </div>
  );
}

export default App
