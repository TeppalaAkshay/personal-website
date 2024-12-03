import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2>Resume</h2>
        <a href="/path-to-resume.pdf" download className="btn">Download Resume</a>
      </div>
    </section>
  );
};

export default Resume;
