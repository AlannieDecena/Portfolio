import React from "react";
import NavBar from "./NavBar";
import LineDivider from "../components/LineDivider";
import Footer from "./Footer";

import LogIn from "../images/LogIn.png";
import Rating from "../images/Rating.png";
import Dash from "../images/Dash.png";
import dashMood from "../images/dashMood.png";
import Goal from "../images/Goal.png";
import Jur from "../images/Jur.png";
import js from "../images/js.png";
import Iconcss from "../images/Iconcss.png";
import Iconhtml5 from "../images/Iconhtml5.png";
import Icondatabase from "../images/Icondatabase.png";
import Iconfigma from "../images/Iconfigma.png";
import Iconmysql from "../images/Iconmysql.png";
import Iconreact from "../images/Iconreact.png";
import IconrestApi from "../images/IconrestApi.png";


export default function CalculatorProject() {
  return (
    <>
<NavBar/>
      <div  >
        <section className="calHeader">
          <div className="card" id="calCard">
            <div className="textWarpper">
              <h2>Retro Calulator</h2>
              <p>
                I wanted to put my knowledge of JavaScript and API fetches into
                practice, so I decided to create this mini personal project
                based on one of my interests: "Anime." The project revolves
                around the anime genre called "isekai," where the main character
                gets suddenly transported into another world. When users enter
                the website, they will initially find no instructions and will
                have to explore and click around to discover its features.
                Drawing inspiration from the concept of "isekai," where sudden
                transportation often lacks instructions, the website
                intentionally lacks user-friendliness. However, the user flow is
                designed to be straightforward once users start navigating.

              </p>
              <h5>My Role:</h5>
              <ul>
                <p>Visual design, FrontEnd developer</p>
              </ul>
              <a href="https://alanniedecena.github.io/Retro-Calculator/" target="_blank">
                Go to live site
              </a>
<br />
                 <h5>Resources:</h5>
              <div className="calSkillsBox" >
             
              <div className="card" id="skillsCard" data-title="JavaScript">
                <img src={js} id="skillsImg" alt="js" />
              </div>
              <div className="card" id="skillsCard" data-title="CSS">
                <img src={Iconcss} id="skillsImg" alt="css" />
              </div>
              <div className="card" id="skillsCard" data-title="HTML5">
                <img src={Iconhtml5} id="skillsImg" alt="html5" />
              </div>
              <div className="card" id="skillsCard" data-title="Database Design">
                <img src={Icondatabase} id="skillsImg" alt="Database Design" />
              </div>
              </div>
         
            </div>
          </div>

          

          <div className="card " id="calCard">
            <div id="calImg">
            </div>
          </div>
        </section>
       
      </div>
      <LineDivider/>
<Footer/>
    </>
  );
}
