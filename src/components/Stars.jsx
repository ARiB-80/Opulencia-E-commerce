import React from "react";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Stars = ({ rating }) => {
  const starRating = Array.from({ length: 5 }, (e, i) => {
    let dec = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= dec ? (
          <FaStarHalfStroke />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex gap-1 text-[#397367]">{starRating}</div>
    </>
  );
};

export default Stars;
