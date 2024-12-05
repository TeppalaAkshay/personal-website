import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Hello, I'm <span>Akshay Kumar Teppala</span></h1>
        <h2>Aspiring Full-Stack Developer</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/akshay-kumar-t-914b17b3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/TeppalaAkshay" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:atepp746@students.campbellsville.edu"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
