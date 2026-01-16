const skillsData = new Map([
  [
    "HTML",
    {
      imageSrc: "assets/Icons/Skills/HTML5.svg",
      text: "HTML",
    },
  ],
  [
    "CSS",
    {
      imageSrc: "assets/Icons/Skills/CSS3.svg",
      text: "CSS",
    },
  ],
  [
    "JS",
    {
      imageSrc: "assets/Icons/Skills/JS.svg",
      text: "JavaScript",
    },
  ],
  [
    "TS",
    {
      imageSrc: "assets/Icons/Skills/Typescript.svg",
      text: "TypeScript",
    },
  ],
  [
    "React",
    {
      imageSrc: "assets/Icons/Skills/react.svg",
      text: "React",
    },
  ],
  [
    "Sass",
    {
      imageSrc: "assets/Icons/Skills/Sass.svg",
      text: "Sass",
    },
  ],
  [
    "Python",
    {
      imageSrc: "assets/Icons/Skills/Python.svg",
      text: "Python",
    },
  ],
  [
    "Java",
    {
      imageSrc: "assets/Icons/Skills/Java.svg",
      text: "Java",
    },
  ],
  [
    "C/C++",
    {
      imageSrc: "assets/Icons/Skills/C.svg",
      text: "C/C++",
    },
  ],
  [
    "SQL",
    {
      imageSrc: "assets/Icons/Skills/sql.svg",
      text: "SQL",
    },
  ],
  [
    "Git",
    {
      imageSrc: "assets/Icons/Skills/git.svg",
      text: "Git",
    },
  ],
  [
    "Airflow",
    {
      imageSrc: "assets/Icons/Skills/airflow.svg",
      text: "Airflow",
    },
  ],
  [
    "PowerBi",
    {
      imageSrc: "assets/Icons/Skills/powerbi.svg",
      text: "PowerBi",
    },
  ],
   [
    "Excel",
    {
      imageSrc: "assets/Icons/Skills/excel.svg",
      text: "Excel",
    },
  ],
]);

const getSkill = (name) => {
  const skill = skillsData.get(name);

  if (skill) {
    return skill;
  }

  return {
    imageSrc: "",
    text: `Skill not found: ${name}`,
  };
};

export { skillsData, getSkill };
