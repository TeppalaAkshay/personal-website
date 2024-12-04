import React from "react";
import "./Projects.css";
import {FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Attendence with Face Recognition",
      description: "An automated system to track attendance efficiently by detecting and recognizing faces in real-time. Improved tracking efficiency by 50% and reduced manual intervention. Technologies Used: Python, OpenCV, Dlib, NumPy, Pandas, MySQL, PyTorch",
      link: "https://github.com/AkshayTeppala/Attendance-with-facerecognition"
    },
    {
      title: "Moving Object Detection",
      description: "Developed a system to detect and track moving objects in real-time video streams with 90% accuracy, enabling enhanced video analysis. Technologies Used: Python, OpenCV, YOLO, Convolutional Neural Networks (CNNs) ",
      link: "https://github.com/TeppalaAkshay"
    },
    {
        title: "Employee Attrition and Job Performance Prediction",
        description: "Designed a comprehensive data science pipeline to predict employee attrition and evaluate job performance using AI models. Integrated data preprocessing, feature engineering, and predictive modeling for actionable insights. Technologies Used: Python, Pandas, NumPy, Scikit-learn, TensorFlow, Matplotlib, Seaborn, SQL ",
        link: "https://github.com/TeppalaAkshay"
      }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Some Things I've Built</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            
          </div>
       
          
        
        ))}
    
      </div>

    </section>
  );
};

export default Projects;
