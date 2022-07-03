import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 md:px-10 lg:px-36">
      <h1 className="font-bold text-3xl text-primary-blue"> suite </h1>
      <button className="border-2 border-primary-blue rounded-md px-3 py-3 font-bold text-sm text-primary-blue hover:bg-primary-blue hover:text-white ease-in duration-200">
        Request Beta Access
      </button>
    </div>
  );
};

export default Header;
