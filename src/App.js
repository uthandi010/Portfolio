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
  // Fade/slide sections into view as the visitor scrolls to them.
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="app-container">
        <ClassicNavbar />

        <main>
          <FreshHero />
          <div className="section-divider"></div>
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
