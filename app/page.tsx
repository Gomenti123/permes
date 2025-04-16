import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { WhatsappShareButton } from "react-share";

const page = () => {
  const text = "Hello, i'll like to book for pick up";
  return (
    <div>
      This is the main page
      <div className="fixed bottom-10 right-5 animate-bounce">
        <a href={`https://wa.me/2349045190274?text=${text}`}>
          <BsWhatsapp className="text-green-500 text-[50px]" />
        </a>
      </div>
    </div>
  );
};

export default page;
