import React from "react";
import "./TeamMemberCard.css";
const TeamMemberCard = ({ name, role, image, socialLinks }) => {
  return (
    <div className="team-member-card ">
      <div className="member-image">
        <div className="member-image-inner">
          <img class="img" src={image} alt={`${name}'s profile`} />
        </div>
      </div>
      <div className="divider"></div>
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
export default TeamMemberCard;
