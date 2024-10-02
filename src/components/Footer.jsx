import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

import { GrMail } from "react-icons/gr";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <div className="max-w-full mx-auto py-16 md:px-40 px-6 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#01a9e2]">📍 Address</h1>
        <p className="py-4">
          Survey No. 27, Near Trimurti Chowk, Bharati Vidyapeeth Campus,
          Dhankawadi, Pune, Maharashtra, 411043
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <Link to="https://www.facebook.com/csipict/" target="_blank">
            {" "}
            <FaFacebookSquare
              size={30}
              className=" hover:scale-110 hover:text-amber-500"
            />
          </Link>

          <Link to="https://www.instagram.com/csipict/" target="_blank">
            {" "}
            <FaInstagram
              size={30}
              className=" hover:scale-110 hover:text-amber-500"
            />
          </Link>

          <Link to="https://www.linkedin.com/company/pict-csi" target="_blank">
            <FaLinkedin
              size={30}
              className=" hover:scale-110 hover:text-amber-500"
            />
          </Link>

          <Link to="mailto:pcsb@pict.edu" target="_blank">
            <GrMail
              size={30}
              className=" hover:scale-110 hover:text-amber-500"
            />
          </Link>
          {/* <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} /> */}
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <ul>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="/"> Home</Link>
            </li>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="/about"> About</Link>
            </li>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="/team"> Team</Link>
            </li>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="/gallery"> Gallery</Link>
            </li>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="/domain">Domains</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSc5KbMxaHwWGCXVp74sGfozKjjKtEZllDZcf2Jls036SLyNTg/viewform" target="_blank">
                Register
              </Link>
            </li>
            <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
              <Link to="mailto:pcsb@pict.edu">Email</Link>
            </li>
            <Link to="/members">
              <li className="py-2 text-base hover:text-amber-500 cursor-pointer hover:scale-110">
                Developers
              </li>
            </Link>
          </ul>
        </div>
      </div>
      {/* <div className="flex items-center justify-center py-8 text-gray-400 mx-auto">
        <p className="text-center">
          &copy; {currentYear} Your Company Name. All rights reserved.
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
