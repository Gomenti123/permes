"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../public/logo2.png";
import { VscThreeBars } from "react-icons/vsc";
import Toogle from "./Toogle";
import { MdCancel } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="fixed top-0 w-full md:h-[80px] bg-white z-10 shadow shadow-gray-400">
        <div className="flex justify-between md:grid grid-cols-8 w-full px-[10px] md:px-[50px] py-5 items-center ">
          <div className="lg:col-span-5 col-span-4">
            <Image src={img} alt="#" className="w-[120px] md:w-[200px]" />
          </div>
          <div className="md:flex justify-between text-[14px] lg:text-[17px] gap-[30px] col-span-4 lg:col-span-3 hidden ">
            <nav className="cursor-pointer font-semibold">How This Works</nav>
            <nav className="cursor-pointer font-semibold">About Us</nav>
            <nav className="cursor-pointer font-semibold">Testimonials</nav>
          </div>
          <div className="block md:hidden">
            {toggle ? (
              <MdCancel
                onClick={() => {
                  setToggle(false);
                }}
                className="text-[30px] text-neutral-700"
              />
            ) : (
              <VscThreeBars
                onClick={() => {
                  setToggle(true);
                }}
                className="text-[30px] text-neutral-700"
              />
            )}
          </div>
        </div>
      </div>
      {toggle ? <Toogle /> : ""}
    </div>
  );
};

export default Header;
