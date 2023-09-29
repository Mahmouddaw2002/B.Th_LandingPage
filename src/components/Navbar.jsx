import React from "react";

import logo from "../assets/images/logo.png";
import iconNav from "../assets/images/Frame 57.png";

const Navbar = () => {
  return (
    <div className="xl:px-32 px-6 flex justify-between items-center gap-3 py-5 ">
      <span id="About_Us" className="cursor-pointer">
        <img src={logo} alt="logo" />
      </span>

      <span className="block xl:hidden cursor-pointer">
        <img src={iconNav} alt="iconNav" />
      </span>

      <ul className="xl:flex hidden flex-wrap justify-center items-center gap-12 text-lg font-medium leading-8 cursor-pointer">
        <li className="hover:text-[#F05830] text-[#F05830]">
          <a href="#About_Us">About Us</a>
        </li>
        <li className="hover:text-[#F05830]">
          <a href="#Features">Features</a>
        </li>
        <li className="hover:text-[#F05830]">
          <a href="#How_it_works">How it works</a>
        </li>
        <li className="hover:text-[#F05830]">
          <a href="#Support">Support</a>
        </li>
      </ul>

      <button className="bg-[#F05830] w-[153px] h-[54px] text-center xl:flex hidden justify-center items-center rounded-md py-6 px-9 text-lg font-medium leading-7 text-white hover:bg-white hover:text-[#F05830] border border-[#F05830]  transition-all ease-in-out">
        Download
      </button>
    </div>
  );
};

export default Navbar;
