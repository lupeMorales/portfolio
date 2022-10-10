import "../styles/components/NavBar.scss";
import "../styles/components/NavContact.scss";

import { Link } from "react-router-dom";
import NavContact from "./NavContact";
import { useState } from "react";

function NavBar() {
  const [hidden, setHidden] = useState(false);
  const handleClik = () => {
    setHidden(!hidden);
  };
  const displayNone = {
    display: "none",
  };
  const displayBlock = {
    display: "block",
  };
  return (
    <section
      style={hidden ? displayNone : displayBlock}
      className="index animate__animated animate__fadeInLeft"
    >
      <div className="index__container">
        <ul className="index__items ">
          <li>
            <Link
              to="/"
              target="_parent"
              className="index__link"
              onClick={handleClik}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              target="_parent"
              className="index__link "
              onClick={handleClik}
            >
              sobre mi
            </Link>
          </li>
          <li>
            <Link to="/projects" target="_parent" className="index__link">
              proyectos
            </Link>
          </li>
          <li>
            <Link to="/contact" target="_parent" className="index__link">
              contacto
            </Link>
          </li>
        </ul>
        <NavContact />
      </div>
    </section>
  );
}

export default NavBar;
