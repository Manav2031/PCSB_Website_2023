import React from "react";
import TeamMember from "../components/tteamsmember";
import Typewriter from "typewriter-effect";

const Members = () => {
  const teamMembers = [
    {
      name: "Vedant Solunke",
      role: "Web Team",
      imageSrc: "VedantSolunke.png",
      social: {
        // twitter: "https://twitter.com/VedantSolunke",
        linkedin: "https://www.linkedin.com/in/vedantsolunke/",
        github: "https://github.com/VedantSolunke",
        email: "mailto:vedsocialid@gmail.com",
      },
    },

    {
      name: "Vaibhav Patil",
      role: "Web Team",
      imageSrc: "VaibhavPatil.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/vaibhavpatil687/",
        github: "https://github.com/coolvaibhavpatil",
        email: "vaibhavpatilsmile687@gmail.com",
      },
    },

    {
      name: "Pranav Dalvi",
      role: "Web Team",
      imageSrc: "PranavDalvi.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/pranav-dalvi-26a37322a/",
        github: "https://github.com/pranavdalvi2003",
        email: "pranavdalvi2003@gmail.com",
      },
    },

    {
      name: "Manav Mehta",
      role: "Web Team",
      imageSrc: "ManavMehta.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/manav-mehta-05480622a/",
        github: "https://github.com/Manav2031",
        email: "manavmehta2031@gmail.com",
      },
    },
    {
      name: "Sarvadnyaa Barate",
      role: "Web Team",
      imageSrc: "SarvadnyaaBarate.jpeg",
      social: {
        linkedin: "https://www.linkedin.com/in/sarvadnyaa-barate-816574254/",
        github: "https://github.com/SAR-BAR",
        email: "sarvaabarate@gmail.com",
      },
    },
    {
      name: "Janvi",
      role: "Web Team",
      imageSrc: "Janvi.jpeg",
      social: {
        linkedin: "http://www.linkedin.com/in/janvipict2025",
        github: "https://github.com/janvi2208",
        email: "janvi220803@gmail.com",
      },
    },
    // ...other team members
  ];

  return (
    <div className="bg-[#000000]">
      <div className="py-8 px-4">
        <div className="flex flex-col items-center mb-8">
          <h1 className="lg:text-5xl  md:text-3xl text-3xl  font-bold text-white">
            <Typewriter
              options={{
                strings: ["DEVELOPER TEAM"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              social={member.social}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
