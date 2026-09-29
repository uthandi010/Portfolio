import React from "react";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
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

  // Return only years and months as requested
  if (years > 0 && months > 0) {
    return `${years}y ${months}m`;
  }

  if (years > 0) {
    return `${years}y`;
  }

  return `${months}m`;
};

const strengths = [
  "Builds robust applications across frontend and backend systems",
  "Balances product usability, performance, and clean engineering",
  "Works effectively with cross-functional teams and delivery timelines",
  "Continuously improves code quality, maintainability, and workflow"
];

const FreshExperience = () => {
  const experienceDuration = getExperienceDuration(2025, 2);

  return (
    <section id="experience" className="section">
      <div className="section-header reveal">
        <div className="section-badge">
          <BriefcaseBusiness size={16} />
          Experience
        </div>
        <h2 className="section-title">Where I work</h2>
        <p className="section-description">
          Turning requirements into production-ready experiences users love
        </p>
      </div>

      <div className="experience-card reveal">
        <div className="experience-header">
          <div>
            <h3 className="experience-title">Full-Stack Developer</h3>
            <p className="experience-company">Francium Tech</p>
          </div>
          <div className="experience-duration">
            {experienceDuration}
          </div>
        </div>

        <p className="experience-description">
          Building and maintaining applications using Python, Ruby on Rails, Vue 3, React, .NET, and .NET MAUI while supporting performance, usability, and long-term maintainability.
        </p>

        <div className="experience-features">
          {strengths.map((strength) => (
            <div key={strength} className="experience-feature">
              <CheckCircle2 size={20} />
              <span>{strength}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreshExperience;