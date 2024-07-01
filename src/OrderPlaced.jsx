import React from "react";
import { NavLink } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <>
      <div className="text-center my-8 mx-auto sm:px-10 px-3">
        <h3 className="font-BowlbyOne md:text-[90px] md:leading-[90px] text-4xl">
          Order Placed <br /> Successfully
        </h3>
        <div className="max-w-[750px] my-5 mx-auto">
          <p className="font-normal md:text-4xl text-2xl text-center">
            Your order has been placed and will be delivered to you in a few
            days
          </p>
        </div>

        <br />
        <NavLink to="/products" className="">
          <p className="text-[#0a0b0a] hover:text-[#9AD6B5] underline">
            Continue Shopping {">"}
          </p>
        </NavLink>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OrderPlaced;
