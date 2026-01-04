const Button = ({ text = "Default button", link = "", className = "" }) => (
  <a className={`button ${className}`.trim()} href={link}>
    <div>{text}</div>
  </a>
);

export default Button;
