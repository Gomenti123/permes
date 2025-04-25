"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const [userId, setUserId]: any = useState("");
  useEffect(() => {
    const userID = localStorage.getItem("userID");
    if (userID) {
      setUserId(userID);
    }
  }, [1]);

  // const users = useSelector((state: any) => state.user);
  console.log("this is the id", userId);
  userId == "" ? console.log("empty") : console.log("not empty");

  // return <div>Hello</div>;
  //
  setTimeout(() => {
    return userId == ""
      ? redirect(`/landingPage`)
      : redirect(`/referral/${userId}`);
  }, 100);
};

export default Page;
