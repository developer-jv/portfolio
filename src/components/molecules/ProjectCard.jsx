import Skill from "../atoms/Skill.jsx";

const ProjectCard = ({ project }) => (
  <div className="card">
    <div
      className="card__image"
      style={{ backgroundImage: `url(${project.imageSrc})` }}
    ></div>
    <div className="card__description">
      <h3>{project.title}</h3>
      <div className="card__technologies">
        {project.skills.map((item) => (
          <Skill key={item.text} src={item.imageSrc} text={item.text} />
        ))}
      </div>
      <div className="card__buttons">
        <a
          className="card__demo"
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Demo</div>
        </a>
        <a
          className="card__code"
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Code</div>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
