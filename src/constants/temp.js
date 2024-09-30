import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

import ashwini_maam from "../images/ashwini_maam.jpg";
import kaustubh_sir from "../images/kaustubh_sir.jpg";
import kavita_maam from "../images/kavita_maam.jpg";
  
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
      title: "Web Development",
      icon: web,
    },
    {
      title: "App Develpoment",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Competitive Programming",
      icon: creator,
    },
    {
      title: "BlockChain",
      icon: creator,
    },
    {
      title: "Cyber Security",
      icon: backend,
    },
    {
      title: "DevOps & Cloud Computing",
      icon: mobile,
    },
    {
      title: "NON TECHNICAL DOMAINS",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "PICT CSI Student Branch",
      company_name: "Pune",
      icon: CSI_logo_white ,
      iconBg: "#383E56",
      date: "THE FOUNDATION",
      points: [
        "PICT CSI Student Branch, working under CSI, was established in 2016 ",
        "CSI was started with an objective to facilitate research, knowledge and career enhancement for the students, along with inspiring and nurturing new entrants into the industry.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: " Computer Society of India",
      company_name: "",
      icon: csi_only_logo,
      iconBg: "#E6DEDD",
      date: "One more step towards Explorations",
      points: [
        "The seed for the Computer Society of India (CSI) was first shown in the year 1965 with a handful of IT enthusiasts who were a computer user group and felt the need to organize tteir activities.",
        "They also wanted to share their knowledge and exchange ideas on what they felt was a fast emerging sector.",
        "Today the CSI takes pride in being the largest and most professionally managed association of and for IT professionals in India.",
        "The purposes of the Society are scientific and educational directed towards the advancement of the theory and practice of computer science and IT.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ashwini Jewalikar",
      description:
        "Computer Department",
      tags: [
        {
          name: "Guide",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.linkedin.com/in/ashwini-jewalikar-20541b79/",
    },
    {
      name: "Kavita Sultanpure",
      description:
        "IT Department",
      tags: [
        {
          name: "Branch Coordinator",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.linkedin.com/in/drkavitasultanpure/",
    },
    {
      name: "Kaustubh Sakhare",
      description:
        "ENTC Department",
      tags: [
        {
          name: "Guide",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.linkedin.com/company/pict-csi/?originalSubdomain=in",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };