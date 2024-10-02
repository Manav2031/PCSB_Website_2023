import React, { useState } from "react";
import "./SidebarContent.css";
import TeamMemberCard from "./TeamMemberCard"; // Import the TeamMemberCard component
import Typewriter from "typewriter-effect";
import DropdownCard from "./DropdownCard";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SidebarContent = () => {
  const [activeButton, setActiveButton] = useState("Coordinators");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activeDropdownOption, setActiveDropdownOption] = useState("CTH");
  const handleButtonClick = (dataType) => {
    setActiveButton(dataType);
    setIsDropdownVisible(dataType === "Technical");
  };
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const dropdownOptions = [
    { label: "CTH", value: "CTH" },
    { label: "CP", value: "CP" },
    { label: "Web", value: "Web" },
    { label: "App", value: "App" },
    { label: "Machine Learning", value: "Machine Learning" },
    { label: "Data Science", value: "Data" },
  ];
  const handleDropdownOptionClick = (optionValue) => {
    setActiveButton(optionValue);
    setIsDropdownVisible(true);
    setActiveDropdownOption(optionValue);
  };
  // Define your button data and team member data
  const buttonsData = [
    "Coordinators",
    "Chair",
    "Technical",
    "Finance",
    "Design & Content",
    "Event",
    "Marketing",
  ];
  const teamMemberData = {
    Coordinators: [
      // {
      //   name: "Prof. Kaustubh Sakhare",
      //   role: "Guide",
      //   image: "TeamsImg/Advait_Naik.png", // Provide the image URL
      //   socialLinks: [
      //     {
      //       url: "https://linkedin.com/in/johndoe",
      //       icon: <FaLinkedin />,
      //     },
      //   ],
      // },
      {
        name: "Dr. Girish Potdar",
        role: "Branch Coordinator",
        image: "GirishPotdar.JPG", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/dr-girish-potdar-a67b7116/?originalSubdomain=in",
            icon: <FaLinkedin />,
          },
        ],
      },
      // {
      //   name: "Prof. Ashwini Bundele",
      //   role: "Guide",
      //   image: "AshwiniBundele.jpg", // Provide the image URL
      //   socialLinks: [
      //     {
      //       url: "https://www.linkedin.com/in/ashwini-bundele-b0a168b/",
      //       icon: <FaLinkedin />,
      //     },
      //   ],
      // },
    ],
    Chair: [
      {
        name: "Adnan Patel",
        role: "President",
        image: "TeamsImg/AdnanPatel.jpeg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/adnanrouf/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Naman Labhsetwar",
        role: "Vice President",
        image: "TeamsImg/NamanLabhsetwar.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/naman-labhsetwar-01638022a/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Technical: [],
    CTH: [
      {
        name: "Jayesh Pandav",
        role: "Chief Technical Head",
        image: "TeamsImg/JayeshPandav.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/jayeshpandav/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Mihir Deshpande",
        role: "Chief Technical Head",
        image: "TeamsImg/MihirDeshpande.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/mihirdesh/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Piyush Agarwal",
        role: "Chief Technical Head",
        image: "TeamsImg/PiyushAgarwal.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/piyushhagarwal/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    CP: [
      {
        name: "Rohil Kadam",
        role: "CP Head",
        image: "TeamsImg/RohilKadam.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/rohil-kadam-a57a2027b/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Web: [
      {
        name: "Manav Mehta",
        role: "Web Head",
        image: "TeamsImg/ManavMehta.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/manav-mehta-05480622a/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Sarvadnyaa Barate",
        role: "Web Head",
        image: "TeamsImg/SarvadnyaaBarate.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/sarvadnyaa-barate/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Soham Kulkarni",
        role: "Web Head",
        image: "TeamsImg/SohamKulkarni.jpeg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/soham-kulkarni-6a4103230/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    App: [
      {
        name: "Mayank Mirajkar",
        role: "App Head",
        image: "TeamsImg/MayankMirajkar.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/mayank-mirajkar-32449922a/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Ninad More",
        role: "App Head",
        image: "TeamsImg/NinadMore.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/ninad-more-65a942231/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    "Machine Learning": [
      {
        name: "Aarti Lad",
        role: "Machine Learning Head",
        image: "TeamsImg/AartiLad.jpeg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/aartilad/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Anish Pawar",
        role: "Machine Learning Head",
        image: "TeamsImg/AnishPawar.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/anish-pawarr/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Data: [
      {
        name: "Shaurya Saxena",
        role: "Data Science Head",
        image: "TeamsImg/ShauryaSaxena.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/shaurya1003/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Suramya Jadhav",
        role: "Data Science Head",
        image: "TeamsImg/SuramyaJadhav.jpeg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/suramya-jadhav/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Finance: [
      {
        name: "Yojan Gandhi",
        role: "Treasurer",
        image: "TeamsImg/YojanGandhi.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/yojan-gandhi-406106188/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Suma Meghana Gadepalli",
        role: "Secretary of Finance",
        image: "TeamsImg/SumaGadepalli.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/suma-me03/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Shivanjali Thorat",
        role: "Sponsorship Head",
        image: "TeamsImg/ShivanjaliThorat.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/shivanjalithorat/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    "Design & Content": [
      {
        name: "Akanksha Sawalikar",
        role: "Design Head",
        image: "TeamsImg/AkankshaSawalikar.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/akanksha-sawalikar-ab3a28252/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Akshata Madane",
        role: "Design Head",
        image: "TeamsImg/AkshataMadane.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/akshatamadane7/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Reva Pawar",
        role: "Content Head",
        image: "TeamsImg/RevaPawar.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/reva-pawar/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Vedant Solunke",
        role: "Video Editing Head",
        image: "TeamsImg/VedantSolunke.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/vedantsolunke/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Event: [
      {
        name: "Kavita Thete",
        role: "Joint Secretary",
        image: "TeamsImg/KavitaThete.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/kavitathete/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Shatakshi Chaudhari",
        role: "Joint Secretary",
        image: "TeamsImg/ShatakshiChaudhari.png", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/shatakshi-chaudhari-707b1b236/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Chaitrali Ginimav",
        role: "PRO",
        image: "TeamsImg/ChaitraliGinimav.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/chaitrali-ginimav-88a48922a/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Gaurang Mote",
        role: "Operations Head",
        image: "TeamsImg/GaurangMote.jpeg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/gaurang-mote-349905230/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
    Marketing: [
      {
        name: "Aarushi Sharan",
        role: "Marketing Head",
        image: "TeamsImg/AarushiSharan.jpeg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/aarushi-sharan-17b9a822a/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
      {
        name: "Krishna Mundada",
        role: "Marketing Head",
        image: "TeamsImg/KrishnaMundada.jpg", // Provide the image URL
        socialLinks: [
          {
            url: "https://www.linkedin.com/in/krishna-mundada2407/",
            icon: <FaLinkedin />,
          },

          {
            url: "https://linkedin.com/in/johndoe",
            icon: <FaGithub />,
          },
        ],
      },
    ],
  };
  const dropdownDataMapping = {
    CTH: teamMemberData.CTH,
    CP: teamMemberData.CP,
    Web: teamMemberData.Web,
    App: teamMemberData.App,
    "Machine Learning": teamMemberData["Machine Learning"],
    Data: teamMemberData.Data,
  };
  return (
    <div
      className={`responsive-container ${
        isSidebarVisible ? "  show-sidebar" : ""
      }`}
    >
      <button
        className={`toggle-button ${isSidebarVisible ? "active" : ""}`}
        onClick={handleSidebarToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="text" style={{ color: "white" }}>
        <Typewriter
          options={{ strings: ["MEET OUR TEAM"], autoStart: true, loop: true }}
        />
      </div>
      <div className="container">
        <div className="sidebar">
          {buttonsData.map((dataType) => (
            <div>
              <button
                key={dataType}
                className={`sidebar-button ${
                  activeButton === dataType ? "active" : ""
                }`}
                onClick={() => handleButtonClick(dataType)}
              >
                <span className="button-content">
                  <div className="divide"></div>
                  {dataType}
                </span>
              </button>
              {dataType === "Technical" && isDropdownVisible && (
                <div className="dropdown">
                  {dropdownOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`dropdown-option ${
                        activeDropdownOption === option.value ? "active" : ""
                      }`}
                      onClick={() => handleDropdownOptionClick(option.value)}
                    >
                      <div className="button-content">{option.label}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="content">
          {teamMemberData[activeButton].map((member, index) => (
            <div className="pl-6 pr-6">
              {" "}
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            </div>
          ))}
          {activeButton === "Technical" &&
            dropdownDataMapping[activeDropdownOption].map((member, index) => (
              <DropdownCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                socialLinks={member.socialLinks}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default SidebarContent;
