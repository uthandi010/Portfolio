import React from "react";
import { Mail, Linkedin, Github, Instagram, MapPin } from "lucide-react";
import "../fresh-styles.css";

const FreshContact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header reveal">
        <div className="section-badge">
          <Mail size={16} />
          Get in Touch
        </div>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-description">
          I'm available for freelance work and full-time positions.
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
      </div>

      <div className="contact-links reveal">
        <a href="mailto:uthandi40@gmail.com" className="contact-link">
          <Mail size={20} />
          uthandi40@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/uthandi-p-a70377340/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a href="https://github.com/uthandi010" target="_blank" rel="noopener noreferrer" className="contact-link">
          <Github size={20} />
          GitHub
        </a>
        <a href="https://instagram.com/uthandi_jr" target="_blank" rel="noopener noreferrer" className="contact-link">
          <Instagram size={20} />
          Instagram
        </a>
        <div className="contact-link" style={{ cursor: "default" }}>
          <MapPin size={20} />
          India
        </div>
      </div>
    </section>
  );
};

export default FreshContact;