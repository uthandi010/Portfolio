import React from "react";
import { ArrowUp } from "lucide-react";
import "../fresh-styles.css";

const FreshFooter = () => {
  return (
    <footer className="site-footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Uthandi P. Built with React, FastAPI & .NET expertise.
      </p>
      <a href="#home" className="back-to-top">
        <span>Back to top</span>
        <ArrowUp size={15} />
      </a>
    </footer>
  );
};

export default FreshFooter;
