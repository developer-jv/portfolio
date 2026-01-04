import Button from "../atoms/Button.jsx";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__hamburger">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="navbar__hamburger"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>

    <ul className="navbar__option-container">
      <li className="navbar__option">
        <span></span> <a href="#about-me">About me</a>
      </li>
      <li className="navbar__option">
        <span></span> <a href="#portfolio">Portfolio</a>
      </li>
      <Button
        className="navbar__button"
        text="Contact me"
        link="mailto:javier.valdez.15v@gmail.com"
      />
    </ul>
  </nav>
);

export default Navbar;
