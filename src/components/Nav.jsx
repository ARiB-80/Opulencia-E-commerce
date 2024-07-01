import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/addToCartContext";
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from "./UserProfile";
import MobNav from "./MobNav";

import { PiShoppingCartSimple, PiShoppingCartSimpleFill } from "react-icons/pi";

const Nav = () => {
  const { cart } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [cartIconFill, setCartIconFill] = useState(false);

  const fillCartIcon = () => {
    console.log("on");

    setCartIconFill(true);
  };
  const removeFillCartIcon = () => {
    console.log("off");

    setCartIconFill(false);
  };

  return (
    <nav className="flex">
      <div className="md:hidden flex gap-5 justify-center items-center">
        <NavLink
          to="/cart"
          // {(e) => {
          //   e.isActive ? fillCartIcon() : removeFillCartIcon();
          // }}
          className={`md:hidden`}>
          <div className="relative w-fit ">
            {cartIconFill ? (
              <PiShoppingCartSimpleFill className="size-8" />
            ) : (
              <PiShoppingCartSimple className={`size-8 `} />
            )}
            <span
              className={`bg-[#397367] w-4 h-4 grid place-content-center rounded-full text-[9px] text-white absolute top-0 right-0 ${
                cart.length === 0 ? "hidden" : "block"
              }`}>
              {cart.length}
            </span>
          </div>
        </NavLink>
        <MobNav />
      </div>

      <div className="md:flex hidden gap-8 items-center">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return (
              "text-right hover:text-[#9ad6b5] transition ease-in " +
              (isActive ? "text-[#397367] font-bold" : "text-black")
            );
          }}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return (
              "text-right hover:text-[#9ad6b5] transition ease-in " +
              (isActive ? "text-[#397367] font-bold" : "text-black")
            );
          }}>
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => {
            return (
              "text-right hover:text-[#9ad6b5] transition ease-in " +
              (isActive ? "text-[#397367] font-bold" : "text-black")
            );
          }}>
          Products
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return (
              "text-right hover:text-[#9ad6b5] transition ease-in " +
              (isActive ? "text-[#397367] font-bold" : "text-black")
            );
          }}>
          Contact
        </NavLink>

        {isAuthenticated ? (
          <UserProfile />
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className={
              "bg-[#9ad6b5]/50 border border-[#0A0B0A] hover:bg-[#9ad6b5] text-[#0A0B0A] font-semibold px-6 py-1.5 rounded-sm"
            }>
            Login
          </button>
        )}

        {/* (e) => {
            e.isActive ? fillCartIcon() : removeFillCartIcon();
          } */}
        <NavLink to="/cart" className={``}>
          <div className="relative w-fit">
            {/* <IoCartOutline className="size-8" /> */}

            {cartIconFill === true ? (
              <PiShoppingCartSimpleFill className="size-8" />
            ) : (
              <PiShoppingCartSimple className={`size-8 `} />
            )}

            <span
              className={`bg-[#397367] w-4 h-4 grid place-content-center rounded-full text-[9px] text-white absolute top-0 right-0 ${
                cart.length === 0 ? "hidden" : "block"
              }`}>
              {cart.length}
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
