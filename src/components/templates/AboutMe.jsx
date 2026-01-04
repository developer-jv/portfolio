import { useMemo, useState } from "react";
import { skillsData } from "../../data/skills.js";
import { studiesData } from "../../data/studies.js";
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
        setImg("assets/Images/books.svg");
        break;
      case 3:
        setImg("assets/Images/Skills.svg");
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
              <p>Studies</p>
            </div>
            <div
              onClick={() => changeInfo(3)}
              className={infoSelected === 3 ? "selected" : ""}
            >
              <p>Skills</p>
            </div>
          </div>

          <div className="about-me__info-container">
          <div
            className={`about-me__panel about-me-info ${
              infoSelected === 1 ? "show" : "noShow"
            }`}
          >
              <p>
                Software developer. I like to do both frontend and backend in a web
                application
              </p>
              <p>I have to say that I enjoy the backend more.</p>
              <p>
                I focus on giving a good UI/UX experience and on the little details.
              </p>
              <p>
                I am passionate about technology and I love discovering new ways to
                achieve my goals.
              </p>
              <p>I am constantly learning. Student at USAC and Platzi 🎓.</p>
            </div>
          <div
            className={`about-me__panel studies ${
              infoSelected === 2 ? "show" : "noShow"
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
          <div
            className={`about-me__panel skills ${
              infoSelected === 3 ? "show" : "noShow"
            }`}
          >
              {skillLocalData.map((item) => (
                <Skill key={item.text} src={item.imageSrc} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
