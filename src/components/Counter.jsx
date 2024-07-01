import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import CertBtn from "./CertBtn";

const Counter = ({ product }) => {
  const [amount, setAmount] = useState(1);
  // console.log(initialAmount);
  const increase = () => {
    setAmount(amount + 1);
  };
  const decrease = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  return (
    <div className="">
      <div className="flex items-center my-2 justify-around gap-1">
        <button
          onClick={decrease}
          className="border border-[#0A0B0A] rounded-sm  font-semibold p-1 hover:bg-[#9ad6b5]/60 active:bg-[#9ad6b5]">
          <FaMinus className="size-4" />
        </button>
        <p className="font-semibold">{amount}</p>
        <button
          onClick={increase}
          className="border border-[#0A0B0A] rounded-sm  font-semibold p-1 hover:bg-[#9ad6b5]/60 active:bg-[#9ad6b5]">
          <FaPlus className="size-4" />
        </button>
      </div>
      <CertBtn amount={amount} product={product} />
    </div>
  );
};

export default Counter;
