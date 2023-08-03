/* eslint-disable no-unused-vars */
import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: 2023,
    title: "IIL",
    duration: "6 months",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu semper dui. Nulla facilisi. In sed laoreet metus. Aliquam rhoncus suscipit elit, eget laoreet metus dictum sit amet",
  },
  {
    year: 2022,
    title: "SKillpaddy",
    duration: "3 months",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu semper dui. Nulla facilisi. In sed laoreet metus. Aliquam rhoncus suscipit elit, eget laoreet metus dictum sit amet",
  },
  {
    year: 2022,
    title: "Raptor informatics",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu semper dui. Nulla facilisi. In sed laoreet metus. Aliquam rhoncus suscipit elit, eget laoreet metus dictum sit amet",
  },
  {
    year: 2022,
    title: "freelance",
    duration: "1 year",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu semper dui. Nulla facilisi. In sed laoreet metus. Aliquam rhoncus suscipit elit, eget laoreet metus dictum sit amet",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#A020F0]">Work</h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
