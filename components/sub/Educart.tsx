import Image from "next/image";
import React from "react";

interface Props {
  name:string
  title: string
  year:string
  src:string
  grade:string
  description:string
 
}

const Educart = ({ src,name,title,year,grade ,description}: Props) => {
  return (
    <div className="w-350px  text-white rounded-lg shadow-md p-4 space-y-3 relative overflow-hidden flex flex-col gap-3 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-5 border border-purple-600">
            <div className="w-full flex gap-3">
                <img className=" bg-black rounded-lg mt-1 h-10 w-10" src={src} />
                <div className="w-full flex flex-col">
                    <div className="text-lg font-semibold text-primary-99">{name}</div>
                    <div className="text-base font-medium text-secondary-99">{year}</div>
                    <div className="text-sm font-light text-secondary-80">{title}</div>
                </div>
            </div>
            <div className="text-base font-medium text-secondary-99"><b>Grade: </b>{grade}</div>
            <div className="w-full text-sm font-medium text-primary-99 mb-2.5">
                <span className="overflow-hidden box-content w-full line-clamp-4 vertical-rl text-ellipsis">{description}</span>
            </div>
        </div>
  );
};

export default Educart;
