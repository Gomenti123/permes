"use client";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { WhatsappShareButton } from "react-share";
// import img from "../../../public/hero.png";
import Image from "next/image";
import img2 from "../../../../public/hero2.png";
import calendar from "../../../../public/calendar.svg";
import relax from "../../../../public/relax.svg";
import laundry from "../../../../public/laundry.svg";
import Footer from "@/app/(static)/Footer";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import { redirect, useParams } from "next/navigation";
import { MdStar, MdStarOutline } from "react-icons/md";
import axios from "axios";

const page = () => {
  const [userId, setUserId]: any = useState("");
  const { adminID } = useParams();
  const [userName, setUserName] = useState("");
  const ID = adminID;
  const text = `Hello, i just visited Permes Laundry web page, and would like to request for a service. Referal Name: ${userName}`;
  const getUser = async () => {
    const url = `http://localhost:3000/api/user/680b8adc73ec502388f0a8ae`;
    await axios.get(url).then((res: any) => {
      console.log(res.data?.data?.username);
      setUserName(res.data?.data?.username);
    });
  };
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    getUser();
    if (userID) {
      setUserId(userID);
    }
  }, [1]);
  return userId == "" ? (
    <div className="md:mt-[80px] mt-[70px]  h-[200vh] flex flex-col items-center">
      <Element name="howthisworks" className="w-full">
        <div
          className={`bg-[url("../public/hero2.png")] absolute bg-cover bg-no-repeat w-full min-h-[850px] md:h-[500px]`}
        >
          <div className={`bg-[${img2}]`}>
            {/* <Image src={img2} alt="#" width={100} height={100} />
             */}
          </div>
        </div>
        <div className="bg-[#966c19a2] px-[10px] md:px-[50px] grid grid-cols-1 md:grid-cols-2 py-10 items-center   w-full min-h-[350px] md:h-[500px] relative">
          <div className="flex flex-col gap-5 col-span-1">
            <h1 className="text-white font-semibold text-[30px] md:text-[40px] md:leading-[50px]">
              The Easiest and Cheapest way to do your laundry and dry cleaning.
            </h1>
            <p className="text-white text-[15px] md:text-[18px]">
              Our mobile apps help connect those who need laundry and dry
              cleaning services with trusted and vetted industry experts using
              robust mobile
            </p>
          </div>

          {/* <div className="col-span-2 w-full md:col-span-1 pt-[20px] md:pt-0 md:mt-[70px] flex flex-col gap-3">
            <h1 className="font-semibold text-[40px] md:text-[50px] leading-[45px] md:leading-[60px] text-white">
              The Easiest and Cheapest way to do your laundry and dry cleaning.
            </h1>
            <p className="text-white font-semibold text-[12px] md:text-[17px] md:leading-[30px]">
              Our mobile apps help connect those who need laundry and dry
              cleaning services with trusted and vetted industry experts using
              robust mobile technology
            </p>
          </div> */}
        </div>
      </Element>

      <section id="#howitworks" className="w-full">
        <div
          className={`bg-[url("../public/background.jpeg")] absolute bg-repeat w-[100%] min-h-[900px] md:min-h-[400px]`}
        ></div>
        <div className="relative w-full p-5 md:p-10 ">
          <div>
            <h1 className="font-semibold text-center flex justify-center text-[25px] md:text-[40px] text-neutral-600 leading-[40px] md:leading-[50px]">
              How our Laundry and Dry <br /> cleaning Delivery service Works.
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between p-10 gap-10">
            <div className="flex flex-col items-center gap-2 ">
              <Image src={calendar} alt="#" width={70} height={70} />

              <p className="font-medium font-sans text-[20px]">
                Pick your clothes
              </p>
              <p className="text-center text-neutral-500">
                After subscribing, choose the day and time you want your pickup
                to begin.
              </p>
            </div>
            <div className="flex flex-col  items-center gap-2">
              <Image src={laundry} alt="#" width={70} height={70} />
              <p className="font-medium font-sans text-[20px]">
                Laundry & Dry Clean
              </p>
              <p className="text-center text-neutral-500">
                A specific pickup specialist arrives at your home to collect
                your dirty items, analyze them and head to the factory for dry
                cleaning process
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image src={relax} alt="#" width={70} height={70} />
              <p className="font-medium font-sans text-[20px]">
                Relax, We Deliver
              </p>
              <p className="text-center text-neutral-500">
                chair back Enjoy your week and relax; you will receive sparkling
                clothing within 5 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Element name="testimonials" className="flex flex-col gap-10 md:pt-0">
        <div className="flex flex-col items-center gap-2 px-10 md:px-0">
          <h1 className="text-[45px] md:text-[50px] text-neutral-700 font-semibold md:font-medium font-sans">
            Testimonials
          </h1>
          <p className="text-neutral-500 font-sans text-[18px] md:text-[20px] text-center">
            Offering innovative solutions is our passion. We endeavor to attain
            a high ..
            <br /> customer satisfaction in our field and want to exceed your
            expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-[13px] md:p-0">
          <div className="col-span-1 bg-[#1c6076] w-full md:w-[500px] h-[230px] md:h-[250px] rounded-md p-[10px] md:p-6 grid grid-rows-3 md:grid-rows-4">
            <p className="row-span-2 md:row-span-3 text-[16px] font-light text-white">
              This has been exactly 5 years, and although my initial motivation
              for subscribing was to see if the service was worthwhile, I don't
              think I'll be canceling anytime soon. I'm dependent on it like a
              drug..
            </p>
            <div className="row-span-1 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <p className="bg-red-50 rounded-full w-[60px] h-[60px] md:w-[70px] md:h-[70px]"></p>
                <div>
                  <p className="text-[17px]">This is the text field</p>
                  <p className="text-white text-[14px]">
                    this is the small text field
                  </p>
                </div>
              </div>
              <div className="flex items-center text-[17px] text-yellow-700">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-[#9bdde1] w-full md:w-[500px] h-[230px] md:h-[250px] rounded-md p-[10px] md:p-6 grid grid-rows-3 md:grid-rows-4">
            <p className="row-span-2 md:row-span-3 text-[16px] font-light text-neutral-800">
              This has been exactly 5 years, and although my initial motivation
              for subscribing was to see if the service was worthwhile, I don't
              think I'll be canceling anytime soon. I'm dependent on it like a
              drug..
            </p>
            <div className="row-span-1 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <p className="bg-red-50 rounded-full w-[60px] h-[60px] md:w-[70px] md:h-[70px]"></p>
                <div>
                  <p className="text-[17px]">This is the text field</p>
                  <p className="text-white text-[14px]">
                    this is the small text field
                  </p>
                </div>
              </div>
              <div className="flex items-center text-[17px] text-yellow-700">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-[#FECF69] w-full md:w-[500px] h-[230px] md:h-[250px] rounded-md p-[10px] md:p-6 grid grid-rows-3 md:grid-rows-4">
            <p className="row-span-2 md:row-span-3 text-[16px] font-light text-neutral-800">
              This has been exactly 5 years, and although my initial motivation
              for subscribing was to see if the service was worthwhile, I don't
              think I'll be canceling anytime soon. I'm dependent on it like a
              drug..
            </p>
            <div className="row-span-1 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <p className="bg-red-50 rounded-full w-[60px] h-[60px] md:w-[70px] md:h-[70px]"></p>
                <div>
                  <p className="text-[17px]">This is the text field</p>
                  <p className="text-neutral-600 text-[14px]">
                    this is the small text field
                  </p>
                </div>
              </div>
              <div className="flex items-center  text-[17px] text-yellow-700">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarOutline />
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-[#f5a504] w-full md:w-[500px] h-[230px] md:h-[250px] rounded-md p-[10px] md:p-6 grid grid-rows-3 md:grid-rows-4">
            <p className="row-span-2 md:row-span-3 text-[16px] text-neutral-800 font-light ">
              This has been exactly 5 years, and although my initial motivation
              for subscribing was to see if the service was worthwhile, I don't
              think I'll be canceling anytime soon. I'm dependent on it like a
              drug..
            </p>
            <div className="row-span-1 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <p className="bg-red-50 rounded-full w-[60px] h-[60px] md:w-[70px] md:h-[70px]"></p>
                <div>
                  <p className="text-[17px]">This is the text field</p>
                  <p className="text-[14px]">this is the small text field</p>
                </div>
              </div>
              <div className="flex items-center text-[17px] text-yellow-700">
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </div>
            </div>
          </div>
        </div>
      </Element>

      <div className="w-full pt-20">
        <Footer />
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
  ) : (
    redirect(`/referral/${userId}`)
  );
};

export default page;
