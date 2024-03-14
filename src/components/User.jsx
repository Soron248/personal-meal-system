"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import srn from "@/../public/srn.jpg";
import polok from "@/../public/polok.jpg";
import arnob from "@/../public/arnob.jpg";
import szn from "@/../public/szn.jpg";
import soron from "@/../public/soron.jpg";

const User = ({ PullCash }) => {
  const [formData, setFormData] = useState({
    srn: { number: "", total: 0 },
    polok: { number: "", total: 0 },
    arnob: { number: "", total: 0 },
    szn: { number: "", total: 0 },
    soron: { number: "", total: 0 },
  });

  useEffect(() => {
    const loadFromLocalStorage = (key) => {
      const storedNumber = localStorage.getItem(
        `stored${key.charAt(0).toUpperCase() + key.slice(1)}Number`
      );
      if (storedNumber) {
        setFormData((prevData) => ({
          ...prevData,
          [key]: {
            ...prevData[key],
            total: parseInt(storedNumber),
          },
        }));
      }
    };

    loadFromLocalStorage("srn");
    loadFromLocalStorage("polok");
    loadFromLocalStorage("arnob");
    loadFromLocalStorage("szn");
    loadFromLocalStorage("soron");
  }, []);

  const handleChange = (e, key) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        number: value,
      },
    }));
  };

  const handleSubmit = (e, key) => {
    e.preventDefault();
    const { number } = formData[key];
    const parsedNumber = parseInt(number);
    if (!isNaN(parsedNumber)) {
      const newTotal = formData[key].total + parsedNumber;
      setFormData((prevData) => ({
        ...prevData,
        [key]: {
          ...prevData[key],
          number: "",
          total: newTotal,
        },
      }));
      localStorage.setItem(
        `stored${key.charAt(0).toUpperCase() + key.slice(1)}Number`,
        newTotal
      );
    }
  };

  let subtotal =
    formData.srn.total +
    formData.polok.total +
    formData.arnob.total +
    formData.szn.total +
    formData.soron.total;

  PullCash(subtotal);

  return (
    <div className="bg-indigo-50 w-full md:w-1/2 h-fit rounded-md shadow-lg p-5 flex flex-col  gap-5">
      {/* Soron */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-5">
          <Image
            src={srn}
            alt="user"
            width={200}
            height={200}
            className="size-10 md:size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xs md:text-xl text-gray-500">
            Eftekhar Jahan
          </h1>
          <form
            action=""
            className="flex gap-3 md:gap-5"
            onSubmit={(e) => handleSubmit(e, "srn")}
          >
            <input
              type="number"
              name="srn"
              value={formData.srn.number}
              onChange={(e) => handleChange(e, "srn")}
              className="w-20 md:w-auto outline-none p-2 rounded-md "
              placeholder="Enter Cash Digit.."
            />
            <button
              type="submit"
              className="bg-indigo-500  text-white text-xs md:text-base font-semibold px-1 md:px-3 rounded-md"
            >
              ADD
            </button>
          </form>
        </div>
        <span className="text-xs md:text-xl font-semibold text-gray-600">
          {formData.srn.total} BDT
        </span>
      </section>

      {/* Polok */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-5">
          <Image
            src={polok}
            alt="user"
            width={200}
            height={200}
            className="size-10 md:size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xs md:text-xl text-gray-500">
            Samir Islam
          </h1>
          <form
            action=""
            className="flex gap-3 md:gap-5"
            onSubmit={(e) => handleSubmit(e, "polok")}
          >
            <input
              type="number"
              name="polok"
              value={formData.polok.number}
              onChange={(e) => handleChange(e, "polok")}
              className="w-20 md:w-auto outline-none p-2 rounded-md"
              placeholder="Enter Cash Digit.."
            />
            <button
              type="submit"
              className="bg-indigo-500  text-white text-xs md:text-base font-semibold px-1 md:px-3 rounded-md"
            >
              ADD
            </button>
          </form>
        </div>
        <span className="text-xs md:text-xl font-semibold text-gray-600">
          {formData.polok.total} BDT
        </span>
      </section>

      {/* Arnob */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-5">
          <Image
            src={arnob}
            alt="user"
            width={200}
            height={200}
            className="size-10 md:size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xs md:text-xl text-gray-500">
            Arnob Das
          </h1>
          <form
            action=""
            className="flex gap-3 md:gap-5"
            onSubmit={(e) => handleSubmit(e, "arnob")}
          >
            <input
              type="number"
              name="arnob"
              value={formData.arnob.number}
              onChange={(e) => handleChange(e, "arnob")}
              className="w-20 md:w-auto outline-none p-2 rounded-md"
              placeholder="Enter Cash Digit.."
            />
            <button
              type="submit"
              className="bg-indigo-500  text-white text-xs md:text-base font-semibold px-1 md:px-3 rounded-md"
            >
              ADD
            </button>
          </form>
        </div>
        <span className="text-xs md:text-xl font-semibold text-gray-600">
          {formData.arnob.total} BDT
        </span>
      </section>

      {/* Sezan */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-5">
          <Image
            src={szn}
            alt="user"
            width={200}
            height={200}
            className="size-10 md:size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xs md:text-xl text-gray-500">
            Simur Ahmed
          </h1>
          <form
            action=""
            className="flex gap-3 md:gap-5"
            onSubmit={(e) => handleSubmit(e, "szn")}
          >
            <input
              type="number"
              name="szn"
              value={formData.szn.number}
              onChange={(e) => handleChange(e, "szn")}
              className="w-20 md:w-auto outline-none p-2 rounded-md"
              placeholder="Enter Cash Digit.."
            />
            <button
              type="submit"
              className="bg-indigo-500  text-white text-xs md:text-base font-semibold px-1 md:px-3 rounded-md"
            >
              ADD
            </button>
          </form>
        </div>
        <span className="text-xs md:text-xl font-semibold text-gray-600">
          {formData.szn.total} BDT
        </span>
      </section>

      {/* Soron2 */}
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-5">
          <Image
            src={soron}
            alt="user"
            width={200}
            height={200}
            className="size-10 md:size-14 rounded-full border"
          />
          <h1 className="font-semibold text-xs md:text-xl text-gray-500">
            Sharon Paul
          </h1>
          <form
            action=""
            className="flex gap-3 md:gap-5"
            onSubmit={(e) => handleSubmit(e, "soron")}
          >
            <input
              type="number"
              name="soron"
              value={formData.soron.number}
              onChange={(e) => handleChange(e, "soron")}
              className="w-20 md:w-auto outline-none p-2 rounded-md"
              placeholder="Enter Cash Digit.."
            />
            <button
              type="submit"
              className="bg-indigo-500  text-white text-xs md:text-base font-semibold px-1 md:px-3 rounded-md"
            >
              ADD
            </button>
          </form>
        </div>
        <span className="text-xs md:text-xl font-semibold text-gray-600">
          {formData.soron.total} BDT
        </span>
      </section>

      <section className="flex justify-between items-center font-bold bg-gradient-to-tl to-indigo-200 from-rose-200 p-3 rounded-md">
        <h1 className="text-xs md:text-base">Total Cash In</h1>
        <p className="text-xs md:text-base">
          {formData.srn.total +
            formData.polok.total +
            formData.arnob.total +
            formData.szn.total +
            formData.soron.total}{" "}
          BDT
        </p>
      </section>
    </div>
  );
};

export default User;
