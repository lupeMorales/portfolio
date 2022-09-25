import "../styles/App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//components

import Hello from "./Hello";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        {" "}
        <Routes>
          <Route path="/" element={<Hello />} />
          {/*  <Route path="/index" element={<Index />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
