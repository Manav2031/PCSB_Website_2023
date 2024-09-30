import React from "react";
import fImage from "../assets/images/NewGroupPhoto.jpeg";
const Family = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-fit bg-[#020617]">
      <div className="my-32 mx-8 text-center md:text-left text-white">
        <h1 className="text-5xl">Our Family</h1>
        <p className="mt-8 mb-16">
          PCSB is proud to announce that it is a family of 1100+ members and is
          growing at an exponential rate
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* left */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gradient-to-r from-black to-blue-900 rounded-lg text-white ">
            <p className="border-l-4 pl-4 odd:border-orange-400 even:border-blue-400 ">
              PICT CSI Student Branch, working under CSI, was established in
              2016 with an objective to facilitate research, knowledge and
              career enhancement for the students, along with inspiring and
              nurturing new entrants into the industry.
            </p>
            <p className="border-l-4 pl-4  odd:border-orange-400 even:border-blue-400 ">
              It provides a platform for technical and non-technical education.
              One of our key strengths at PCSB is our rate of growth in a short
              span of time. We take pride in the fact that we are one of the
              best student communities in Pune, still growing at an exponential
              rate.
            </p>
          </div>

          {/* right */}

          <div className="w-full lg:w-1/2 ">
            <img
              src={fImage}
              alt="family"
              className="rounded-lg shadow-lg shadow-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
