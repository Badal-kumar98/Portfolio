import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div name="About" className="about-container">
        <h1 className="about">About</h1>
        <div className="line"></div>
        <p className="about-description">
          Hello, I’m Badal, an aspiring frontend developer with a passion for
          crafting clean and attractive interfaces. As a fresher with an IT
          background, I’m ready to bring ideas to life.
        </p>
        <br />
        <h1 className="about-edu">Education & Training:</h1>
        <p>Degree: Web Development, Bachelor of Arts(3rd Year)</p>
        <p>Institute: IITSCL</p>
        <p>Duration: 1 Year</p>
        <br />
        <h1 className="about-edu">Skills:</h1>
        <p>Frontend Developer</p>
        <p>HTML, CSS, Bootstrap, JavaScript, React, MYSQL</p>
        <br />
        <h1 className="about-edu">Work Experience:</h1>
        <p>Frontend Developer</p>
        <p>Company Name: Nickicon information technology Pvt. Ltd.</p>
        <p>Duration: [01/06/2024 to 30/06/2024] 3 Months.</p>
        <ul className="ul-list">
          <li>
            Developed and maintained responsive web applications using HTML,
            CSS, JavaScript, and React.
          </li>
          <li>
            Integrated REST APIs and third-party services to enhance website
            functionality.
          </li>
          <li>
            Used ReactJS to build interactive components and improve user
            experience.
          </li>
          <li>
            Gained experience in HTML, CSS, Material-UI, and responsive design
            principles.
          </li>
          <li>
            Worked with version control systems like Git to manage code
            repositories on projects.
          </li>
        </ul>
        <br />
        <h1 className="about-edu">Statements:</h1>
        <p>
          To create visually stunning, user-friendly, and responsive web
          interfaces that deliver seamless user experiences, while continually
          enhancing my skills to stay ahead in the evolving world of web
          development.
        </p>
        <p>
          To simplify technology for users by developing clean, responsive, and
          interactive frontend solutions that adapt to their needs.
        </p>
      </div>
    </div>
  );
};

export default About;