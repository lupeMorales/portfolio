import "../styles/components/NavBar.scss";
import "../styles/components/NavContact.scss";
import "../styles/components/HamburgerMenu.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavContact from "./NavContact";
import HamburguerMenu from "./HamburgerMenu";

function NavBar() {
  const [hambMenuActive, setHambMenuActive] = useState("");
  const [showIndex, setShowIndex] = useState("hidden");

  const handleMenu = () => {
  activeMenu();
    showMenu();
  };

  const activeMenu = () => {
    hambMenuActive === "" ? setHambMenuActive("active") : setHambMenuActive("");
  };
  const showMenu = () => {
    showIndex === "" ? setShowIndex("hidden") : setShowIndex("");
  };
  return (
    <>
      <HamburguerMenu hambMenuActive={hambMenuActive} handleMenu={handleMenu} />
      <section className={`index ${showIndex}`}>
        <div className="index__container">
          <ul className="index__items ">
            <li>
              <Link to="/" className="index__link">
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="index__link ">
                sobre mi
              </Link>
            </li>
            <li>
              <Link to="/projects" className="index__link">
                proyectos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="index__link">
                contacto
              </Link>
            </li>
          </ul>
          <NavContact />
        </div>
      </section>
    </>
  );
}
export default NavBar;
