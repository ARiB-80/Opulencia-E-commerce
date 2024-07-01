import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import FormatPrice from "./helper/FormatPrice";
import ProductImage from "./components/ProductImage";
import Stars from "./components/Stars";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Category from "./components/Category";
import { NavLink } from "react-router-dom";

const URL = "https://fakestoreapi.com/products/";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(URL + id);
  }, []);

  if (isSingleLoading)
    return (
      <>
        <figure className="my-16 grid place-content-center h-full w-screen">
          {/* <h1>LODDDDDD</h1> */}
          <img src="/imgs/loading.gif" alt="" className="w-[150px]" />
        </figure>
      </>
    );

  if (!singleProduct)
    return (
      <div className="text-center my-16 grid place-content-center h-full w-screen">
        <h3 className="text-3xl">No product found</h3>
        <p className="my-5 text-[#595f45] text-xl underline hover:text-[#9ad6b5]">
          <NavLink to="/products">{"< "}Back To Shopping</NavLink>
        </p>
      </div>
    );

  const {
    id: code,
    image,
    title,
    description,
    price,
    category,
    rating,
  } = singleProduct;

  const rate = rating?.rate;
  const count = rating?.count;

  return (
    <>
      <p className="mt-5 mx-[10%] text-[#595f45] underline hover:text-[#9ad6b5]">
        <NavLink to="/products">{"< "}Back To Shopping</NavLink>
      </p>
      <div className="mx-auto sm:px-10 px-3 my-14 rounded-sm">
        {/* <PageNavigation title={title} /> */}
        <div className="flex gap-8 flex-wrap mx-auto justify-center  w-fit ">
          <ProductImage src={image} alt={title} />

          {/* <div className="border-r my-auto md:h-[250px] h-1 border-slate-400"></div> */}
          {/* <hr className="border-t  h-full border-slate-600 " /> */}
          <div>
            <div className="flex justify-between">
              <Category category={category} />
              <p className="opacity-80 text-xs">Product ID: {code}</p>
            </div>

            <h2 className="font-bold mt-3 text-2xl max-w-[420px]">{title}</h2>
            <div className="flex gap-5">
              {rating ? (
                <>
                  <div className="flex gap-2 items-center">
                    <Stars rating={rate} />
                    <p className="font-medium text-[#397367] text-[16px]">
                      {"("}
                      {rate}
                      {")"}
                    </p>
                  </div>
                  <p className="font-semibold text-[#397367] text-[16px]">
                    Reviews: {count}
                  </p>
                </>
              ) : (
                <p>No Rating Available</p>
              )}
            </div>
            <div className="max-w-[450px] text-sm my-3">
              <p>{description}</p>
            </div>
            <div className="flex justify-between items-end">
              <div className="">
                <del>
                  <p className="opacity-50 font-semibold text-lg mb-1">
                    {<FormatPrice price={price + 25} />}
                  </p>
                </del>
                <p className="font-bold text-lg border border-[#0A0B0A] w-fit px-2 py-1 rounded-sm">
                  {<FormatPrice price={price} />}
                </p>
              </div>
              <Counter product={singleProduct} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
