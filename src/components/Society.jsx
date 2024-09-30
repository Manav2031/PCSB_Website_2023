import React from "react";
import fImage from "../assets/images/csi_only_logo.png";

const Society = () => {
  return (
    <div className="bg-gray-900 ">
      <div className="max-w-screen-xl mx-auto h-fit">
        <div className="py-20 mx-8 text-center lg:text-left text-white">
          <h1 className=" text-5xl text-amber-50">Computer Society of India</h1>
          <p className="mt-8 mb-16">
            CSI has 72 chapters all over India, 511 student branches, and more
            than 100000 members
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* left */}
            <div className="w-full lg:w-1/2 ">
              <img
                src={fImage}
                alt="family"
                className="md:pl-20 shawdow-white  "
              />
            </div>

            {/* right */}
            <div className="flex flex-col  gap-4 w-full lg:w-1/2 p-8 bg-gradient-to-r from-blue-900 to-black rounded-lg text-white">
              <p className="border-r-4 pr-4 odd:border-orange-400 even:border-blue-400 lg:text-right">
                The seed for the Computer Society of India (CSI) was first shown
                in the year 1965 with a handful of IT enthusiasts who were a
                computer user group and felt the need to organize tteir
                activities. They also wanted to share their knowledge and
                exchange ideas on what they felt was a fast emerging sector.
              </p>
              <p className="border-r-4 pr-4  odd:border-orange-400 even:border-blue-400 lg:text-right">
                Today the CSI takes pride in being the largest and most
                professionally managed association of and for IT professionals
                in India. The purposes of the Society are scientific and
                educational directed towards the advancement of the theory and
                practice of computer science and IT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Society;
