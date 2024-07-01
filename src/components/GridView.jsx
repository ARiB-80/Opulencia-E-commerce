import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
      {products.map((prod) => {
        return <Product key={prod.id} {...prod} />;
      })}
    </div>
  );
};

export default GridView;
