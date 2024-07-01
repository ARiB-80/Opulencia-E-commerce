import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center lg:px-[80px] px-8 py-2 sticky top-0 bg-white/40 z-10  shadow-sm backdrop-blur-xl">
      <NavLink to="/" className={"flex items-center gap-2"}>
        <img className="sm:w-12 w-8" src="./imgs/logo.png" alt="logo" />
        <h1 className="text-lg block  text-[#397367] font-BowlbyOne tracking-widest">
          Opulencia
        </h1>
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
