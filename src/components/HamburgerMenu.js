import { Link } from "react-router-dom";
import "../styles/components/HamburgerMenu.scss";
/* import { useState } from "react"; */
const HamburguerMenu = (props) => {
  /*   const [hambMenuActive, setHambMenuActive] = useState(""); */

  /*   const handleMenu = (ev) => {
    ev.preventDefault();
    console.log("esoty clickando");
    hambMenuActive === "" ? setHambMenuActive("active") : setHambMenuActive("");
  }; */

  return (
    <>
      <a className="navbar" href="menu">
        <div
          className={`navbar__icon ${props.hambMenuActive}`}
          onClick={props.handleMenu}
        >
          <span className={`navbar__line--1 `} id="1"></span>
          <span className={`navbar__line--2 `}></span>
          <span className={`navbar__line--3 `}></span>
        </div>{" "}
      </a>
    </>
  );
};

export default HamburguerMenu;
