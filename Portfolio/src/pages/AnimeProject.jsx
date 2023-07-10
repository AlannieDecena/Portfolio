import React from "react";
import NavBar from "./NavBar";
// import AnimeHome from "../images/AnimeHome.png";
import { Link } from "react-router-dom";
import LineDivider from "../components/LineDivider";
import useSlider from "../hooks/UseSlider";

import AnimeHome from "../images/AnimeHome.png";
import Loading from "../images/Loading.png";
import AnimeLand from "../images/AnimeLand.png";
import Footer from "./Footer";
export default function AnimeProject() {
  const slider = useSlider();
  React.useEffect(() => {
    slider.setImages([AnimeHome, Loading, AnimeLand]);
  }, []);
  return (
    <>
   <NavBar/>
      <div id="animeHomepage">
        <section className="animeHeader">
          <div className="card" id="animeCard">
            <div className="textWarpper">
              <h2>In a Another World</h2>
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
              <Link to="/animehome" target="_blank">
                Go to live site
              </Link>
            </div>
          </div>

          <div className="card " id="animeCard">
            <div id="animeRole" className="textWarpper">
              <h5>My Role:</h5>
              <ul>
                <p>Visual design, FrontEnd developer</p>
              </ul>
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
