import React, { useState } from "react";
import { useFilterContext } from "../context/filterContext";
import Stars from "./Stars";
import FormatPrice from "../helper/FormatPrice";
import { CiFilter } from "react-icons/ci";

// const categoriesURL = "https://fakestoreapi.com/products/categories";

const ratings = ["All", 5, 4, 3, 2, 1];

const ProductsSidebar = () => {
  const {
    allProducts,
    filters: { text, maxPrice, price, minPrice, category, rating },
    updateValue,
    clearFilters,
  } = useFilterContext();

  const getProductAttribute = (products, attribute) => {
    let newVal = products.map((e) => {
      return e[attribute];
    });
    newVal = ["All", ...new Set(newVal)];
    // console.log(newVal);
    return newVal;
  };

  const categories = getProductAttribute(allProducts, "category");

  const [hideFilters, setHideFilters] = useState("hidden");

  const hideFilterDiv = () => {
    setHideFilters(hideFilters == "block" ? "hidden" : "block");
  };

  return (
    <div className="grid gap-3">
      <div className="flex gap-3 items-center justify-between ">
        {/* SEARCH */}
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <input
            placeholder="Search"
            type="text"
            name="text"
            value={text}
            onChange={updateValue}
            className="w-full border border-slate-400 px-2 py-1 rounded-sm"
          />
        </form>
        <button
          className="h-full px-1 rounded-sm hover:bg-slate-100 active:opacity-55"
          onClick={hideFilterDiv}>
          <CiFilter className="size-6" />
        </button>
      </div>
      <div
        className={`${hideFilters} grid gap-3 grid-cols-2 w-full text-right ml-auto`}>
        {/* CATEGORY FILTER */}
        <div className="grid ">
          <h3 className="font-semibold">Categories</h3>
          {categories.map((e) => {
            return (
              <button
                key={e}
                type="button"
                name="category"
                value={e}
                onClick={updateValue}
                className={`hover:bg-[#397367]/10 active:text-[#397367] text-right ${
                  category == e && "underline text-[#397367] font-semibold"
                }`}>
                {e}
              </button>
            );
          })}
        </div>
        {/* RATING FILTER */}
        <div className="">
          <h3 className="font-semibold">Ratings</h3>
          <div className="grid ">
            {ratings.map((rate, i) => {
              return (
                <button
                  key={i}
                  type="button"
                  name="rating"
                  value={rate}
                  onClick={updateValue}
                  className={`hover:bg-[#397367]/10 active:text-[#397367] text-right ${
                    rating == rate && "underline text-[#397367] font-semibold"
                  }`}>
                  {`${
                    rate > 1 || rate == "All" ? rate + " stars" : rate + " star"
                  }`}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        {/* PRICE FILTER */}
        <div className="">
          <h3 className="font-semibold">Price</h3>
          <p className="">
            <FormatPrice price={price} />
          </p>
          <input
            type="range"
            name="price"
            value={price}
            min={minPrice}
            max={maxPrice}
            onChange={updateValue}
            className=" h-1 mb-6 bg-gray-300 rounded-lg appearance-none cursor-pointer range-sm "
          />
        </div>
        {/* Clear FILTERS */}
        <button
          onClick={clearFilters}
          className="w-1/2 border border-[#D0253E] text-[#D0253E] hover:bg-[#D0253E] hover:text-white active:opacity-55 duration-100 font-semibold px-2 py-[2px] rounded-sm ml-auto">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default ProductsSidebar;
