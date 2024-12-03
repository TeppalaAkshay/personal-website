import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import AOS from 'aos';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return(
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
