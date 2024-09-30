import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CsiLgo from "../assets/images/bgCSILogo.png";

const NavbarV = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto lg:px-40 px-6 bg-black text-white relative z-20 ">
      <div className=" hover:scale-110 ">
        <a href="/">
          <img src={CsiLgo} alt="csilogo" width="100" height="100" />
        </a>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <a href="/"> Home</a>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <a href="/about"> About</a>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <a href="/events">Events</a>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <a href="/domain">Domains</a>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <a href="/team">Team</a>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <a href="/gallery"> Gallery</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img
          src={CsiLgo}
          alt="csilogo"
          width="100"
          height="100"
          className="m-4"
        />

        <li className="p-4 border-b border-gray-600 ">
          <a href="/">Home</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/about"> About</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/events">Events</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="/domain">Domains</a>
        </li>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <a href="/team">Team</a>
        </li>
        <li className="p-4">
          <a href="/gallery"> Gallery</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarV;
