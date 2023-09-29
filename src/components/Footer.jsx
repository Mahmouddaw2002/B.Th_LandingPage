import React from "react";
import facebook from "../assets/images/et_facebook.png";
import twitter from "../assets/images/et_twitter.png";
import instagram from "../assets/images/carbon_logo-instagram.png";
import logo from "../assets/images/B.Th.png";

const Footer = () => {
  return (
    <>
      <div className="xl:px-32 px-6 flex justify-between  items-center py-20 flex-wrap flex-col lg:flex-row-reverse">
        <div className="flex lg:justify-end justify-around lg:items-baseline lg:text-start text-center gap-3 lg:gap-32 lg:w-1/2 w-full">
          <div>
            <ul className="text-[#807D7D] text-sm lg:text-xl font-normal leading-5 lg:leading-[50px]">
              <li className="mb-5 cursor-pointer text-[#0D0D0D] text-base xl:text-2xl  font-bold leading-6 lg:leading-9">
                About Us
              </li>
              <li className="cursor-pointer">Whitepaper</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Activity</li>
            </ul>
          </div>
          <div>
            <ul className="text-[#807D7D] text-sm lg:text-xl font-normal leading-5 lg:leading-[50px]">
              <li className="mb-5 cursor-pointer text-[#0D0D0D] text-base lg:text-2xl font-bold leading-6 lg:leading-9">
                Support
              </li>
              <li className="cursor-pointer">Help & Support</li>
              <li className="cursor-pointer">Community</li>
              <li className="cursor-pointer">Author Profile</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 flex lg:justify-start lg:items-start justify-center items-center flex-col text-center gap-6 mt-8 lg:mt-0">
          <img src={logo} alt="logo" className="lg:w- w-1/5" />

          <p className="text-[#807D7D] text-sm  lg:text-start lg:text-xl leading-8 font-normal lg:font-medium">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="flex lg:justify-start justify-center items-center gap-5 ">
            <img
              src={facebook}
              alt="facebook"
              className="cursor-pointer lg:w-full w-1/5"
            />
            <img
              src={twitter}
              alt="twitter"
              className="cursor-pointer lg:w-full w-1/5"
            />
            <img
              src={instagram}
              alt="instagram"
              className="cursor-pointer lg:w-full w-1/5"
            />
          </div>
        </div>
      </div>
      <div className="text-[#807D7D] !text-center leading-5 lg:leading-9 font-normal text-sm lg:text-xl flex !justify-center  !items-center lg:pb-10 pb-7">
        <span className=" w-fit">All rights reserved@2021</span>
      </div>
    </>
  );
};

export default Footer;
