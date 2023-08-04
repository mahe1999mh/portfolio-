import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faSquareJs,
  faCss3Alt,
  faReact,
  faNodeJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import "./css/home.css";
import profile from "../assets/mahendra.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="profileData">
          <div className="profiletext">
            <h1>
              Front-End React Developer
              <img
                src="https://stefantopalovicdev.vercel.app/static/media/waving.1bae5fcfb51082b5c2b4.png"
                alt="hi"
                width="50px"
                height="50px"
              />
            </h1>
            <p>
              <h4>
                Hi, I'm Mahendra Reddy. A passionate Front-end React Developer
                based in India, Bangalore. 📍
              </h4>
            </p>
            <div className="brandsIcons">
              <h2>
                <a href="./linked">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </h2>
              <h2>
                <a href="./linked">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </h2>
            </div>
          </div>
          <div className="techStack">
            <h2>Tech Stack</h2>
            <div className="techStackIcons">
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="2xl"
                    style={{ color: "#f75c08" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCss3Alt}
                    size="2xl"
                    style={{ color: "#0659ea" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    size="2xl"
                    style={{ color: "#edcf07" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faReact}
                    spinPulse
                    size="2xl"
                    style={{ color: "#2c9ac9" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    size="2xl"
                    style={{ color: "#2d8108" }}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faNode}
                    size="2xl"
                    style={{ color: "#36820d" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profilePic">
            <img src={profile} alt="aa" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
