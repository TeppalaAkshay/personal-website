// src/components/About.js
import React from "react";
import MyResume from "./Myresume";
import "./About.css";
import myImage from "../Ak profile.jpeg"

const About = () => {
  return (
    <section id="about" className="about">
      <h2>
        About Me
      </h2>

      <div className="about-container">
        <div className="about-details">
          <p>🎓 Master's in CS at <a href="https://www.campbellsville.edu/" target="_blank" rel="noopener noreferrer">campbellsville University</a></p>
          <p>🛠️ Software Developer | 2+ years @ Creative Soft Technologies</p>
          <p>🚀 Passionate about Distributed Systems & BigData Analytics</p>
          <p>🤝 Collaborator | Lifelong Learner | Problem Solver</p>

          <p>Here is a list of the technologies that I'm familiar with!</p>
          <ul className="technologies">
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MYSQL</li>
            <li>Java</li>
            <li>Jest</li>
            <li>Jenkins</li>
            <li>AWS</li>
            <li>Spring boot</li>
          </ul>
          <MyResume/>
        </div>

        <div className="about-image">
          <img
            src={myImage}
            alt="My Portrait"
            className="profile-picture"
          />
        </div>
        
      </div>
    </section>
  );
};


export default About;
