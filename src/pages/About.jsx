import React from "react";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import headerImg from "../images/headerImg.png";
import js from "../images/js.png";
import Iconcss from "../images/Iconcss.png";
import Iconhtml5 from "../images/Iconhtml5.png";
import Icondatabase from "../images/Icondatabase.png";
import Icondocker from "../images/Icondocker.png";
import Iconfigma from "../images/Iconfigma.png";
import Iconindesign from "../images/Iconindesign.png";
import Iconmysql from "../images/Iconmysql.png";
import Iconphotoshop from "../images/Iconphotoshop.png";
import Iconreact from "../images/Iconreact.png";
import IconrestApi from "../images/IconrestApi.png";
import Footer from "./Footer";
import LineDivider from "../components/LineDivider";

import ProfilePic from "../images/ProfilePic.png";

export default function About() {
  return (
    <>
      <NavBar />
      <div>
        <div id="aboutPage">
          <section className="aboutHeader">
            <div className="card" id="aboutCard">
              <h2>Hello!</h2>
              <p>
                I am a website designer and developer based in Auckland, New
                Zealand. I have a passion for creativity, spanning from
                traditional arts and crafts to modern digital design and web
                development. Throughout my academic journey at university, one
                principle I firmly stand by is "design with a purpose." This
                philosophy drives me to seek inspiration from art, products, and
                brands that are dedicated to supporting meaningful causes.
                </p>
                <p>Personally, I am a strong advocate for mental health and
                well-being, and this topic became the focus of my capstone
                project. I believe in using my skills and expertise to
                contribute positively to society and make a difference in areas
                that matter the most.
              </p>
            </div>
            <div className="card">
              <img src={ProfilePic} className="ProfilePic" alt="headerImg" />
            </div>
          </section>

          <h5 id="aboutSkillText">Skills:</h5>

          <section className="aboutSkills">
            <div className="skillsWrapper">
              <div className="card" id="skillsCard" data-title="JavaScript">
                <img src={js} id="skillsImg" alt="js" />
              </div>
              <div className="card" id="skillsCard" data-title="CSS">
                <img src={Iconcss} id="skillsImg" alt="css" />
              </div>
              <div className="card" id="skillsCard" data-title="HTML5">
                <img src={Iconhtml5} id="skillsImg" alt="html5" />
              </div>
              <div
                className="card"
                id="skillsCard"
                data-title="Database Design"
              >
                <img src={Icondatabase} id="skillsImg" alt="Database Design" />
              </div>
              <div className="card" id="skillsCard" data-title="Docker">
                <img src={Icondocker} id="skillsImg" alt="Docker" />
              </div>
              <div className="card" id="skillsCard" data-title="Figma">
                <img src={Iconfigma} id="skillsImg" alt="Figma" />
              </div>
              <div className="card" id="skillsCard" data-title="Indesign">
                <img src={Iconindesign} id="skillsImg" alt="Indesign" />
              </div>
              <div className="card" id="skillsCard" data-title="MySQL">
                <img src={Iconmysql} id="skillsImg" alt="MySQL" />
              </div>
              <div className="card" id="skillsCard" data-title="Photoshop">
                <img src={Iconphotoshop} id="skillsImg" alt="Photoshop" />
              </div>
              <div className="card" id="skillsCard" data-title="React">
                <img src={Iconreact} id="skillsImg" alt="React" />
              </div>
              <div className="card" id="skillsCard" data-title="Rest API">
                <img src={IconrestApi} id="skillsImg" alt="Rest API" />
              </div>
            </div>
          </section>
        </div>
      </div>
      <LineDivider />
      <Footer />
    </>
  );
}
