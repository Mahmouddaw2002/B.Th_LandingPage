import React from "react";

import cricle from "../assets/images/play-cricle 2.png";
import headerImage from "../assets/images/pngaaa 4.png";

const Header = () => {
  return (
    <div className="xl:px-32 px-6 flex xl:justify-between justify-center xl:flex-row flex-col items-center pt-16">
      <div className="flex flex-col  text-center xl:text-start gap-10 xl:w-3/5">
        <h2 className="text-[#0D0D0D] xl:text-[56px] text-3xl font-bold leading-9 xl:leading-[72px]">
          Save Time and Start Digital Wallet!
        </h2>

        <p className="text-[#807D7D] text-sm xl:text-xl leading-8 font-medium">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="flex xl:flex-row flex-col justify-start items-center gap-10 xl:gap-16">
          <button className="py-5 px-11  w-full xl:w-fit text-lg !leading-7 text-white flex justify-center items-center bg-[#F05830] border border-[#F05830] hover:bg-white hover:text-[#F05830]  transition-all ease-in-out rounded-md">
            Get Started
          </button>
          <div className="flex justify-center items-center  gap-2 w-full xl:w-fit">
            <span className="">
              <img src={cricle} alt="cricle" />
            </span>

            <span className="text-[#0D0D0D] text-lg font-bold leading-7">
              Watch Video
            </span>
          </div>
        </div>
        <div className="flex xl:justify-start xl:items-start justify-center items-center gap-10">
          <div>
            <h3 className="text-[#236E57] text-[40px] leading-[60px] font-bold">
              1.9k+
            </h3>
            <p className="text-[#807D7D] text-lg font-medium leading-8">
              Active Users
            </p>
          </div>
          <div>
            <h3 className="text-[#236E57] text-[40px] leading-[60px] font-bold">
              20+
            </h3>
            <p className="text-[#807D7D] text-lg font-medium leading-8">
              New Features
            </p>
          </div>
        </div>
      </div>
      <div className="xl:w-2/5 w-1/2 mt-20 ">
        <img src={headerImage} alt="headerImage" className="w-full " />
      </div>
    </div>
  );
};

export default Header;
