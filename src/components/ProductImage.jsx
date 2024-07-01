import React, { useEffect, useState } from "react";

const ProductImage = ({ src, alt }) => {
  const [mainImg, setMainImg] = useState(src);
  const [imgChange, setImgChange] = useState(0);

  //   useEffect(() => {
  //     setMainImg(src);
  //   }, []);
  // console.log(mainImg);

  return (
    <div className="flex flex-wrap-reverse justify-center items-center gap-5">
      <div className="sm:w-40 w-full sm:grid flex flex-wrap gap-1 justify-items-center justify-center">
        <div
          className="sm:w-40 w-20 h-24 sm:h-28 border rounded-sm border-slate-500 cursor-pointer "
          onClick={() => {
            setImgChange(0);
            setMainImg(src);
          }}>
          <img src={src} alt={alt} className="mx-auto h-full object-cover" />
        </div>
        <div
          className="sm:w-40 w-20 h-24 sm:h-28 border rounded-sm border-slate-500 cursor-pointer "
          onClick={() => {
            setImgChange(1);
            setMainImg("/imgs/prod1.png");
          }}>
          <img
            src="/imgs/prod1.png"
            alt="prod1"
            className=" mx-auto h-full object-cover"
          />
        </div>
        <div
          className="sm:w-40 w-20 h-24 sm:h-28 border rounded-sm border-slate-500 cursor-pointer "
          onClick={() => {
            setImgChange(1);
            setMainImg("/imgs/prod2.png");
          }}>
          <img
            src="/imgs/prod2.png"
            alt="prod2"
            className="mx-auto h-full object-cover"
          />
        </div>
        <div
          className="sm:w-40 w-20 h-24 sm:h-28 border rounded-sm border-slate-500 cursor-pointer "
          onClick={() => {
            setImgChange(1);
            setMainImg("/imgs/prod3.png");
          }}>
          <img
            src="/imgs/prod3.png"
            alt="prod3"
            className=" mx-auto h-full object-cover"
          />
        </div>
      </div>
      {/* main img */}
      <div className="max-w-[250px] h-[200px] ">
        <img
          src={imgChange == 0 ? src : mainImg}
          alt={"Main Image"}
          className="object-contain h-[200px] "
        />
      </div>
    </div>
  );
};

export default ProductImage;
