import "../styles/components/NavBar.scss";
import "../styles/components/NavContact.scss";
import "../styles/components/HamburgerMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavContact from "./NavContact";
import HamburguerMenu from "./HamburgerMenu";

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

/*  const [hambMenuActive, setHambMenuActive] = useState("");
  const [showIndex, setShowIndex] = useState("hidden");

  const handleMenu = () => {
    activeMenu();
    showMenu();
  };

  const activeMenu = () => {
    hambMenuActive === "" ? setHambMenuActive("active") : setHambMenuActive("");
  };
  const showMenu = () => {
    showIndex === "" ? setShowIndex(" slide-out hidden") : setShowIndex("");
  };
  return (
    <header>
      <HamburguerMenu hambMenuActive={hambMenuActive} handleMenu={handleMenu} />
      <section className={`index ${showIndex}`}>
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
            <li>
              <Link to="/contact" target="_parent" className="index__link">
                contacto
              </Link>
            </li>
          </ul>
          <NavContact />
        </div>
      </section>
    </header>
  );
} */
export default NavBar;
