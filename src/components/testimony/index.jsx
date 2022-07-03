import React from "react";
import jeremy from "../../assets/image-jeremy-large.png";

const Testimony = () => {
  return (
    <div className="flex flex-col items-center bg-primary-blue rounded-xl px-4 md:px-10 lg:px-36 md:mx-10">
      <div className="flex flex-col items-center">
        {" "}
        <img src={jeremy} className="w-1/2 -mt-32"></img>
        <svg
          width="66"
          height="54"
          xmlns="http://www.w3.org/2000/svg"
          className="scale-75 my-10"
        >
          <path
            d="M64.25.153C59.995 27.67 38.646 45.003.2 52.153"
            stroke="#FAF8F6"
            strokeWidth={2}
            fill="none"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center px-4 text-center">
        <h3 className="text-3xl text-light-gray pb-10 md:text-4xl">
          It just <strong>works.</strong>
        </h3>
        <p className="text-light-gray pb-10 leading-loose md:text-lg">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </p>
        <h4 className="font-bold text-light-gray text-lg">JEREMY ROBINSON</h4>
        <h5 className="text-light-gray pb-10">CMO, FYLO</h5>
      </div>
    </div>
  );
};

export default Testimony;
