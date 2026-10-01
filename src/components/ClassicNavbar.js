import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import "../fresh-styles.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const ClassicNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`pill-navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="pill-navbar">
          <a href="#home" className="pill-logo">UP</a>
          
          <div className="pill-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="pill-link">
                {item.label}
              </a>
            ))}
          </div>

          <div className="pill-actions">
            <a href="https://github.com/uthandi010" target="_blank" rel="noopener noreferrer" className="pill-icon">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/uthandi-p-a70377340/" target="_blank" rel="noopener noreferrer" className="pill-icon">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="pill-contact-btn">
              Contact Me
            </a>
            <button className="pill-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu */}
      <div className={`mobile-menu-glass ${isMobileMenuOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={closeMobileMenu}>
          <X size={32} />
        </button>
        <div className="mobile-links-container">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="mobile-huge-link" onClick={closeMobileMenu}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="mobile-huge-link" onClick={closeMobileMenu}>Contact</a>
        </div>
        <div className="mobile-socials">
            <a href="mailto:uthandi40@gmail.com"><Mail size={24}/></a>
            <a href="https://github.com/uthandi010" target="_blank" rel="noopener noreferrer"><Github size={24}/></a>
            <a href="https://www.linkedin.com/in/uthandi-p-a70377340/" target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a>
        </div>
      </div>
    </>
  );
};

export default ClassicNavbar;
