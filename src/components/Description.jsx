import React from "react";
import title from "../assets/images/Group 74.png";
import image1 from "../../src/assets/images/binance 1.png";
import image2 from "../../src/assets/images/bitmex 1.png";
import image3 from "../../src/assets/images/Vector (1).png";
import image4 from "../../src/assets/images/Vector.png";

const Description = () => {
  return (
    <>
      <div className="xl:px-32 px-6 pt-20  flex flex-col gap-12">
        <div className="flex justify-center items-center w-full">
          <img src={title} alt="title" className="w-full" />
        </div>

        <div className="flex flex-wrap justify-center text-center items-center xl:gap-20 gap-10 ">
          <img src={image1} alt="image1" className="w-1/5 xl:w-1/5" />
          <img src={image2} alt="image2" className="w-1/5 xl:w-1/5" />
          <img src={image3} alt="image3" className="w-1/5 xl:w-1/5" />
          <img src={image4} alt="image4" className="w-1/5 xl:w-1/5" />
        </div>
      </div>

      <div className="xl:px-32 px-6 flex py-28 flex-col gap-4 justify-center items-center">
        <h2
          id="Features"
          className="text-[#0D0D0D] text-center xl:text-5xl text-3xl font-bold leading-9 xl:leading-[72px]"
        >
          Why Choose Us
        </h2>
        <p className="xl:w-1/2 text-[#807D7D] text-center xl:text-xl text-sm leading-5 font-medium xl:leading-8">
          A Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </>
  );
};

export default Description;
