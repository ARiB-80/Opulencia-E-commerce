import React from "react";
import ProductList from "./ProductList";

const ListView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {products.map((prod) => {
        return <ProductList key={prod.id} {...prod} />;
      })}
    </div>
  );
};

export default ListView;
