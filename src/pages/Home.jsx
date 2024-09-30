import React from "react";
import Hero from "../components/Hero";
import Family from "../components/Family";
import Society from "../components/Society";

const Home = () => {
  return (
    <div>
      <Hero />
      <Family />
      <hr className="opacity-40" />
      <Society />
    </div>
  );
};

export default Home;
