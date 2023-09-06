import React from "react";
import NavBar from "./NavBar";

import LineDivider from "../components/LineDivider";
import useSlider from "../hooks/UseSlider";

import Animehome from "../images/Animehome.png";
import Loading from "../images/Loading.png";
import AnimeLand from "../images/AnimeLand.png";
import Footer from "./Footer";


import js from "../images/js.png";
import Iconcss from "../images/Iconcss.png";
import Iconhtml5 from "../images/Iconhtml5.png";
import Iconfigma from "../images/Iconfigma.png";

import IconrestApi from "../images/IconrestApi.png";

export default function AnimeProject() {
  const slider = useSlider();
  React.useEffect(() => {
    slider.setImages([Animehome, Loading, AnimeLand]);
  }, []);
  return (
    <>
   <NavBar/>
      <div id="animeHomepage">
        <section className="animeHeader">
          <div className="card" id="animeCard">
            <div className="textWarpper">
              <h2>In Another World</h2>
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
              <a href="https://alanniedecena.github.io/Into-Another-World-miniProject/" target="_blank">
                Go to live site
              </a>
            </div>
          </div>

          <div className="card " id="animeCard">
            <div id="animeRole" className="textWarpper">
              <h5>My Role:</h5>
              <ul>
                <p>Visual design, Front-End developer</p>
              </ul>
            </div>
          </div>
        </section>

        <section className="capResources" >
        <div >
              <h5>Resources:</h5>
              
            </div>
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

             
              <div className="card" id="skillsCard" data-title="Figma">
                <img src={Iconfigma} id="skillsImg" alt="Figma" />
              </div>

              <div className="card" id="skillsCard" data-title="Rest API">
                <img src={IconrestApi} id="skillsImg" alt="Rest API" />
              </div>
            </div>
          </section>


      </div>
        <div className="slider">
          <button className="prev" onClick={() => slider.changeImage(-1)}>
            &#10094;
          </button>
          <img src={slider.images[slider.currentImage]} alt="Slider Image" />
          <button className="next" onClick={() => slider.changeImage(1)}>
            &#10095;
          </button>
        </div>
        
        <LineDivider/>
        <Footer/>
    </>
  );
}
