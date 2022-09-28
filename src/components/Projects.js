import "../styles/layouts/Projects.scss";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const renderProjects = props.projects.map((item, index) => {
    return <ProjectCard key={index} projects={item} />;
  });

  return (
    <section className="projects">
      <section className="section__hero">
        <div className="title-container">
          <div className="section__line"></div>
          <h2 className="section__title title">proyectos</h2>
        </div>

        <p className="section__text--strong">
          Algunos de los proyectos que he realizados.
        </p>
      </section>
      <section className="projects__container">
        <ul className="projects__list">{renderProjects}</ul>
      </section>
    </section>
  );
};
export default Projects;
