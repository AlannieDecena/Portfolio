import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import LineDivider from "../components/LineDivider";

import ProfilePic from "../images/ProfilePic.png";


export default function HomePage() {
  return (
    <>
   <NavBar/>
    <div id="home">

      <section className="header">
        <div className="card">

          <div className="textWarpper">
          <p>Hi I'm Alannie,</p>
          <h1>Frontend Dev & UI/UX Designer</h1>
          <div className="linkWarpper">
          <Link to="/about">Read More</Link>
          </div>

          </div>
        </div>
        <div className="card">
          <img src={ProfilePic} className="ProfilePic" alt="headerImg" />
        </div>
      </section>
    </div>
    {/* <Projects/> */}
    <LineDivider/>
    <Footer/>
    </>
    
  );
}
