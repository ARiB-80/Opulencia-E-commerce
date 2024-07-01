import { useProductContext } from "../context/productContext";
import Product from "./Product";

const TopRatedProdcuts = () => {
  const { isLoading, topRatedProducts } = useProductContext();
  // console.log("Hrere", topRatedProdcuts);

  if (isLoading) return <h1> Loading ....</h1>;

  return (
    <>
      <div className="max-w-[1150px] mx-auto">
        <p className="text-xs sm:text-base text-[#397367]">CHECK NOW</p>
        <h1 className="mt-[-6px] sm:text-3xl font-bold text-lg">
          Top Rated Prodcuts
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 justify-items-center sm:gap-x-12 gap-x-2 gap-y-3 my-5 max-w-[1000px] mx-auto">
        {topRatedProducts.map((prod) => {
          return <Product key={prod.id} {...prod} />;
        })}
      </div>
    </>
  );
};

export default TopRatedProdcuts;
