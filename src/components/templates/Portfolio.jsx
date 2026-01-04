import { useEffect, useMemo, useRef, useState } from "react";
import { projectData } from "../../data/projects.js";
import Button from "../atoms/Button.jsx";
import ProjectCard from "../molecules/ProjectCard.jsx";

const Portfolio = () => {
  const projectsLocalData = useMemo(() => Array.from(projectData.values()), []);
  const trackRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const scrollByStep = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(".portfolio__slide");
    const step = slide ? slide.offsetWidth + 24 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  useEffect(() => {
    if (!autoPlay) return;
    const track = trackRef.current;
    if (!track) return;
    const id = setInterval(() => {
      const slide = track.querySelector(".portfolio__slide");
      const step = slide ? slide.offsetWidth + 24 : 320;
      const maxScroll = track.scrollWidth - track.clientWidth - 4;
      if (track.scrollLeft >= maxScroll) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3600);

    return () => clearInterval(id);
  }, [autoPlay]);

  return (
    <div className="portfolio" id="portfolio">
      <h3 className="portfolio__title">Portfolio</h3>
      <div className="portfolio__carousel">
        <button
          className="portfolio__nav portfolio__nav--prev"
          type="button"
          aria-label="Previous project"
          onClick={() => {
            setAutoPlay(false);
            scrollByStep(-1);
          }}
        >
          ‹
        </button>
        <div className="portfolio__track" ref={trackRef}>
          {projectsLocalData.map((project) => (
            <div className="portfolio__slide" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <button
          className="portfolio__nav portfolio__nav--next"
          type="button"
          aria-label="Next project"
          onClick={() => {
            setAutoPlay(false);
            scrollByStep(1);
          }}
        >
          ›
        </button>
      </div>
      <div className="portfolio__cta">
        <p>Ready to see the finale? Let’s finish the tour together.</p>
        <Button className="portfolio__cta-button" text="Continue" link="#contact" />
      </div>
    </div>
  );
};

export default Portfolio;
