import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const TTeamMember = ({ name, role, imageSrc, social }) => {
  return (
    <div className="w-full md:w-1/3 p-2">
      <div className="bg-[#110f36] p-8 shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:from-purple-600 hover:to-purple-800 text-center">
        <div className="h-32 w-32 mx-auto bg-[#01a9e2] rounded-full p-2">
          <img
            src={imageSrc}
            className="h-full w-full rounded-full"
            alt={name}
          />
        </div>
        <h3 className="text-xl text-white font-semibold mt-4">{name}</h3>
        <p className="text-sm uppercase  text-white font-light">{role}</p>
        <div className="flex justify-center mt-4 space-x-4">
          {/* <a
            href={social.twitter}
            className="text-purple-700 hover:text-purple-800"
            target="_blank" // Add this line
            rel="noopener noreferrer" // Add this line for security reasons
          >
            <FaTwitter />
          </a> */}
          <a
            href={social.linkedin}
            className="text-white hover:text-amber-500"
            target="_blank" // Add this line
            rel="noopener noreferrer" // Add this line for security reasons
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href={social.github}
            className="text-white hover:text-amber-500"
            target="_blank" // Add this line
            rel="noopener noreferrer" // Add this line for security reasons
          >
            <FaGithub size={25} />
          </a>
          {/* <a
            href={social.email}
            className="text-purple-700 hover:text-purple-800"
            target="_blank" // Add this line
            rel="noopener noreferrer" // Add this line for security reasons
          >
            <FaEnvelope />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TTeamMember;
