import React from "react";

const ButtonSmall = (props) => {
  return (
    <button className="bg-[#9ad6b5] px-3 py-1 rounded-r-sm w-full text-black font-medium text-base">
      {props.cta}
    </button>
  );
};

export default ButtonSmall;
