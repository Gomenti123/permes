"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [word, setWord] = useState("");
  console.log(word);
  useEffect(() => {
    const url = "http://localhost:3000/api/admin/67ff6c0239720782d21dd37b";
    axios.get(url).then((res) => {
      console.log(res);
    });
  }, [1]);
  const data = [{ name: "james", userName: "benny", amount: "300" }];
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="border min-h-[300px] rounded-md w-[500px] p-10">
        <input
          onChange={(el) => {
            setWord(el.target.value);
          }}
          type="text"
          className="border"
        />
        {data
          .filter((el) => {
            return el.userName.includes(word);
          })
          .map((el, id) => {
            return (
              <div key={id}>
                <p>{el.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Page;
