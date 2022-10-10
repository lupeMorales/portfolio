import "../styles/components/HamburgerMenu.scss";
import "../styles/components/NavContact.scss";

import { useState } from "react";
import NavContact from "./NavContact";
import { Link } from "react-router-dom";

const HamburguerMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [hambMenuActive, setHambMenuActive] = useState(false);
  /*   const [hambMenuActive, setHambMenuActive] = useState(""); */
  const handleMenu = (ev) => {
    ev.preventDefault();
    setToggle(!toggle);
    setHambMenuActive(!hambMenuActive);
    /*   hambMenuActive === "" ? setHambMenuActive("active") : setHambMenuActive(""); */
  };
  const handleClick = () => {
    setToggle(!toggle);
    setHambMenuActive(!hambMenuActive);
  };

  return (
    <>
      <a className="navbar" href="menu">
        <div
          className={`navbar__icon ${hambMenuActive ? "active" : ""}`}
          onClick={handleMenu}
        >
          <span className={`navbar__line--1 `} id="1"></span>
          <span className={`navbar__line--2 `}></span>
          <span className={`navbar__line--3 `}></span>
        </div>
      </a>
      {toggle && (
        <section className="index animate__animated animate__fadeInLeft">
          <div className="index__container">
            <ul className="index__items ">
              <li>
                <Link
                  to="/"
                  target="_parent"
                  className="index__link"
                  onClick={handleClick}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  target="_parent"
                  className="index__link "
                  onClick={handleClick}
                >
                  sobre mi
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  target="_parent"
                  className="index__link"
                  onClick={handleClick}
                >
                  proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  target="_parent"
                  className="index__link"
                  onClick={handleClick}
                >
                  contacto
                </Link>
              </li>
            </ul>
            <NavContact />
          </div>
        </section>
      )}
    </>
  );
};

export default HamburguerMenu;
