import React from "react";
import ButtonMain from "./ButtonMain";
import ButtonSmall from "./ButtonSmall";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center sm:w-[60%] w-[80%] mx-auto sm:p-8 p-5 bg-[#7caf93] rounded-md mt-10 mb-[-60px] z-[2] relative">
        <p className="sm:text-lg text-xs font-medium ">
          Ready to Buy What You Want? <br />
          Start Shopping now
        </p>
        <NavLink to="/products">
          <ButtonMain cta="Shop Now" />
        </NavLink>
      </div>
      <div className="w-full  bg-[#112622] text-white p-10">
        <div className="flex flex-wrap items-start justify-center gap-24 pt-32 ">
          <div className="">
            <p className="text-lg font-semibold mb-4">Opulencia</p>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid gap-4">
            <p className="text-lg font-semibold">
              Subscribe to get Important <br /> Updates
            </p>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="py-1 px-2 rounded-sm bg-transparent placeholder:text-white border border-white w-full "
            />
            <ButtonSmall cta="Subscribe" />
          </div>
          <div className="grid gap-2">
            <p className="text-lg font-semibold">Follow Us At</p>
            <div className="flex gap-2 justify-center items-start">
              <FaDiscord className="size-6" />
              <RiInstagramFill className="size-6" />
              <FaYoutube className="size-6" />
            </div>
          </div>
          <div className="">
            <p className="text-lg font-semibold text-center">
              Call Us <br /> +9256456456
            </p>
          </div>
        </div>
        <hr className="my-5  border-t " />
        <div className="flex gap-3 justify-around text-sm">
          <p>&copy;{new Date().getFullYear()} Opulencia. All Rights Reserved</p>
          <p>
            PRIVACY POLICY <br /> TERMS AND CONDITIONS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
