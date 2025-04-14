import React from "react";
import { SlShare } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-yellow-700 w-full p-2 px-[30px] flex justify-between ">
      <div>
        <SlShare className="text-white font-bold text-[30px]" />
        <p className="text-white text-[12px]">Share</p>
      </div>
      <div>
        <SlShare className="text-white font-bold text-[30px]" />
        <p className="text-white text-[12px]">Share</p>
      </div>
      <div>
        <SlShare className="text-white font-bold text-[30px]" />
        <p className="text-white text-[12px]">Share</p>
      </div>
    </div>
  );
};

export default Footer;
