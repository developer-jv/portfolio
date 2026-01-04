import { getSkill } from "./skills.js";

const projectData = new Map([
  [
    "Project 1",
    {
      imageSrc: "assets/Images/Projects/BatataBit.PNG",
      title: "BatataBit Landing Page",
      skills: [getSkill("HTML"), getSkill("CSS"), getSkill("JS")],
      demoLink: "",
      codeLink: "",
    },
  ],
  [
    "Project 2",
    {
      imageSrc: "assets/Images/Projects/Portfolio.PNG",
      title: "Personal Portfolio",
      skills: [getSkill("React"), getSkill("Sass"), getSkill("TS")],
      demoLink: "",
      codeLink: "https://github.com/xavi-val/Portfolio",
    },
  ],
]);

export { projectData };
