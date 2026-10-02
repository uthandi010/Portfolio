import React, { useState } from "react";
import { Copy, Check, Github, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import "../fresh-styles.css";

const FreshContact = () => {
  const [copied, setCopied] = useState(false);
  const email = "uthandi40@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="section">
      <div className="contact-card reveal">
        <span className="section-tag">04 // Contact & Connect</span>
        <h2 className="contact-title">Let's build something extraordinary together.</h2>
        <p className="contact-subtitle">
          Whether you have a groundbreaking SaaS idea, an open engineering position, or just want to connect — my inbox is always open.
        </p>

        <div className="contact-email-wrapper">
          <span className="contact-email-text">{email}</span>
          <button type="button" className="copy-btn" onClick={handleCopy}>
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <div className="contact-social-links">
          <a
            href="mailto:uthandi40@gmail.com"
            className="social-pill"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/uthandi010"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/uthandi-p-a70377340/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/uthandi_jr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Instagram size={16} />
            <span>Instagram</span>
          </a>
          <span className="social-pill" style={{ opacity: 0.7, cursor: "default" }}>
            <MapPin size={16} />
            <span>India</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default FreshContact;
