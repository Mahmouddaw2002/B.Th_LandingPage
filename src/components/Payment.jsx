import React from "react";

import img1 from "../assets/images/Group 103.png";
import googleplay1 from "../assets/images/google-play-svgrepo-com (1).png";
import googleplay2 from "../assets/images/google-play-svgrepo-com.png";
import phone from "../assets/images/Group 104.png";

const Payment = () => {
  return (
    <div className="xl:px-32 px-6 flex flex-col gap-y-32">
      <div className="flex flex-col lg:flex-row justify-center xl:justify-evenly items-center gap-10">
        <div className="xl:w-[45%] flex justify-start ">
          <img src={img1} alt="img1" />
        </div>
        <div className="xl:w-[55%] flex flex-col gap-10">
          <h3
            id="How_it_works"
            className="xl:text-5xl text-3xl font-bold leading-9 xl:leading-[72px] text-[#0D0D0D]"
          >
            Choose and Convert your Wallet Anytime!
          </h3>
          <p className="text-[#807D7D] xl:text-lg text-sm font-medium leading-5 xl:leading-8">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown. A Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </p>

          <button className="rounded-md border border-[#F05830] text-[#F05830] hover:bg-[#F05830] hover:text-white transition-all ease-in-out text-lg font-extrabold py-4 px-12 flex justify-center items-center text-center w-[316px]">
            Choose your wallet
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center xl:justify-evenly items-center gap-10">
        <div className="xl:w-[55%] flex flex-col gap-10">
          <h3 className="xl:text-5xl text-3xl font-bold leading-9 xl:leading-[72px] text-[#0D0D0D]">
            Available and Download Anytime!
          </h3>
          <p className="text-[#807D7D] xl:text-lg text-sm font-medium leading-5 xl:leading-8">
            A Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>

          <div className="flex flex-wrap justify-start items-center gap-8 ">
            <img src={googleplay1} alt="googleplay1"  />
            <img src={googleplay2} alt="googleplay2" />
          </div>
        </div>
        <div className="xl:w-[45%] flex justify-start ">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
