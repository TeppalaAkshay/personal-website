import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" data-aos="fade-down">
      <div className="container">
        <h1><a href="#hero">My Portfolio</a></h1>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
