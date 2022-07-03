import React from "react";
import mobileHero from "../../assets/image-hero-landscape.png";
import desktopHero from "../../assets/image-hero-portrait.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center pt-20 px-4 md:px-10 lg:px-36">
      <div className="flex flex-col items-left z-50 md:w-7/12">
        <div className="absolute scale-50 md:scale-100 ml-20 -mt-8 md:ml-60 md:-mt-10">
          <svg width="289" height="39" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 37.676c92.173-48 187.84-48 287 0"
              stroke="#172339"
              strokeWidth={4}
              bg-primary-blue
              fill="none"
            />
          </svg>
        </div>
        <h2 className="pb-8 text-4xl md:text-6xl md:leading-tight md:w-[550px]">
          A <span className="font-bold">super solution</span> for your{" "}
          <span className="font-bold">business.</span>
        </h2>
        <p className="pb-8 text-secondary-blue lg:w-96">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </p>
        <button className="w-fit bg-primary-blue rounded-md px-7 py-4 font-bold text-base text-light-gray">
          Request Beta Access
        </button>
      </div>
      <img src={mobileHero} className="pt-8 pb-14 block md:hidden"></img>
      <img
        src={desktopHero}
        className="pt-8 pb-14 hidden md:flex z-0 w-5/12"
      ></img>
    </div>
  );
};

export default Hero;
