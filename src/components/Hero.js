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
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:your-email@example.com"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
