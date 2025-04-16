"use client";
import { signUser } from "@/app/global/slice";
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const Referral = () => {
  const tt = useParams();

  const users = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  // console.log(users._id);

  const getUser = async () => {
    const url = "https://permes-uutn.vercel.app/api/user";
    const surl = "http://localhost:3000/api/user";

    await axios.get(`${url}/${tt.userID}`).then((res: any) => {
      dispatch(signUser(res.data.data));
      // console.log(res);
    });
  };
  useEffect(() => {
    getUser();
  }, [1]);
  console.log(users);

  return users !== null ? (
    <div className="pt-3 md:pt-10 flex flex-col gap-3">
      <div className="flex flex-col items-center w-full">
        <div className=" flex flex-col items-center gap-9 p-5 md:p-2 pt-[20px] border-neutral-600 w-[340px]  md:w-[500px] min-h-[200px] rounded-md">
          <p>Your Current Balance</p>
          <p className="flex items-center text-[20px] font-semibold">
            <TbCurrencyNaira className="text-[25px]" />
            {users.amount}
          </p>
          <div className="flex flex-col gap-1">
            {users.amount > 200 ? (
              <button className="p-3 bg-yellow-700 text-white text-[15px] w-full rounded-full">
                Request Withdrawal
              </button>
            ) : (
              <button
                disabled
                className="p-3 bg-yellow-600 text-white text-[15px] w-full rounded-full cursor-not-allowed"
              >
                Request Withdrawal
              </button>
            )}
            <p className="text-[9px] text-red-400 md:text-[12px]">
              Note: You can only request a withdraw when your balance is up to
              200
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    redirect("/signup")
  );
};

export default Referral;
