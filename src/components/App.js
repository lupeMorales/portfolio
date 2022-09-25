import "../styles/App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//components
import Header from "./Header";
import Hello from "./Hello";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [hambMenuActive, setHambMenuActive] = useState("");

  const handleMenuHamburguer = (ev) => {
    ev.preventDefault();
    hambMenuActive === "" ? setHambMenuActive("active") : setHambMenuActive("");
    console.log("sdfg");
  };

  return (
    <div className="App">
      <Header />
      {/*  <header>
        <HamburguerMenu
          handleMenu={handleMenuHamburguer}
          hambMenuActive={hambMenuActive}
        />
      </header> */}
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
