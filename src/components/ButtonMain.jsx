import React from "react";

const ButtonMain = (props) => {
  return (
    <button className="hover:bg-[#9ad6b5]/50 active:bg-[#397367] bg-[#9ad6b5] text-[#0A0B0A] border border-[#0A0B0A] rounded-sm sm:px-5 px-3 py-2  w-fit font-semibold sm:text-lg text-md">
      {props.cta}
    </button>
  );
};

export default ButtonMain;
