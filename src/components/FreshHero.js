import React from "react";
import { ArrowRight, MapPin, Download } from "lucide-react";
import profileImage from "../assets/my_image.jpg";
import "../fresh-styles.css";

const FreshHero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-availability-pill">
            <span className="pulse-dot"></span>
            <span>Available for Full-Stack Opportunities</span>
          </div>

          <h1 className="hero-title">
            Crafting High-Performance <span className="gradient-text">Web & Mobile</span> Products.
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Uthandi P.</strong> A Full-Stack Engineer based in India. I craft robust backends and polished user interfaces using <strong>React, Vue, Python, Ruby on Rails, and .NET</strong>.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Work</span>
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Let's Talk</span>
            </a>
            <a
              href="/resume.pdf"
              download="Uthandi_P_Resume.pdf"
              className="btn btn-text"
              style={{ gap: "6px" }}
            >
              <Download size={15} />
              <span>Résumé</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-card">
              <span className="hero-stat-value">1+</span>
              <span className="hero-stat-label">Years Professional Exp</span>
            </div>
            <div className="hero-stat-card">
              <span className="hero-stat-value">6</span>
              <span className="hero-stat-label">Production SaaS Products</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-frame">
            <div className="hero-tech-pill">
              <span>React & .NET</span>
            </div>

            <div className="hero-portrait-wrapper">
              <img src={profileImage} alt="Uthandi P" className="hero-portrait" />
            </div>

            <div className="hero-floating-badge">
              <div className="hero-badge-icon">
                <MapPin size={18} />
              </div>
              <div>
                <span className="hero-badge-title">Based In</span>
                <span className="hero-badge-value">India 🇮🇳</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshHero;
