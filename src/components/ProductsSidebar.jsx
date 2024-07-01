import React from "react";
import { useFilterContext } from "../context/filterContext";
import Stars from "./Stars";
import FormatPrice from "../helper/FormatPrice";

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

  return (
    <div className="grid gap-3 ">
      {/* SEARCH */}
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Search"
          type="text"
          name="text"
          value={text}
          onChange={updateValue}
          className="border border-slate-400 px-2 py-1 rounded-sm"
        />
      </form>
      {/* CATEGORY FILTER */}
      <div className="grid">
        <h3 className="font-semibold">Categories</h3>
        {categories.map((e) => {
          return (
            <button
              key={e}
              type="button"
              name="category"
              value={e}
              onClick={updateValue}
              className={`hover:bg-[#397367]/10 active:text-[#397367] text-left ${
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
                className={`hover:bg-[#397367]/10 active:text-[#397367]  text-left ${
                  rating == rate && "underline text-[#397367]  font-semibold"
                }`}>
                {`${
                  rate > 1 || rate == "All" ? rate + " stars" : rate + " star"
                }`}
              </button>
            );
          })}
        </div>
      </div>
      {/* PRICE FILTER */}
      <div className="">
        <h3 className="font-semibold">Price</h3>
        <p className="">
          <FormatPrice price={price} />
        </p>
        {/* 
        <input
          type="text"
          name="price"
          value={price}
          onInput="this.value = this.value.replace(/[^0-9]/g)"
          // placeholder={<FormatPrice price={price} />}
          onChange={updateValue}
        /> */}
        <input
          type="range"
          name="price"
          value={price}
          min={minPrice}
          max={maxPrice}
          onChange={updateValue}
          className="w-full h-1 mb-6 bg-gray-300 rounded-lg appearance-none cursor-pointer range-sm "
        />
      </div>
      {/* Clear FILTERS */}
      <button
        onClick={clearFilters}
        className="border border-[#D0253E] text-[#D0253E] hover:bg-[#D0253E] hover:text-white active:opacity-55 duration-100 font-semibold px-2 py-[2px] rounded-sm">
        Clear Filters
      </button>
    </div>
  );
};

export default ProductsSidebar;
