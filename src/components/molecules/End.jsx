import SocialMediaIcon from "../atoms/SocialMediaIcon.jsx";

const End = () => (
  <footer className="footer">
    <div className="footer__section1">Javier 2022</div>
    <div className="footer__section2"></div>
    <div className="footer__section3">
      <SocialMediaIcon
        className="footer__social-icon"
        name="linkedin"
        href="https://www.linkedin.com/in/javier-valdez-grizzly/"
        src="assets/Icons/linkedin-circled.svg"
      />
      <SocialMediaIcon
        className="footer__social-icon"
        name="Github"
        href="https://github.com/xavi-val"
        src="assets/Icons/github.svg"
      />
    </div>
  </footer>
);

export default End;
