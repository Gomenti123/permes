import React from "react";
import { MdLocationPin, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="flex w-full px-[20px] py-5 md:px-20 md:py-10 bg-red-200  md:justify-center md:items-center">
        <div className=" min-h-[130px] grid grid-cols-1 md:grid-cols-2 gap-[100px] ">
          <div className="flex flex-col gap-4">
            <h1 className="text-[25px] font-semibold">About Us</h1>
            <p className="text-[15px] leading-[20px]">
              Stoddard Road Laundry is a 24/7 laundromat that is attended by
              friendly and helpful staff. We have over 60 self-service machines
              available, and we offer commercial laundry services to businesses.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[25px] font-semibold">Contact Us</h1>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <MdLocationPin className="text-[18px]" />
                <p>220 Stoddard road, Mount Roskill, AKL,1041</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdPhone className="text-[18px]" />
                <p>+2349045190274</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-100 h-[50px] w-full flex justify-center items-center">
        <h1 className="text-neutral-400 text-[18px]">
          Copyright © 2025 Permes Laundry. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
