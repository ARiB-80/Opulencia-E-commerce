import React, { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/addToCartContext";

const UserProfile = () => {
  const { logout, user } = useAuth0();
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
          {/* <p>{user.name}</p> */}
        </button>
        <div
          ref={profileRef}
          className={`h-fit gap-2 min-w-[170px] bg-white border border-slate-200 grid justify-center shadow-lg absolute  right-[10%] ${dropDown} p-4  duration-300  ${
            dropDown === "visible"
              ? "opacity-100  translate-y-[8px]"
              : "opacity-0 translate-y-0"
          }`}>
          <p className="opacity-70">{user.name}</p>
          {user.email !== user.name && (
            <p className="opacity-80">{user.email}</p>
          )}
          <NavLink to="/cart" className="text-center text-[#397367] underline">
            View Cart ({cart.length})
          </NavLink>
          <hr />
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className={
              "border border-[#397367] text-[#397367] hover:text-white font-medium px-6 py-1.5 rounded-sm hover:bg-[#397367] duration-100"
            }>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
