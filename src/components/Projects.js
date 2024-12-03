import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "An amazing project about...",
      link: "https://github.com"
    },
    {
      title: "Project 2",
      description: "A fantastic app that...",
      link: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
