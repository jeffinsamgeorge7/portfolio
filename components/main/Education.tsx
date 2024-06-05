import React from "react";
import Educart from "../sub/Educart";

const Education = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="education"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Education 
      </h1>
      <div className="h-full w-full flex flex-col justify-center align-middle md:flex-col md:w-1/2   gap-10 px-10">
      <Educart 
           src="./saintgits.png"
          name="Saintgits College of Engineering, Kottayam"
          title="Master of Computer Applications"
          year="2022-2024"
          grade="6.0 CGPA"
          description="I am currently pursuing a Masters's degree in Computer Science at Saintgits College of Engineering, Kottayam. 
          I have completed 3 semesters and have a CGPA of 8.71."
        />
       
        <Educart
         src="./stc.png"
          name="St Thomas College, Konni Pathanamthitta"
          title="Bachelor of Computer Applications"
          year="2018-2021"
          grade="7.1 CGPA"
          description="I completed my UG at St Thomas College , Konni Pathanamthitta, where I studied Bachelor of Computer Applications and have a CGPA of 6.0."
       
       
       />


       
      </div>
    </div>
  );
};

export default Education;
