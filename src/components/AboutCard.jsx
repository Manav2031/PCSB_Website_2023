import React from "react";
import GroupPhoto from "../assets/images/GroupPhoto.png";
const AboutCard = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-md"
          src={GroupPhoto}
          alt="/"
        />

        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#01a9e2]">
            PICT CSI Student Branch
          </h1>
          <p>
            PICT CSI Student Branch, working under CSI, was established in 2016
            with an objective to facilitate research, knowledge and career
            enhancement for the students, along with inspiring and nurturing new
            entrants into the industry. It provides a platform for technical and
            non-technical education. One of our key strengths at PCSB is our
            rate of growth in a short span of time. We take pride in the fact
            that we are one of the best student communities in Pune, still
            growing at an exponential rate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
