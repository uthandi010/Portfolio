import React from "react";
import { Layout, Server, Database, CheckCircle2, ShieldCheck, Wrench } from "lucide-react";
import "../fresh-styles.css";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Layout,
    items: ["React", "Vue 3", "TypeScript", "Angular", "HTML5/CSS3", "Responsive UI"],
  },
  {
    category: "Backend & Systems",
    icon: Server,
    items: ["Python (FastAPI)", "Ruby on Rails", "Node.js (Express)", "C# / .NET Core", ".NET MAUI"],
  },
  {
    category: "Database & Storage",
    icon: Database,
    items: ["SQLite", "MongoDB", "MySQL", "PostgreSQL", "EF Core", "SQLAlchemy"],
  },
  {
    category: "Testing & CI/CD",
    icon: CheckCircle2,
    items: ["RSpec", "pytest", "Vitest", "xUnit", "GitHub Actions", "Automated Testing"],
  },
  {
    category: "Architecture & Security",
    icon: ShieldCheck,
    items: ["RESTful APIs", "JWT Auth", "Role-Based Access Control", "Microservices"],
  },
  {
    category: "Developer Tools",
    icon: Wrench,
    items: ["Git & GitHub", "Visual Studio", "VS Code", "Postman", "Linux Shell"],
  },
];

const FreshSkills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header reveal">
        <span className="section-tag">01 // Skills & Capabilities</span>
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          A comprehensive suite of technologies I leverage to craft reliable, fast, and scalable digital products.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, index) => {
          const IconComponent = group.icon;
          return (
            <div
              key={group.category}
              className="skills-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="skills-card-header">
                <div className="skills-card-icon">
                  <IconComponent size={22} />
                </div>
                <h3 className="skills-card-title">{group.category}</h3>
              </div>

              <div className="skills-tags-container">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FreshSkills;
