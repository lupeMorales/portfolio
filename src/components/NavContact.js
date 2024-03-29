import pdf from "../assets/CVLupeMorales-Frontend.pdf";
const NavContact = () => {
  return (
    <nav className="social-links">
      <a
        href="https://github.com/lupeMorales"
        rel="noreferrer"
        target="_blank"
        title="github"
        aria-label="icono de github"
      >
        <i className="fa-brands fa-github-alt icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/lupe-morales/"
        rel="noreferrer"
        target="_blank"
        title="linkedin"
        aria-label="icono de linkedin"
      >
        <i className="fa-brands fa-linkedin-in icon"></i>
      </a>
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        download="CVLupeMorales-Frontend.pdf"
        title="descargar CV"
      >
        <span className="icon">CV</span>
      </a>
    </nav>
  );
};
export default NavContact;
