"use client";
import React from "react";
import Image from "next/image";
import srn from "@/../public/srn.jpg";
import polok from "@/../public/polok.jpg";
import arnob from "@/../public/arnob.jpg";
import szn from "@/../public/szn.jpg";
import soron from "@/../public/soron.jpg";

const User = () => {
  return (
    <div className="bg-indigo-50 w-1/2 rounded-md shadow-lg p-5 flex flex-col gap-5">
      {/* soron */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image
            src={srn}
            alt="user"
            width={200}
            height={200}
            className="size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xl text-gray-500">
            Eftekhar Jahan
          </h1>
          <input
            type="search"
            className="outline-none p-2 rounded-md"
            placeholder="Enter Cash Digit.."
          />
        </div>
        <span className="text-xl font-semibold text-gray-600">2000 BDT</span>
      </section>

      {/* polok */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image
            src={polok}
            alt="user"
            width={200}
            height={200}
            className="size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xl text-gray-500">Samir Islam</h1>
          <input
            type="search"
            className="outline-none p-2 rounded-md"
            placeholder="Enter Cash Digit.."
          />
        </div>
        <span className="text-xl font-semibold text-gray-600">2000 BDT</span>
      </section>

      {/* Arnob */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image
            src={arnob}
            alt="user"
            width={200}
            height={200}
            className="size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xl text-gray-500">Arnob Das</h1>
          <input
            type="search"
            className="outline-none p-2 rounded-md"
            placeholder="Enter Cash Digit.."
          />
        </div>
        <span className="text-xl font-semibold text-gray-600">2000 BDT</span>
      </section>

      {/* Sezan */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image
            src={szn}
            alt="user"
            width={200}
            height={200}
            className="size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xl text-gray-500">Simur Ahmed</h1>
          <input
            type="search"
            className="outline-none p-2 rounded-md"
            placeholder="Enter Cash Digit.."
          />
        </div>
        <span className="text-xl font-semibold text-gray-600">2000 BDT</span>
      </section>

      {/* soron2 */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Image
            src={soron}
            alt="user"
            width={200}
            height={200}
            className="size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xl text-gray-500">Sharon Paul</h1>
          <input
            type="search"
            className="outline-none p-2 rounded-md"
            placeholder="Enter Cash Digit.."
          />
        </div>
        <span className="text-xl font-semibold text-gray-600">2000 BDT</span>
      </section>
    </div>
  );
};

export default User;
