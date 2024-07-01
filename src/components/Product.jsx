import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";
import Stars from "./Stars";
import { useCartContext } from "../context/addToCartContext";
import Category from "./Category";

const Product = (props) => {
  const { id, title, category, rating, description, price, image } = props;

  const { addToCart } = useCartContext();

  const handleButtonClick = (event) => {
    // Prevents the click event from propagating to the NavLink
    event.stopPropagation();
    event.preventDefault();
    // console.log("Button clicked!");
    addToCart(props, 1);
  };

  return (
    <NavLink to={`/single-product/${id}`}>
      <div className="overflow-hidden border border-[#0A0B0A]/40 sm:px-5 px-2 py-1 rounded-sm max-w-[300px] sm:h-[480px] h-[420px]  relative">
        <div className="w-full">
          <img
            src={image}
            alt={`image of ${title}`}
            className="object-contain h-48 mx-auto"
          />
        </div>
        <div className="flex sm:flex-nowrap flex-wrap justify-between my-3">
          {/* <div className="sm:grid gap-1 flex justify-between items-center place-content-between sm:w-fit w-full sm:mt-0 mt-2"> */}
          <Category category={category} />

          <span className="flex  gap-1 justify-start items-center">
            <span className="sm:block hidden">
              <Stars rating={rating.rate} />
            </span>
            <p className="sm:font-medium font-bold text-[#397367] sm:text-xs text-[11px] sm:hidden block">
              {"Rating ("}
              {rating.rate}
              {")"}
            </p>
          </span>
          {/* </div> */}
        </div>
        <div className="">
          <h3 className="mb-1 font-semibold sm:text-lg text-sm line-clamp-2">
            {title}
          </h3>
          <p className="line-clamp-2 sm:text-sm text-xs">{description}</p>
        </div>
        <div className="absolute sm:bottom-3 bottom-2 right-0 sm:px-3 px-2 flex flex-wrap items-end gap-2 w-full justify-between">
          <div className="font-bold sm:px-3 px-1 sm:py-2 py-1 text-center mt-2 rounded-sm border border-[#0A0B0A] w-full sm:text-base text-xs">
            <h2 className="">
              {/* <p>{price}</p> */}
              <FormatPrice price={price} />
            </h2>
          </div>
          <button
            className="w-full font-medium px-3 py-2 text-center rounded-sm bg-[#9ad6b5] text-[#0A0B0A] border border-[#0A0B0A] sm:text-base text-xs hover:bg-[#9ad6b5]/60  active:bg-[#397367]"
            // onClick={addToCart(props, 1)}
            onClick={handleButtonClick}>
            ADD to Cart
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
