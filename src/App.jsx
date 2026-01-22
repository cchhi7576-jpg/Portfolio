import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skill";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
