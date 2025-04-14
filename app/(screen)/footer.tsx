import React from "react";
import { HiHome } from "react-icons/hi";
import { SlShare } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-yellow-700 w-full p-2 px-[30px] flex justify-between ">
      <div className="flex flex-col items-center gap-1">
        <HiHome className="text-white font-bold text-[30px]" />
        <p className="text-white text-[12px]">Dashboard</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <SlShare className="text-white font-bold text-[30px]" />
        <p className="text-white text-[12px]">Share</p>
      </div>
    </div>
  );
};

export default Footer;
