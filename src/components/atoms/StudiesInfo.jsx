const StudiesInfo = ({ img = "", title = "", subtitle = "", href = "" }) => (
  <a
    className="studies-info"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={img} alt={title} />
    <div className="studies-info__content">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </a>
);

export default StudiesInfo;
