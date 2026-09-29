import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram, Mail, Sun, Moon } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight whichever section is currently in view.
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
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`classic-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="classic-navbar-inner">
          <a href="#home" className="classic-nav-logo" onClick={closeMobileMenu}>
            <div className="classic-nav-logo-icon">UP</div>
            <span>Uthandi P</span>
          </a>

          <div className="classic-nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`classic-nav-link ${activeSection === item.href ? "active" : ""}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="classic-nav-actions">
            <div className="classic-nav-socials">
              <a href="https://github.com/uthandi010" target="_blank" rel="noopener noreferrer" className="classic-social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/uthandi-p-a70377340/" target="_blank" rel="noopener noreferrer" className="classic-social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/uthandi_jr" target="_blank" rel="noopener noreferrer" className="classic-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
            <button
              type="button"
              className="classic-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Sun size={18} className="theme-icon sun-icon" />
              <Moon size={18} className="theme-icon moon-icon" />
            </button>
            <button
              type="button"
              className="classic-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`classic-mobile-overlay ${isMobileMenuOpen ? "active" : ""}`} onClick={closeMobileMenu}>
        <div className={`classic-mobile-content ${isMobileMenuOpen ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className="classic-mobile-header">
            <div className="classic-nav-logo">
              <div className="classic-nav-logo-icon">UP</div>
              <span>Uthandi P</span>
            </div>
            <button
              type="button"
              className="classic-mobile-close"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="classic-mobile-links">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="classic-mobile-link"
                onClick={closeMobileMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="classic-mobile-footer">
            <p>Get in touch</p>
            <div className="classic-mobile-socials">
              <a href="mailto:uthandi40@gmail.com" className="classic-mobile-social-btn">
                <Mail size={20} />
              </a>
              <a href="https://github.com/uthandi010" target="_blank" rel="noopener noreferrer" className="classic-mobile-social-btn">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/uthandi-p-a70377340/" target="_blank" rel="noopener noreferrer" className="classic-mobile-social-btn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/uthandi_jr" target="_blank" rel="noopener noreferrer" className="classic-mobile-social-btn">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassicNavbar;
