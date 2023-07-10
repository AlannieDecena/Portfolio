import React from "react";
import headerImg from "../images/headerImg.png";
import NavBar from "./NavBar";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Footer from "./Footer";


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
          <img src={headerImg} alt="headerImg" />
        </div>
      </section>
    </div>
    <Projects/>
    <Footer/>
    </>
    
  );
}
