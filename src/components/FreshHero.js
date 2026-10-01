import React from "react";
import { ArrowRight, Sparkles, Terminal, Code, Cpu, Download } from "lucide-react";
import profileImage from "../assets/my_image.jpg";
import "../fresh-styles.css";

const FreshHero = () => {
  return (
    <section id="home" className="hero-nextgen">
      <div className="hero-mesh-background"></div>
      
      <div className="hero-nextgen-content">
        <div className="reveal">
          <div className="premium-badge">
            <span className="pulsing-dot"></span>
            Available for new opportunities
          </div>
        </div>

        <h1 className="hero-headline reveal" style={{ transitionDelay: "100ms" }}>
          I craft <span className="gradient-text">digital</span> experiences that are fast, scalable, and visually stunning.
        </h1>

        <p className="hero-subheadline reveal" style={{ transitionDelay: "200ms" }}>
          Hi, I'm <strong>Uthandi P</strong>. A Full-Stack Developer specializing in React, Vue, Python, and .NET. I build seamless applications from the database all the way to the pixels on the screen.
        </p>

        <div className="hero-actions reveal" style={{ transitionDelay: "300ms" }}>
          <a href="#projects" className="premium-btn primary">
            Explore My Work <ArrowRight size={18} />
          </a>
          <a href="/resume.pdf" download="Uthandi_P_Resume.pdf" className="premium-btn secondary">
            <Download size={18} /> Download Resume
          </a>
        </div>

        <div className="hero-metrics reveal" style={{ transitionDelay: "400ms" }}>
          <div className="metric">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric">
            <h3>6</h3>
            <p>SaaS Applications</p>
          </div>
          <div className="metric-divider"></div>
          <div className="metric">
            <h3>100%</h3>
            <p>Commitment</p>
          </div>
        </div>
      </div>
      
      <div className="hero-nextgen-visual reveal" style={{ transitionDelay: "500ms" }}>
        <div className="avatar-cluster">
          <div className="avatar-glow"></div>
          <img src={profileImage} alt="Uthandi P" className="main-avatar" />
          
          <div className="floating-tech-badge react-badge">
            <Code size={20} />
          </div>
          <div className="floating-tech-badge python-badge">
            <Terminal size={20} />
          </div>
          <div className="floating-tech-badge net-badge">
            <Cpu size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshHero;