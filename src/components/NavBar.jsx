import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div
        className="flex justify-between items-center bg-navColor text-yellow-900 h-16
        w-full px-6 fixed"
      >
        <div className="text-2xl font-signature font-medium text-blueViolet">Vijay's Portfolio</div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-white hover:scale-110 hover:text-yellow-500 capitalize duration-200"
            >
              {link}
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="pr-4 z-10 cursor-pointer md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer text-4xl capitalize"
            >
              {link}
            </li>
          ))}
        </ul>}
      </div>
    </>
  );
};

export default NavBar;
