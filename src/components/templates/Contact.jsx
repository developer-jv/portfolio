import Button from "../atoms/Button.jsx";

const Contact = () => (
  <div className="contact">
    <div className="contact__left">
      <div className="contact__image contact__image--linkedin">
        <span className="contact__orbit"></span>
        <span className="contact__orbit contact__orbit--delay"></span>
        <img src="assets/Icons/linkedin-circled.svg" alt="LinkedIn" />
      </div>
      <p className="contact__phrase">
        "We have succeed when we increase what make us unique”
      </p>
    </div>
    <div className="contact__right">
      <p className="contact__text">Contact me and lets work together!</p>
      <Button
        className="contact__button"
        link="https://www.linkedin.com/in/javier-valdez-one/"
        text="Contact me"
      />
    </div>
  </div>
);

export default Contact;
