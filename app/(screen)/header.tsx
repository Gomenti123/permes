import Image from "next/image";
import React from "react";
import img from "../../public/logo2.png";

const Header = () => {
  return (
    <div className="flex flex-col gap-1 md:gap-3 ">
      <div className="flex gap-1 md:gap-4 p-3 md:py-5 md:px-10 items-center">
        <Image src={img} alt="#" className="w-[150px] md:w-[200px]" />
      </div>
      <div className="border border-neutral-400 w-full"></div>
    </div>
  );
};

export default Header;
