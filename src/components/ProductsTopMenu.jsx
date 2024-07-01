import React from "react";
import { useFilterContext } from "../context/filterContext";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";

const ProductsTopMenu = () => {
  const { setGridView, setListView, gridView, sort, filterProducts } =
    useFilterContext();

  return (
    <div className="flex justify-between  items-center  mb-5">
      <div className="flex justify-center items-center gap-2">
        <button
          className={`${
            gridView
              ? "bg-[#0A0B0A] text-[#9AD6B5]"
              : "bg-[#9AD6B5] text-[#0A0B0A] opacity-60"
          } rounded-sm p-[2px] hover:opacity-85`}
          onClick={setGridView}>
          <MdGridView className="size-6" />
        </button>
        <button
          className={`${
            gridView
              ? "bg-[#9AD6B5] text-[#0A0B0A] opacity-60"
              : "bg-[#0A0B0A] text-[#9AD6B5]"
          }  rounded-sm p-1  hover:opacity-85 `}
          onClick={setListView}>
          <FaList className="size-5" />
        </button>
      </div>
      <div className="">{`${filterProducts.length} Products`}</div>
      <div className="">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="border border-slate-300 rounded-sm px-2 py-1"
            onClick={sort}
            defaultValue="lowest">
            <option value="lowest">Price - Lowest</option>
            <option value="highest">Price - Highest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default ProductsTopMenu;
