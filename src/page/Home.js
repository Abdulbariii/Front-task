import React from "react";
import Slider from "../components/Slider";
import Title from "../components/Title";
import NewArrivals from "../components/NewArrivals";
import DiscountList from "../components/DiscountList";
import ProductList from "../components/ProductList";
import { useFetch } from "../hook/useFetch";
export default function Home({ data, loading, error }) {
  return (
    <div className="min-h-full w-full ">
      <div className="flex justify-between py-20 px-20 items-center bg-fashion h-screen">
        <Title />
        <Slider data={data && data} />
      </div>
      <div className="py-20 px-20 product-con flex flex-col gap-28">
        <NewArrivals></NewArrivals>
        <DiscountList></DiscountList>
        <ProductList></ProductList>
      </div>
    </div>
  );
}
