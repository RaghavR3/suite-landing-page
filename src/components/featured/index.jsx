import React from "react";
import Item from "./item";

const featuredList = [
  {
    number: "2K+",
    title: "COMPANIES",
  },
  {
    number: "8",
    title: "LANGUAGES",
  },
  {
    number: "1.2M",
    title: "LEADS",
  },
];

const Featured = () => {
  return (
    <div className="flex flex-col px-4 lg:px-36 pb-32 md:pb-40 md:flex-row md:justify-between md:px-32 md:pt-10">
      {featuredList.map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
};

export default Featured;
