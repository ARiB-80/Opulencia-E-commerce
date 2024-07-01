import React, { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/addToCartContext";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TiArrowSortedDown } from "react-icons/ti";

const MobNav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [dropDown, setDropDown] = useState("invisible");
  const { cart } = useCartContext();

  const handleDropDown = () => {
    setDropDown(dropDown === "visible" ? "invisible" : "visible");
  };

  const profileRef = useRef();
  const profileToggleRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        !profileRef.current.contains(e.target) &&
        !profileToggleRef.current.contains(e.target)
      ) {
        setDropDown("invisible");
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className="relative">
        {isAuthenticated ? (
          <>
            <button
              ref={profileToggleRef}
              className="flex justify-between items-center gap-1  border border-slate-500/50 px-2 py-[3px] rounded-full cursor-pointer hover:bg-slate-100 active:bg-slate-200 group"
              onClick={handleDropDown}>
              <div className="w-9 h-9 rounded-full overflow-hidden">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="object-cover h-9"
                />
              </div>
              <MdOutlineKeyboardArrowDown
                className={`size-6 group-hover:mt-1 duration-[250ms] ${
                  dropDown === "visible" ? "rotate-180" : "rotate-0"
                } `}
              />
            </button>
          </>
        ) : (
          <button ref={profileToggleRef} onClick={handleDropDown}>
            <span className="relative group">
              <HiOutlineMenuAlt3 className="size-7" />
              <TiArrowSortedDown
                className={`absolute top-[14px] group-hover:top-[16px] duration-200 ${
                  dropDown === "visible" ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
          </button>
        )}
        <div
          ref={profileRef}
          className={`h-fit min-w-[170px] bg-white border border-slate-200 justify-end gap-3 grid shadow-lg absolute  right-[10%] ${dropDown} p-4  duration-300  ${
            dropDown === "visible"
              ? "opacity-100  translate-y-[8px]"
              : "opacity-0 translate-y-0"
          }`}>
          {isAuthenticated && (
            <>
              <div className="grid gap-1">
                <span className="opacity-70 text-right">{user.name}</span>
                {user.email !== user.name && (
                  <span className="opacity-80  text-right">{user.email}</span>
                )}
              </div>
              <hr />
            </>
          )}
          <div className="grid justify-end gap-1">
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
          </div>
          <NavLink to="/cart" className="text-center text-[#397367] underline">
            View Cart ({cart.length})
          </NavLink>
          <hr />
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className={
                "border border-[#397367] text-[#397367] hover:text-white font-medium px-8 py-1.5 rounded-sm hover:bg-[#397367] duration-100"
              }>
              Log Out
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className={
                "bg-[#9ad6b5]/50 border border-[#0A0B0A] hover:bg-[#9ad6b5] text-[#0A0B0A] font-semibold px-8 py-1.5 rounded-sm "
              }>
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MobNav;
