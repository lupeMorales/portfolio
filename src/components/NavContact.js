import pdf from "../assets/CV-LupeMorales-FrontendDeveloper.pdf";
const NavContact = () => {
  return (
    <nav className="social-links">
      <a href="https://github.com/lupeMorales">
        <i className="fa-brands fa-github-alt icon"></i>
      </a>
      <a href="https://www.linkedin.com/in/lupe-morales/">
        <i className="fa-brands fa-linkedin-in icon"></i>
      </a>
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        download="CV-LupeMorales-FrontendDeveloper.pdf"
      >
        <span className="icon">CV</span>
      </a>
    </nav>
  );
};
export default NavContact;
