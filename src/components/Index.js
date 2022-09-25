/* import { Link } from  */ "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/layouts/Index.scss";
import "../styles/components/NavContact.scss";
import NavContact from "./NavContact";

const Index = (props) => {
  return (
    <section className={`index ${props.showMenu}`}>
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
  );
};
export default Index;
