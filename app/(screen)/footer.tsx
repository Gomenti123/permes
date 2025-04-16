"use client";
import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";
import { SlShare } from "react-icons/sl";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state: any) => {
    return state.user;
  });
  return (
    <div className="bg-yellow-700 w-full p-2 px-[30px] flex justify-between ">
      <div>
        <Link
          className="flex flex-col items-center gap-1"
          href={`/referral/${user._id}`}
        >
          <HiHome className="text-white font-bold text-[30px]" />
          <p className="text-white text-[12px]">Dashboard</p>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Link href={`/referral/${user._id}/share`}>
          <SlShare className="text-white font-bold text-[30px]" />
          <p className="text-white text-[12px]">Share</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
