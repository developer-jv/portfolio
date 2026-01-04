const SocialMediaIcon = ({ name = "", src = "", href = "", className = "" }) => (
  <a
    className={`social-media-icon ${className}`.trim()}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={src} alt={name} />
  </a>
);

export default SocialMediaIcon;
