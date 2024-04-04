import React, { useState } from "react";
import alekiLogo from "../assets/svgs/aleki-blue-logo.svg";

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const navigations = [
  { title: "Home", link: "/" },
  { title: "Services", subMenu: true }, // Add subMenu property to indicate it has a submenu
  { title: "About Us", link: "/about" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "#footer" },
];

const services = [
  { title: "Construction Services", link: "/construction" },
  { title: "Oil and Gas Services", link: "/oil-and-gas" },
  { title: "Marine Services", link: "/marine" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="shadow-md z-30 w-full relative">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer gap-3 flex items-center font-[Poppins] text-gray-800">
          <img src={alekiLogo} alt="aleki logo" />
          <div>
            <p className="uppercase text-[16px] text-primary-blue font-semi-bold leading-none">
              Aleki
            </p>
            <p className="text-[15px] text-primary-blue uppercase leading-none">
              Oil and Gas Limited
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoClose /> : <IoMdMenu />}
        </button>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {navigations.map((link) => (
            <li
              key={link.title}
              className={`md:ml-8 text-xl md:my-0 my-7 ${
                link.subMenu ? "relative" : ""
              }`}
              onMouseEnter={() =>
                link.title === "Services" && setIsHovered(true)
              }
              onMouseLeave={() =>
                link.title === "Services" && setIsHovered(false)
              }
            >
              {link.subMenu ? (
                <div>
                  <span className="text-gray-800 hover:text-gray-400 duration-500 font-montserrat cursor-pointer">
                    {link.title}
                  </span>
                  <ul
                    className={`absolute top-full flex flex-col w-60 bg-white shadow-md z-10 ${
                      isHovered ? "block" : "hidden"
                    }`}
                  >
                    {services.map((service) => (
                      <li key={service.title}>
                        <Link
                          to={service.link}
                          className="block py-2 px-4 text-base text-gray-800 hover:bg-gray-100 duration-500"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500 font-montserrat"
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
