import Button from "../atoms/Button.jsx";

const Contact = () => (
  <div className="contact">
    <img
      className="contact__image"
      src="assets/Images/contact.svg"
      alt="contact images"
    />
    <p className="contact__text">Contact me and lets work together! 😉</p>
    <Button
      className="contact__button"
      link="mailto:javier.valdez.15v@gmail.com"
      text="Contact me"
    />
    <p className="contact__phrase">
      "We have succeed when we increase what make us unique”
    </p>
  </div>
);

export default Contact;
