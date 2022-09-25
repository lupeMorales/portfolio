import "../styles/components/HamburgerMenu.scss";

const HamburguerMenu = (props) => {
  const handleMenu = (ev) => {
    ev.preventDefault();
    props.handleMenu();
  };
  return (
    <a className="navbar" href="menu">
      <div
        className={`navbar__icon ${props.hambMenuActive}`}
        onClick={handleMenu}
      >
        <span className={`navbar__line--1 `} id="1"></span>
        <span className={`navbar__line--2 `}></span>
        <span className={`navbar__line--3 `}></span>
      </div>
    </a>
  );
};

export default HamburguerMenu;
