import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram, Mail, Sun, Moon, FileText, ChevronRight } from "lucide-react";
import { useTheme } from "../theme-context";
import "../fresh-styles.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const ClassicNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="navbar-wrapper">
        <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
          <div className="navbar-inner">
            <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
              <span className="navbar-logo-mark">UP</span>
              <span className="navbar-logo-text">Uthandi P.</span>
            </a>

            <div className="navbar-links">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`navbar-link ${activeSection === item.href ? "is-active" : ""}`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="navbar-actions">
              <button
                type="button"
                className="theme-switch-btn"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <a
                href="/resume.pdf"
                download="Uthandi_P_Resume.pdf"
                className="navbar-resume"
              >
                <FileText size={15} />
                <span>Résumé</span>
              </a>

              <button
                type="button"
                className="navbar-menu-btn"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className={`mobile-overlay ${isMobileMenuOpen ? "is-active" : ""}`} onClick={closeMobileMenu}>
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-panel-header">
            <div className="navbar-logo">
              <span className="navbar-logo-mark">UP</span>
              <span className="navbar-logo-text">Uthandi P.</span>
            </div>
            <button
              type="button"
              className="mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mobile-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`mobile-link ${activeSection === item.href ? "is-active" : ""}`}
                onClick={closeMobileMenu}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} />
              </a>
            ))}
          </div>

          <div className="mobile-footer">
            <p>Connect with Uthandi</p>
            <div className="mobile-socials">
              <a href="mailto:uthandi40@gmail.com" className="mobile-social-btn" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/uthandi010" target="_blank" rel="noopener noreferrer" className="mobile-social-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/uthandi-p-a70377340/" target="_blank" rel="noopener noreferrer" className="mobile-social-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/uthandi_jr" target="_blank" rel="noopener noreferrer" className="mobile-social-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassicNavbar;
