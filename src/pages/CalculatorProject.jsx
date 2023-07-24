import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import LineDivider from "../components/LineDivider";
import Footer from "./Footer";

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
