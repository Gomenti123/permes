"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/logo.jpeg";
import { log } from "console";
import Spinner from "@/app/utils/spinner";
import { redirect } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { increase } from "@/app/global/slice";
import { signUser } from "@/app/global/slice";

const Signup = () => {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const submited = async (formData: FormData) => {
    setCheck(true);
    const username = formData.get("username");
    const name = formData.get("name");
    const url = "https://permes-uutn.vercel.app/api/user";
    setTimeout(async () => {
      // await fetch(url, {
      //   method: "POST",
      //   mode: "no-cors",
      //   body: JSON.stringify({ username, name }),
      // }).then((res) => {
      //   console.log(res);
      // });
      await axios.post(url, { name, username }).then((res: any) => {
        const userId = res.data.data._id;
        setCheck(false);
        dispatch(signUser(res.data.data));
        redirect(`/referral/${userId}`);
      });
    }, 2000);
  };

  // dispatch(increase(false));

  return (
    <div>
      <div className="flex justify-center items-center w-full h-[100vh] ">
        <div className="border flex flex-col gap-4 border-neutral-500 p-3 rounded-md w-[300px] md:min-w-[300px] min-h-[200px] ">
          <div className="w-full flex justify-center">
            <Image className="w-[100px] h-[100px]" src={logo} alt="#" />
          </div>

          <form action={submited} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[12px]">Name</label>
              <input
                required
                name="name"
                className="border outline-none border-neutral-500 rounded-sm p-1"
                type="text"
              />
              <p className="text-[8px] font-semibold text-neutral-600">
                Note: Make sure the name is the same as the name on your account
                details
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[12px]">Username</label>
              <input
                required
                name="username"
                className="border outline-none border-neutral-500 rounded-sm p-1"
                type="text"
              />
            </div>
            <button className="p-3 bg-yellow-700 text-white text-[15px] flex items-center justify-center rounded-full">
              {check ? <Spinner /> : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
