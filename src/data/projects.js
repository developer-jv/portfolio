import { getSkill } from "./skills.js";

const projectData = new Map([
  [
    "Project 1",
    {
      imageSrc: "assets/Images/Projects/BrandPerformance.png",
      title: "Circana Sales Out Analisis",
      skills: [getSkill("Python"), getSkill("PowerBi"), getSkill("Excel")],
      demoLink:
        "https://github.com/developer-jv/Circana_Sales_Out",
      codeLink: "https://github.com/developer-jv/Circana_Sales_Out",
    },
  ],
  [
    "Project 2",
    {
      imageSrc: "assets/Images/Projects/amazon_best_sellers_v1.png",
      title: "Amazon Best Sellers",
      skills: [getSkill("Python"), getSkill("Airflow"), getSkill("SQL")],
      demoLink:
        "https://metabase.developerjv.com/public/dashboard/c7fbab5d-00cd-41a3-82d8-5250a3b9e21b",
      codeLink: "https://github.com/developer-jv/bi_projects",
    },
  ],
  [
    "Project 3",
    {
      imageSrc: "assets/Images/Projects/BatataBit.PNG",
      title: "BatataBit Landing Page",
      skills: [getSkill("HTML"), getSkill("CSS"), getSkill("JS")],
      demoLink: "https://practicing-landing-page.netlify.app/",
      codeLink: "",
    },
  ],
  [
    "Project 4",
    {
      imageSrc: "assets/Images/Projects/portfolio.png",
      title: "Personal Portfolio",
      skills: [getSkill("React"), getSkill("Sass"), getSkill("TS")],
      demoLink: "",
      codeLink: "https://github.com/developer-jv/portfolio",
    },
  ],
]);

export { projectData };
