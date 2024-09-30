import React from "react";
import logo from "../assets/images/xenia.png";
import Accordian from "./accordian";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";

export default function Xenia() {
  const accordian_details = [
    {
      title: "Technical Events",
      list: [
        "CodeStrike",
        "Ninja Coding",
        "Design Maestro",
        " MineCraft Build Battles",
        "Xenathon(Mini Hackathon)",
        "Circuitron",
        "Innoverien(Project Presentation)",
        "Data Cup",
      ],
    },
    {
      title: "Non Technical Events",
      list: [
        "Campus To Corporate",
        "Snap Hunt",
        "The Gift of Gab",
        "Game Zone",
        "Dream Team",
        "Shark Tank",
        "Couch Potato",
        "Xe-Natus",
      ],
    },
    {
      title: "Industry Talks",
      list: [
        "You're Hired! The Ultimate Guide to Placements",
        "New Age Digital Banking Technology and Rapid Development - Social Media Banking",
        "Learn Everything About Building Minimum Viable Product",
        " Blockchain",
        "Self Awareness through Emotional Intelligence Assessments",
        "Future of Software Development and How to be Industry-ready",
        "Journey to Cloud with Containerisation",
        "Cloud Computing 2.0: Embracing Kubernetes",
      ],
    },
    {
      title: "Build Up Events",
      list: [
        "Shutter Speed (Photography Contest)",
        "A Tale to Tell (The Gift of Gab Wild Card)",
        "CodeStrike: Wild Card",
      ],
    },
  ];

  return (
    <div className=" py-3 flex justify-center">
      <div className=" xeniacard xenia flex flex-col mx-4 sm:mx-16 md:mx-24 lg:mx-64  px-10 py-10 rounded-lg bg-color wide1 ">
        <div className="text-center fffont font-semibold text-7xl  md:text-7xl lg:text-7xl bg-color1 ">
          <Typewriter
            options={{
              strings: ["XENIA"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <br /> <br />
        <div className=" md:flex justify-items-center items-center justify-center">
          <img src={logo} alt="xenia" className="h-96 w-96 px-4 py-4 mx-auto" />
          <div className="textcontent flex flex-col py-6">
            <div className="py-1 px-1 sm:text-base md:text-base lg:text-xl text-xl bg-color1 linesize1">
              XENIA is an Annual Technical Fiesta organized by PICT CSI Student
              Branch, formerly known as Enthusia. It is a three-day technical
              fest where bright minds all around participate to compete amongst
              themselves. XENIA emphasizes technical events while also bringing
              you the opportunity of participating in various ingenious
              non-technical events.
            </div>
            <br /> <br />
            <div className="py-2 px-2 sm:text-base md:text-base lg:text-lg font-6xl bg-color1 text-lg">
              24 to 27 June, 2022
            </div>
            <br /> <br />
            <div className="py-2 px-2 sm:text-base md:text-base lg:text-lg font-8xl bg-color1 text-xl">
              <p className="word1">
                {" "}
                Footfall{" "}
                <span>
                  <CountUp start={1} end={3000} duration={8} />+{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <br /> <br /> <br /> <br />
        <div className="text-base sm:text-base md:text-base lg:text-lg">
          <div className=" font-bold lg:px-16 py-1 md:py-3 lg:py-6 bg-color1 text-2xl ">
            The Event Consisted of <br /> <br /> <br />{" "}
          </div>
          {accordian_details.map((element) => {
            return (
              <Accordian
                title={element.title}
                list={element.list}
                key={element.title}
              ></Accordian>
            );
          })}
        </div>
      </div>
    </div>
  );
}
