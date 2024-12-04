import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>My inbox is always open. Whether you have a question or just want to say </p> 
        <p>hello, I'll try my best to get back to you!</p>
           <p> Feel free to mail me about any relevant job updates.</p>
        <button><a href="mailto:atepp746@students.campbellsville.edu">GET IN TOUCH WITH ME</a></button>
      </div>
    </section>
  );
};

export default Contact;
