import "../styles/components/HamburgerMenu.scss";
import { useState } from "react";

import NavBar from "./NavBar";

const HamburguerMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [hambMenuActive, setHambMenuActive] = useState("");
  const handleMenu = (ev) => {
    ev.preventDefault();
    console.log("esoty clickando");
    setToggle(!toggle);
    hambMenuActive === "" ? setHambMenuActive("active") : setHambMenuActive("");
  };

  return (
    <>
      {" "}
      <a className="navbar" href="menu">
        <div className={`navbar__icon ${hambMenuActive}`} onClick={handleMenu}>
          <span className={`navbar__line--1 `} id="1"></span>
          <span className={`navbar__line--2 `}></span>
          <span className={`navbar__line--3 `}></span>
        </div>
      </a>
      {toggle && <NavBar />}
    </>
  );
};

export default HamburguerMenu;
