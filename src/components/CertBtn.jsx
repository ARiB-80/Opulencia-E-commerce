import React from "react";
import { useCartContext } from "../context/addToCartContext";

const CertBtn = ({ product, amount }) => {
  const { addToCart } = useCartContext();

  return (
    <button
      className="w-fit font-medium px-3 py-2 text-center rounded-sm bg-[#9ad6b5] text-[#0A0B0A] border border-[#0A0B0A] hover:bg-[#9ad6b5]/60  active:bg-[#397367]"
      onClick={() => {
        addToCart(product, amount);
      }}>
      ADD to Cart
    </button>
  );
};

export default CertBtn;
