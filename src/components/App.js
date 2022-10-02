import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import dataProjects from "../data/projects.json";
//components
import Hello from "./Hello";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import HamburguerMenu from "./HamburgerMenu";

function App() {
  const projects = dataProjects;

  return (
    <div className="App">
      <HamburguerMenu />

      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
