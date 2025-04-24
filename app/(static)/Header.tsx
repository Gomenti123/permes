"use client";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../public/logo2.png";
import { VscThreeBars } from "react-icons/vsc";
import Toogle from "./Toogle";
import { MdCancel } from "react-icons/md";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../global/slice";

const Header = () => {
  //   const [toggle, setToggle] = useState(false);
  const toggler = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  //   console.log(toggler);
  return (
    <div>
      <div className="fixed top-0 w-full md:h-[80px] bg-white z-10 shadow shadow-gray-400">
        <div className="flex justify-between md:grid grid-cols-8 w-full px-[10px] md:px-[50px] py-5 items-center ">
          <div className="lg:col-span-5 col-span-4">
            <Image src={img} alt="#" className="w-[120px] md:w-[200px]" />
          </div>
          <div className="md:flex justify-between text-[14px] lg:text-[17px] gap-[30px] col-span-4 lg:col-span-3 hidden ">
            <Link
              to="howthisworks"
              smooth={true}
              duration={700}
              className="cursor-pointer font-semibold"
            >
              How This Works
            </Link>
            <Link
              to="howthisworks"
              smooth={true}
              duration={700}
              className="cursor-pointer font-semibold"
            >
              About Us
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={700}
              className="cursor-pointer font-semibold"
            >
              Testimonials
            </Link>
          </div>
          <div className="block md:hidden">
            {toggler ? (
              <MdCancel
                onClick={() => {
                  dispatch(toggle(false));
                }}
                className="text-[30px] text-neutral-700"
              />
            ) : (
              <VscThreeBars
                onClick={() => {
                  dispatch(toggle(true));
                }}
                className="text-[30px] text-neutral-700"
              />
            )}
          </div>
        </div>
      </div>
      {toggler ? <Toogle /> : ""}
    </div>
  );
};

export default Header;
