import React from "react";
import { CheckCircle2, Calendar } from "lucide-react";
import { getExperienceDuration, EXPERIENCE_START_LABEL } from "../experience";
import "../fresh-styles.css";

const keyStrengths = [
  "Engineers robust, full-stack web and mobile applications from concept to delivery",
  "Balances intuitive visual UI/UX design with reliable backend API architectures",
  "Collaborates effectively across cross-functional product and engineering teams",
  "Maintains rigorous automated testing, clean code principles, and CI/CD pipelines",
];

const FreshExperience = () => {
  const duration = getExperienceDuration();

  return (
    <section id="experience" className="section">
      <div className="section-header reveal">
        <span className="section-tag">03 // Experience</span>
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle">
          Hands-on software development experience building web applications and full-stack projects.
        </p>
      </div>

      <div className="experience-container reveal">
        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-role-title">Full-Stack Developer</h3>
              <span className="experience-company-name">Francium Tech</span>
            </div>

            <div className="experience-badge">
              <Calendar size={15} />
              <span>{EXPERIENCE_START_LABEL} — Present</span>
              <span className="experience-duration-tag">({duration})</span>
            </div>
          </div>

          <p className="experience-description">
            Building, optimizing, and maintaining multi-tiered applications using <strong>Python, Ruby on Rails, Vue 3, React, .NET Core, and .NET MAUI</strong> while supporting code quality, response speed, and long-term scalability.
          </p>

          <div className="experience-strengths-grid">
            {keyStrengths.map((item) => (
              <div key={item} className="strength-item">
                <CheckCircle2 size={18} className="strength-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshExperience;
