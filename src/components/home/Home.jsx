import React from "react";
import "./home.css";
import pic from "../../assets/image/homepage.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiTwotoneHtml5 } from "react-icons/ai";
import { TiCss3 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div>
      <div name="Home" className="home">
        <div className="home-container">
          <div className="left">
            <h3 className="home-title">Welcome in My Portfolio</h3>
            <h1 className="home-subtitle">
              <TypeAnimation
                sequence={[
                  "Hello, I'm Badal",
                  1000,
                  "I'm a Frontend Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                backSpeed={50}
                style={{
                  fontSize: ".8em",
                  display: "inline-block",
                  color: "#1d8d01",
                }}
                repeat={Infinity}
              />
            </h1>
            <p className="home-description">
              A frontend developer plays a pivotal role in crafting the visual
              and interactive aspects of websites and web applications, bridging
              the gap between design and functionality. They are responsible for
              translating complex UI/UX designs into clean, functional code
              using core web technologies like HTML, CSS, and JavaScript. Beyond
              the basics, they leverage modern frameworks and libraries such as
              React to create dynamic user interfaces that offer a seamless and
              responsive experience across devices. With a keen eye for detail
              and design aesthetics, frontend developers ensure that the user
              interface is not only visually appealing but also aligns with
              branding guidelines and accessibility standards. version control
              systems (e.g., Git) to streamline the development process.
            </p>
            <div className="media-section">
              <div className="home-media">
                <h3 className="available">Available on</h3>
                <ul className="home-media-list">
                  <li className="home-media-item">
                    <a href="https://www.facebook.com/" target="blank">
                      <FaFacebookSquare className="facebook-icon" />
                    </a>
                  </li>
                  <li className="home-media-item">
                    <a href="https://www.instagram.com/">
                      <FaInstagramSquare className="instagram-icon" />
                    </a>
                  </li>
                  <li className="home-media-item">
                    <a href="https://www.linkedin.com/">
                      <FaLinkedin className="linkedin-icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="home-media">
                <h3 className="available">Currently Working on</h3>
                <ul className="home-media-list">
                  <li className="home-media-item">
                    <AiTwotoneHtml5 className="html-icon" />
                  </li>
                  <li className="home-media-item">
                    <TiCss3 className="css-icon" />
                  </li>
                  <li className="home-media-item">
                    <IoLogoJavascript className="javascript-icon" />
                  </li>
                  <li className="home-media-item">
                    <FaReact className="react-icon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={pic} alt="" className="home-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
