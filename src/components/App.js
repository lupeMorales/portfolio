import "../styles/App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//components
import HamburguerMenu from "./HamburgerMenu";
import Hello from "./Hello";
import Index from "./Index";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [hambMenuActive, setHambMenuActive] = useState("");

  const handleMenuHamburguer = (ev) => {
    ev.preventDefault();
    console.log("esoty clickando");
    hambMenuActive === "" ? setHambMenuActive("active") : setHambMenuActive("");
  };

  return (
    <div className="App">
      <header>
        <HamburguerMenu
          handleMenu={handleMenuHamburguer}
          hambMenuActive={hambMenuActive}
        />
      </header>
      <main>
        {" "}
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/index" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
