"use client";
import { Grocery } from "@/components/Grocery";
import User from "@/components/User";
import { useState } from "react";

export default function Home() {
  const [cash, setCash] = useState(0);
  const [cost, setCost] = useState(0);

  const PullCash = (c) => {
    setCash(c);
  };

  const PullCsot = (c) => {
    setCost(c);
  };
  return (
    <div>
      <div className="flex justify-center items-center gap-5 md:gap-10 my-10">
        <div>
          <h1 className="text-2xl md:text-6xl font-bold text-center  text-red-600 font-mono">
            JoLooJoG
          </h1>
          <p className="text-right text-xs md:text-base text-indigo-500 font-bold">
            MEAL SYSTEM
          </p>
        </div>

        <div className="w-32 md:w-48 p-3 md:p-5 rounded-md bg-gradient-to-tl to-indigo-500 from-rose-600 text-white flex flex-col justify-center items-center gap-3 md:gap-5">
          <h2 className="text-2xl md:text-4xl font-bold">{cash - cost} /-</h2>
          <p className="text-xs md:text-base font-semibold">CASH AVAILABLE</p>
        </div>
      </div>

      <div className="w-full px-5 flex flex-col md:flex-row gap-5">
        <User PullCash={PullCash} />
        <Grocery PullCsot={PullCsot} />
      </div>
    </div>
  );
}
