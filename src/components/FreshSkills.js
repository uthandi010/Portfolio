import React from "react";
import { Code2, Database, Layout, Server, TestTube2, Wrench } from "lucide-react";
import "../fresh-styles.css";

const skills = [
  {
    category: "Frontend",
    icon: <Layout size={24} />,
    items: ["React", "Vue 3", "TypeScript", "Angular"]
  },
  {
    category: "Backend",
    icon: <Server size={24} />,
    items: ["Python (FastAPI)", "Ruby on Rails", "Node.js (Express)", "C# / .NET", ".NET MAUI"]
  },
  {
    category: "Database",
    icon: <Database size={24} />,
    items: ["SQLite", "MongoDB", "MySQL"]
  },
  {
    category: "Testing & CI/CD",
    icon: <TestTube2 size={24} />,
    items: ["RSpec", "pytest", "Vitest", "xUnit", "GitHub Actions"]
  },
  {
    category: "Core",
    icon: <Code2 size={24} />,
    items: ["REST APIs", "JWT Authentication", "Server-Side Authorization"]
  },
  {
    category: "Tools",
    icon: <Wrench size={24} />,
    items: ["Git", "GitHub", "Visual Studio", "VS Code"]
  }
];

const FreshSkills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header reveal">
        <div className="section-badge">
          <Code2 size={16} />
          Skills & Technologies
        </div>
        <h2 className="section-title">What I work with</h2>
        <p className="section-description">
          A comprehensive toolkit spanning modern web development technologies
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card reveal"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <div className="skill-card-header">
              <div className="skill-card-icon">
                {skill.icon}
              </div>
              <h3 className="skill-card-title">{skill.category}</h3>
            </div>
            <div className="skill-list">
              {skill.items.map((item) => (
                <span key={item} className="skill-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreshSkills;