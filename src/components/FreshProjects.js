import React from "react";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import project1Image from "../assets/clientproject1.png";
import project2Image from "../assets/clientproject4.png";
import project3Image from "../assets/clientproject3.png";
import project4Image from "../assets/clientproject5.png";
import project5Image from "../assets/clientproject2.png";
import "../fresh-styles.css";

const projects = [
  {
    id: 1,
    title: "Calculator App",
    image: project3Image,
    type: "Own Project",
    description: "A C# and .NET MAUI calculator experience built for both everyday calculations and more advanced math workflows.",
    techStack: ["C#", ".NET MAUI"],
    sourceCode: "https://github.com/uthandi010/CalculatorApp",
  },
  {
    id: 2,
    title: "Network Sniffer App",
    image: project2Image,
    type: "Own Project",
    description: "A traffic-analysis tool focused on packet capture and NetFlow inspection with a practical desktop-style interface.",
    techStack: ["C#", ".NET MAUI", "SharpPcap", "OpenSSL"],
    sourceCode: "https://github.com/uthandi010/NetworkSnifferApp",
  },
  {
    id: 3,
    title: "Temporary Mail Website",
    image: project4Image,
    type: "Own Project",
    description: "A lightweight utility website for generating temporary email addresses with a fast browser-first experience.",
    techStack: ["HTML", "CSS", "JavaScript", "TypeScript"],
    sourceCode: "https://github.com/uthandi010/Temporary_Mail_Creation",
    liveSite: "https://dummymailcreation.netlify.app/",
  },
  {
    id: 4,
    title: "Blog Post App",
    image: project5Image,
    type: "Own Project",
    description: "A content platform built with Ruby, Vue, and Docker to support publishing workflows and cleaner content management.",
    techStack: ["Ruby", "Vue", "Docker"],
    sourceCode: "https://github.com/uthandi010/blog_app",
  },
  {
    id: 5,
    title: "Teldat BeSafeAgent",
    image: project1Image,
    type: "Client Project",
    description: "A secure network-protection application built with .NET MAUI, SSL, and SQL to improve privacy and traffic safety.",
    techStack: ["C#", ".NET MAUI", "SSL", "SQL"],
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
          A selection of projects that demonstrate my skills and experience
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
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
                {project.liveSite && (
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreshProjects;