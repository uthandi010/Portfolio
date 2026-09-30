import React from "react";
import {
  Github,
  FolderGit2,
  KanbanSquare,
  CalendarCheck,
  Link2,
  Headset,
  Boxes,
  Receipt,
} from "lucide-react";
import "../fresh-styles.css";

const projects = [
  {
    id: 1,
    title: "BoardRoom",
    icon: KanbanSquare,
    gradient: "linear-gradient(135deg, #6366f1, #3b82f6)",
    type: "Own Project",
    description:
      "A multi-tenant project management tool for teams - workspaces, boards, and tasks, with Owner/Admin/Member roles enforced server-side on every request, not just hidden in the UI.",
    techStack: ["C#", "ASP.NET Core", "EF Core", "React", "TypeScript"],
    sourceCode: "https://github.com/uthandi010/BoardRoom",
  },
  {
    id: 2,
    title: "BookedIn",
    icon: CalendarCheck,
    gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    type: "Own Project",
    description:
      "An appointment-booking SaaS for small businesses - a real availability engine computes actual free time slots from opening hours and existing bookings, plus a public no-login booking page.",
    techStack: ["Ruby on Rails", "Vue 3", "SQLite"],
    sourceCode: "https://github.com/uthandi010/BookedIn",
  },
  {
    id: 3,
    title: "LinkFolio",
    icon: Link2,
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    type: "Own Project",
    description:
      "A link-in-bio builder with click tracking baked in - every click is recorded and rolled up into a real analytics dashboard, daily trends and per-link breakdowns included.",
    techStack: ["Python", "FastAPI", "SQLAlchemy", "React"],
    sourceCode: "https://github.com/uthandi010/LinkFolio",
  },
  {
    id: 4,
    title: "HelpDeskly",
    icon: Headset,
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    type: "Own Project",
    description:
      "A customer support helpdesk - full ticket lifecycle management, email-gated self-service for customers with no account, and an agent-facing analytics dashboard.",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    sourceCode: "https://github.com/uthandi010/HelpDeskly",
  },
  {
    id: 5,
    title: "ShelfSpace",
    icon: Boxes,
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    type: "Own Project",
    description:
      "Inventory and order management for a small seller, paired with a native .NET MAUI desktop client instead of another browser app - all-or-nothing stock checks and price snapshotting on every order.",
    techStack: ["C#", "ASP.NET Core", ".NET MAUI", "EF Core"],
    sourceCode: "https://github.com/uthandi010/ShelfSpace",
  },
  {
    id: 6,
    title: "PayDesk",
    icon: Receipt,
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    type: "Own Project",
    description:
      "A subscription billing and invoicing SaaS with a pluggable payment-gateway interface, generated PDF invoices, and a revenue dashboard with MRR normalized across monthly and yearly plans.",
    techStack: ["Ruby on Rails", "React", "Recharts"],
    sourceCode: "https://github.com/uthandi010/PayDesk",
  },
];

const FreshProjects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-header reveal">
        <div className="section-badge">
          <FolderGit2 size={16} />
          Featured Projects
        </div>
        <h2 className="section-title">My recent work</h2>
        <p className="section-description">
          A set of full-stack SaaS-style apps, each built around one real product problem rather than plain CRUD
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={project.id}
              className="project-card reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="project-image-container project-visual" style={{ background: project.gradient }}>
                <Icon size={56} color="#ffffff" strokeWidth={1.5} />
                <span className="project-type-badge">{project.type}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FreshProjects;
