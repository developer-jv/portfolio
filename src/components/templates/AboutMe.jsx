import { useMemo, useState } from "react";
import { skillsData } from "../../data/skills.js";
import { studiesData } from "../../data/studies.js";
import { experienceData } from "../../data/experience.js";
import Skill from "../atoms/Skill.jsx";
import StudiesInfo from "../atoms/StudiesInfo.jsx";

const AboutMe = () => {
  const [infoSelected, setInfoSelected] = useState(1);
  const [img, setImg] = useState("assets/Images/javier.png");

  const skillLocalData = useMemo(() => Array.from(skillsData.values()), []);
  const studiesLocalData = useMemo(() => Array.from(studiesData.values()), []);

  const changeInfo = (number) => {
    setInfoSelected(number);

    switch (number) {
      case 1:
        setImg("assets/Images/javier.png");
        break;
      case 2:
        setImg("assets/Images/Programing-landing-page.svg");
        break;
      case 3:
        setImg("assets/Images/Skills.svg");
        break;
      case 4:
        setImg("assets/Images/books.svg");
        break;
      default:
        break;
    }
  };

  return (
    <div className="about-me" id="about-me">
      <h3>About me</h3>
      <div className="about-me__layout">
        <div className="about-me__ilustrations show">
          <img src={img} alt="" />
        </div>
        <div className="about-me__component">
          <div className="about-me__side-nav-menu">
            <div
              onClick={() => changeInfo(1)}
              className={infoSelected === 1 ? "selected" : ""}
            >
              <p>Profile</p>
            </div>
            <div
              onClick={() => changeInfo(2)}
              className={infoSelected === 2 ? "selected" : ""}
            >
              <p>Experience</p>
            </div>
            <div
              onClick={() => changeInfo(3)}
              className={infoSelected === 3 ? "selected" : ""}
            >
              <p>Skills</p>
            </div>
            <div
              onClick={() => changeInfo(4)}
              className={infoSelected === 4 ? "selected" : ""}
            >
              <p>Studies</p>
            </div>
          </div>

          <div className="about-me__info-container">
            <div
              className={`about-me__panel about-me-info ${
                infoSelected === 1 ? "show" : "noShow"
              }`}
            >
              <p>Computer Science and Systems Engineering</p>
              <p>
                <p>Focused on data engineering and modern web development.</p> I
                build data pipelines, dashboards, and analytics solutions, and
                I’ve worked with platforms like Microsoft Fabric/Power BI and
                AWS-based data ecosystems. I’m a fast learner and a strong team
                collaborator, motivated to deliver scalable and reliable
                solutions.
              </p>
            </div>
            <div
              className={`about-me__panel skills ${
                infoSelected === 3 ? "show" : "noShow"
              }`}
            >
              {skillLocalData.map((item) => (
                <Skill key={item.text} src={item.imageSrc} text={item.text} />
              ))}
            </div>
            <div
              className={`about-me__panel experience ${
                infoSelected === 2 ? "show" : "noShow"
              }`}
            >
              {experienceData.map((item) => (
                <div className="experience__item" key={item.title}>
                  <img src={item.icon} alt="" className="experience__icon" />
                  <div className="experience__content">
                    <strong className="experience__title">{item.title}</strong>
                    <span className="experience__company">{item.company}</span>
                    <span className="experience__period">{item.period}</span>
                    <p className="experience__description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`about-me__panel studies ${
                infoSelected === 4 ? "show" : "noShow"
              }`}
            >
              {studiesLocalData.map((study) => (
                <StudiesInfo
                  key={study.title}
                  img={study.img}
                  title={study.title}
                  subtitle={study.subtitle}
                  href={study.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
