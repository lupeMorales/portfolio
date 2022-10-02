import pdf from "../assets/CV-LupeMorales-FrontendDeveloper.pdf";
const NavContact = () => {
  return (
    <nav className="social-links">
      <a
        href="https://github.com/lupeMorales"
        rel="noreferrer"
        target="_blank"
        title="github"
      >
        <i className="fa-brands fa-github-alt icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/lupe-morales/"
        rel="noreferrer"
        target="_blank"
        title="linkedin"
      >
        <i className="fa-brands fa-linkedin-in icon"></i>
      </a>
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        download="CV-LupeMorales-FrontendDeveloper.pdf"
        title="descargar CV"
      >
        <span className="icon">CV</span>
      </a>
    </nav>
  );
};
export default NavContact;
