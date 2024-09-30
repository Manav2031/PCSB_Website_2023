import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CsiLgo from "../assets/images/bgCSILogo.png";
import { Link } from "react-router-dom";

const NavbarV = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-full mx-auto lg:px-40 px-6 bg-black text-white relative z-20 ">
      <div className=" hover:scale-110 ">
        <Link to="/">
          <img src={CsiLgo} alt="csilogo" width="100" height="100" />
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <Link to="/"> Home</Link>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <Link to="/about"> About</Link>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <Link to="/events">Events</Link>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <Link to="/domain">Domains</Link>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <Link to="/team">Team</Link>
        </li>
        <li className="p-4 hover:text-amber-500 cursor-pointer hover:scale-110">
          <Link to="/gallery"> Gallery</Link>
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
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/about"> About</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/events">Events</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/domain">Domains</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <Link to="/team">Team</Link>
        </li>
        <li className="p-4">
          <Link to="/gallery"> Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarV;
