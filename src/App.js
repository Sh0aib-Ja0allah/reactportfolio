import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Youtube from "./components/Youtube/Youtube";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

/* The inline script in index.html has already resolved the theme before
   React mounts, so read it back off the element rather than re-deciding. */
const getInitialTheme = () => {
  const applied = document.documentElement.getAttribute("data-theme");
  return applied === "light" ? "light" : "dark";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    // Keeps the mobile browser chrome in step with the page.
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", theme === "light" ? "#fbfbfa" : "#050505");
    }

    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {
      /* Storage can be unavailable in private mode — the theme still applies. */
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <div className="app">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Youtube />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
