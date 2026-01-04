const Skill = ({ src = "", text = "", className = "" }) => (
  <div className={`skill-item ${className}`.trim()}>
    <img src={src} alt={text} />
    <p>{text}</p>
  </div>
);

export default Skill;
