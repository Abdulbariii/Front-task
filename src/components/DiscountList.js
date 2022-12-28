import React from "react";
import { useFetch } from "../hook/useFetch";
import imageError from "../img/image-error.jpg";
import LoadingImage from "./LoadingImage";
import LazyLoad from "react-lazy-load";
export default function DiscountList() {
  const { data, loading, error } = useFetch(
    "https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=Discount"
  );
  console.log(data);
  const baseUrl = "https://fronttask.techeyeco.com";
  return (
    <div>
      <div className="flex gap-4  items-center  mb-32">
        <div className="   bg-gradient-to-r from-red-500 h-2 w-52  "></div>
        <h1 className="text-black text-6xl font-extrabold  py-2 ">
          Discount products
        </h1>
      </div>
      <div className="w-full h-full text-black flex flex-wrap gap-20">
        {loading && <LoadingImage></LoadingImage>}
        {error && <h1>{error}</h1>}
        {data &&
          data.map((product) => (
            <div
              key={product.id}
              className="h-fit w-80 px-5 py-5 bg-white hover:shadow-xl transition-all "
            >
              {loading ? (
                <LazyLoad height={262} threshold={0.2}>
                  <LoadingImage></LoadingImage>
                </LazyLoad>
              ) : (
                <div className="w-64 h-64 relative">
                  <LazyLoad height={262} threshold={0.2}>
                    <img
                      className="w-full h-full object-cover relative"
                      src={
                        product.attachment
                          ? baseUrl + product.attachment
                          : imageError
                      }
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = imageError;
                      }}
                    />
                  </LazyLoad>

                  {product.discount > 0 ? (
                    <h1 className="bg-red-700 text-white right-[-50px] p-1 absolute top-[-10px] text-2xl transform rotate-12">
                      Discounted {product.discount}%
                    </h1>
                  ) : null}
                </div>
              )}

              <p className="py-2 text-xl">{product.productTypeName}</p>
              {product.discount > 0 ? (
                <p className="text-lg relative">
                  {" "}
                  <span className="text-opacity-40 text-black">
                    {" "}
                    old Price
                  </span>{" "}
                  : {product.price}$
                  <div className="bg-black w-32 h-[0.10rem] absolute top-3"></div>
                </p>
              ) : (
                <p className="text-lg relative">
                  {" "}
                  <span className="text-opacity-40 text-black">
                    {" "}
                    old Price
                  </span>{" "}
                  : {product.price}$
                </p>
              )}

              {product.discount > 0 ? (
                <p className="text-lg">
                  <span className="text-opacity-40 text-red-700 font-bold">
                    {" "}
                    Discount Price :
                  </span>
                  {((product.price * (100 - product.discount)) / 100)
                    .toString()
                    .substring(0, 5)}
                  $
                </p>
              ) : null}

              <p className="py-3">
                <span className="text-opacity-40 text-black">Includes</span> :{" "}
                {product.name}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
