import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 mb-36 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20   ">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="./AstroLense.png"
          title="Astro Lense"
          description="Astro Lense is an innovative web application developed using the powerful combination of React and Django. This project aims to create a comprehensive platform for the exploration and understanding of astronomical data."
        />
        <ProjectCard
          src="./Blind.png"
          title="Blind Helper"
          description=" Blind Helper is an innovative  mobile application based on Kotlin and Tenserflow lite.It was developed to help blind people finding near by objects. Data set contain 40 types of objects of the Machine Learning process."
        />
        <ProjectCard
          src="./wwise.png"
          title="Weather wisse"
          description="Weather wise is an IoT based web application developed using the powerful combination of React and Flask. This project aims to create a comprehensive platform for the exploration and understanding of weather data"
        />

<ProjectCard
          src="./budget.png"
          title="Budget Monitoring System "
          description="Budget Monitoring Systemis an innovative web application developed using  Django. This project aims to create a comprehensive platform for the exploration and understanding of financial informations and budget managment."
        />
      </div>
    </div>
  );
};

export default Projects;
