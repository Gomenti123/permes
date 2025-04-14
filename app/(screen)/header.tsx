import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex gap-1 md:gap-4 pt-2  items-center">
        <h1 className="pl-[26px] text-[15px] md:text-[20px] font-semibold">
          Permes Laundry
        </h1>
        <p className="text-[9px]"> Easy loans for your every need 🌟</p>
      </div>
      <div className="border border-neutral-400 w-full"></div>
    </div>
  );
};

export default Header;
