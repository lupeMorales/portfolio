import "../styles/components/ProjectsCard.scss";
const ProjectCard = (props) => {
  const image = require(`../images/${props.projects.img}`);
  return (
    <li className="projectCard">
      <figure>
        <img className="projectCard__img" src={image} alt="" />
      </figure>
      <div className="projectCard__hover ">
        <p>{props.projects.title}</p>
        <p>{props.projects.description}</p>
        <a href={props.projects.code} target="_blank" rel="noopener noreferrer">
          <span>
            <i className="fa-solid fa-code"></i>
          </span>
        </a>
        <a href={props.projects.demo} target="_blank" rel="noopener noreferrer">
          <span>
            <i className="fa-sharp fa-solid fa-eye"></i>
          </span>
        </a>
      </div>
    </li>
  );
};
export default ProjectCard;
