import React from "react";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.jpg";
import react from "../../assets/image/reactjs.png";
import javascript from "../../assets/image/javascript.png";
import mysql from "../../assets/image/mysql.png";
import bootstrap from "../../assets/image/bootstrap.jpeg";
import "./experience.css";

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "ReactJs",
    },
    {
      id: 5,
      logo: mysql,
      name: "MySql",
    },
    {
      id: 6,
      logo: bootstrap,
      name: "BootStrap",
    },
  ];

  return (
    <div>
      <div name="Experience" className="experience-container">
        <div className="experience-content">
          <h1 className="experience-title">Experience</h1>
          <div className="experience-line"></div>
          <p className="experience-description">
            Creative Developer with 4 Months of Experience in HTML, CSS,
            JavaScript, and ReactJs Development
          </p>
          <div className="experience-grid">
            {cardItem.map(({ id, logo, name }) => (
              <div className="experience-card" key={id}>
                <img src={logo} className="experience-card-image" alt={name} />
                <div className="experience-card-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
