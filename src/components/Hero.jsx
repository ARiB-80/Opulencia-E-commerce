import React from "react";
import ButtonMain from "./ButtonMain";
import { NavLink } from "react-router-dom";
import { CiShop, CiShoppingTag, CiShoppingBasket } from "react-icons/ci";
import { PiShoppingBagThin } from "react-icons/pi";

const Hero = (props) => {
  return (
    <div className="text-center w-full my-12  items-center justify-center mt-24 relative">
      <div className=" grid gap-3 ">
        <div className="">
          <p className="text-[#397367] sm:mb-5 font-light sm:text-3xl text-lg tracking-[20px]">
            {props.welcome_msg}
          </p>
          <h1 className="mt-[-6px] sm:text-[90px] text-[50px] font-BowlbyOne leading-[60px] tracking-wider">
            {props.title}
          </h1>
        </div>
        <p className="sm:text-base text-sm max-w-[750px] mx-auto mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          dignissimos obcaecati hic maiores rerum adipisicing elit. Incidunt
          dignissimos obcaecati hic maiores rerum
        </p>
        <NavLink to="/products" className="mx-auto w-fit">
          <ButtonMain cta="Shop Now" />
        </NavLink>
      </div>
      {/* <div className="">
        <img src="./imgs/hero.jpg" alt="hero-img" className="" />
      </div> */}
      <div className="absolute top-[-20px] h-full w-full z-[-1] md:opacity-60 opacity-30 text-[#397367]">
        <CiShoppingTag className="sm:size-16 size-10 absolute left-[18%] top-[40%]" />
        <CiShoppingBasket className="sm:size-16 size-10 absolute right-[8%] top-[6%] rotate-12" />
        <CiShoppingBasket className="sm:size-16 size-10 absolute left-[12%] bottom-[2%] -rotate-45" />
        <CiShop className="sm:size-16 size-10 absolute right-[15%] bottom-[2%] -rotate-12" />
        <PiShoppingBagThin className="sm:size-16 size-10 absolute left-[7%] top-[14%] -rotate-6" />
        <CiShoppingTag className="sm:size-16 size-10 absolute right-[30%] top-[0%] -rotate-180" />
        <PiShoppingBagThin className="sm:size-16 size-10 absolute left-[50%] top-[-20%] rotate-12" />
        <CiShoppingBasket className="sm:size-16 size-10 absolute left-[40%] bottom-[-30%] rotate-6" />
      </div>
    </div>
  );
};

export default Hero;
