import React from "react";
import LogIn from "../images/LogIn.png";
import { Link } from "react-router-dom";
import Animehome from "../images/Animehome.png";
import Calculator from "../images/Calculator.png";
import Footer from "./Footer";
import LineDivider from "../components/LineDivider";
import NavBar from "./NavBar";
import Cardgame2 from "../images/Cardgame2.png";

export default function Projects() {

  
  return (
    <>
    
    <div id="projects">
      <NavBar/>
      <div id="porjectContainer">
        <h4>Projects</h4>

        <section className="header" id="projectHeader">
{/* -------------------------------Project 1------------------------------------------------ */}

<div id="projectCards" className="card">
            <div className="imgBox">
              <div className="projectImgContainer">
                <img id="projectImg" src={Animehome} alt="headerImg" />
                <div className="projectContext">
                  <p>Personal/Mini project on one of my instrests 'Anime'.</p>
                </div>
              </div>
              <li className="projectTitle" >
                <Link className="navText" to="/animeproject">In a Another World</Link>
                </li>
            </div>
          </div>
{/* -------------------------------Project 2------------------------------------------------ */}
          <div id="projectCards" className="card">
            <div className="imgBox">
              <div className="projectImgContainer">
                <img id="projectImg" src={LogIn} alt="headerImg" />
                <div className="projectContext">
                  <p>A mood tracker Application for a 2 week capstone project.</p>
                </div>
              </div>
              <li className="projectTitle" >
                <Link className="navText" to="/capstone"> Feeling Lavender</Link>
                </li>
            </div>
          </div>
{/* -------------------------------Project 3------------------------------------------------ */}

<div id="projectCards" className="card">
            <div className="imgBox">
              <div className="projectImgContainer">
                <img id="projectImg" src={Calculator} alt="headerImg" />
                <div className="projectContext">
                  <p>In my journey to learn Javascript, I wanted to put my knowledge to practise and create a calculator, along with using HTLM and CSS to make it more visually appealing.</p>
                </div>
              </div>
              <li className="projectTitle" >
                <Link className="navText" to="/calculatorproject">Retro Calculator</Link>
                </li>
            </div>
          </div>

     {/* -------------------------------Project 4------------------------------------------------ */}

<div id="projectCards" className="card">
            <div className="imgBox">
              <div className="projectImgContainer">
                <img id="projectImg" src={Cardgame2} alt="headerImg" />
                <div className="projectContext">
                  <p>A re-deign of a online card game</p>
                </div>
              </div>
              <li className="projectTitle" >
                <Link className="navText" to="/redesign">Ux/Ui Re-design</Link>
                </li>
            </div>
          </div>
        </section>
      </div>
    </div>
<LineDivider/>
    <Footer/>
    </>
  );
}
