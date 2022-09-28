const ProjectCard = (props) => {
  const image = require(`../images/${props.projects.img}`);
  return (
    <li className="projectCard">
      <figure className="projectCard__img">
        <img src={image} alt="" />
      </figure>
      <div className="projectCard__hover hidden">
        <p>{props.projects.title}</p>
        <p>{props.projects.description}</p>
        <a href={props.projects.code} target="_blank" rel="noopener noreferrer">
          <span>
            <i class="fa-solid fa-code"></i>
          </span>
        </a>
        <a href={props.projects.demo} target="_blank" rel="noopener noreferrer">
          <span>
            <i class="fa-sharp fa-solid fa-eye"></i>
          </span>
        </a>
      </div>
    </li>
  );
};
export default ProjectCard;
