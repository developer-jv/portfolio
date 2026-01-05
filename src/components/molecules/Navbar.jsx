import { useEffect, useState } from "react";
import Button from "../atoms/Button.jsx";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 12 4.75Zm0 13a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm7.25-6.5a.75.75 0 0 1 .75-.75v-.5a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0Zm-16 0a.75.75 0 0 1 .75-.75v-.5a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0Zm13.02-4.23a.75.75 0 0 1 1.06 0l.36.36a.75.75 0 1 1-1.06 1.06l-.36-.36a.75.75 0 0 1 0-1.06Zm-10.94 10.94a.75.75 0 0 1 1.06 0l.36.36a.75.75 0 0 1-1.06 1.06l-.36-.36a.75.75 0 0 1 0-1.06Zm10.94 1.06a.75.75 0 0 1 0-1.06l.36-.36a.75.75 0 1 1 1.06 1.06l-.36.36a.75.75 0 0 1-1.06 0ZM5.33 7.08a.75.75 0 0 1 0-1.06l.36-.36a.75.75 0 1 1 1.06 1.06l-.36.36a.75.75 0 0 1-1.06 0ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.76 2a1 1 0 0 1 .94 1.33A8 8 0 1 0 20.67 14a1 1 0 0 1 1.33.94A10 10 0 1 1 12.76 2Z" />
  </svg>
);

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
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

      <button
        className="navbar__theme-toggle"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle color theme"
      >
        <span className="navbar__theme-icon">
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </span>
        <span className="navbar__theme-text">
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </span>
      </button>

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
};

export default Navbar;
