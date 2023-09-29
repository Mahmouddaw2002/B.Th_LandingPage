import React from "react";
import { product } from "../json/product";

const Products = () => {
  return (
    <div className="xl:px-32 px-6 flex justify-center items-center flex-wrap gap-y-10 gap-7 pb-36">
      {product.map((item) => {
        return (
          <div
            key={item.id}
            className="hoverDiv cursor-pointer w-[400px] gap-7 p-14 flex flex-col justify-center text-center items-center"
          >
            <img src={item.img} alt={item.alt} />
            <h3 className="text-[#0D0D0D] xl:text-2xl text-base leading-6 font-bold xl:leading-9 ">
              {item.title}
            </h3>
            <p className="text-[#807D7D] xl:text-lg text-sm font-normal leading-5 xl:leading-7">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
