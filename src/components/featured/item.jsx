import React from "react";

const Item = ({ number, title }) => {
  return (
    <div className="flex flex-col items-center pb-10">
      <h4 className="font-bold text-5xl text-primary-blue">{number}</h4>
      <h5 className="text-secondary-blue text-base">{title}</h5>
    </div>
  );
};

export default Item;
