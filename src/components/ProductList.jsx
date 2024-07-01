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
      <div className="flex gap-5 justify-between overflow-hidden border border-[#0A0B0A]/45 sm:px-5 px-4 py-5 rounded-sm w-full h-[250px]">
        <div className="grid place-content-center w-[35%]">
          <img
            src={image}
            alt={`image of ${title}`}
            className="object-contain h-[220px]"
          />
        </div>
        <div className="w-[60%] grid content-between">
          <div className="">
            <Category category={category} />
          </div>
          <div className="">
            <h3 className="mb-2 font-semibold sm:text-lg text-sm line-clamp-2">
              {title}
            </h3>

            <span className="flex mb-2 gap-1 justify-start items-center">
              <span className="">
                <Stars rating={rating.rate} />
              </span>
              <p className="sm:font-medium font-bold text-[#397367] sm:text-xs text-[11px]">
                {"("}
                {rating.rate}
                {")"}
              </p>
            </span>
          </div>

          <div className="">
            <p className="line-clamp-2 sm:text-sm text-xs">{description}</p>
          </div>
          <div className="flex flex-wrap items-end gap-2 w-full justify-between">
            <div className="font-bold sm:px-3 px-1 sm:py-2 py-1 text-center mt-2 rounded-sm border border-[#0A0B0A] sm:w-fit w-full sm:text-base text-xs">
              <h2 className="">
                {/* <p>{price}</p> */}
                <FormatPrice price={price} />
              </h2>
            </div>
            <button
              className="sm:w-fit w-full font-medium px-3 py-2 text-center rounded-sm bg-[#9ad6b5] text-[#0A0B0A] border border-[#0A0B0A] sm:text-base text-xs hover:bg-[#9ad6b5]/60  active:bg-[#397367]"
              // onClick={addToCart(props, 1)}
              onClick={handleButtonClick}>
              ADD to Cart
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
