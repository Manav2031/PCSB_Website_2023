import ashwini_maam from "../images/ashwini_maam.jpg";
// import kaustubh_sir from "../images/kaustubh_sir.jpg";
import kaustubh_sir_new from "../images/kaustubh_sir_new.jpg";
import kavita_maam from "../images/kavita_maam.jpg";
import CSI_logo_white from "../images/CSI_logo_white.png";
import csi_only_logo from "../images/csi_only_logo.png";
import web_development from "../images/app-development.png";
import app_development from "../images/development.png";
import machine_learning from "../images/coding.png";
import cp from "../images/programming.png";
import cryptocurrency from "../images/cryptocurrency.png";
import cyber_security from "../images/cyber-security.png";
import cloud_computing from "../images/cloud-storage.png";
import non_tech from "../images/domain-registration.png";
import computer from "../images/computer.png";
import cpu from "../images/cpu.png";
import IT from "../images/information-technology.png";
import members from "../images/team.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Members |  1081",
    icon: members,
  },
  {
    title: "Computer Engineering |  467",
    icon: computer,
  },
  {
    title: "Electronics Engineering |  331",
    icon: cpu,
  },
  {
    title: "Information Technology |  283",
    icon: IT,
  },
  {
    title: "TECHNICAL DOMAINS |  8",
    icon: web_development,
  },
  {
    title: "NON TECHNICAL DOMAINS |  7",
    icon: non_tech,
  },
];

const experiences = [
  {
    title: " Computer Society of India",
    company_name: "",
    icon: csi_only_logo,
    iconBg: "#E6DEDD",
    date: "THE FOUNDATION",
    points: [
      "The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts who were a computer user group and felt the need to organize tteir activities.",
      "They also wanted to share their knowledge and exchange ideas on what they felt was a fast emerging sector.",
      "Today the CSI takes pride in being the largest and most professionally managed association of and for IT professionals in India.",
      "The purposes of the Society are scientific and educational directed towards the advancement of the theory and practice of computer science and IT.",
    ],
  },
  {
    title: "PICT CSI Student Branch",
    company_name: "Pune",
    icon: CSI_logo_white,
    iconBg: "#383E56",
    date: "One more step towards Explorations",
    points: [
      "PICT CSI Student Branch, working under CSI, was established in 2016 ",
      "CSI was started with an objective to facilitate research, knowledge and career enhancement for the students, along with inspiring and nurturing new entrants into the industry.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: [
      "Dear all,",
      "It brings me enormous joy to be given the chance to speak about PICT CSI Student Branch (PCSB). PCSB has always encouraged its students to learn their way through various tech and non-tech domains. Time and again, PCSB has proved to be a platform for students to upskill themselves and exhibit their talents. I wish to thank every single member of PCSB for their consistent and unparalleled efforts towards the growth of our club as a whole.",
      "It is a huge pleasure to serve PCSB as Student Branch Coordinator for 4 years. It has been an extraordinary experience to watch PCSB grow from a team of 4 members to a family of 450+ members. PCSB has always proved to be a wonderful platform for students to ensure that their hunger for learning is never extinguished and keep up-to-date information regarding the newer state of the art technologies. Various technical events are conducted by the enthusiastic members of PCSB like our annual event XENIA, SIGs, CP, ML competitions and many more which are applauded by the students, teachers and industry experts alike.",
      "From the bottom of my heart, I thank Mr R. S. Kothavale, Managing Trustee, SCTR; Mr Swastik Sirsikar, Secretary, SCTR; Dr P. T. Kulkarni, Director, PICT, Dr. R. Sreemathy, Principal, PICT; whose support throughout, has proved to be of paramount importance. PCSB has reached newer and greater heights this year, and it has only been possible because of the energetic participation and the efforts put in by the students towards their craft.",
      "I would like to end my note here, by wishing every PCSB member all the best and by saying that ‘may the best of your today be the worst of your tomorrow’.",
    ],
    name: "Dr. Kavita Sultanpure",
    designation: "Student Branch Coordinator, PCSB",
    company: "Assistant Professor, PICT",
    image: kavita_maam,
  },
];

const projects = [
  {
    name: "Ashwini Jewalikar",
    description: "Computer Department",
    tags: [
      {
        name: "Guide",
        color: "blue-text-gradient",
      },
    ],
    image: ashwini_maam,
    source_code_link: "https://www.linkedin.com/in/ashwini-jewalikar-20541b79/",
  },
  {
    name: "Prof Girish Potdar",
    description: "IT Department",
    tags: [
      {
        name: "Branch Coordinator",
        color: "blue-text-gradient",
      },
    ],
    image: "GirishPotdar.JPG",
    source_code_link: "https://in.linkedin.com/in/dr-girish-potdar-a67b7116",
  },
  // {
  //   name: "Kaustubh Sakhare",
  //   description:
  //     "ENTC Department",
  //   tags: [
  //     {
  //       name: "Guide",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: kaustubh_sir_new,
  //   source_code_link: "https://www.linkedin.com/company/pict-csi/?originalSubdomain=in",
  // },
];

export { services, experiences, testimonials, projects };
