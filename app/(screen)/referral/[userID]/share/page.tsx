"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

const Share = () => {
  return (
    <div className="pt-5 flex justify-center ">
      <div className="border rounded-md p-5 md:w-[500px] border-neutral-500 flex flex-col items-center gap-10 justify-center  ">
        <div>This is the share page</div>

        <div>
          <WhatsappShareButton url="https://permes-uutn.vercel.app/">
            <div className="bg-green-400 w-[270px] flex items-center justify-center gap-3 p-2 rounded-full">
              <FaWhatsapp className="text-white text-[40px]" />
              <p className="text-white text-[20px]">Share on Whatsapp</p>
            </div>
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default Share;
