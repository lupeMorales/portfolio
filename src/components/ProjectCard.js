import "../styles/components/ProjectsCard.scss";
const ProjectCard = (props) => {
  const image = require(`../images/${props.projects.img}`);
  return (
    <li className="projectCard">
      <figure className="projectCard__container">
        <img
          className="projectCard__img"
          src={image}
          alt={`${props.projects.title}`}
          title={`${props.projects.title}`}
        />

        <div className="projectCard__overlay ">
          <a
            href={props.projects.code}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <span>
              <i className="fa-solid fa-code fa-4x" title="ver código"></i>
            </span>
          </a>
          <a
            href={props.projects.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <span>
              <i
                className="fa-sharp fa-solid fa-eye fa-4x"
                title="ver demo"
              ></i>
            </span>
          </a>
        </div>
      </figure>
    </li>
  );
};
export default ProjectCard;
