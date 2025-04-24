import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
import { toggle } from "../global/slice";

const Toogle = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen bg-neutral-600 w-full mt-[-10px] z-10 fixed">
      <div className="px-[20px] py-10 flex flex-col gap-3">
        <Link
          onClick={() => {
            dispatch(toggle(false));
          }}
          to="howthisworks"
          smooth={true}
          duration={700}
          className="cursor-pointer font-semibold bg-amber-500 p-2 w-full text-white rounded-md text-center"
        >
          How This Works
        </Link>
        <Link
          onClick={() => {
            dispatch(toggle(false));
          }}
          to="aboutus"
          smooth={true}
          duration={700}
          className="cursor-pointer font-semibold bg-amber-500 p-2 w-full text-white rounded-md text-center"
        >
          About Us
        </Link>

        <Link
          onClick={() => {
            dispatch(toggle(false));
          }}
          to="testimonials"
          smooth={true}
          duration={700}
          className="cursor-pointer font-semibold bg-amber-500 p-2 w-full text-white rounded-md text-center"
        >
          Testimonials
        </Link>
      </div>
    </div>
  );
};

export default Toogle;
