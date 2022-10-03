import "../styles/components/NavBar.scss";
import "../styles/components/NavContact.scss";

import { Link } from "react-router-dom";
import NavContact from "./NavContact";

function NavBar() {
  return (
    <section className="index ">
      <div className="index__container">
        <ul className="index__items ">
          <li>
            <Link to="/" target="_parent" className="index__link">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" target="_parent" className="index__link ">
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
