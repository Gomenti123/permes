import React from "react";

const Toogle = () => {
  return (
    <div className="h-screen bg-neutral-600 w-full fixed">
      <div className="px-[20px] py-10 flex flex-col gap-3">
        <nav className="cursor-pointer font-semibold bg-amber-500 p-2 w-full text-white rounded-md text-center">
          How This Works
        </nav>
        <nav className="cursor-pointer font-semibold bg-amber-500 p-2 w-full text-white rounded-md text-center">
          About Us
        </nav>
        <nav className="cursor-pointer font-semibold bg-amber-500 p-2 w-full text-white rounded-md text-center">
          Testimonials
        </nav>
      </div>
    </div>
  );
};

export default Toogle;
