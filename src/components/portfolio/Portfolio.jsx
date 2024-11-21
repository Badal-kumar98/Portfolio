import React from "react";
import "./portfolio.css";
import reactjs from "../../assets/image/reactjs.png";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "This is a E-commerce Website in which I created a E-commerce Website using HTML, CSS, JavaScript, ReactJs and MySql.",
      image: reactjs,
      demoLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "Myntra Clone",
      description:
        "This is a Myntra Clone in which I created a Myntra Clone using HTML, CSS, JavaScript and ReactJs.",
      image: reactjs,
      demoLink: "#",
      sourceCodeLink: "#",
    },
    {
      title: "Netflix Clone",
      description: "This is a Netflix clone created using React JS and CSS.",
      image: reactjs,
      demoLink: "#",
      sourceCodeLink: "#",
    },
  ];

  return (
    <div>
      <div name="Portfolio" className="portfolio-container">
        <h1 className="portfolio-title">PortFolio</h1>
        <div className="portfolio-line"></div>
        <h2 className="portfolio-subtitle">Featured Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-card-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-card-image"
                />
              </div>
              <h3 className="portfolio-card-title">{project.title}</h3>
              <p className="portfolio-card-description">
                {project.description}
              </p>
              <div className="portfolio-card-buttons">
                <a href={project.demoLink} className="portfolio-btn video-btn">
                  Demo
                </a>
                <a
                  href={project.sourceCodeLink}
                  className="portfolio-btn source-btn"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
