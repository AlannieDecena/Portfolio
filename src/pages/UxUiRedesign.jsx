import React from "react";
import NavBar from "./NavBar";

import LineDivider from "../components/LineDivider";
import useSlider from "../hooks/UseSlider";

import Cardgame1 from "../images/Cardgame1.png";
import Cardgame2 from "../images/Cardgame2.png";
import Cardgame3 from "../images/Cardgame3.png";
import Cardgame4 from "../images/Cardgame4.png";

import Footer from "./Footer";

import Iconfigma from "../images/Iconfigma.png";

import IconrestApi from "../images/IconrestApi.png";

export default function AnimeProject() {
  const slider = useSlider();
  React.useEffect(() => {
    slider.setImages([Cardgame1, Cardgame2, Cardgame3, Cardgame4]);
  }, []);
  return (
    <>
      <NavBar />
      <div id="animeHomepage">
        <section className="animeHeader">
          <div className="card" id="animeCard">
            <div className="textWarpper">
              <h2>Solitaire Re-design</h2>
              <p>
                The design approach aimed to maintain the original game's
                familiar appearance by preserving its color scheme and font. The
                goal was to avoid confusing players with drastic changes in
                navigation. Instead, the focus was on creating a cleaner and
                more minimalistic look by centralizing elements and removing
                unnecessary functions.
              </p>
              <a href="https://thesolitaire.com/" target="_blank">
                Original site
              </a>
              <a
                href="https://www.figma.com/file/extQEIqMIVpXAQa79LaKUq/Solitaire-Test-Task?type=design&node-id=60%3A138&mode=design&t=O2n3bLY5RyLXQWHL-1"
                target="_blank"
              >
                Re-designed site
              </a>
            </div>
          </div>

          <div className="card " id="animeCard">
            <div id="animeRole" className="textWarpper">
              <h5>My Role:</h5>
              <ul>
                <p>Ux/Ui Designer</p>
              </ul>
              <br />
              <h5>Resources:</h5>
              <br />
              <div className="card" id="skillsCard" data-title="Figma">
                <img src={Iconfigma} id="skillsImg" alt="Figma" />
              </div>
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

      <LineDivider />
      <Footer />
    </>
  );
}
