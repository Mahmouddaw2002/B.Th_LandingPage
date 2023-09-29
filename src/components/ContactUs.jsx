import React from "react";

const ContactUs = () => {
  return (
    <div className="xl:px-32 px-6 mt-28 backgroundContactUs pt-14 pb-20 flex flex-col  justify-center items-center gap-10">
      <h2
        id="Support"
        className="text-5xl font-bold xl:leading-[72px] text-[32px] leading-[38px] xl:text-center text-white"
      >
        Ready to get updated?
      </h2>

      <p className="text-[#E6EFEC] xl:text-xl text-sm font-medium xl:leading-8 leading-5 text-center ">
        A Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard.
      </p>
      <div className="xl:w-[660px] flex justify-center items-center ">
        <input
          type="email"
          placeholder="Email Address"
          className="bg-transparent text-white outline-none border xl:pr-40 p-5 rounded-sm border-r-transparent"
        />

        <button className="xl:w-[207px] xl:h-[69px] xl:text-lg xl:px-5 p-1 py-5 xl:font-extrabold font-semibold leading-normal  text-white flex z-20 justify-center items-center bg-[#F05830] border border-[#F05830] hover:bg-white hover:text-[#F05830]  transition-all ease-in-out rounded-sm">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
