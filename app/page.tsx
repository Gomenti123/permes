"use client";
import { redirect } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const userId = localStorage.getItem("userID");
  console.log(userId);

  return userId == null
    ? redirect("/landingPage")
    : redirect(`/referral/${userId}`);
};

export default Page;
