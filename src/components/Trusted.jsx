import React from "react";

const Trusted = () => {
  return (
    <div className="text-center my-5 py-8  bg-[#9AD6B5]/50">
      <h2 className="text-2xl font-semibold mb-10">
        Trusted by 150+ Companies
      </h2>
      <div className="flex flex-wrap gap-20 items-center justify-center">
        <div className="">
          <img src="./imgs/comp1.png" alt="" className="w-20 " />
        </div>
        <div className="">
          <img src="./imgs/comp2.png" alt="" className="w-20 " />
        </div>
        <div className="">
          <img src="./imgs/comp3.png" alt="" className="w-20  opacity-50" />
        </div>
        <div className="">
          <img src="./imgs/comp4.png" alt="" className="w-20  opacity-50" />
        </div>
        <div className="">
          <img src="./imgs/comp5.png" alt="" className="opacity-50 w-20" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
