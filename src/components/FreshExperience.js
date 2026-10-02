import React from "react";
import { CheckCircle2, Calendar } from "lucide-react";
import "../fresh-styles.css";

const getExperienceDuration = (startYear, startMonth) => {
  const today = new Date();
  const startDate = new Date(startYear, startMonth - 1, 1);

  let totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 +
    (today.getMonth() - startDate.getMonth());

  if (today.getDate() < startDate.getDate()) {
    totalMonths -= 1;
  }

  if (totalMonths < 0) {
    totalMonths = 0;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years}y ${months}m`;
  }

  if (years > 0) {
    return `${years}y`;
  }

  return `${months}m`;
};

const keyStrengths = [
  "Engineers robust, full-stack web and mobile applications from concept to production",
  "Balances intuitive visual UI/UX design with reliable backend API architectures",
  "Collaborates effectively across cross-functional product and engineering teams",
  "Maintains rigorous automated testing, clean code principles, and CI/CD pipelines",
];

const FreshExperience = () => {
  const duration = getExperienceDuration(2025, 2);

  return (
    <section id="experience" className="section">
      <div className="section-header reveal">
        <span className="section-tag">03 // Experience</span>
        <h2 className="section-title">Professional Journey</h2>
        <p className="section-subtitle">
          Hands-on software development experience building scalable client solutions and SaaS platforms.
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
              <span>Feb 2025 — Present</span>
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
