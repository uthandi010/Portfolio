import React from "react";
import { BriefcaseBusiness, Calendar } from "lucide-react";
import "../fresh-styles.css";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Francium Tech",
    date: "Feb 2025 - Present",
    description: "Architecting and maintaining high-performance web applications. Leading the development of full-stack features using Python, Ruby on Rails, Vue 3, React, and .NET. Focusing heavily on clean architecture and delivering massive value through seamless user experiences.",
    tech: ["Python", "Vue 3", "React", ".NET", "Ruby on Rails"]
  }
];

const FreshExperience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-header reveal">
        <div className="premium-badge">
          <BriefcaseBusiness size={16} />
          <span>My Journey</span>
        </div>
        <h2 className="section-title">Professional Experience</h2>
      </div>

      <div className="timeline-container reveal">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content premium-glass-card">
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-date">
                  <Calendar size={14} />
                  {exp.date}
                </div>
              </div>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-desc">{exp.description}</p>
              <div className="timeline-tech">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreshExperience;