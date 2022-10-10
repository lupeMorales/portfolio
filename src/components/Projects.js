import "../styles/layouts/Projects.scss";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const renderProjects = props.projects.map((item, index) => {
    return <ProjectCard key={index} projects={item} />;
  });

  return (
    <section className="projects animate__animated animate__fadeInRight">
      <section className="section__hero projects__destktop">
        <div className="title-container">
          <div className="section__line"></div>
          <h2 className="section__title title">proyectos</h2>
        </div>

        <p className="section__text--strong">
          Algunos de los proyectos que he realizados.
          <span className="line-break"></span> Si quieres ver más visita mi
          repositorio en
          <a
            className="projects__link"
            href="https://github.com/lupeMorales"
            rel="noreferrer"
            target="_blank"
            title="github"
          >
            GitHub
          </a>
        </p>
      </section>
      <section className="projects__container">
        <ul className="projects__list">{renderProjects}</ul>
      </section>
    </section>
  );
};
export default Projects;
