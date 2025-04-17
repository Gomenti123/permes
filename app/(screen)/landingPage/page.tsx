import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { WhatsappShareButton } from "react-share";
import img from "../../../public/hero.png";
import Image from "next/image";
import img2 from "../../../public/hero2.png";
import { GrSchedule } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";

const page = () => {
  const text =
    "Hello, i just visited Permes Laundry web page, and would like to subscribe for a service";
  return (
    <div className="md:mt-[80px] mt-[70px]  h-[200vh] flex flex-col items-center">
      <div className="w-full">
        <div
          className={`bg-[url("../public/hero2.png")] absolute bg-cover bg-no-repeat w-full min-h-[350px] md:h-[500px]`}
        >
          <div className={`bg-[${img2}]`}>
            {/* <Image src={img2} alt="#" width={100} height={100} />
             */}
          </div>
        </div>
        <div className="bg-[#113972c9] grid grid-cols-3 px-[10px] md:px-20 md:py-20 w-full min-h-[350px] md:h-[500px] relative">
          <div className="col-span-2 md:col-span-1 pt-[20px] md:pt-0 md:mt-[70px] flex flex-col gap-3">
            <h1 className="font-semibold text-[40px] md:text-[50px] leading-[45px] md:leading-[60px] text-white">
              The Easiest and Cheapest way to do your laundry and dry cleaning.
            </h1>
            <p className="text-white font-semibold text-[12px] md:text-[17px] md:leading-[30px]">
              Our mobile apps help connect those who need laundry and dry
              cleaning services with trusted and vetted industry experts using
              robust mobile technology
            </p>
          </div>
          <div className="col-span-1 hidden md:block">
            <Image src={img} alt="#" width={480} height={400} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div
          className={`bg-[url("../public/background.jpeg")] absolute bg-cover bg-repeat w-full min-h-[300px] md:h-[500px]`}
        ></div>
        <div className="relative flex flex-col items-center px-10 gap-10 py-5">
          <h1 className="font-semibold text-center text-[30px] text-neutral-600 leading-[35px]">
            How our Laundry and Dry cleaning Delivery service Works.
          </h1>
          <div className="flex gap-2 justify-center items-center">
            <div className="flex flex-col  items-center">
              <RiCalendarScheduleLine className="text-[50px] font-light" />
              <p>Pick your clothes</p>
            </div>
            <div className="flex flex-col  items-center">
              <RiCalendarScheduleLine className="text-[50px] font-light" />
              <p>Pick your clothes</p>
            </div>
            <div className="flex flex-col  items-center">
              <RiCalendarScheduleLine className="text-[50px] font-light" />
              <p>Pick your clothes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 right-5 animate-bounce">
        <a
          className="flex flex-col gap-2 justify-center items-center"
          href={`https://wa.me/2349045190274?text=${text}`}
        >
          <BsWhatsapp className="text-green-500 text-[50px] shadow-green-400 shadow-2xl p-2 rounded-full" />
          <p className="text-[17px] font-semibold text-green-600">
            Request Pickup
          </p>
        </a>
      </div>
    </div>
  );
};

export default page;
