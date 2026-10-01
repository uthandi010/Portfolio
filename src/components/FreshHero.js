import React from "react";
import { ArrowRight, Sparkles, Code, Terminal, Cpu, Download } from "lucide-react";
import profileImage from "../assets/my_image.jpg";
import "../fresh-styles.css";

const focusAreas = [
  { icon: <Code size={16} />, label: "Modern Web Apps" },
  { icon: <Terminal size={16} />, label: "Scalable Backends" },
  { icon: <Cpu size={16} />, label: "System Architecture" },
];

const FreshHero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="hero-badge-icon" />
            <span>Full-Stack Developer from India</span>
          </div>

          <h1 className="hero-title">
            Building <span className="text-gradient">sharp</span> digital products with cleaner UI.
          </h1>

          <p className="hero-description">
            I'm <span className="text-highlight">Uthandi P</span>. I specialize in building exceptional 
            digital experiences with React, Vue, Python, and .NET. I enjoy taking complex problems 
            and turning them into simple, beautiful, and intuitive designs.
          </p>

          <div className="hero-focus">
            {focusAreas.map((area, index) => (
              <div key={index} className="focus-pill">
                {area.icon}
                <span>{area.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
            <a href="/resume.pdf" download="Uthandi_P_Resume.pdf" className="btn btn-secondary">
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">1+</div>
              <div className="stat-label">Years Exp.</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-value">6</div>
              <div className="stat-label">SaaS Projects</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <div className="hero-image-outline"></div>
            <img src={profileImage} alt="Uthandi P" className="hero-profile-image" />
            
            <div className="floating-hero-card card-1">
              <div className="card-icon">🚀</div>
              <div className="card-info">
                <strong>Fast Delivery</strong>
                <span>Performance first</span>
              </div>
            </div>
            
            <div className="floating-hero-card card-2">
              <div className="card-icon">🎨</div>
              <div className="card-info">
                <strong>Modern UI</strong>
                <span>Clean & Minimal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshHero;