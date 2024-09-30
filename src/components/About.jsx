import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Welcome to PICT CSI Club !</p>
        <h2 className={styles.sectionHeadText}>Let's start the journey.....</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[20px] max-w-3xl leading-[30px] italic"
      >
        Are you passionate about technology and eager to explore the cutting
        edge of innovation? Look no further than the PICT CSI Club! We are a
        dynamic community of tech enthusiasts, programmers, engineers, and
        creatives dedicated to pushing the boundaries of what's possible.
        Whether you're a seasoned professional or just starting your journey,
        our club offers a platform to learn, collaborate, and shape the future
        together.
        <br />
        <p className={styles.sectionSubText}>Domains we explore at PICT CSI</p>
      </motion.p>

      {/* <div className="mt-20 flex  flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

      <div className="mt-20 lg:ml-20 md:ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
