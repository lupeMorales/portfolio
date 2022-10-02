import "../styles/components/NavBar.scss";
import "../styles/components/NavContact.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavContact from "./NavContact";

function NavBar() {
  const [showIndex, setShowIndex] = useState("hidden");
  const showMenu = () => {
    showIndex === "" ? setShowIndex(" slide-out hidden") : setShowIndex("");
  };
  return (
    <section className="index ">
      <div className="index__container">
        <ul className="index__items ">
          <li onClick={showMenu}>
            <Link to="/" target="_parent" className="index__link">
              home
            </Link>
          </li>
          <li onClick={showMenu}>
            <Link to="/about" target="_parent" className="index__link ">
              sobre mi
            </Link>
          </li>
          <li onClick={showMenu}>
            <Link to="/projects" target="_parent" className="index__link">
              proyectos
            </Link>
          </li>
          <li onClick={showMenu}>
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
