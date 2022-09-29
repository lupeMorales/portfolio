import "../styles/App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import dataProjects from "../data/projects.json";
//components

import Hello from "./Hello";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";

function App() {
  /*   const [projects, setProjects] = useState(dataProjects); */
  const projects = dataProjects;
  const [menuHidden, setMenuHidden] = useState({
    classMenu: "",
  });
  const handleClickMenu = (ev) => {
    if (ev.currentTarget.id === "menuBars") {
      setMenuHidden({
        classMenu: "open",
      });
    } else {
      setMenuHidden({
        classMenu: "",
      });
    }
  };

  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <Hello
                menuHidden={menuHidden}
                handleClickMenu={handleClickMenu}
              />
            }
          />
          {/*  <Route path="/index" element={<Index />} /> */}
          <Route
            path="/about"
            element={
              <About
                menuHidden={menuHidden}
                handleClickMenu={handleClickMenu}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Projects
                projects={projects}
                menuHidden={menuHidden}
                handleClickMenu={handleClickMenu}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                menuHidden={menuHidden}
                handleClickMenu={handleClickMenu}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
