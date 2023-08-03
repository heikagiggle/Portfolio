/* eslint-disable no-unused-vars */
import React from "react";
import ProjectsItem from "./ProjectsItem";
import freewebsiteImg from "../assets/freewebsite.jpeg";
import homepageImg from "../assets/homepage.png";
import marketingImg from "../assets/marketing.jpeg";
import smartImg from "../assets/smart.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#A020F0]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
        semper dui. Nulla facilisi. In sed laoreet metus. Aliquam rhoncus
        suscipit elit, eget laoreet metus dictum sit amet
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={freewebsiteImg} title="freewebsite App" />
        <ProjectsItem img={homepageImg} title="homepage App" />
        <ProjectsItem img={marketingImg} title="marketing App" />
        <ProjectsItem img={smartImg} title="smart App" />
      </div>
    </div>
  );
};

export default Projects;
