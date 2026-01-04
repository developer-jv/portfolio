import SocialMediaIcon from "../atoms/SocialMediaIcon.jsx";

const Landing = () => (
  <div className="landing">
    <h1 className="landing__title">Javier Valdez</h1>
    <h2 className="landing__subtitle">Software Developer</h2>

    <div className="landing__social-container">
      <SocialMediaIcon
        className="landing__social-icon"
        name="linkedin"
        href="https://www.linkedin.com/in/javier-valdez-grizzly/"
        src="assets/Icons/linkedin-circled.svg"
      />
      <SocialMediaIcon
        className="landing__social-icon"
        name="Github"
        href="https://github.com/xavi-val"
        src="assets/Icons/github.svg"
      />
    </div>
    <img
      className="landing__img"
      src="assets/Images/Programing-landing-page.svg"
      alt=""
    />
  </div>
);

export default Landing;
