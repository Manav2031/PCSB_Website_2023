import React from "react";

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Navbar, Works } from "../components";
import { Feedbacks } from "../components";

const Aboutus = () => {
  return (
    <div className="relative z-0 bg-[#020617]">
      {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div> */}
      <About />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
};

export default Aboutus;
