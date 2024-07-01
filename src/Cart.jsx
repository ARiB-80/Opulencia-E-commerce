import React, { useState } from "react";
import { useCartContext } from "./context/addToCartContext";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "./helper/FormatPrice";
import Footer from "./components/Footer";

const Cart = () => {
  const { cart, clearCart, shippingFee, totalAmount, grandTotal } =
    useCartContext();

  // if (cart.length === 0) return <h2>NO CART</h2>;
  // else
  return (
    <>
      <div className="relative sm:my-4 my-0 mx-auto sm:px-10 px-3 flex gap-6 w-fit flex-wrap justify-center">
        <div className="">
          <div className="gap-2 p-5 grid md:grid-cols-7 grid-cols-5 justify-items-center items-center max-w-[800px] mx-auto font-light sm:text-xl text-lg">
            <span className="md:col-span-3 col-span-2 md:block hidden">
              Product
            </span>
            <span className="col-span-3 block md:hidden">Product / Price</span>
            <span className="md:block hidden">Price</span>
            <span className="md:block hidden">Quantity</span>
            <span className="md:block hidden">Sub Total</span>
            <span className="block md:hidden text-center col-span-2">
              Quantity / Sub Total
            </span>
            <span></span>
          </div>
          <div className="border border-[#0a0b0a]/60 overflow-hidden rounded-md w-fit mx-auto">
            {cart.length === 0 && (
              <div className="text-2xl p-3 font-light">Cart is Empty.</div>
            )}
            {cart.map((prod) => {
              return <CartItem product={prod} key={prod.id} />;
            })}
          </div>
          <div className="w-full text-center p-4 ">
            <NavLink
              to="/products"
              className="text-[#0a0b0a] hover:text-[#9AD6B5] underline">
              Continue Shopping {">"}
            </NavLink>
          </div>
        </div>

        <div className="lg:sticky top-[150px] h-fit lg:w-fit w-full">
          <div className=" lg:w-[200px] w-full h-fit p-3 border border-[#0a0b0a] rounded-sm mb-4">
            <div className="text-lg">
              <p>Total:</p>
              <p className="font-medium">
                <FormatPrice price={totalAmount} />
              </p>
              <p>Shipping Fee:</p>
              <p className="font-medium">
                <FormatPrice price={shippingFee} />
              </p>
              <hr className="my-1 mx-auto border-t border-[#0a0b0a]/30" />
              <p>Grand Total:</p>
              <p className="font-bold text-lg">
                <FormatPrice price={grandTotal} />
              </p>
              <NavLink to="/order-placed">
                <button
                  className={`mt-2 w-full font-semibold text-lg border border-[#0A0B0A] enabled:hover:bg-[#9AD6B5]/30 text-[#0A0B0A] px-2 py-1 rounded-sm bg-[#9AD6B5] disabled:opacity-50 `}
                  disabled={cart.length == 0 ? true : false}
                  onClick={clearCart}>
                  Place Order
                </button>
              </NavLink>
            </div>
          </div>
          <button
            className="hover:font-semibold text-[#d0253e] px-2 py-1 w-full rounded-sm"
            onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
