import React from "react";

const Category = ({ category }) => {
  return (
    <div className="w-fit bg-[#9ad6b5]/50 px-2 py-1  text-[#0a0b0a] border border-[#0a0b0a] text-center rounded-full sm:text-[12px] text-[10px] ">
      {category}
    </div>
  );
};

export default Category;
