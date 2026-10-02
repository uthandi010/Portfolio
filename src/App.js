import React, { useEffect } from "react";
import { ThemeProvider } from "./theme-context";
import ClassicNavbar from "./components/ClassicNavbar";
import FreshHero from "./components/FreshHero";
import FreshSkills from "./components/FreshSkills";
import FreshProjects from "./components/FreshProjects";
import FreshExperience from "./components/FreshExperience";
import FreshContact from "./components/FreshContact";
import FreshFooter from "./components/FreshFooter";
import ChatWidget from "./components/ChatWidget";
import "./fresh-styles.css";

const App = () => {
  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="app-container">
        {/* Background Ambient Glowing Orbs */}
        <div className="ambient-orb ambient-orb-1"></div>
        <div className="ambient-orb ambient-orb-2"></div>
        <div className="ambient-orb ambient-orb-3"></div>

        <ClassicNavbar />

        <main>
          <FreshHero />
          <FreshSkills />
          <FreshProjects />
          <FreshExperience />
          <FreshContact />
        </main>

        <FreshFooter />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
};

export default App;
