import React, { useState, useEffect } from "react";

export const Grocery = ({ PullCsot }) => {
  const [costData, setCostData] = useState([]);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const storedCostData = localStorage.getItem("costData");
    if (storedCostData) {
      setCostData(JSON.parse(storedCostData));
    }
  }, []);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== "" && price.trim() !== "") {
      const newItem = {
        desc: description,
        price: parseInt(price),
      };
      setCostData((prevData) => [...prevData, newItem]);
      setDescription("");
      setPrice("");
      localStorage.setItem("costData", JSON.stringify([...costData, newItem]));
    }
  };

  let total = costData.reduce((total, item) => total + item.price, 0);
  PullCsot(total);

  return (
    <div className="bg-indigo-50 w-full md:w-1/2 rounded-md shadow-lg p-5 flex flex-col gap-5">
      <form className="flex gap-3 md:gap-5" onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          required
          className="w-2/3 h-16 p-3 rounded-md outline-none"
          placeholder="Bazar Description..."
        />
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          required
          className="w-1/3 rounded-md px-5 outline-none"
          placeholder="Cost.."
        />
        <button
          type="submit"
          className="bg-rose-600 px-2 md:px-3 text-xs md:text-base rounded-md text-white font-semibold"
        >
          ADD
        </button>
      </form>

      <div className="flex flex-col gap-5">
        {costData.map((item, index) => (
          <section
            key={index}
            className="bg-gradient-to-tl to-indigo-500 from-rose-600 rounded-lg p-3 text-xs md:text-base text-white font-semibold flex justify-between"
          >
            <p className="w-3/4">{item.desc}</p>
            <span className="w-1/4 text-right">{item.price} /-</span>
          </section>
        ))}
      </div>
      <section className="text-xs md:text-base flex justify-between items-center font-bold bg-gradient-to-tl to-indigo-200 from-rose-200 p-3 rounded-md">
        <h1>Total Cost</h1>
        <p>{costData.reduce((total, item) => total + item.price, 0)} BDT</p>
      </section>
    </div>
  );
};
