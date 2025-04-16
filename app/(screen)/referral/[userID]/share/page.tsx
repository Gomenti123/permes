"use client";
import React from "react";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

const Share = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center pt-5">
      <div>This is the share page</div>

      <div>
        <WhatsappShareButton url="https://permes-uutn.vercel.app/">
          <WhatsappIcon className="rounded-full" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
