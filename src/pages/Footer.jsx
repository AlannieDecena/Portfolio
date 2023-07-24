import React from "react";
import Iconemail from "../images/Iconemail.png";
import Icongithub from "../images/Icongithub.png";
import Iconlinkedin from "../images/Iconlinkedin.png";
import Iconinsta from "../images/Iconinsta.png";

export default function Footer() {
  return (
    <div id="footer">
      <section>
        <div className="wrapper">
          <div className="footerName">
            <h6>Alannie Decena</h6>
          </div>

          <div className="lineDivider"></div>

          <div className="socialWrapper">
            <a
              className="socialbtn"
              href="mailto:alannie.khem.decena@gmail.com"
            >
              <img className="socialIcon" src={Iconemail} alt="email" />
            </a>
            <a
              className="socialbtn"
              href="https://github.com/AlannieDecena"
              target="_blank"
            >
              <img className="socialIcon" src={Icongithub} alt="github" />
            </a>
            <a
              className="socialbtn"
              href="https://www.linkedin.com/in/alannie-decena-186bb0236/"
              target="_blank"
            >
              <img className="socialIcon" src={Iconlinkedin} alt="linkedin" />
            </a>
            <a
              className="socialbtn"
              href="https://www.instagram.com/khem.creative/"
              target="_blank"
            >
              <img className="socialIcon" src={Iconinsta} alt="instagram" />
            </a>
          </div>
        </div>
        <p>©Copyright. All rights reserved</p>
      </section>
    </div>
  );
}
