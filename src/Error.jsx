import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";
const Error = () => {
  return (
    <>
      <div className="text-center my-8 mx-auto sm:px-10 px-3">
        <h2 className="font-semibold md:text-[100px] text-6xl">404</h2>
        <p className="font-normal text-4xl">UH OH! You're Lost</p>
        <p className="text-base mt-2">
          The page you are looking for does not exists.
        </p>
        <br />
        <NavLink to="/" className="">
          <p className="text-[#0a0b0a] hover:text-[#9AD6B5] underline">
            Back to Home
          </p>
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default Error;
