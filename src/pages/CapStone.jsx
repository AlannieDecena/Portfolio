import React from "react";
import NavBar from "./NavBar";

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

import useSlider from "../hooks/UseSlider";
import Footer from "./Footer";

export default function CapStone() {
  const slider = useSlider();
  React.useEffect(() => {
    slider.setImages([LogIn, Rating, Dash, dashMood, Goal, Jur]);
  }, []);

  return (
    <>
      <NavBar/>
      <div id="capHome" >
        <section className="header">
          <div className="card">
            <div className="textWarpper">
              <h2>Feeling Lavender</h2>
              <p>
                This is a capstone project, an application that helps you track
                your mood and mental health. It also lets you customize its
                features to fit your personal needs and supports you in making
                progress on your mental health journey.
              </p>

              <p>
                Lavender is known to have a calming effect on the mind and body.
                It can also help with anxiety and depression, so I designed this
                application with that in mind. Using monochromatic lavender
                tones and rounded shapes to give it a soft and calming feel.
                Like the experssion "feeling blue", to describe how one is
                feeling down and sad, I wanted "feeling lavender" to repersent
                 calmness, relaxation and having a peaceful mind.{/*<p className="inDev">* Currently in development</p> */}
              </p>
              <a href="https://feelinglavender.onrender.com/" target="_blank">
                Go to live site
              </a>
              
            </div>
          </div>
          <div className="card">
            <div className="textWarpper">
              <h5>My Role:</h5>
              <ul>
                <p>User Research, Visual design, Full-Stack developer</p>
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
              <div className="card" id="skillsCard" data-title="Database Design">
                <img src={Icondatabase} id="skillsImg" alt="Database Design" />
              </div>
             
              <div className="card" id="skillsCard" data-title="Figma">
                <img src={Iconfigma} id="skillsImg" alt="Figma" />
              </div>
              
              <div className="card" id="skillsCard" data-title="MySQL">
                <img src={Iconmysql} id="skillsImg" alt="MySQL" />
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
      <section className="whiteBg">
        <div className="capCard">
          <h4>The Problem</h4>
          <p>
            This mood tracker application is to provide a platform that
            addresses the lack of accessible and user-friendly tools for
            tracking and monitoring mental health. Given the growing global
            concern about mental health, it is crucial to prioritize well-being
            and discover effective methods to manage stress, anxiety,
            depression, and other related problems.
          </p>
        </div>
        <div className="capCard">
          <h4>The Solution</h4>
          <p>
            To offer a user-friendly and easy-to-use platform for individuals to
            monitor and record their moods, emotions, and mental health symptoms
            consistently. By logging daily experiences and identifying patterns
            or triggers, users can gain valuable insights into their mental
            well-being and make informed choices regarding self-care and
            treatment. Moreover, the app will include features such as setting
            reminders and goals, connecting with mental health professionals,
            and providing access to helpful resources, all designed to support
            users' mental well-being.
          </p>
        </div>
      </section>
      <div id="home">
        <section className="header">
          <div id="porjectContainer">
            <h4 id="caph4">Features & User Stories</h4>
            <br />
            <div className="card">
              <h6>• Mood Tracking</h6>
              <p>
                "As a user I want to be able to see and track my moods on a
                weekly basis to help me improve my mental health."
              </p>
            </div>
            <div className="card">
              <h6>• Rating moods</h6>
              <p>
                "As a user I want to have the option to select which moods I am
                feeling on that day."
              </p>
            </div>
            <div className="card">
              <h6>• Journaling / Note taking</h6>
              <p>
                "As a user I find it useful to have a place where I can write or
                log anything that comes to mind so I can reflect and analyze my
                thoughts."
              </p>
            </div>
            <div className="card">
              <h6>• Community</h6>
              <p>
                "As a user I sometimes feel like I am the only one who is going
                through what I am feeling. I want to be able to communicate to
                others to tell them about my story and to listen to theirs."
              </p>
            </div>
            <div className="card">
              <h6>• Mental health professionals</h6>
              <p>
                "As a user I want to be able to add patients and keep a track of
                their development so I can better help them."
              </p>
            </div>
            <div className="card">
              <h6>• Goals Tracking</h6>
              <p>
                "As a user, having to be able to create goals can help feel
                motivated and seeing them being achieved is a rewarding feeling
                that can boost my confidence in myself."
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="whiteBg">
        <div className="capCard">
          <h4>In-of-Scope</h4>
          <p>the following features will be included:</p>
          <ul>
            <li>
              • User Registration and Login: Users can create an account and log
              in or log out as needed.
            </li>
            <br />
            <li>
              • Mood Rating and Modification: Users can rate their moods and
              have the flexibility to change the ratings on the same day.
            </li>
            <br />
            <li>
              • Weekly Mood Chart: Users can view their mood ratings for the
              current week on a chart. The chart will be updated with new mood
              ratings at the beginning of each week (Sunday).
            </li>
            <br />
            <li>
              • Notes and Diary: Users have the ability to write notes or
              maintain a diary log to document their thoughts and track their
              progress on their mental health journey.
            </li>
            <br />
            <li>
              • Goal Setting and Tracking: Users can set goals and track their
              progress. The app will display the start and completion dates of
              each goal.
            </li>
          </ul>
        </div>
        <div className="capCard">
          <h4>Out-of-Scope</h4>
          <p>the following features will not be included:</p>
          <ul>
            <li>
              • Responsive Website: Currently, the website is not fully
              responsive and may have issues with scaling on mobile devices. The
              plan is to address this in a future update to improve
              accessibility.
            </li>
            <br />
            <li>
              • Chat Room Functionality: Originally, there was a plan to include
              a chat room where users could communicate and share their stories
              and experiences in a safe space. However, due to limited time and
              experience, this feature was not implemented.
            </li>
            <br />
            <li>
              • Reminder Notifications: It was envisioned to have reminder
              notifications to prompt users to rate their moods consistently,
              which can help achieve better results.
            </li>
            <br />
            <li>
              • Customizable Dashboard: In the future, there is a desire to make
              the application customizable, allowing users to personalize how
              and what is displayed on their dashboard.
            </li>
            <br />
            <li>
              • Email Communication: Sending emails to users, such as weekly
              advice, tips, or articles on mental health and well-being, was
              considered as a feature to provide additional resources for users
              to read and learn from.
            </li>
            <br />
            <li>
              • Admin Account: An admin account for mental health professionals
              to track their patients' progress was also contemplated but not
              implemented in the current project.
            </li>
            <br />
            <li>
              • Cloud Deployment: Due to time constraints, deploying the
              application into the cloud was not completed.
            </li>
          </ul>
        </div>
      </section>
      <section className="endConclusion">
        <div className="endToEnd">
          <h4>End-to-End Conclusion</h4>
          <p>
            While some features had to be left out due to time constraints, the
            software largely met its objectives. The application successfully
            enables users to document their emotions and moods, displaying the
            results on a weekly basis. It also provides a feature for setting
            goals and offers a space for users to take notes or keep a journal
            log of their progress. However, there is still room for improvement
            and additional features that could enhance the user experience,
            which can be added in future updates. Overall, the software has
            achieved its primary objectives while acknowledging the potential
            for further enhancements.
            <br />
            <a
              href="https://github.com/AlannieDecena/capstone/blob/main/Alannie_capDocumentation.pdf"
              target="_blank"
            >
              Read full project documention
            </a>
          </p>
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
        
      </section>
      <Footer />
    </>
  );
}
