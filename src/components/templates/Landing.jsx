import Button from "../atoms/Button.jsx";
import SocialMediaIcon from "../atoms/SocialMediaIcon.jsx";

const Landing = () => (
  <div className="landing">
    <h1 className="landing__title">Javier Valdez</h1>
    <h2 className="landing__subtitle">Data Engineer / Software Developer</h2>
    <p className="landing__tagline">
      Building data pipelines and software products with clarity, performance,
      and elegant UX.
    </p>

    <div className="landing__cta">
      <a className="landing__cta-hint" href="#portfolio">
        See the full portfolio
      </a>
      <Button className="landing__cta-button" text="Explore Work" link="#portfolio" />
    </div>

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
    <div className="landing__image-wrap">
      <img
        className="landing__img"
        src="assets/Images/Programmer_Icon-removebg-preview.png"
        alt="Developer illustration"
      />
    </div>
    <div className="landing__scroll">
      <span>Scroll</span>
      <div className="landing__scroll-indicator"></div>
    </div>
  </div>
);

export default Landing;
