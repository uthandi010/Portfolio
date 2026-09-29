import React from "react";
import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";
import "../fresh-styles.css";

const skills = [
  {
    category: "Frontend",
    icon: <Layout size={24} />,
    items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Server size={24} />,
    items: ["Node.js", "Python", "Ruby on Rails", ".NET", "GraphQL"]
  },
  {
    category: "Database",
    icon: <Database size={24} />,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    category: "Mobile",
    icon: <Smartphone size={24} />,
    items: ["React Native", ".NET MAUI", "Flutter"]
  },
  {
    category: "DevOps",
    icon: <Wrench size={24} />,
    items: ["Git", "Docker", "AWS", "CI/CD"]
  },
  {
    category: "Core",
    icon: <Code2 size={24} />,
    items: ["REST APIs", "Microservices", "System Design", "Testing"]
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