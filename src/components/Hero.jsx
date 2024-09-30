import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white bg-gradient-to-r from-black to-blue-900 items-end justify-center w-full h-screen text-center relative z-15">
      <div className="max-w-[100%] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#01a9e2] md:text-5xl sm:text-3xl text-xl font-bold p-2">
          Grow with us 📈
        </p>
        <h1 className="md:text-7xl sm:text-5xl text-4xl font-bold md:py-6">
          PICT CSI Student Branch
        </h1>
        <div className="flex justify-center items-center my-2">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold py-2">
            We here
          </p>
          <Typed
            className="md:text-5xl sm:text-3xl text-xl font-bold pl-2 text-amber-500"
            strings={["INNOVATE", "EDUCATE", "ELEVATE"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <p className="md:text-3xl text-xl font-bold text-gray-500 mt-10">
          Unleash Your Potential with Us 🚀
        </p>
        <div>
          <a href="http://pcsb-registrations.tk/" target="_blank">
            <button className="bg-[#01a9e2] w-[200px] rounded-md font-bold tracking-wider my-10 mx-auto py-3 text-white duration-300 hover:scale-110">
              Join Us
            </button>
          </a>
        </div>
      </div>
      <hr className="opacity-40" />
    </div>
  );
};

export default Hero;
