import { useMemo } from "react";
import { projectData } from "../../data/projects.js";
import ProjectCard from "../molecules/ProjectCard.jsx";

const Portfolio = () => {
  const projectsLocalData = useMemo(() => Array.from(projectData.values()), []);

  return (
    <div className="portfolio" id="portfolio">
      <h3 className="portfolio__title">Portfolio</h3>
      <div className="portfolio__project-container">
        {projectsLocalData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
