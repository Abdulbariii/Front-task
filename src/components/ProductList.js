import React, { useState } from "react";
import { useFetch } from "../hook/useFetch";
import imageError from "../img/image-error.jpg";
import LoadingImage from "./LoadingImage";
import LazyLoad from "react-lazy-load";
import { useEffect } from "react";
export default function ProductList() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://fronttask.techeyeco.com/api/ClientSide/GetProducts"
      );
      const dataJson = await res.json();
      {
        !data ? setData(dataJson) : setData([...data, ...dataJson]);
      }
      setLoading(false);
      setError(null);
    } catch {
      setLoading(false);
      setError("Error : you can't fetch the data");
    }
  };

  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  const baseUrl = "https://fronttask.techeyeco.com";
  return (
    <div>
      <h1 className="text-black text-5xl text-white py-2 mb-10 ">
        Products list
      </h1>
      <div className="w-full h-full text-black flex flex-wrap gap-20">
        {loading && <LoadingImage></LoadingImage>}
        {error && <h1>{error}</h1>}
        {data &&
          data.map((product) => (
            <div key={product.id} className="h-fit w-80 px-5 py-5 bg-white">
              {loading ? (
                <LazyLoad height={262} threshold={0.2}>
                  <LoadingImage></LoadingImage>
                </LazyLoad>
              ) : (
                <LazyLoad height={262} threshold={0.2}>
                  <img
                    className="w-64 h-64 object-cover"
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
              )}

              <p className="py-2 text-xl">{product.productTypeName}</p>
              <p className="text-lg">
                {" "}
                <span className="text-opacity-40 text-black">Price</span> :{" "}
                {product.price}$
              </p>
              <p className="py-3">
                <span className="text-opacity-40 text-black">Includes</span> :{" "}
                {product.name}
              </p>
            </div>
          ))}
      </div>
      <button
        onClick={fetchData}
        className="bg-black text-white py-3 px-5 text-2xl mt-20"
      >
        See more ...
      </button>
    </div>
  );
}
