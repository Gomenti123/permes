import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { WhatsappShareButton } from "react-share";

const page = () => {
  const text = "Hello, i'll like to book for pick up";
  return (
    <div>
      This is the main page
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
