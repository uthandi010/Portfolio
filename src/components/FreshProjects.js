import React from "react";
import { Github, ExternalLink } from "lucide-react";
import boardroomShot from "../assets/screenshots/boardroom.png";
import bookedinShot from "../assets/screenshots/bookedin.png";
import linkfolioShot from "../assets/screenshots/linkfolio.png";
import helpdesklyShot from "../assets/screenshots/helpdeskly.png";
import paydeskShot from "../assets/screenshots/paydesk.png";
import shelfspaceShot from "../assets/screenshots/shelfspace.png";
import "../fresh-styles.css";

const projects = [
  {
    id: 1,
    title: "BoardRoom",
    badge: "Full-Stack SaaS",
    description:
      "A multi-tenant project management platform with workspaces, Kanban boards, and role-based permissions enforced server-side on every request.",
    techStack: ["C#", "ASP.NET Core", "EF Core", "React", "TypeScript"],
    sourceCode: "https://github.com/uthandi010/BoardRoom",
    image: boardroomShot,
  },
  {
    id: 2,
    title: "BookedIn",
    badge: "Booking Engine",
    description:
      "An appointment-booking SaaS featuring a real-time availability engine computing free slots from business hours and bookings, plus public client booking.",
    techStack: ["Ruby on Rails", "Vue 3", "SQLite"],
    sourceCode: "https://github.com/uthandi010/BookedIn",
    image: bookedinShot,
  },
  {
    id: 3,
    title: "LinkFolio",
    badge: "Analytics Builder",
    description:
      "A link-in-bio page builder with real-time click tracking, daily visitor trends, and aggregated per-link analytics dashboards.",
    techStack: ["Python", "FastAPI", "SQLAlchemy", "React"],
    sourceCode: "https://github.com/uthandi010/LinkFolio",
    image: linkfolioShot,
  },
  {
    id: 4,
    title: "HelpDeskly",
    badge: "Support Portal",
    description:
      "A customer support ticketing portal with full lifecycle management, email-gated self-service, and agent analytics dashboard.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    sourceCode: "https://github.com/uthandi010/HelpDeskly",
    image: helpdesklyShot,
  },
  {
    id: 5,
    title: "ShelfSpace",
    badge: "Desktop & Inventory",
    description:
      "Inventory management paired with a native .NET MAUI desktop application for inventory snapshotting and atomic stock verification.",
    techStack: ["C#", "ASP.NET Core", ".NET MAUI", "EF Core"],
    sourceCode: "https://github.com/uthandi010/ShelfSpace",
    image: shelfspaceShot,
  },
  {
    id: 6,
    title: "PayDesk",
    badge: "Billing & Revenue",
    description:
      "Subscription billing and invoicing platform featuring pluggable payment gateway handlers, automated PDF invoice generation, and MRR metrics.",
    techStack: ["Ruby on Rails", "React", "Recharts"],
    sourceCode: "https://github.com/uthandi010/PayDesk",
    image: paydeskShot,
  },
];

const FreshProjects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-header reveal">
        <span className="section-tag">02 // Featured Projects</span>
        <h2 className="section-title">Production SaaS Applications</h2>
        <p className="section-subtitle">
          Six full-stack products engineered to solve real-world architectural, operational, and user experience problems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="project-visual-wrapper">
              <div className="project-window-header">
                <span className="window-dot window-dot-red"></span>
                <span className="window-dot window-dot-yellow"></span>
                <span className="window-dot window-dot-green"></span>
              </div>

              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />
              )}

              <span className="project-badge">{project.badge}</span>
            </div>

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech-list">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FreshProjects;
