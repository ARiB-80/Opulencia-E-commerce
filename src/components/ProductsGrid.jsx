import React from "react";
import GridView from "./GridView";
import { useFilterContext } from "../context/filterContext";
import ListView from "./ListView";

const ProductsGrid = () => {
  const { filterProducts, allProducts, gridView } = useFilterContext();

  if (gridView) return <GridView products={filterProducts} />;
  else return <ListView products={filterProducts} />;
};

export default ProductsGrid;
