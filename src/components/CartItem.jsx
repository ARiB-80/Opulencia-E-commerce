import { FaMinus, FaPlus } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Counter from "./Counter";
import React, { useState } from "react";
import { useCartContext } from "../context/addToCartContext";
import FormatPrice from "../helper/FormatPrice";
import { FaTrashAlt } from "react-icons/fa";
import Category from "./Category";

const CartItem = ({ product }) => {
  const { removeItem, addToCart } = useCartContext();

  const { title, image, category, id, amount, price } = product;

  const [itemAmount, setItemAmount] = useState(amount);

  const increase = () => {
    setItemAmount(itemAmount + 1);
  };
  const decrease = () => {
    if (itemAmount > 1) setItemAmount(itemAmount - 1);
  };

  const handleIncrease = (event) => {
    // Prevents the click event from propagating to the NavLink
    event.stopPropagation();
    event.preventDefault();
    increase();
    //+1 cuz were changing before adding
    addToCart(product, itemAmount + 1);
  };

  const handleDecrease = (event) => {
    // Prevents the click event from propagating to the NavLink
    event.stopPropagation();
    event.preventDefault();
    decrease();
    //-1 cuz were changing before adding
    addToCart(product, itemAmount - 1);
  };

  const handleDelete = (event) => {
    // Prevents the click event from propagating to the NavLink
    event.stopPropagation();
    event.preventDefault();
    removeItem(id);
  };

  return (
    <NavLink to={`/single-product/${id}`}>
      <div
        // key={id}
        className="grid md:grid-cols-7 grid-cols-5 gap-2 justify-items-center items-center max-w-[800px] h-[150px] mx-auto hover:bg-[#9ad6b5]/15 sm:p-3 pl-2 pr-0 rounded-sm">
        <figure className="sm:h-24 w-fit h-20">
          <img
            src={`${image}`}
            alt={title}
            className="object-contain mx-auto sm:h-24 h-20"
          />
        </figure>
        <div className="col-span-2">
          <div className="">
            <Category category={category} />
          </div>
          <h3 className="sm:text-base text-sm line-clamp-3 mt-1">{title}</h3>
          <hr className="my-1 border-t border-[#0a0b0a]/50 block md:hidden w-[80%]" />

          <p className="block md:hidden text-sm ">
            Price:{" "}
            <span className="font-medium">
              <FormatPrice price={price} />
            </span>
          </p>
        </div>

        <p className="md:block hidden text-lg ">
          <FormatPrice price={price} />
        </p>

        {/* <Counter product={product} /> */}
        <div className="md:flex hidden items-center my-2 justify-around gap-2 ">
          <button
            onClick={handleDecrease}
            id="decrease"
            className="border border-[#0A0B0A] rounded-sm  font-semibold p-2 hover:bg-[#9ad6b5]/60 active:bg-[#9ad6b5]">
            <FaMinus className="size-3  text-[#0a0b0a]" />
          </button>
          <p className="font-semibold">{itemAmount}</p>
          <button
            onClick={handleIncrease}
            id="increase"
            className="border border-[#0A0B0A] rounded-sm p-2 font-semibold hover:bg-[#9ad6b5]/60 active:bg-[#9ad6b5]">
            <FaPlus className="size-3 text-[#0a0b0a]" />
          </button>
        </div>

        {/* <h1>{product.amount}</h1> */}
        <div className="">
          <div className="flex md:hidden items-center my-2 justify-around gap-2 ">
            <button
              onClick={handleDecrease}
              id="decrease"
              className="border border-[#0A0B0A] rounded-sm  font-semibold p-1 hover:bg-[#9ad6b5]/60 active:bg-[#9ad6b5]">
              <FaMinus className="size-3  text-[#0a0b0a]" />
            </button>
            <p className="font-semibold text-sm">{itemAmount}</p>
            <button
              onClick={handleIncrease}
              id="increase"
              className="border border-[#0A0B0A] rounded-sm p-1 font-semibold hover:bg-[#9ad6b5]/60 active:bg-[#9ad6b5]">
              <FaPlus className="size-3 text-[#0a0b0a]" />
            </button>
          </div>

          <span className=" flex items-center justify-center gap-1">
            <p className="underline font-semibold sm:text-lg text-base border border-[#0A0B0A] bg-[#9AD6B5]/30 text-[#0A0B0A] px-2 py-1 rounded-sm">
              <FormatPrice price={price * itemAmount} />
            </p>
          </span>
        </div>
        <button
          className=" hover:bg-[#D0253E]/20 p-3  rounded-full"
          onClick={handleDelete}
          id="removeItem">
          <FaTrashAlt className="text-[#D0253E]" />
        </button>
      </div>
      <hr className="w-[80%] mx-auto border-t border-[#0a0b0a]/30" />
    </NavLink>
  );
};

export default CartItem;
